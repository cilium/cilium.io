---
path: '/blog/2017/5/31/cilium-v09-released-hello-kubernetes'
date: '2017-06-01T20:14:07.000Z'
title: 'Cilium v0.9 Released: Kubernetes DaemonSet, NetworkPolicy, and L7 HTTP Security'
categories:
  - Release
tags:
  - release
ogSummary: 'Cilium v0.9 brings seamless Kubernetes integration with DaemonSet deployment, Kubernetes NetworkPolicy support, L7 HTTP security via YAML, RBAC integration, and Minikube quick start. Production-ready eBPF networking for Kubernetes clusters.'
---

The team is excited to announce the [v0.9 release](https://github.com/cilium/cilium/releases/tag/v0.9.0) of Cilium.

We've received a lot of great feedback since we released Cilium v0.8 at the end of March with support for L7 HTTP-aware network security.   By far the biggest requests have been:

- Making it easier to deploy and use Cilium in Kubernetes environments
- Testing and hardening Cilium to enable production deployments.

While there is still more work to do, the v0.9 release of Cilium is a major leap forward on both fronts.   Most interesting to new Cilium users will be our updated [Getting Started Guide](http://docs.cilium.io/en/stable/gettingstarted/), which now includes a dead simple workflow for using Minikube + Cilium on your laptop:

The Minikube setup leverages several of the key enhancements we've made in Cilium Kubernetes integration, which are also relevant for those of you looking to deploy Cilium + Kubernetes in a larger deployment.   These include:

- A Cilium DaemonSet for Kubernetes, enabling deployment of the cilium-agent to all nodes using a single kubectl command.
- Support for advanced network policies described directly in Kubernetes YAML files and applied using kubectl.  This leverages Kubernetes 3rd-party API resources for configuring advanced Cilium capabilities including L7-layer HTTP rules, egress filtering, etc.
- Support for the latest changes the the Kubernetes NetworkPolicy semantics with regards to when to enable isolation for pods. See full discussion on GitHub [here](https://github.com/kubernetes/kubernetes/pull/39164).
- Integration with Kubernetes role-based access control (RBAC), available in Kubernetes 1.6 .
- Support for Cilium logging to FluentD, a CNCF project often used in conjunction with Kubernetes.

The v0.9 release also added support for L7 filtering of IPv6 traffic, improvements to the "cilium monitor" command, and numerous fixes and improvements from our ramped up testing efforts.   For all of the gory details, check out the [release notes](https://github.com/cilium/cilium/releases/tag/v0.9.0). These improvements of course also apply equally to users of Cilium + Docker.

In the coming weeks we'll use this blog to provide deep dives into some of these key aspects of v0.9 as well as to post a guide for a large scale Kubernetes + Cilium deployment.

The v0.9 release was also milestone for the Cilium community as it passed 2,000 total commits.   In just the past ~2 months the community has added 14 contributors to bring the total to 24 and reached 600 github stars (about double what we had just three months ago). Have you [starred us](https://github.com/cilium/cilium) yet?

We hope you have fun trying out the v0.9 release.   As we shift focus toward the next release, we'd love your input on bugs or new features by adding [issues on github](https://github.com/cilium/cilium/issues), pinging us on [Cilium Slack](https://slack.cilium.io) , or tweeting us [@ciliumproject](https://twitter.com/ciliumproject) .

~ The Cilium Team
