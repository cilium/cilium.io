---
path: '/blog/2017/9/29/cilium-v010-v011-released-double-the-fun-two-updates-in-one'
date: '2017-09-29T22:55:09.000Z'
title: 'Cilium v0.10 & v0.11 Released: Double the Fun - Two Updates in One!'
categories:
  - Release
tags:
  - release
ogSummary: 'Two major Cilium releases — v0.10 and v0.11 — bring better Kubernetes and Mesos support, stronger policies, simpler deployment, and improved tracing.'
---

Over the last 2 months, we have released two new versions of Cilium:

- [v0.10](#cilium0.10) ([Release Notes](https://github.com/cilium/cilium/releases/tag/v0.10.0))

- [v0.11](#cilium0.11) ([Release Notes](https://github.com/cilium/cilium/releases/tag/v0.11))

This is a brief recap of some of the functionality that has been added that we believe is noteworthy. A lot of additional work has gone into these releases, in particular a heavily improved CI system and a lot of bug fixes. Thanks everyone for providing very valuable feedback and bug reports! For the full list of changes, please refer to the Release Notes, linked above.

## Cilium Release v0.10

With the release of [v0.10](https://github.com/cilium/cilium/releases/tag/v0.10.0), we have expanded our Kubernetes integration as well as included several new features around network policy and simplicity for users.

### Network Policy

- CIDR-based network policy for ingress & egress: this allows the lock down of containers with IP-based filtering. Controlling access to and from external services/endpoints limits the ability of a compromised container to exfiltrate data. Documentation and examples can be found here: [http://docs.cilium.io/en/stable/policy/#layer-3-ip-cidr-based](http://docs.cilium.io/en/stable/policy/#layer-3-ip-cidr-based).

- We’ve expanded our Kubernetes capabilities by allowing policies to be applied and enforced between ports/pods in different namespaces. The standard Kubernetes _NetworkPolicy_ resource allows either selected pods in the same namespace or an entire different namespace to consume the pods specified in the policy. _[CiliumNetworkPolicy](http://docs.cilium.io/en/stable/policy/)_ allows a more specific policy where pod X can be consumed from pod Z in namespace Y.

- The Kubernetes _CiliumNetworkPolicy_ resource have been updated to support multiple rules in a single import (relevant for Kubernetes < 1.7). This is useful if multiple rules need to be applied in a single transaction.

### Simplicity

- We have introduced a simplified overlay mode that uses Kubernetes node resources to automatically build a mesh of encapsulation tunnels without any further configuration required. You can find more information here: [http://docs.cilium.io/en/stable/concepts/#overlay-network-mode](http://docs.cilium.io/en/stable/concepts/#overlay-network-mode).

- Automatic NAT rule when accessing external networks. This step was required to be performed manually before and is now done automatically. This behaviour can be disabled by running the `cilium-agent` with the optional field <nobr data-preserve-html-node="true">`--masquerade=false`</nobr>.

- Support for arbitrary cluster address prefix sizes. The cluster address block is the subnet from which all network endpoints in the cluster are allocated. Previously, Cilium required fixed /8 prefix to be configured.

## Cilium Release v0.11

In Cilium release [v0.11](https://github.com/cilium/cilium/releases/tag/v0.11), we have included support for the latest features in Kubernetes 1.7, enhanced tools for tracing and statuses, and provided L7 policy examples in our Mesos Getting Started Guide ([www.cilium.io/try-mesos](http://www.cilium.io/try-mesos)).

### Kubernetes

- CRD Support: with the deprecation of the _ThirdPartyResource_ (TPR) in Kubernetes 1.8 and the introduction of the _CustomResourceDefinition_ (CRD), only Kubernetes 1.7.x supports TPRs and CRDs independently. Starting in Cilium v0.11, the _CiliumNetworkPolicy_ supports CRDs. Please note: parallel usage of CRDs and TPRs leads to unexpected behaviour and is not supported ([https://github.com/kubernetes/kubernetes/issues/49424](https://github.com/kubernetes/kubernetes/issues/49424)). See <nobr data-preserve-html-node="true">[cilium.link/migrate-tpr](http://cilium.link/migrate-tpr)</nobr> for more details on migrating from TPR to CRD. In order to avoid confusion and to avoid accidentally using TPR and CRD in parallel, we have limited the use of TPR to resource version _cilium.io/v1_ and CRD to resource version _cilium.io/v2_. Upgrade your _CiliumNetworkPolicy_ resources to _cilium.io/v2_ in order to use CRD. Keep them at _cilium.io/v1_ to stay on TPR (more details here: [http://cilium.readthedocs.io/en/stable/install/#migrating-cilium-tpr-to-crd](http://cilium.readthedocs.io/en/stable/install/#migrating-cilium-tpr-to-crd)).

### Simplicity

- Enhancements have been made to Cilium policy tracing to include traces based on security identities, endpoint IDs and Kubernetes YAML resources, such as pod names.

- Furthermore, the Kubernetes _CiliumNetworkPolicy_ resource has a policy enforcement status with relevant information per node that can be viewed via `kubectl get ciliumnetworkpolicies -o json`.

## Mesos Integration and Getting Started Guide

In Cilium v0.10, we implemented the CNI 0.2.x specification to enable Mesos integration. In Cilium v0.11, we provided L7 policy examples in our Mesos Getting Started Guide.

If you’re using Mesos and want to try out Cilium L7 policy enforcement, try our Getting Started Guide ([www.cilium.io/try-mesos](http://www.cilium.io/try-mesos)) for a quick intro to our functionality in a self-contained Mesos environment. All you need is somewhere to install a Vagrant VM and we help you get set up with the rest!

As always, we’re here to help with any questions on [Cilium Slack](https://slack.cilium.io) or file any [issues](https://github.com/cilium/cilium/issues) for the project on [github](https://github.com/cilium/cilium). You can tweet to us [@ciliumproject](https://twitter.com/ciliumproject) and follow us on Twitter for more updates. Stay tuned for upcoming blogs on XDP and our Troubleshooting series!

~ The Cilium Team
