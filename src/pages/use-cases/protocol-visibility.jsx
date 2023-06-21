import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import UseCaseCard from 'components/pages/use-cases/cards/use-case-card';
import ImageFeatureSection from 'components/pages/use-cases/image-feature-section';
import IntroSection from 'components/pages/use-cases/intro-section';
import VideoFeatureSection from 'components/pages/use-cases/video-feature-section';
import CiliumLogo from 'icons/logo-cilium.inline.svg';
import PalantirLogo from 'icons/logo-palantir.inline.svg';
import NewBee from 'images/pages/usecase/new-bee.png';
import ProtocolImage1 from 'images/pages/usecase/protocol-1.png';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'Advanced Network Protocol Visibility',
  category: 'Observability',
  tagline: 'Insights into workload communication at the protocol level',
  subHeading: 'How can I understand my workload’s communication at the protocol level?',
  description:
    'Traditional network observability tools provide packet-level visibility, which can be insufficient in cloud native and other environments with complex communication patterns and diverse application protocols. In such scenarios, troubleshooting network issues can be challenging, and gaining protocol-level visibility becomes critical to ensure observability and security.',
  imageSrc: NewBee,
  imageAlt: 'Astronaut Bee',
};

const sectionContent1 = {
  title: 'Gain deep insights into your workload communication at the protocol level with Cilium',
  description:
    "Cilium's protocol-aware visibility provides application owners with deep insights into their workload’s communications at the protocol level. This means that Cilium is capable of native understanding of various application protocols, such as TLS, gRPC, Kafka, DNS, and HTTP, and other ones like SCTP enabling fine-grained observability of API-specific endpoints and DNS-identities for external endpoints.",
  imageSrc: ProtocolImage1,
  imageAlt: 'hubble insights illustration',
  imageRight: false,
  whiteBackground: true,
};

const sectionContent2 = {
  title: 'Hubble - eBPF-based Observability for Kubernetes',
  description:
    "Hubble is an eBPF-based observability platform for Kubernetes. Hubble leverages the Cilium CNI and eBPF technology to provide fine-grained visibility into network traffic and application behaviour, without the need to modify applications. With Hubble, administrators to interactively troubleshoot complex network issues and write custom metrics to benefit from eBPF's superpowers without the need to write or understand any kernel code.",
  videoSrc: 'https://www.youtube.com/embed/8WCbGSCyDSo',
};

const testimonials = [
  {
    logo: <PalantirLogo />,
    title: 'Enhanced observability with Hubble',
    CTAtext: 'Watch The Talk',
    url: 'https://www.youtube.com/watch?v=3K5WJ_h5PhI&t=40s',
    description:
      'One area Palantir gets a lot of mileage from Cilium is observing DNS traffic. In the words of Vlad Ungureanu, a Backend Software Developer at Palantir. “With Cilium, we can get 3600 traceability of network calls associated with a Kubernetes pod. In the past, we were able to observe network flows just at the edge, now we can observe network flows at the host level.”    ',
  },
  {
    title: 'A more consumable network infrastructure with Cilium at Ikea',
    logo: <CiliumLogo />,
    CTAtext: 'Watch The Talk',
    url: 'https://clickhouse.com/blog/building-clickhouse-cloud-from-scratch-in-a-year',
    description:
      "Ikea picked Cilium for its networking stack because they had the requirement of using open source and needed a solution that was easy to scale out, debug, and integrate with legacy systems. “We wanted to get out of the classical networking challenges where you're always pointing fingers at someone else. It's the networking team to blame, or the firewall, or DNS. We wanted a more consumable networking infrastructure with a cloud-like development experience on-prem in order to unlock development teams.",
    quote: true,
    person: 'Karsten Nielsen - Senior Systems Engineer, Ikea Retail',
  },
];

const ProtocolVisibilityPage = () => (
  <MainLayout>
    <section className="bg-[#F6F7F8]">
      <IntroSection {...introContent} />
      <ImageFeatureSection {...sectionContent1} />
      <VideoFeatureSection {...sectionContent2} />
      <UseCaseCard
        heading="Who’s using Cilium’s for Advanced Network Protocol Visibility?"
        testimonials={testimonials}
      />
      <JoinUsCard />
    </section>
  </MainLayout>
);

export default ProtocolVisibilityPage;
