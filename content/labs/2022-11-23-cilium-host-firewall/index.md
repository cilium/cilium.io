---
date: '2022-11-23T11:00:00.000Z'
externalUrl: 'https://isovalent.com/labs/cilium-host-firewall/?utm_source=website-cilium&utm_medium=referral&utm_campaign=cilium-lab'
ogImage: cover.jpg
categories:
  - Security
place: Online
title: 'Cilium Host Firewall'
ogSummary: 'Ever since its inception, Cilium has supported Kubernetes Network Policies to enforce traffic control to and from pods at L3/L4.
But Cilium Network Policies even go even further: by leveraging eBPF, it can provide greater visibility into packets and enforce traffic policies at L7 and can filter traffic based on criteria such as FQDN, protocol (such as kafka, grpc), etc…
Creating and manipulating these Network Policies is done declaratively using YAML manifests.
What if we could apply the Kubernetes Network Policy operating model to our hosts? Wouldn’t it be nice to have a consistent security model across not just our pods, but also the hosts running the pods? Let’s look at how the Cilium Host Firewall can achieve this.
In this lab, we will install SSH on the nodes of a Kind cluster, then create Cluster-wide Network Policies to regulate how the nodes can be accessed using SSH.
The Control Plane node will be used as a bastion to access the other nodes in the cluster.'
draft: false
from: 'Isovalent'
---
