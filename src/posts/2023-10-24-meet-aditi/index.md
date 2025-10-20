---
path: '/blog/2023/10/24/meet-maintainer-aditi-Ghag'
date: '2023-10-24T10:00:00.000Z'
author: 'Shedrack Akintayo'
title: 'Meet the Maintainer - Aditi Ghag'
isPopular: false
isFeatured: false
ogImage: Aditi.jpg
ogSummary: 'Learn more about Aditi and how she got involved with Cilium'
categories:
  - Community
tags:
  - Cilium
  - Maintainer
---

![Aditi Ghag](Aditi.jpg)

_October 24th, 2023_

_Written by: Shedrack Akintayo, Isovalent_

## How did you first get into technology?

I got into tech when I was in high school. I played with PCBs ([printed circuit boards](https://en.wikipedia.org/wiki/Printed_circuit_board)) a lot. It was fun exploring transistors and diodes because there is something uniquely satisfying about turning lights on in a controlled manner. During a summer vacation, I enrolled in an aero modelling workshop. The challenge was to craft a model plane from the ground up and the thrill of that first flight is still fresh in my memory.

On the other hand, my journey into programming began with the C language. Navigating through concepts like pointers was challenging but also exciting and it provided me with a solid foundation in programming. This knowledge also served me well when I transitioned to Go, which became my primary programming language while contributing to Cilium.

## How did you get into open source?

Before I joined [Isovalent](https://isovalent.com/?utm_source=website-cilium&utm_medium=referral&utm_campaign=cilium-enterprise), the creators of Cilium, I was only using open source software instead of contributing to it. Joining Isovalent gave me the chance to actively participate and contribute to the Cilium and eBPF communities.

Cilium sits at an interesting boundary between Kubernetes and the Linux kernel. It interfaces with Kubernetes on the control plane side of things and it programs the data path in Linux to provide networking and security. In order to support Cilium’s use cases, I've contributed to the Kubernetes and the Linux kernel projects.

## How did you first hear about eBPF and Cilium?

In 2017, I saw a [presentation](https://www.youtube.com/watch?v=k0KQz6JrKXc) from Thomas Graf on how Cilium leverages eBPF to provide programmable networking and security and it was pretty intriguing.

Couple of years down the line, I also got a chance to learn more about Cilum and eBPF at a Linux conference where I was giving a talk on how to bring network awareness to the Kubernetes scheduler. At the conference, I met some of the Isovalent folks, who are now my colleagues, and they gave an amazing presentation on how eBPF is being harnessed in Cilium to transform Kubernetes networking.

## How did you become a Cilium committer?

When I joined Isovalent, I contributed a feature called [Local Redirect Policy](https://docs.cilium.io/en/stable/network/kubernetes/local-redirect-policy/). It is meant to address real world use cases where traffic needs to be redirected to node local pods using eBPF, one of the use cases being the node local DNS feature in Kubernetes.

While working on the feature, I made contributions to the Cilium load balancer datapath and the userspace interfacing with the Kubernetes control plane. I became familiar with the development workflow and collaborated with other Cilium maintainers. Contributing these and other features is how I became a maintainer and it's been a wonderful ride ever since.

## What are you working on right now in Cilium?

I've been primarily working on the [Cilium socket-based load balancer](https://docs.cilium.io/en/stable/network/kubernetes/kubeproxy-free/), also known as the kube-proxy replacement and Local Redirect Policy. Currently, my focus is on making the load-balancer more reliable in recovering from failures, and stabilizing both the features. I've also contributed a series of patches to the Linux kernel to enable BPF capability for socket termination which will address some of the limitations we face with the kube-proxy replacement load balancer.

## What advice do you have for people just getting into the Cilium community?

Cilium is one of the most exciting and friendly open source projects out there. We have [public Slack channels](https://slack.cilium.io/) where Cilium users and contributors regularly discuss questions, bugs, and potential fixes. I encourage anyone interested to get involved.

We maintain a list of [good first issues](https://github.com/cilium/cilium/issues?q=is%3Aopen+is%3Aissue+label%3Agood-first-issue), designed to make it easy for you to start contributing to Cilium. Our [community meets](https://docs.cilium.io/en/latest/community/community/) every Wednesday, so if you have questions or need guidance, please ask in the Slack channels or meeting, and one of us will be happy to help. I'd like to emphasize that we've made significant improvements to the Cilium development process, making it easier than ever to get started with Cilium.

To summarize it all, the best way to get started is to deploy a cluster with Cilium, see how it works, play around, report bugs, contribute to features, or any changes.

## What is one of your hobbies outside coding?

I love playing badminton and I'm always striving to improve my skills. I'm also an avid lover of nature, so I find great joy in hiking, which is both mentally stimulating and meditative. Nature photography is another passion of mine, and recently, I've taken up gardening as a hobby which has been a lot of fun.

To engage with the Cilium community and contribute to the project, follow Aditi's lead: join our [Slack](https://slack.cilium.io), check out a [good first issue](https://github.com/cilium/cilium/issues?q=is%3Aopen+is%3Aissue+label%3Agood-first-issue) you can work on, and explore our [community page](https://cilium.io/get-involved/) for more information.
