import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import BytedanceLogo from 'icons/bytedance.inline.svg';
import MultiNetworkBee from 'images/pages/usecase/multi-network-bee.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'IPv6-Native Kubernetes Networking with Cilium',
  category: 'Networking',
  tagline: 'Cloud-native networking at IPv6 scale, powered by eBPF',
  subHeading: 'IPv6-Native Kubernetes Networking with Cilium',
  description:
    'IPv6 adoption is accelerating across modern infrastructure. Address exhaustion, large-scale cluster growth, and cloud-native connectivity are pushing platform teams toward IPv6-first designs. Cilium brings IPv6 deep into the Kubernetes datapath, enabling clusters to operate at scale without sacrificing performance, visibility, or control. Rather than treating IPv6 as a compatibility layer, Cilium integrates it directly into how traffic flows through the cluster. IPv6 unlocks massive address space, simplified routing, and long-term scalability. Cilium turns those advantages into practical outcomes for Kubernetes by combining IPv6-native networking with high-performance eBPF data paths. The result is a Kubernetes networking layer ready for the next decade of growth.',
  imageSrc: MultiNetworkBee,
  imageAlt: 'Multi network bee Bee',
  imageWidth: 350,
  imageHeight: 350,
};

const sectionContent1 = {
  title: 'IPv6 Underlay with Overlay Simplicity',
  description:
    'Operating Kubernetes across diverse infrastructure often requires abstraction from the physical network. Encapsulation modes such as VXLAN and Geneve provide that abstraction, allowing clusters to behave consistently regardless of where they run. Cilium enables these overlays to operate on top of an IPv6-only physical network. The underlay can be entirely IPv6 while pod-to-pod traffic continues to flow through a stable encapsulated datapath. This allows platform teams to modernize their networks to IPv6 without rethinking how Kubernetes connectivity is designed or operated. The result is an IPv6-native foundation with the same predictable networking model teams already trust.',
  videoSrc: 'https://www.youtube.com/embed/y0qlhiKtDGo?si=hMjwt1sCejRJJpJG',
};

const sectionContent2 = {
  title: 'IPv6-Aware Egress Control',
  description:
    'Service networking is one of the most performance-sensitive paths in Kubernetes. Legacy approaches based on iptables introduce latency, complexity, and scaling challenges, problems that become more pronounced in large IPv6 environments.
    
    Cilium delivers IPv6 service handling directly in eBPF. Load balancing, service translation, and traffic steering all happen at the kernel level without relying on iptables or kube-proxy. IPv6 traffic benefits from the same high-performance, low-latency datapath that has made Cilium a standard for large-scale clusters. This creates a clean, efficient service model for IPv6 workloads that scales naturally as clusters grow.',
  videoSrc: 'https://www.youtube.com/embed/QdNVtSlecYo?si=s7uU8e9PxBeuNkiv',
  imageRight: false,
};

const sectionContent3 = {
  title: 'A Unified IPv6 Datapath Built on eBPF',
  description:
    'IPv6 in Cilium is implemented with the same eBPF-based datapath that powers IPv4 networking, security, and observability. This creates a unified model in which IPv4, IPv6, and dual-stack clusters share the same architecture and operational semantics. For platform teams, this means fewer special cases, simpler troubleshooting, and confidence that IPv6 workloads behave exactly as expected at scale.',
  videoSrc: 'https://www.youtube.com/embed/R7QrjZMeZhM?si=SzZmba9sL_RlRP9D',
};

const testimonials = [
  {
    logo: BytedanceLogo,
    title: "TikTok's IPv6 Journey To Cilium: Pitfalls and Lessons Learned",
    CTAs: [
      {
        CTAtext: 'Watch Talk',
        url: 'https://www.youtube.com/watch?v=y0qlhiKtDGo',
      },
    ],
    description:
      'TikTok’s global private VPC networks use a flat network topology with strict compliance controls. This means each of the five million machines and VMs in the network has a unique IP address globally. This greatly simplifies networking for the team but came with the trade-off of IPv4 address exhaustion and cluster administrators having no control over the network configuration.',
  },
];

const KubeProxyReplacementPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <FeatureSection {...sectionContent3} />
    <UseCaseCard
      heading="Who’s using Cilium's IPv6-Native Kubernetes Networking"
      testimonials={testimonials}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default KubeProxyReplacementPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.title,
    description: heroContent.tagline,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
