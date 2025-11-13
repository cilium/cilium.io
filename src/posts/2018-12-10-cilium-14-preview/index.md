---
path: '/blog/2018/12/10/cilium-14-preview'
date: '2018-12-10T09:00:00.000Z'
title: 'Cilium 1.4 Preview: Multi-Cluster Service Routing, DNS Authorization, and Transparent Encryption'
categories:
  - Release
tags:
  - bpf
  - ebpf
  - preview
  - release
  - encryption
  - multi-cluster
  - dns
ogImage: ogimage.png
ogSummary: 'Cilium 1.4 brings multi-cluster service routing with global Kubernetes services, DNS request/response security policies, and transparent IPsec encryption. RC1 coming soon for community testing.'
---

As we all enjoy a wonderful week at KubeCon 2018 US, we want to provide a
preview into the upcoming Cilium 1.4 release. We are days away from 1.4.0-rc1
which will allow for community testing of a lot new exciting functionality.
Some of the highlights:

- Multi-Cluster service routing using standard Kubernetes services.
- DNS Authorization with DNS request/response aware security policy enforcement
  to restrict the DNS names a pod can lookup as well as limit the egress
  connectivity to the IPs returned in the DNS response of that particular pod.
- Transparent encryption and authentication for all service to service
  communication using X.509 certificates.

As always, we love hearing from you, so stop by our KubeCon booth and chat with
us and other Cilium users.

<a id="multi-cluster-service-routing"></a>

## Multi-Cluster Service Routing

Cilium 1.3 has introduced the basic pod IP routing capability between multiple
clusters. Cilium 1.4 is introducing the concept of global services based on
standard Kubernetes services. Global services allow a user to nominate a
Kubernetes service to be available in multiple clusters. That service can then
have backend pods in multiple clusters.

The user experience is as simple as defining a Kubernetes service with
identical name and namespace in each cluster and add an annotation to mark it
as global.

![Multi Cluster Services](ogimage.png)

The Kubernetes health-check information is leveraged to add and remove service
backends automatically as pods scale up and down or become unhealthy.

![Multi Cluster Failover](multicluster_failover.png)

The control plane is built on top of etcd similar to how Kubernetes itself
operates with resiliency and simplicity as its foundational design pattern.
Each cluster continues to operate its own etcd cluster and replications happens
on a read-only basis which ensures that failures in a cluster do not impact
other clusters.

![Multi Cluster Control Plane](multicluster_control_plane.png)

Connecting clusters together is as simple as providing routing between VPCs
using standard routing APIs of cloud providers or on-prem infrastructure via
regular IPSec based VPN gateways and tunnels and then expose the Cilium control
plane via an internal Kubernetes Loadbalancer to expose it to the internal
VPCs. TLS is used to authenticate the client and server with the certificates
and keys managed as regular Kubernetes secrets.

<a id="dns-request-response-aware-security-and-visibility"></a>

## DNS Request/Response Aware Security & Visibility

Cilium 1.4 extends the existing DNS security policy model to be aware of the
DNS requests that individual pods issue and the DNS responses they receive.
This significantly improves the security of pods accessing services outside of
the cluster:

- Pods can be restricted to have minimal privileges when performing DNS
  lookups, i.e. pod can be limited to only succeed in looking up DNS names
  matching a pattern such as `*.domain.com`. Any request outside of the allowed
  pattern will receive a `request refused` DNS response in return.

- The communication following the DNS lookup can be limited to the IP addresses
  as returned in the DNS response that the specific pod received. This reduces
  the privileges of a compromised application significantly and improves the
  reliability of DNS based policy rules as the enforcement logic no longer
  requires to to know about all possible IP addresses that a DNS name can map
  though.

  In particular for popular storage, messaging, and database services offered
  by cloud providers, a single DNS name can map to hundreds or thousands of IP
  addresses.

- DNS lookups and responses are now logged via the Cilium authorization
  logging layer that is accessible via an API. This provide an exact log of
  every DNS request and response that a pod has performed.

![DNS](dns.png)

The above example shows a successful DNS sequence followed by an HTTP request
to the IP as responded by the DNS server. This is how an application is
expected to behave and what is permitted. Subsequent HTTP requests can use the
cached DNS information, such requests will be allowed as well. The DNS
information will time out according to TTL information in the record.

On the right is a sequence where the application is performing a DNS lookup
outside of the allowed DNS policy. It also shows that if the application fails
to perform a DNS lookup, any attempt to contact the IP address, even if the IP
address actually maps to a DNS name which is permitted, will be blocked if the
application failed to lookup the DNS name at some point.

### Policy Example

```yaml
apiVersion: 'cilium.io/v2'
kind: CiliumNetworkPolicy
metadata:
  name: 'egress-domain-wildcard'
spec:
  endpointSelector:
    matchLabels:
      app: myService
  egress:
    - toEndpoints:
        - matchLabels:
            k8s:io.kubernetes.pod.namespace: kube-system
            k8s-app: kube-dns
      toPorts:
        - ports:
            - port: '53'
              protocol: UDP
          rules:
            dns:
              - matchPattern: '*.domain.com'
    - toFQDNs:
        - matchPattern: '*.domain.com'
      toPorts:
        - ports:
            - port: '443'
              protocol: TCP
```

The above policy example grants a pod or container the privilege to perform DNS
requests via kube-dns but limits the allowed DNS lookups to `*.domain.com`. A
request not matching the pattern will receive a `request refused` DNS response.
It further grants the pod egress access on port 443/TCP to the IPs returned in
the DNS response. Any attempt to access any IP address not previously returned
in a DNS response is rejected.

<a id="transparent-encryption-and-authentication"></a>

## Transparent Encryption & Authentication

Providing transparent encryption for all service to service communication
within a cluster and across clusters has been a frequently requested feature.
The encryption allows to run Kubernetes in untrusted networks transparently
encrypting all communication between services in the cluster. The
authentication ensures that only trusted worker nodes can participate in the
cluster.

The encryption is based on X.509 certificates and keys which provides
compatibility with the SPIFFE service specification to provide accelerated
service authentication in the future. The datapath implementation uses the
IPSec implementation of the Linux kernel which ensures efficient and automatic
use of hardware assisted crypto acceleration via specialized CPU instruction
sets as found in modern processors.

![Encryption](encryption.png)

## And a lot more

This is only a small glimpse of the overall effort that is going into the 1.4
release. The release will also include a great amount of incremental
improvement across the board such as becoming smarter in interacting with the
Kubernetes apiserver, being more intelligent in how aggressively do BPF map
pre-allocation by default to balance out performance considerations over memory
consumption, perform dynamically sizing of data structures based on the
available system memory to draw conclusions about the expected number of
connections the node will have to handle, simplified installations via an
improved etcd operator to provide etcd managed by Cilium itself and much more.
The full 1.4 release blog will include all of the details for those interested.

If you haven't, join our [Slack] channel to provide feedback and connect with
the community.

See you all at KubeCon in Seattle!

[slack]: https://slack.cilium.io
