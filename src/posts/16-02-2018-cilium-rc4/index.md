---
path: '/blog/2018/02/16/cilium-1.0.0-rc4'
date: '2018-02-16T19:30:43.000Z'
title: 'Cilium 1.0.0-rc4 released'
categories:
  - Releases
  - Deep Dive
  - Announcements
tags:
  - release
ogSummary: 'We are excited to have released Cilium 1.0.0-rc4. The release contains a lot of bugfixes as usual plus a lot of CI work to ensure quality long term but there are also some enhancements highlights and tooling worth mentioning.'
---

We are excited to have released Cilium 1.0.0-rc4. The release contains a lot of
bugfixes as usual plus a lot of CI work to ensure quality long term but there
are also some enhancements highlights and tooling worth mentioning.

As usual, the full release notes are attached at the end of the blog but can be
found on the [1.0.0-rc4 release
page](https://github.com/cilium/cilium/releases/tag/v1.0.0-rc4). Here is a list
of some highlights:

## Envoy is the default HTTP/gRPC proxy \o/

![Envoy logo](Envoy_Logo_Final_PANTONE.png)

We have finally ripped out the old custom HTTP proxy and made
[Envoy](https://github.com/envoyproxy/envoy) the default proxy for all L7
enforcement of HTTP and gRPC traffic. In the months up to this we have extended
Envoy in various ways to

- Introduction of listener filters to allow running filters per listener to
  retrieve per connection metadata. We use this to read metadata from BPF maps
  and make the L3/L4 forwarding context of Cilium available to Envoy.
  [See PR](https://github.com/envoyproxy/envoy/pull/2346)

- Addition of the original destination cluster type to allow configuring Envoy
  in a completely transparent manner so whenever a connection is redirected to
  Envoy, Envoy will always forward to whatever was the original destination of
  the redirected connection.
  [See PR](https://github.com/envoyproxy/envoy/pull/1246)

- Allow tying the HTTP version of an upstream connection to whatever HTTP
  version the downstream connection is using. This allows preserving full
  transparency.
  [See PR](https://github.com/envoyproxy/envoy/pull/2328)

- Allow HTTP filters to have read access to the downstream connections.
  [See PR](https://github.com/envoyproxy/envoy/pull/1300)

## Simple health overview for connectivity and other errors

Cilium, like the majority of distributed systems software, is driven by events
and notifications. Cilium react to events such as addition of a new policy,
appearance of a new security identity in the cluster, removal of a container on
the local node, and so on. Unfortunately things can and will go wrong. The
kvstore can be become unreachable temporarily, the Kubernetes apiserver can
crash, cluster nodes can get rebooted, ... Therefore, code that is associated
with such events will eventually fail. How should we notify you as a user? The
obvious answers are:

- Not at all, the code should be written in a resilient manner and retry on
  failure to eventually recover.

- The error messages indicating the failure are logged to a logfile.

While resilience is great and logfiles allow to reconstruct all actions
retrospectively, it makes it hard to know at a specific point in time, how well
the cluster is doing right now. For this purpose, we have introduced what
we call "controller status" to the `cilium status` output:

```
$ cilium status
[...]
Controller Status (0/2 failing)
  Name                               Last success   Last error   Count   Message
  sync-identity-to-k8s-pod (56326)   36s ago        never        0       no error
  sync-identity-to-k8s-pod (29898)   32s ago        never        0       no error
```

This will allow to give an immediate overview of what is failing right now, why
it is failing and how often it has been retried. Right now, the `cilium status`
command is available on each node. We will provide a cluster wide tool in one of
the next releases.

Another common source for overall cluster health issues are defects in the network
fabric itself which result in connectivity problems. To allow for simple and
effective monitoring, we have introduced `cilium-health`:

```
$ cilium-health status
Probe time:   2018-02-06T19:40:16Z
Nodes:
 k8s1 (localhost):
   Host connectivity to 192.168.36.11:
     ICMP:          OK, RTT=1.258166ms
     HTTP via L3:   OK, RTT=434.173µs
   Endpoint connectivity to 10.10.0.172:
     ICMP:          OK, RTT=1.266885ms
     HTTP via L3:   OK, RTT=554.219µs
 k8s2:
   Host connectivity to 192.168.36.12:
     ICMP:          OK, RTT=1.53503ms
     HTTP via L3:   OK, RTT=2.420321ms
   Endpoint connectivity to 10.10.1.172:
     ICMP:          OK, RTT=2.081433ms
     HTTP via L3:   OK, RTT=6.550839ms
```

A full blog post on this feature can be found [here](/blog/2018/2/6/cilium-troubleshooting-cluster-health-monitor)

## Improved scalable kvstore interaction layer

The last big change is a heavily improved interaction layer with the kvstore.
We will provide a dedicated blog post on the exact details along with proper
documentation, the highlights are:

- All keys inserted by agents to manage the allocation of security identities
  for endpoints and pods are now protected by leases which means that if a
  node running an agent goes down and never comes up, the keys will eventually
  expire and the kvstore will not end up cluttered with unused keys.

- The process of allocating a security identity has become a lot more
  lightweight and requires less locking. With etcd 3.3 we hope to provide a
  completely lockless operation exclusively depending on conditional
  transactions to improve scalability even further.

- A new `cilium kvstore` command gives easy access to all kvstore keys and values.

## Release Notes

### Major Changes

- api: Introduce & expose endpoint controller statuses (#2720, @tgraf)
- More scalable kvstore interaction layer (#2708, @tgraf)
- Add agent notifications & access log records to monitor (#2667, @tgraf)
- Remove oxyproxy and make Envoy the default proxy (#2625, @jrajahalme)
- New controller pattern for async operations that can fail (#2597, @tgraf)
- Add cilium-health endpoints for datapath connectivity probing (#2315, @joestringer)

### Bugfixes Changes

- Avoid concurrent access of rand.Rand (#2823, @tgraf)
- kafka: Use policy identity cache to lookup identity for L3 dependant rules (#2813, @manalibhutiyani)
- envoy: Set source identity correctly in access log. (#2807, @jrajahalme)
- replaced sysctl invocation with echo redirects (#2789, @aanm)
- Set up the k8s watchers based on the kube-apiserver version 2731 (##2735, @aanm)
- bpf: Use upper 16 bits of mark for identity (#2719, @tgraf)
- bpf: Generate BPF header in order after generating policy (#2718, @tgraf)
- Kubernetes NetworkPolicyPeer allows for PodSelector and NamespaceSelector fields to be optional. (#2699, @ianvernon)
  - Gracefully handle when these objects are nil when we are parsing NetworkPolicy.
- Enforce policy update immediately on ongoing connections 2569 #2408 (##2684, @aanm)
- envoy: fix rule regex matching by host (#2649, @aanm)
- Kafka: Correctly check msgSize in ReadResp before discarding. (#2637, @manalibhutiyani)
- Fix envoy deadlock after first crash (#2633, @aanm)
- kafka: Reject requests on empty rule set (#2619, @tgraf)
- CNP CRD schema versioning (#2614, @nebril)
- Fix race while updating L7 proxy redirect in L4PolicyMap (#2607, @joestringer)
- Don't allow API users to modify reserved labels for endpoints. (#2595, @joestringer)

## Release binaries

- [cilium-agent-x86_64](http://releases.cilium.io/v1.0.0-rc4/cilium-agent-x86_64) ([c58a3a05d8531bd8f677](http://releases.cilium.io/v1.0.0-rc4/cilium-agent-x86_64.sha256sum))
- [cilium-bugtool-x86_64](http://releases.cilium.io/v1.0.0-rc4/cilium-bugtool-x86_64) ([5ba0547857d71a96d99c](http://releases.cilium.io/v1.0.0-rc4/cilium-bugtool-x86_64.sha256sum))
- [cilium-health-x86_64](http://releases.cilium.io/v1.0.0-rc4/cilium-health-x86_64) ([f0015f1345e9bb7eccec](http://releases.cilium.io/v1.0.0-rc4/cilium-health-x86_64.sha256sum))
- [cilium-node-monitor-x86_64](http://releases.cilium.io/v1.0.0-rc4/cilium-node-monitor-x86_64) ([81e189969dcf2a97aca3](http://releases.cilium.io/v1.0.0-rc4/cilium-node-monitor-x86_64.sha256sum))
- [cilium-x86_64](http://releases.cilium.io/v1.0.0-rc4/cilium-x86_64) ([2f63b204753aa7a96bb0](http://releases.cilium.io/v1.0.0-rc4/cilium-x86_64.sha256sum))
- [v1.0.0-rc4.tar.gz](http://releases.cilium.io/v1.0.0-rc4/v1.0.0-rc4.tar.gz) ([39ff5357ea5920af6bca](http://releases.cilium.io/v1.0.0-rc4/v1.0.0-rc4.tar.gz.sha256sum))
- [v1.0.0-rc4.zip](http://releases.cilium.io/v1.0.0-rc4/v1.0.0-rc4.zip) ([1c371d84ccad990c6915](http://releases.cilium.io/v1.0.0-rc4/v1.0.0-rc4.zip.sha256sum))

As usual, let us know on [Slack](http://cilium.io/slack) if you have any questions.
