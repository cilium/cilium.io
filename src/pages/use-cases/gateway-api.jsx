import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import SEO from 'components/shared/seo';
import GatewayImage1 from 'images/pages/usecase/gateway-1.png';
import GatewayImage2 from 'images/pages/usecase/gateway-2.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'Gateway API ',
  category: 'Networking',
  tagline: 'Robust Kubernetes Ingress for traffic management',
  subHeading: 'Evolving Past Ingress',
  description:
    'Gateway API addresses the limitations of the Kubernetes Ingress API, which has traditionally been used to route traffic into Kubernetes clusters. While the Ingress API supports basic routing based on path and host rules, it lacks support for advanced routing features, only supports HTTP and HTTPS traffic, doesn’t separate out user/operator concerns, and can lead to inconsistencies due to vendor-specific annotations. Gateway API overcomes these constraints, providing a more robust, extensible, and role-oriented approach to traffic engineering.​',
  imageSrc: GatewayImage1,
  imageAlt: 'cilium gateway api illustration',
};

const sectionContent1 = {
  title: 'Advanced Routing and Protocol Support',
  description:
    'Cilium’s Gateway API implementation provides a fully conformant implementation of Kubernetes Ingress and offers advanced routing capabilities that go beyond the limitations of the Ingress API. It supports features such as traffic splitting, header modification, and URL rewriting. Additionally, it extends beyond HTTP and HTTPS traffic, with support of other protocols such as TCP, UDP, and gRPC. This allows for a more flexible and sophisticated routing strategies.',
  videoSrc: 'https://www.youtube.com/embed/dqyBoqJYveQ',
};

const sectionContent2 = {
  title: 'Role-Oriented and Extensible',
  description:
    'Cilium’s Gateway API implementation was designed with different operational roles in mind, such as Infrastructure Providers, Cluster Operators, and Application Developers. By decomposing the Ingress API into several Gateway API objects, different personas can be assigned the appropriate access and privileges according to their responsibilities. This means that, for example, application developers would be allowed to create Route objects in a specified namespace, but would not be able to modify the Gateway configuration or edit Route objects in other namespaces.​',
  imageSrc: GatewayImage2,
  imageWidth: 624,
  imageHeight: 464,
  imageAlt: 'cilium gateway API TLS termination illustration',
  imageRight: false,
};

const sectionContent3 = {
  title: 'Reducing Tool Sprawl',
  description:
    'Cilium aims to simplify operations by reducing the number of cloud native networking, observability, and security tools required. It natively supports not just the Gateway API but also features like a sidecar-less Service Mesh, Transparent Encryption, Network Policies, and built-in observability with Hubble. This approach makes life easier for cluster operators, who only need a single tool to manage and upgrade for many, if not all, of their Kubernetes networking needs​​.',
  videoSrc: 'https://www.youtube.com/embed/48ej2qIP92Y',
};

const GatewayAPIPage = () => (
  <MainLayout>
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <FeatureSection {...sectionContent3} />
    <JoinUsCard className="pt-10 md:pt-20 lg:pt-28" />
  </MainLayout>
);

export default GatewayAPIPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.title,
    description: heroContent.tagline,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
