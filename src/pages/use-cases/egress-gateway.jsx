import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import UseCaseCard from 'components/pages/use-cases/cards/use-case-card';
import ImageFeatureSection from 'components/pages/use-cases/image-feature-section';
import IntroSection from 'components/pages/use-cases/intro-section';
import VideoFeatureSection from 'components/pages/use-cases/video-feature-section';
import CiliumLogo from 'icons/logo-cilium.inline.svg';
import BeeKeeperBee from 'images/pages/usecase/beekeeper-bee.png';
import EgressImage1 from 'images/pages/usecase/egress-1.webp';
import EgressImage2 from 'images/pages/usecase/egress-2.gif';
import EgressImage3 from 'images/pages/usecase/egress-3.png';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'Egress Gateway',
  category: 'Networking',
  tagline: 'Enhancing network security and traffic control exiting Kubernetes environments',
  subHeading: 'Integrating Unpredictable IPs',
  description:
    'Pods typically have ever-changing IP addresses in Kubernetes environments. Even if masquerading is used to mitigate this, the IP addresses of nodes can also change frequently. Egress gateways provide a way to route all outbound traffic from certain pods through a specific node with a predictable IP address. This predictable IP can be useful for scenarios where the traffic destination requires a known source IP, for instance, when working with legacy systems or firewall rules.',
  imageSrc: BeeKeeperBee,
  imageAlt: 'Astronaut Bee',
};

const sectionContent1 = {
  title: 'Harness the Power of Egress Gateway with Cilium',
  description:
    'Egress Gateway with Cilium fundamentally transforms Kubernetes networking by addressing dynamic IP challenges, ensuring seamless integration with legacy systems and enhancing network security. It provides precise control over traffic routing, enabling selective direction of pod traffic through stable, predictable IP addresses. This feature enables granular traffic management, effective monitoring and filtering, and workload-specific routing, all while facilitating interoperability with systems requiring known source IPs. ',
  videoSrc: 'https://www.youtube.com/embed/zEQdgNGa7bg',
};

const sectionContent2 = {
  title: 'Selective Traffic Control',
  description:
    "The egress gateway allows fine-grained control over which pods' traffic should be routed through the gateway node. This is done by applying egress gateway policies that use label selectors to target specific pods. This selective routing can help in implementing security policies, achieving network isolation, and managing network costs.",
  imageSrc: EgressImage1,
  imageAlt: 'selective traffic for egress gateway illustration',
  whiteBackground: true,
  imageRight: false,
};

const sectionContent3 = {
  title: 'Workload-Specific Routing',
  description:
    'In multi-tenant Kubernetes clusters, different workloads might need to interact with different external systems that have specific network requirements. Egress gateways can help meet these requirements by allowing the configuration of workload-specific routing rules.',
  imageSrc: EgressImage3,
  imageAlt: 'workload routing with egress gateway illustration',
};

const testimonials = [
  {
    logo: <CiliumLogo />,
    title: 'Zero Trust Networking at Scale (20k+ VCPUs, 100+ Dev Teams)',
    CTAtext: 'Read The Blog Post',
    url: 'https://cilium.io/blog/2023/05/04/telecommunications-user-story/',
    description:
      "A telecommunications company implemented a zero-trust networking model on their Kubernetes platform using Cilium's egress gateway. They employed FQDN-based rulesets for flexible blocklisting and a default deny egress policy. To comply with corporate policy, they used a PR-based approval workflow for tenant self-service, underpinned by a two-tier system of CiliumNetworkPolicies (CNPs) and Custom Resource Definitions (CRDs).",
  },
];

const ClusterMeshPage = () => (
  <MainLayout>
    <section className="bg-[#F6F7F8]">
      <IntroSection {...introContent} />
      <VideoFeatureSection {...sectionContent1} />
      <ImageFeatureSection {...sectionContent2} />
      <ImageFeatureSection {...sectionContent3} />
      <UseCaseCard heading="Who’s using Cilium’s  Egress Gateway?" testimonials={testimonials} />
      <JoinUsCard />
    </section>
  </MainLayout>
);

export default ClusterMeshPage;
