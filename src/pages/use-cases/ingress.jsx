import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import SEO from 'components/shared/seo';
import BountyHunterBeeImage from 'images/pages/usecase/bounty-hunter-bee.png';
import IngressImage1 from 'images/pages/usecase/ingress-1.png';
import IngressImage2 from 'images/pages/usecase/ingress-2.png';
import IngressImage3 from 'images/pages/usecase/ingress-3.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'Ingress',
  category: 'Networking',
  tagline: 'Enhancing Kubernetes Ingress With Cilium',
  subHeading: 'How can I expose my services with a protocol-aware mechanism?',
  description:
    'The Kubernetes ecosystem is rich with ingress controllers, yet they often introduce complexity and limitations. Kubernetes ingress solutions often fall short when it comes to scalability, visibility, and security in dynamic cloud native environments. Many rely on iptables or other legacy networking constructs, which can lead to inefficient resource usage, performance bottlenecks, and limited observability. Additionally, ensuring source IP visibility, seamless TLS handling, and integration with advanced network policies often requires complex workarounds or additional tools, complicating operations and increasing overhead.',
  imageSrc: BountyHunterBeeImage,
  imageAlt: 'Bounty Hunter Bee',
  imageWidth: 350,
  imageHeight: 350,
};

const sectionContent1 = {
  title: 'Flexible Load Balancer for Simplified Management',
  description:
    'Cilium Ingress introduces flexible load balancer modes, enabling you to choose between dedicated and shared configurations tailored to your needs. In shared mode, resources are conserved by utilizing a single load balancer across all ingress resources. In dedicated mode, each ingress receives an independent load balancer, preventing conflicts like overlapping path prefixes. This adaptability ensures that scaling your application architecture never compromises performance or resource efficiency.',
  videoSrc: 'https://www.youtube.com/embed/t5nP_JT8qUg',
};

const sectionContent2 = {
  title: 'Seamless Source IP Visibility',
  description:
    'Cilium Ingress ensures that backend applications retain access to the original source IP, a common pain point with other solutions. By leveraging TPROXY and the intelligent configuration of Envoy, Cilium maintains transparency in HTTP headers such as X-Forwarded-For and X-Envoy-External-Address. This seamless visibility is vital for debugging, logging, and implementing IP-based access controls without additional overhead.',
  imageSrc: IngressImage1,
};

const sectionContent3 = {
  title: 'Advanced TLS Management',
  description:
    'With support for TLS termination and passthrough, Cilium Ingress simplifies secure traffic handling. It enables multi-TLS backend sharing while dynamically routing based on SNI. This eliminates configuration complexity and ensures robust security, even in highly dynamic environments. Applications benefit from simplified setup and seamless performance.',
  imageSrc: IngressImage2,
  imageRight: false,
};

const sectionContent4 = {
  title: 'eBPF Powered Network Security',
  description:
    "Cilium embeds security directly into the network layer using eBPF. This approach allows fine-grained enforcement of CiliumNetworkPolicies for traffic entering and exiting the cluster. Traffic passes through an Envoy proxy integrated with Cilium's policy engine, enabling precise control over network behavior. This dual-layer security ensures compliance with organizational policies while protecting against advanced threats.",
  imageSrc: IngressImage3,
  imageRight: true,
};

const KubeProxyReplacementPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <FeatureSection {...sectionContent3} />
    <FeatureSection {...sectionContent4} />
    <JoinUsCard className="pt-8" />
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
