import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import ImageFeatureSection from 'components/pages/use-cases/image-feature-section';
import IntroSection from 'components/pages/use-cases/intro-section';
import VideoFeatureSection from 'components/pages/use-cases/video-feature-section';
import GatewayImage1 from 'images/pages/usecase/gateway-1.webp';
import GatewayImage2 from 'images/pages/usecase/gateway-2.png';
import MainLayout from 'layouts/main/main';

const introContent = {
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
  imageAlt: 'cilium gateway API TLS termination illustration',
  whiteBackground: true,
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
    <section className="bg-[#F6F7F8]">
      <IntroSection {...introContent} />
      <VideoFeatureSection {...sectionContent1} />
      <ImageFeatureSection {...sectionContent2} />
      <VideoFeatureSection {...sectionContent3} />
      <JoinUsCard />
    </section>
  </MainLayout>
);

export default GatewayAPIPage;
