import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import ServiceMeshImage1 from 'images/pages/usecase/servicemesh-1.webp';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'Cilium Service Mesh',
  category: 'Networking',
  tagline: 'Revolutionizing networking and simplify operations',
  subHeading: 'Performance Meets Simplicity',
  description:
    'Traditional service meshes, despite their benefits, can present significant challenges. These include the complexity and error-prone nature of IP and port-based network policies, performance overhead due to their proxy-based architecture, limited granularity in visibility of service-to-service communication, interoperability issues with existing infrastructure, scalability challenges as the number of services and traffic volumes increase, and operational and resource overhead.',
  isImage: false,
  videoSrc: 'https://www.youtube.com/embed/e10kDBEsZw4',
};

const sectionContent1 = {
  title: "Cilium's Next-Generation Service Mesh",
  description:
    'Cilium Service Mesh redefines traditional service mesh frameworks by integrating the mesh layer directly into the kernel using eBPF, thus eliminating the need for sidecar proxies. It manages connectivity at both the networking and application protocol layers, handling protocols like IP, TCP, UDP, HTTP, Kafka, gRPC, and DNS with greater efficiency.  ',
  videoSrc: 'https://www.youtube.com/embed/s-tgbD7wN3U',
};

const sectionContent2 = {
  title: 'Superior Networking with eBPF',
  description:
    'At the heart of Cilium is eBPF, a revolutionary technology built into the Linux kernel. With eBPF, Cilium delivers lightning-fast, efficient, and scalable networking. This bypasses the performance drawbacks of traditional proxies, enabling direct and efficient communication between your services.',
  imageSrc: ServiceMeshImage1,
  imageAlt: 'eBPF powered service mesh illustration',
  imageRight: false,
};

const sectionContent3 = {
  title: 'Control Plane Options',
  description:
    'Cilium Service Mesh gives users the choice of control plane options for the ideal balance of complexity and richness, from simpler options such as Ingress and Gateway API to richer options with Istio, to the full power of Envoy via the Envoy CRD.',
  videoSrc: 'https://www.youtube.com/embed/mpwTkm53YTY',
  whiteBackground: true,
};

const sectionContent4 = {
  title: 'Sidecar-free Option',
  description:
    'With Cilium Service Mesh, users now have the choice to run a service mesh with sidecars or without them, based on their specific requirements and constraints. This flexibility reduces the complexity and overhead impact of sidecars.',
  videoSrc: 'https://www.youtube.com/embed/WhVyZZ_QkVA',
  whiteBackground: true,
  imageRight: false,
};

const ServiceMeshPage = () => (
  <MainLayout>
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} className="pb-16 md:pb-16 lg:pb-16" />
    <FeatureSection {...sectionContent2} />
    <FeatureSection {...sectionContent3} className="pb-16 md:pb-16 lg:pb-16" />
    <FeatureSection {...sectionContent4} />
    <JoinUsCard />
  </MainLayout>
);

export default ServiceMeshPage;

export const Head = () => <title>{heroContent.title}</title>;
