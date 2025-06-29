import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import SEO from 'components/shared/seo';
import DBSchenkerLogo from 'images/pages/usecase/dbschenker.inline.svg';
import NYTimesLogo from 'images/pages/usecase/nyt.inline.svg';
import RocheLogo from 'images/pages/usecase/roche.inline.svg';
import ServiceMeshImage1 from 'images/pages/usecase/servicemesh-1.png';
import SicrediLogo from 'images/pages/usecase/sicredi.inline.svg';
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
  imageWidth: 624,
  imageHeight: 318,
  imageAlt: 'eBPF powered service mesh illustration',
  imageRight: false,
};

const sectionContent3 = {
  title: 'Control Plane Options',
  description:
    'Cilium Service Mesh gives users the choice of control plane options for the ideal balance of complexity and richness, from simpler options such as Ingress and Gateway API to richer options with Istio, to the full power of Envoy via the Envoy CRD.',
  videoSrc: 'https://www.youtube.com/embed/mpwTkm53YTY',
};

const sectionContent4 = {
  title: 'Sidecar-free Option',
  description:
    'With Cilium Service Mesh, users now have the choice to run a service mesh with sidecars or without them, based on their specific requirements and constraints. This flexibility reduces the complexity and overhead impact of sidecars.',
  videoSrc: 'https://www.youtube.com/embed/WhVyZZ_QkVA',
  imageRight: false,
};

const sectionContent5 = {
  title: 'Hands-On: eCHO Playlist',
  videoSrc:
    'https://www.youtube.com/embed/videoseries?si=quRWHYILz6cH2kmO&amp;list=PLDg_GiBbAx-l5U7CdEHtg1DJL2kkOlPTE',
  description:
    'Whether you’re bootstrapping a service mesh from the ground up or adopting Cilium’s eBPF-powered service mesh later in your service mesh journey, the eCHO Recaps: Cilium Service Mesh playlist shows the entire timeline starting from the first demo and hands-on commands. Follow each episode as to see how service mesh includes ingress and Gateway API traffic management, all on real clusters with CLI walk throughs you can replay on-demand.',
};

const testimonials = [
  {
    logo: RocheLogo,
    title: 'How Roche Manages Network Connectivity for 1000+ Edge Clusters',
    CTAs: [
      {
        CTAtext: 'Watch The Talk',
        url: 'https://www.youtube.com/watch?v=vKgRf4OzTIE',
      },
    ],
    description:
      "The Roche team utilized Cilium's service mesh as a solution for managing network connectivity across their edge clusters. Cilium enabled them to have more fine-grained traffic control, and simplified the operations and configuration of network policies using a GitOps approach, alongside the deployment of workloads.",
  },
  {
    logo: SicrediLogo,
    title: 'Strengthening Security Across Distributed Kubernetes Clusters',
    CTAs: [
      {
        CTAtext: 'Watch The Talk',
        url: 'https://youtu.be/MSqI-gBiCrc?si=ktIHXkxhuHpuwC6a',
      },
    ],
    description:
      "We started using Cilium in our EKS clusters and encountered security challenges. So many microservices were running without any kind of authentication or encryption. This prompted us to start doing a service mesh proof of concept. Although we already had Cilium available, we also evaluated Consul Connect, Kong Mesh, and Istio. Cilium stood out as it did not require sidecars, appealing to us not only for resource savings but also to avoid potential load issues caused by additional software. Cilium's sidecar-less approach did call our attention, leading us to adopt it to provide security across all our microservices.",
    quote: true,
    person: 'Matheus Morais - IT Infrastructure Analyst, Sicredi',
  },
  {
    logo: NYTimesLogo,
    title: 'Revolutionizing Mesh Layers: Transitioning from Istio to Cilium at the New York Times',
    CTAs: [
      {
        CTAtext: 'Watch The Talk',
        url: 'https://www.youtube.com/watch?v=rfImX3V711Q',
      },
    ],
    description:
      "The New York Times migrated from Istio to Cilium service mesh to simplify their multi-tenant Kubernetes clusters on Amazon EKS. Cilium's service mesh capabilities reduced management complexity, improved manageability with a smaller footprint, and offered a more user-friendly experience for defining network policies. This shift streamlined network operations and enhanced security for their cloud-native applications.",
  },

  {
    logo: DBSchenkerLogo,
    title: 'Simplifying Service Mesh with Encryption from Cilium',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/db-schenker/',
      },
    ],
    description:
      'DB Schenker adopted Cilium for its eBPF-based networking capabilities. Replacing their service mesh with WireGuard for encryption simplified the service mesh architecture while enhancing security.',
  },
];

const ServiceMeshPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <FeatureSection {...sectionContent3} />
    <FeatureSection {...sectionContent4} />
    <FeatureSection {...sectionContent5} />
    <UseCaseCard heading="Who’s using Cilium's Service Mesh" testimonials={testimonials} />
    <JoinUsCard className="pt-10 md:pt-20 lg:pt-28" />
  </MainLayout>
);

export default ServiceMeshPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.title,
    description: heroContent.tagline,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
