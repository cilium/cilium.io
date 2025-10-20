---
path: '/blog/2022/10/17/constellation-network-encryption'
date: '2023-07-20T17:00:00.000Z'
author: 'Leonard Cohnen & Moritz Eckert'
title: 'Securing Constellation’s Kubernetes data in transit - network encryption with Cilium'
ogImage: header-img.png
ogSummary: 'Learn how Constellation uses Cilium’s eBPF-powered encryption to secure Kubernetes data in transit while maintaining performance and connectivity.'
isPopular: true
categories:
  - Technology
tags:
  - Cilium
---

![Header Image](header-img.png)

_July 20th, 2023_
_Author: Leonard Cohnen & Moritz Eckert, Edgeless Systems_

[Constellation](https://github.com/edgelesssys/constellation) is a Kubernetes engine that aims to provide the best possible data security by shielding your entire Kubernetes cluster from the underlying cloud infrastructure. Everything inside a cluster is always encrypted, including at runtime in memory. For this, Constellation leverages a technology called [confidential computing](https://content.edgeless.systems/hubfs/Confidential%20Computing%20Whitepaper.pdf).

For network encryption, Constellation uses Cilium. This blog dives into why we chose Cilium, how we integrated it, and what we learned along the way. We’ll dive into the technical challenges and difficulties we encountered and how we overcame these. If you’re all into Kubernetes networking, eBPF, and Cilium, this should be for you. If not, don’t worry, we’ll highlight the important takeaways, and you’ll learn a thing or two about the inner workings of Cilium.

## Encryption vs. access

Constellation must ensure all communication in a cluster is protected while still allowing access to the outside world. This includes the pod network carrying the application traffic and the Kubernetes communication itself. Simply put, all node-to-node traffic must be encrypted. However, for most applications, the nodes should still be reachable from the outside to support LoadBalancer and NodePort services.

Isolating the entire cluster in a VPN on the host level might be the first solution that comes to mind, and it solves the first part of encrypting all traffic. However, it makes communication with the outside cumbersome and impractical.

Thus, for Constellation, we opted to implement network encryption at the CNI level. Our CNI solution of choice is [Cilium](https://cilium.io/). It combines great performance with [transparent network encryption](https://docs.cilium.io/en/stable/gettingstarted/encryption/). Cilium supports both [IPSec](https://docs.cilium.io/en/stable/gettingstarted/encryption-ipsec/) and [WireGuard](https://docs.cilium.io/en/stable/gettingstarted/encryption-wireguard/). Essentially, it establishes a VPN network between nodes while maintaining features allowing access outside the cluster, such as service exposure and load balancing.

## Implementing transparent network encryption

From the get go, our goals for the network encryption in Constellation were the following:

- A) Do not get into the user's way.
- B) Make the default secure.
- C) Minimize the chance of misconfiguration.

Cilium conveniently achieves all three. Unfortunately, with the latest release (1.13.4), there is still a [known issue](https://docs.cilium.io/en/v1.13/security/network/encryption/#known-issues-and-workarounds) that pod-to-pod is not immediately encrypted under certain conditions.

To address this issue, currently, the admin needs to disable all pod-to-Internet communication. While this is a viable workaround in certain scenarios it is not ours. Thus we began an investigation for a better solution roughly a year ago...

## The consistency problem in IPCache

Both Cilium's identity-based policy enforcement and encryption rely on an [eBPF map](https://docs.kernel.org/bpf/maps.html) called _IPCache_ to reason about the source and destination identity of network packets. If a packet originates from a pod inside the pod network and the IPCache indicates that the destination is also a pod, then the packet is re-routed through the WireGuard interface. This interface then takes care of encapsulating and encrypting the packet and sending it to the destination pod's node. So far so good. However, as it turns out, the IPCache is only _eventually_ updated with new endpoints. If a newly created endpoint is not yet in the IPCache, network traffic to it is not encrypted. This is the core of the problem and our goal is to fix this.

### Triggering the issue

To trigger and observe the issue, we analyzed the path from the new endpoint creation to the IPCache update. This path looks somewhat like this:

1. Endpoint is created
2. Cilium-agent creates a new CiliumEndpoint custom resource
3. Cilium-operator merges CiliumEndpoints with the same identity to one CiliumEndpointSlice
4. Cilium-agent watches and consumes all CiliumEndpointSlices
5. Cilium-agent writes a new entry in IPCache

By disabling the Cilium-operator in step 3, we are able to reliably trigger the issue, resulting in Cilium sending the corresponding traffic unencrypted over the wire. Note that the disabling is equivalent to adding a long delay into step 3. Our concrete test code can be found [here](https://github.com/cilium/cilium/blob/5da5882754569e118e713532b89dc4ca89ab76fd/test/k8s/datapath_configuration.go#L387).

### Solution

Our approach is simple. We add a filter as an eBPF program to Cilium's packet routing stack called the ["datapath"](https://docs.cilium.io/en/stable/network/ebpf/intro/) that drops unencrypted network packets between pods. This raises two questions:

1. How do we identify pod-to-pod traffic?
2. How do we know if traffic is encrypted or not?

Our approach for (1) is to identify pods based on their IPv4 addresses. If both destination and source address are within the pod subnet (as specified by `PodCIDR`), we're dealing with pod-to-pod traffic. At least in most cases; more on that later.

For (2), we need to consider VXLAN and direct routing separately. All identified pod-to-pod traffic that is not (yet) covered by IPCache ends up unencrypted at the VXLAN interface. Analogously, for direct routing, all such traffic ends up unencrypted at eth0.

Correspondingly, for VXLAN, our filter is part of the `bpf_overlay` program, which is attached to the VXLAN network interface. For direct routing, our filter is part of the `bpf_host` program, which is attached to the host network interface, i.e., eth0.

Together, this reliably solves our problem. However, in cases where nodes and pods share a subnet, our approach from (1) also drops traffic to nodes, which is unintended and breaks functionality. This can happen for VXLAN on AWS and Azure, since the nodes have multiple IP addresses from the PodCIDR assigned. Those are used for internal health checks and to route traffic from one node to the pod of another node. This problem does not occur for native routing on GCP.

To address this, for VXLAN, we extend our filter to identify nodes via the IPCache map. If, according to the map, the destination is a node, we don't drop the traffic. This extension has one caveat: If a pod is assigned the IP address of a recently shut down node and this change isn't reflected in IPCache yet, traffic to that pod will temporarily still not be encrypted.

### Implementation

The Cilium was very welcoming and helped us with the implementation of the strict mode described above. Specifically, the Cilium maintainers suggested a location [in the datapath](https://docs.cilium.io/en/v1.13/network/ebpf/lifeofapacket/#life-of-a-packet) to add our [filter](https://github.com/cilium/cilium/pull/21856/files#diff-f1851842acdc4e195dcd1b102c3c2597c293c1bfd04dc7e1bca8e02050102915R110). After some trial and error, we finally found the correct spots in [`bpf/bpf_host.c`](https://github.com/cilium/cilium/pull/21856/files#diff-ff0cc41af3fc733a268ec48f09df41cc2bf321f9191d8df1722b6d195e88e193R1495) and [`bpf/overlay. c`](https://github.com/cilium/cilium/pull/21856/files#diff-01b3b17d448a4cf12c8ce37729576da934f2c3ed8801216b33d4e13a39299193R684), which made our code pass the test. For the eBPF connoisseurs, we’ve listed the actual packet filter code below.

```c
/* strict_allow checks whether the packet is allowed to pass through the strict mode. */
static __always_inline bool
strict_allow(struct __ctx_buff *ctx) {
 struct remote_endpoint_info __maybe_unused *dest_info, __maybe_unused *src_info;
 bool __maybe_unused in_strict_cidr = false;
 void *data, *data_end;
#ifdef ENABLE_IPV4
 struct iphdr *ip4;
#endif
 __u16 proto = 0;

 if (!validate_ethertype(ctx, &proto))
  return true;

 switch (proto) {
#ifdef ENABLE_IPV4
 case bpf_htons(ETH_P_IP):
  if (!revalidate_data(ctx, &data, &data_end, &ip4))
   return true;

  /* Allow traffic that is sent from the node:
   * (1) When encapsulation is used and the destination is a remote pod.
   * (2) When the destination is a remote-node.
   */
  if (ip4->saddr == IPV4_GATEWAY || ip4->saddr == IPV4_ENCRYPT_IFACE)
   return true;

  in_strict_cidr = ipv4_is_in_subnet(ip4->daddr,
         STRICT_IPV4_NET,
         STRICT_IPV4_NET_SIZE);
  in_strict_cidr &= ipv4_is_in_subnet(ip4->saddr,
          STRICT_IPV4_NET,
          STRICT_IPV4_NET_SIZE);

#if defined(TUNNEL_MODE) || defined(STRICT_IPV4_OVERLAPPING_CIDR)
  /* Allow pod to remote-node communication */
  dest_info = lookup_ip4_remote_endpoint(ip4->daddr, 0);
  if (dest_info && dest_info->sec_identity &&
      identity_is_node(dest_info->sec_identity))
   return true;
#endif /* TUNNEL_MODE || STRICT_IPV4_OVERLAPPING_CIDR */
  return !in_strict_cidr;
#endif /* ENABLE_IPV4 */
 default:
  return true;
 }
}
```

Description: Basic eBPF IPv4 packet filter based on CIDR.

The full implementation was [merged into Cilium](https://github.com/cilium/cilium/pull/21856) and will be released with v1.15. It is already used and configured automatically by Constellation.

### What's next

With the [v1.14 release](<[https://github.com/cilium/cilium/milestone/37](https://github.com/cilium/cilium/milestone/42)>) Cilium will also introduce [node-to-node](https://github.com/cilium/cilium/pull/19401) encryption. For Constellation, our plan is to switch from pod-to-pod encryption + strict mode to node-to-node encryption + strict mode in the coming months. The same benefits of our filter apply to node-to-node encryption. Dropping unencrypted packets between nodes. However, it removes the need to explicitly identify pod-to-pod traffic.

## Conclusion

We’ve seen how Cilium helps Constellation protect data in transit as one of three pillars of always encrypted Confidential Kubernetes. The eventually consistent routing information turned out to be a problem for guarantees about encrypting all workload traffic. With the help of the community and maintainers, we were able to lift Cilium’s capabilities and flexibility to implement a strict mode that addressed the problem.

Let us know if you found our deep dive insightful and if you want to learn more about Constellation and Cilium. For example, protecting the Kubernetes API-Server-to-Node communication or integrating Cilium’s node-to-node encryption mode into Constellation. In the meantime, you can find everything about Constellation on [GitHub](https://github.com/edgelesssys/constellation) and in our [docs](https://docs.edgeless.systems/constellation).

Thanks to [@benschlueter](https://github.com/benschlueter) for the joint work. Thanks to [@pchaigno](https://github.com/pchaigno), [@brb](https://github.com/brb), and [@gandro](https://github.com/gandro) from Cilium for the helpful hints and discussions.
Thanks to [@xmulligan](https://github.com/xmulligan) for reviewing and helping with the blog post.
