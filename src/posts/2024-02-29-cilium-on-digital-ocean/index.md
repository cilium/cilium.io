---
path: '/blog/2024/02/29/cilium-on-digital-ocean'
date: '2024-02-29T12:00:00.000Z'
title: 'Interview: Hubble Integration Added to DigitalOcean Kubernetes'
isPopular: true
ogImage: cilium_on_digitalocean.png
ogSummary: 'Exclusive Interview with DigitalOcean on Integrating Hubble into their Kubernetes Offering'
categories:
  - Community
tags:
  - Cilium
---

In late 2018, DigitalOcean Kubernetes made a strategic move, migrating its infrastructure to Cilium. Fast forward to today, and over 30,000 clusters in DigitalOcean cloud are powered by Cilium, with thousands leveraging Cilium Network Policies for micro-segmentation and enhanced security.

But what was missing from this already robust setup? Support for Hubble. That's about to change. DigitalOcean recently announced a significant update to its Kubernetes offering, and we had the opportunity to catch up with them to learn more about it.

## Interview with DigitalOcean: Elevating Kubernetes Observability with Hubble

_**Q**: DigitalOcean Kubernetes has been a game-changer since its launch in 2018. Can you tell us more about its journey and what sets it apart in the Kubernetes ecosystem?_

**A**: DigitalOcean Kubernetes, or DOKS, has indeed made waves since its inception. Designed with developers, startups, and digital businesses in mind, DOKS stands out for its user-friendly nature, cost-effectiveness, and seamless management. It strikes the perfect balance between flexibility and affordability, making it an ideal choice for businesses of all sizes.

_**Q**: Cilium has been instrumental in powering the data plane for DOKS. What led to this decision, and how has it been received by your customers?_

**A**: Cilium, with its advanced eBPF technology and now the de-facto cloud native networking solution, has been a cornerstone of our Kubernetes infrastructure. Our customers have loved its robust networking and security features, which are key in the ever-evolving landscape of Kubernetes environments. The decision to integrate Cilium was driven by our commitment to providing a reliable and secure platform for our users, and it was incredibly well-received.

_**Q**: Operational visibility is crucial in Kubernetes environments. How does the integration of Hubble enhance this for DigitalOcean customers?_

**A**: Since cloud native environments can be so dynamic, operational visibility has always been a top priority for us. By enabling Hubble by default for all clusters starting January 2024, we're empowering our customers to gain deeper insights and streamline their operations effortlessly. As shown in multiple [case studies](https://www.cncf.io/case-studies/?_sft_lf-project=cilium) from the CNCF, Hubble is a real hidden gem for both developers and operations teams for the network observability it provides to troubleshoot and debug often difficult to diagnose network issues. The simplicity of installation and the assurance that all observability data stays within their DOKS cluster have been key highlights of this integration.

_**Q**: Can you walk us through how users can leverage Hubble within their DOKS clusters?_

**A**: Absolutely. The integration is designed with ease of use in mind. Once the Cilium and Hubble CLIs are installed and the kubeconfig is configured for the DOKS cluster, users can seamlessly access both the Hubble UI and CLI without any additional configuration. This emphasis on simplicity and efficiency aligns perfectly with our commitment to providing a frictionless experience for our users. You can also refer to this quick [video walkthrough](https://www.youtube.com/watch?v=xUE6hKtqhrM).

_**Q**: Where can users find more information about utilizing Cilium and Hubble with their DOKS clusters?_

**A**: For detailed instructions and additional information, we encourage users to visit our [documentation](https://docs.digitalocean.com/products/kubernetes/how-to/use-cilium-hubble/). Additionally, they can stay updated on platform enhancements by following our [announcement blog](https://www.digitalocean.com/blog/cillium-hubble-on-digitalocean-kubernetes). We're committed to providing comprehensive support and resources to ensure our users make the most out of their DOKS experience.

_**Q**: Lastly, for those interested in learning more about DigitalOcean's journey with Cilium, where can they find more information?_

**A**: We delivered a session at eBPF Summit, where we shared insights into our journey using Cilium to offer a Kubernetes platform to our customers. The session provides valuable insights into our integration efforts and the benefits it brings to our users. You can watch the session recording [here](https://www.youtube.com/watch?v=xez34h7EY3A).

## Conclusion

DigitalOcean's integration of Hubble marks a significant advancement not only for its Kubernetes offering but also for the broader Cilium project. By prioritizing simplicity, efficiency, and security, DigitalOcean sets a high standard for managed Kubernetes services, showcasing the power and versatility of Cilium's technology. The addition of Hubble underscores the value of the technology in driving innovation and solving complex challenges in modern cloud environments.

Moreover, DigitalOcean's embrace of Hubble serves as a beacon of encouragement for other cloud providers. By demonstrating the benefits and practicality of this integration, DigitalOcean paves the way for wider adoption of Hubble within the industry. With any luck, this move will inspire other providers to follow suit, fostering a more interconnected, observable, and secure cloud native ecosystem for all users.
