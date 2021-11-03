---
path: '/blog/grpc'
date: '2017-12-06T09:13:48.000Z'
title: 'Cilium Now Speaks gRPC!'
tags:
  - grpc
  - cilium
  - microservices
ogImage: cilium_grpc.png
ogSummary: 'The Cilium team is happy to announce tech preview support for gRPC-aware filtering!'
---

![](cilium_grpc.png)

The Cilium team is happy to announce tech preview support for gRPC-aware filtering!

While the majority of existing API-based services leverage HTTP REST as their primary protocol for inter-service communication, among teams designing new platforms from scratch, [gRPC](http://www.grpc.io) is quickly gaining steam.  gRPC is based on Google's popular protobuf project, which provides a more compact and efficiently serializable RPC payload.

Microservices written using gRPC typically include a large number of RPC "methods", all of which are exposed on a single TCP port belonging to the gRPC server.  As a result, a traditional network firewall would either open or close the port of the gRPC server, exposing either all or none of the gRPC methods for a service to each RPC client.  However, Cilium's API-aware filtering enables fine-grain security policies that selectively expose RPC methods to different remote callers, eliminating unnecessary attack surface.

We have created a Cilium + gRPC "Getting Started Guide" so you can try it out yourself: http://docs.cilium.io/en/stable/gettingstarted/grpc/ .  Building on our tradition of Star Wars-themed demos, this guide explains how the lack of gRPC-aware network security helped the rebels escape from Cloud City during "The Empire Strikes Back".   Check out the video!

<iframe src="//www.youtube.com/embed/-aUHGeBRDPU?wmode=opaque&amp;enablejsapi=1" height="480" width="854" scrolling="no" frameborder="0" allowfullscreen=""></iframe>

As always, we're very interested in your questions and feedback, so don't hesitate to reach out via Twitter ([@ciliumproject](https://twitter.com/ciliumproject)) or Slack ([http://www.cilium.io/slack](http://www.cilium.io/slack)).   And don't forget to check out the code and star us on [Cilium Github](http://github.com/cilium/cilium) .  Happy gRPC-ing!
