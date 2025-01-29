---
date: '2023-07-23T12:00:00.000Z'
externalUrl: 'https://isovalent.com/labs/cilium-lb-ipam-l2-announcements/?utm_source=website-cilium&utm_medium=referral&utm_campaign=cilium-lab'
ogImage: cover.jpg
categories:
  - Networking
place: Online
title: 'Cilium LoadBalancer IPAM and L2 Service Announcement'
ogSummary: 'In Cilium 1.13, we introduced support for LoadBalancer IP Address Management (LB-IPAM) and the ability to allocate IP addresses to Kubernetes Services of the type LoadBalancer.
Cloud providers natively provide this feature for managed Kubernetes Services and therefore this feature is more one for self-managed Kubernetes deployments or home labs.
LB-IPAM works seamlessly with Cilium BGP: the IP addresses allocated by Cilium can be advertised to BGP peers to integrate your cluster with the rest of your network.
For users who do not want to use BGP or that just want to make these IP addresses accessible over the local network, we are introducing a new feature called L2 Announcements in Cilium 1.14.
When you deploy a L2 Announcement Policy, Cilium will start responding to ARP requests from local clients for ExternalIPs and/or LoadBalancer IPs.
Typically, this would have required a tool like MetalLB but Cilium now natively supports this functionality.
Try it in this new lab!'
draft: false
from: 'Isovalent'
---
