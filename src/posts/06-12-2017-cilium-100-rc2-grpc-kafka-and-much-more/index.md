---
path: '/blog/cilium1dot0rc'
date: '2017-12-06T17:00:00.000Z'
title: 'Cilium 1.0.0-rc2 - gRPC, Kafka and much more'
categories:
  - Releases
tags:
  - kafka
  - grpc
  - cilium
  - bpf
ogSummary: 'The Cilium community has been hard at work over the past weeks to get us closer to what we consider is required for a 1.0 release. We have made a ton of progress and are happy to announce the release of 1.0.0-rc2 at this point.'
---

The Cilium community has been hard at work over the past weeks to get us closer to what we consider is required for a 1.0 release. We have made a ton of progress and are happy to announce the release of 1.0.0-rc2 at this point.

## New functionality that was MERGED RECENTLY:

- Security policy enforcement at application protocol level for [Kafka](http://docs.cilium.io/en/v1.0.0-rc2/gettingstarted/kafka/), and [gRPC](/grpc).
- Initial roadmap of the [Istio integration](https://www.cilium.io/blog/istio) including the integration of the [Envoy](https://github.com/envoyproxy/envoy) proxy into the Cilium datapath.

- Lots of tooling around operating Cilium based clusters (cluster wide connectivity monitor, bug reporting tools, Prometheus metrics, security incident process, ...)

- Lots and lots of documentation and guides.

Thanks goes out to all contributors to Cilium for this release. Let's keep up the great work.

## When should a project announce 1.0?

There are many different philosophies around when exactly to release version 1.0 of an open source project. Some projects will never reach 1.0, other projects start off with a 1.0 release out of the gate.

The following is what the community has defined to be the requirements for the 1.0 release:

- Completeness of functionality to cover the initial problem definition scope. This includes:

  - Robust, flexible and scalable networking based on BPF technology in the Linux kernel for both IPv4 and IPv6.

  - Efficient and scalable BPF based L3-L4 load balancing between endpoints managed by Cilium.

  - Reliable, identity based policy enforcement between Cilium endpoints and CIDR based matching for external endpoints.

  - Policy enforcement on application protocol level (L7) for some of the most popular protocols: HTTP, gRPC and Kafka.

  - Integration with the most common orchestration frameworks including Kubernetes and Mesos.

  - Troubleshooting and monitoring utilities making use of the visibility advantages of BPF.

  - Metrics and structured logging to allow monitoring and operating at many Cilium nodes at scale

  - Good CI coverage and infrastructure including a nightly test infrastructure to allow for continued growth of the project

- Well-defined documentation covering project scope, installation, use, troubleshooting, contribution, and so on.

- A critical mass of initial users using functionality to cover the entire scope.

We are well on our way. Many foundational pieces including the networking and load-balancing layers have been proven to be very solid over the past 6 months. Other areas such as the layer 7 policy enforcement has been heavily worked on over the past couple of months.

The following is what we consider the missing pieces before declaring 1.0:

- Maturing of the recently merged integration with the [Envoy](https://github.com/envoyproxy/envoy) proxy providing enforcement for HTTP and gRPC going forward as well as the recently added Kafka protocol policy enforcement capability. While Envoy itself is already in heavy use by many users, the integration with Cilium is new.

- Completing the policy enforcement functionality on layer 7\. This includes the ability to integrate with services like Istio Auth for certificate management and the introduction of source dependant layer 7 rules to the Envoy proxy.

We looked at several options on what exactly to call this release and how to proceed. Just declaring 1.0 now did not make sense as the layer 7 functionality is at the core of what many users expect of Cilium. We are well past what is considered a beta. We have thus decided to call it a release candidate.

We have put all the usual processes in place that typically come with a 1.0 release:

- Stable back porting

- Security incident handling according to best practice

- Stability of all APIs and interfaces

This gives all users of Cilium the ability to use and leverage the already matured components of Cilium while we give the new layer 7 enforcement pieces the required time to mature.

## What will come after 1.0?

There are several areas of focus that will define the direction after 1.0 has been released. Some of them are already in progress:

- Support for additional layer 7 protocols by either adding the relevant protocol parsers to the growing collection of supported proxies or by integrating with new proxies. What protocols are you interested in? Let us know!

- Integration of the in-kernel enforcement and proxying capability. The initial framework has already been merged into the upstream Linux kernel repositories. This effort will provide layer 7 functionality at …...

- End to end encryption and authentication

- Continued integration with the Istio project to make the Cilium datapath available to components such as Istio Mixer and to integrate with Istio Auth.

How does that sound? Let us know on [Slack](https://cilium.herokuapp.com) or by filling a [GitHub](https://github.com/cilium/cilium) issues.
