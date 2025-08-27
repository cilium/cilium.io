import React from 'react';

import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase';
import Testimonial from 'components/pages/industries/testimonial';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import Community from 'components/shared/community';
import Heading from 'components/shared/heading';
import SEO from 'components/shared/seo';
import DigitalOceanLogo from 'icons/digitalocean.inline.svg';
import MeltwaterLogo from 'icons/logo-meltwater.inline.svg';
import SysElevenLogo from 'icons/syseleven.inline.svg';
import ToolBee from 'images/pages/outcomes/tool-consolidation/tool-bee.png';
import ToolImage1 from 'images/pages/outcomes/tool-consolidation/tool-image-1.png';
import ToolImage2 from 'images/pages/outcomes/tool-consolidation/tool-image-2.webp';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'Tool Consolidation',
  tagline: 'Simplify your networking stack without sacrificing visibility or control',
  texts: [
    'As cloud native environments grow in complexity, teams often rely on a patchwork of tools for networking, observability, and security, each with its own learning curve, performance trade-offs, and integration overhead. Cilium replaces this fragmented tooling with a unified platform built on eBPF that provides connectivity, security, and deep visibility all in one.',
  ],
  imageSrc: ToolBee,
  imageAlt: 'tool bee',
};

const DigitalOceanTestimonial = {
  logo: 'digitalocean',
  description:
    'DigitalOcean is a cloud service provider with a target market of small to medium-sized businesses, developers, and startups.',
  quotedText: [
    'Cilium brings a lot of network features that we could not offer otherwise because they’re complicated to develop. It enables a more intelligent network than just having a flat layer three for your Kubernetes clusters. Additionally, aspects of network management, such as IPAM, have become much easier with Cilium.',
  ],
  withPerson: true,
  name: 'Ingo Gottwald',
  role: 'Senior Engineer, DigitalOcean',
  url: 'https://www.cncf.io/case-studies/digitalocean/',
  CTAtext: 'Read The Case Study',
};

const MeltwaterTestimonial = {
  logo: 'meltwater',
  description:
    'Meltwater is a global media intelligence company that specializes in providing businesses with real-time insights and analytics. They offer a comprehensive suite of software tools and services to help organizations monitor and analyze online news, social media, and other digital sources. ',
  quotedText: [
    'Cilium makes our situation a lot more stable, but, more importantly, it opens doors to many features. By removing things like kube-proxy and nginx, Cilium helped us centralize and move functionality within the CNI without having to run anything extra. Removing these results in fewer pieces to manage and reduces our costs.',
  ],
  withPerson: true,
  name: 'Simone Sciarrati',
  role: 'Principal Engineer, Meltwater',
  url: 'https://www.cncf.io/case-studies/meltwater/',
  CTAtext: 'Read The Case Study',
};

const sectionContent1 = {
  heading: 'Replacing a patchwork of tools with Cilium',
  paragraphs: [
    'Managing and integrating multiple tools for service mesh, firewalling, load balancing, ingress, observability, and policy enforcement slows teams down. Cilium helps teams consolidate without compromise with one tool for managing network traffic, service discovery, API-aware security, and real-time network visibility. This reduces operational costs, accelerates onboarding, and improves performance, while maintaining full control.',
  ],
  imageSrc: ToolImage1,
  imageAlt: 'cilium as a replacement for other tools',
  imageRight: true,
};

const sectionContent2 = {
  heading: 'Consolidating your networking stack',
  paragraphs: [
    'With Cilium, you get high-performance networking, API-aware security, and deep observability in a single tool powered by eBPF. It removes the need for standalone network plugins, sidecar-based service meshes, and third-party observability layers, while integrating natively with Kubernetes.',
  ],
  videoSrc: 'https://www.youtube.com/embed/bIRwSIwNHC0',
  imageRight: true,
};

const sectionContent3 = {
  heading: 'Observe traffic in real time without extra tools',
  paragraphs: [
    'Cilium’s Hubble brings powerful network visibility directly into your Kubernetes environment, surfacing flow logs, a service map, and protocol-level insights (HTTP, gRPC, Kafka, etc.) without installing separate monitoring or tracing tools.',
  ],
  videoSrc: 'https://www.youtube.com/embed/8WCbGSCyDSo',
  imageRight: false,
};

const sectionContent4 = {
  heading: 'Enforce policies at Layer 3 to Layer 7',
  paragraphs: [
    'Unlike traditional firewalls, Cilium enforces identity-aware policies tied to Kubernetes primitives and inspects traffic all the way up to Layer 7. That means you can secure microservices based on actual behavior, from DNS queries to API calls, without additional tooling. ',
  ],
  imageSrc: ToolImage2,
  imageAlt: 'l3 - l7 policy illustration',
  imageRight: true,
};

const testimonials = [
  {
    logo: DigitalOceanLogo,
    title: 'One CNI to Power Customer and Internal Infrastructure',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/sicredi',
      },
    ],
    description:
      "DigitalOcean replaced Flannel in DOKS with Cilium for better multi-tenant isolation, IPAM simplification, and observability. Cilium's robust network policies, default-deny mode, and Hubble unified security, troubleshooting, and scalability across internal and customer clusters.",
  },
  {
    title: 'Unified networking and observability for MetaKube',
    logo: SysElevenLogo,
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/syseleven/',
      },
    ],
    description:
      'SysEleven chose Cilium for its simplicity, eBPF foundation, and native Kubernetes integration. The switch updated their networking stack, including kube-proxy, doubled throughput, and enabled deep observability with Hubble.',
  },
  {
    logo: MeltwaterLogo,
    title: 'One Platform to Manage Global Scale',

    description:
      'Meltwater transitioned from AWS VPC CNI to Cilium to address IP exhaustion, restricted functionality, and poor visibility. Cilium unified networking and observability, decreasing operating costs and providing future-ready features, community support, and deep network insights without disrupting workloads.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/meltwater/',
      },
    ],
  },
];

const ToolConsolidationSolutions = [
  {
    icon: 'serviceMap',
    title: 'Hubble',
    description:
      'See exactly what’s happening in your network, which policies are active, what traffic is allowed or denied, and where potential gaps exist. ',
    buttonLink: '/use-cases/service-map',
  },
  {
    icon: 'kubeProxy',
    title: 'Kube-proxy Replacement',
    description:
      'Cilium replaces kube-proxy with an eBPF-powered dataplane, removing the need for iptables-based rules and manual configurations. This makes service routing faster, more reliable, and easier to scale, even in large or rapidly changing clusters.',
    buttonLink: '/use-cases/kube-proxy',
  },
  {
    icon: 'egressGateway',
    title: 'Gateway API',
    description:
      'Cilium’s Gateway API replaces the limitations of traditional Ingress with a powerful, extensible model for managing traffic into and within clusters. It supports advanced routing, multiple protocols, and clearly separates developer and operator roles, removing the need for third-party ingress controllers.',
    buttonLink: '/use-cases/gateway-api',
  },
  {
    icon: 'bgp',
    title: 'Border Gateway Protocol (BGP)',
    description:
      'Replace static, manual routing with dynamic, scalable control. Cilium’s BGP integration allows seamless communication across complex topologies, enabling native routing between clusters, clouds, and data centers, without external routing daemons or added tooling.',
    buttonLink: '/use-cases/kube-proxy',
  },
];

const ToolConsolidationPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="h-auto lg:w-[180px] mx-auto self-center" />
    <BulletSection {...sectionContent1} className="my- md:my-8 lg:my-12" />
    <Testimonial {...DigitalOceanTestimonial} className="my- md:my-8 lg:my-12" />
    <Heading tag="h2" className="mt-10 md:mt-20 lg:mt-32 text-center dark:text-white text-black">
      How Cilium enables Tool Consolidation
    </Heading>
    <BulletSection {...sectionContent2} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent3} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent4} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...MeltwaterTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <UseCaseCard heading="Who’s using Cilium for Tool Consolidation" testimonials={testimonials} />
    <IndustryUseCases
      heading="Cilium’s Solutions for Tool Consolidation"
      usecases={ToolConsolidationSolutions}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default ToolConsolidationPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description: 'How Cilium enables Tool Consolidation',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
