import React from 'react';

import Testimonial from 'components/pages/industries/testimonial';
import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import BytedanceLogo from 'icons/bytedance.inline.svg';
import EsnetLogo from 'icons/logo-esnet.inline.svg';
import MultiNetworkBee from 'images/pages/usecase/multi-network-bee.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'IPv6-Native Kubernetes Networking with Cilium',
  category: 'Networking',
  tagline: 'Cloud native networking at IPv6 scale, powered by eBPF',
  subHeading: 'IPv6-Native Kubernetes Networking with Cilium',
  description:
    'IPv6 adoption is accelerating across modern infrastructure. Address exhaustion, large-scale cluster growth, and cloud native connectivity are pushing platform teams toward IPv6-first designs. Cilium brings IPv6 deep into the Kubernetes datapath, enabling clusters to operate at scale without sacrificing performance, visibility, or control. Rather than treating IPv6 as a compatibility layer, Cilium integrates it directly into how traffic flows through the cluster. IPv6 unlocks massive address space, simplified routing, and long-term scalability. Cilium turns those advantages into practical outcomes for Kubernetes by combining IPv6-native networking with high-performance eBPF data paths. The result is a Kubernetes networking layer ready for the next decade of growth.',
  imageSrc: MultiNetworkBee,
  imageAlt: 'Multi network bee Bee',
  imageWidth: 350,
  imageHeight: 350,
};

const EsnetTestimonial = {
  logo: 'esnet',
  description:
    "ESnet is the US Department of Energy's sole high-performance networking facility, serving as the DOE's data circulatory system for its world-changing scientific research",
  quotedText: [
    'The recent IPv6 improvements with Cilium mean you can rely on the defaults. You no longer need to be an IPv6 or networking wizard to run IPv6-only clusters. This saved us from complex workarounds and makes it easier for us to validate that our applications work in an IPv6-only world. ',
  ],
  withPerson: true,
  name: 'Kapil Agrawal',
  role: 'Security Engineer, ESnet',
  url: 'https://www.cncf.io/case-studies/kakao/',
  CTAtext: 'Watch the talk',
};

const sectionContent1 = {
  title: 'IPv6 Underlay with Overlay Simplicity',
  description: [
    'Operating Kubernetes across diverse infrastructure often requires abstraction from the physical network. Encapsulation modes such as VXLAN and Geneve provide that abstraction, allowing clusters to behave consistently regardless of where they run.',
    'Cilium enables these overlays to operate on top of an IPv6-only physical network. The underlay can be entirely IPv6 while pod-to-pod traffic continues to flow through a stable encapsulated datapath. This allows platform teams to modernize their networks to IPv6 without rethinking how Kubernetes connectivity is designed or operated. The result is an IPv6-native foundation with the same predictable networking model teams already trust.',
  ],
  videoSrc: 'https://www.youtube.com/embed/y0qlhiKtDGo?si=hMjwt1sCejRJJpJG',
};

const sectionContent2 = {
  title: 'IPv6-Aware Egress Control',
  description: [
    'Service networking is one of the most performance-sensitive paths in Kubernetes. Legacy approaches based on iptables introduce latency, complexity, and scaling challenges, problems that become more pronounced in large IPv6 environments.',
    'Cilium delivers IPv6 service handling directly in eBPF. Load balancing, service translation, and traffic steering all happen at the kernel level without relying on iptables or kube-proxy. IPv6 traffic benefits from the same high-performance, low-latency datapath that has made Cilium a standard for large-scale clusters. This creates a clean, efficient service model for IPv6 workloads that scales naturally as clusters grow.',
  ],
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
      "Joseph Pallamidessi and Giri Kuncoro from TikTok's security engineering team outlined the company's two-year transition to IPv6-only Kubernetes clusters using Cilium. This shift was driven by the exhaustion of IPv4 addresses in their global flat network. Beginning with Cilium 1.12, the team encountered challenges such as agent crashes in IPv4-less environments, NDP packet drops, and DNS resolution failures due to illegal UDP checksums. Limited control over the data center network made native routing and BGP difficult, but the team achieved success with the IPv6 underlay encapsulation mode in Cilium 1.18. By late 2025, TikTok had deployed several production-ready IPv6-only clusters, demonstrating that with Cilium 1.18 and strong open-source community support, large-scale IPv6-only networking is now stable and achievable.",
  },
  {
    logo: EsnetLogo,
    title: 'IPv6 First, Not Just Ready: Kubernetes Without IPv4 Using Cilium at ESnet',
    CTAs: [
      {
        CTAtext: 'Watch Talk',
        url: 'https://www.youtube.com/watch?v=QdNVtSlecYo',
      },
    ],
    description:
      'Kapil Agrawal of ESnet describes the transition to IPv6-only Kubernetes using Cilium, prompted by federal mandates to phase out IPv4. The process required DNS64 and NAT64 for external connectivity and revealed that hardcoded IPv4 addresses in application code were a major obstacle. By using Cilium’s Multi-pool IPAM to assign unique /64 prefixes per namespace, ESnet achieved effective micro-segmentation and predictable routing without masquerading. Agrawal notes that with improvements in Cilium 1.18 and 1.19, and the use of Hubble for observability, production-ready IPv6-only networking is now achievable.',
  },
];

const KubeProxyReplacementPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <Testimonial {...EsnetTestimonial} className="mb-10 mb:my-20 lg:mb-32" />
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
