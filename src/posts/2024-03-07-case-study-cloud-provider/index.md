---
path: '/blog/2024/03/07/cloud-provider-user-story'
date: '2024-03-07T17:00:00.000Z'
title: 'Cilium User Story: Scaling and Enhancing Networking in a Managed Kubernetes Service with Cilium'
ogImage: Cloud_Provider_User_Story.png
ogSummary: 'Learn how a cloud provider used Cilium to handle scalability issues and enhance networking their managed Kubernetes service'
categories:
  - Community
tags:
  - Cilium
---

_February 29th, 2024_

_Author: Shedrack Akintayo, Isovalent_

_This User Story comes from a company in the cloud industry_

Cloud providers give customers a simple way to access and use a wide range of cloud services including analytics, storage, and networking. These solutions in turn need to keep up with customer demands while still being manageable for the cloud provider themselves. This Cilium user story tells the story of why one cloud provider turned to Cilium for the networking layer in their managed Kubernetes offering.

### Challenge

They originally built the networking layer on their own iptables-based Container Network Interface(CNI). However, as customers started growing their clusters, they began facing scalability challenges with their iptables based rules in kube-proxy. To handle the increasing number of services and backends and network policies, they needed a solution that would help them to grow and meet customer demands.

### Solution

After evaluating several options, the cloud provider decided to take a collaborative approach with the community. They chose to integrate Cilium as a CNI into their managed Kubernetes offering because it addressed their scalability challenges, was feature-rich, and backed by an active and growing community

This integration allowed them to pivot their networking dataplane from iptables to eBPF, making it faster and more scalable. Cilium also enabled them to add additional features for their customers like advanced network policy and a kube-proxy replacement. Their customers were looking for a cloud-agnostic solution that would work wherever their workloads needed to connect and found that with Cilium.

### Impact

By switching the dataplane of their managed Kubernetes service from iptables to Cilium powered by eBPF, their customers have more scalability, performance, and features for their Kubernetes networking layer. The Cilium community has also benefited from this cloud provider's contributions back to the project. These contributions back to the open source community have also helped build trust and confidence with their customers.

## Migrating to Cilium for Performance, Scalability, and More Features

When this cloud provider created their managed Kubernetes service, they needed a Container Network Interface (CNI) to provide container networking and built a proprietary one based on iptables.

However, as the number of backends and services being deployed on customer clusters and the number and size of clusters increased, they began to encounter several challenges. They experienced scalability and performance issues stemming from iptables and an increase in the memory consumption when there were more than 1,000 network policies.

Motivated by these limitations, they started searching for a solution. Seeing the success of the Kubernetes community, they wanted to find a community-driven solution for their networking layer. They were looking for a solution that could scale customer clusters and network policies, offer security routing, and replace kube-proxy. The search led them to [eBPF-powered solutions](https://cilium.io/blog/2018/04/17/why-is-the-kernel-community-replacing-iptables/) (rather than iptables) and Cilium stood out.

This cloud provider recognized Cilium's potential, noting its scalability, rich feature set, and the strong community surrounding it. The fact that Cilium is a part of the Cloud Native Computing Foundation (CNCF) and highly respected in the open source community further influenced their decision.

_“We chose Cilium because it is the best-in-class eBPF solution. In the open source community, Cilium is the most respected and because it was donated to the CNCF, it was easier for us to move towards integrating it.”_ - Principal Engineering Manager

They also worked with Isovalent to migrate their managed Kubernetes service platform to Cilium as the CNI. Once they had Cilium in place, they were able to significantly enhance the [speed and scalability](https://azure.microsoft.com/en-us/blog/azure-cni-with-cilium-most-scalable-and-performant-container-networking-in-the-cloud/) of their data plane. The shift also allowed then to add more network policies and set them up to add additional capability in the future.

_“The whole switch to Cilium was smooth. Cilium’s documentation and GitHub is on point and really good with self-troubleshooting and integrations.”_ - Senior Software Engineer

## Preparing Customers and Platforms For Future Cloud Native Challenges

Integrating Cilium has been a huge success for this cloud provider. They have been able to meet the demands of their customers and scale their networking. By integrating Cilium, they not only addressed the immediate customer challenges but also positioned themselves to cater to future customer requirements.

_“Our customers need a scalable, performant, and rich container networking solution to meet the demands of their rapidly expanding cloud native footprint. In collaboration with the CNCF community, we integrated the open source Cilium into our CNI to meet these needs._

_The response and adoption have been very positive amongst our customers. We are looking forward to continued collaboration with the community."_ - Corporate Vice President and Technical Fellow

In the future, they aim to harness the power of eBPF to offer advanced capabilities to their customers, focusing on enhanced security and observability, like service mesh, L7 and FQDN-based network policies.

_“Cilium is the next generation for container networking. We can build so many things with it because of the potential it brings with eBPF._

_Our customers get all the benefits from a scalability and performance perspective which is key for a platform to provide as they are setting up their cloud native applications for the next set of challenges.”_ - Principal Group Software Engineering Manager
