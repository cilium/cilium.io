---
path: '/blog/2017/11/7/cilium-with-kafka'
date: '2017-11-30T19:30:43.000Z'
title: 'Cilium now supports Kafka!'
categories:
  - Release
tags:
  - release
ogSummary: 'We have released Cilium v0.12 a couple of weeks back. One of the exciting feature additions is the introduction of Kafka protocol visibility and policy enforcement in form of a tech preview.'
---

We have released Cilium v0.12 a couple of weeks back. One of the exciting feature additions is the introduction of Kafka protocol visibility and policy enforcement in form of a tech preview.

The following video will take you through a quick Kafka demo:

<iframe data-preserve-html-node="true" width="640" height="360" src="https://www.youtube.com/embed/zK5hy6nsYEg" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>

You can also check out the [Kafka Getting Started Guide](http://docs.cilium.io/en/stable/gettingstarted/#getting-started-using-kubernetes-with-kafka) to learn how to enforce Kafka-aware policies yourself.

### Other Relevant CILIUM NEWS

- Iinitial implementation stages of <nobr data-preserve-html-node="true">XDP-based</nobr> filtering enable source IP filtering in the NIC driver, with incredible performance results for protecting a host that can be seen [here](https://www.slideshare.net/ThomasGraf5/cilium-network-security-for-microservices#slide7). Below are the highlights from Cilium
- Simplified policy model to express connectivity for special entities "world" (outside of the cluster) and "host" (system on which endpoint is running on)
- XDP policy enforcement for filtering out source IPs and allowing host and endpoint destination IPs
- Initial framework to support multiple user-space proxies brings the ability to parse many more application protocols
- Auto-population of IPv6 routes for all hosts in the cluster to minimize IPv6 control plane routing (applicable for non-overlay mode)
- Support for L3-dependent L4 policies on ingress, enabled by expanding _PolicyMap_ entry options in BPF
- Unified Cilium default policy behaviour: platform-agnostic enforcement behavior. Now, policy is defined as a whitelist on per-endpoint basis, globally (in-line with Kubernetes behaviour).
- Cluster-wide information on Cilium identities via CLI/API.
- Cilium support for Kubernetes 1.8
- Improved _DaemonSet_ file to automatically derive Kubernetes API access
- Support for _DaemonSet_ configuration, such as _etcd_ endpoints, via _ConfigMap_
- Support for ingress and egress rules with IP blocks, including blacklisting
- Prioritization of Kubernetes pod CIDR for node CIDR allocation.

We’ve also grown our documentation to include several specifics varying from policy enforcement and rules to BPF debugging datapath and developer documentation in the Contributor guide. Take a closer look at our [Docs](http://cilium.readthedocs.io/en/stable/) page.

As always, we’re here to help with any questions on [Cilium Slack](https://cilium.herokuapp.com/) or file any issues for the project on [GitHub](https://github.com/cilium/cilium/issues). You can tweet to us [@ciliumproject](https://twitter.com/ciliumproject) and follow us on Twitter for more updates.

~ The Cilium Team
