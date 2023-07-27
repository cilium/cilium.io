import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import IntroSection from 'components/pages/use-cases/intro-section';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import IsovalentLogo from 'icons/logo-isovalent.inline.svg';
import BandWidthImage1 from 'images/pages/usecase/bandwidth-1.png';
import BandWidthImage2 from 'images/pages/usecase/bandwidth-2.webp';
import BandWidthImage3 from 'images/pages/usecase/bandwidth-3.png';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'Bandwidth and Latency Optimization  ',
  category: 'Networking',
  tagline: 'Simple and intuitive network performance optimization',
  subHeading:
    'Offering Latency and throughput improvements while controlling pod network contention',
  description:
    "Kubernetes lacks native traffic control capabilities, making Traffic Rate-Limiting essential for optimal resource consumption and to prevent bandwidth exhaustion. While Kubernetes does offer Bandwidth Rate-Limiting, it is still experimental and can have detrimental effects on latency. Furthermore, connecting to external-facing Kubernetes clusters may result in a poor user experience due to most TCP congestion protocols not being designed for today's diverse networks.",
  imageSrc: BandWidthImage1,
  imageAlt: 'bandwidth illustration',
};

const sectionContent1 = {
  title: 'Optimal Bandwidth Management with Cilium’s Bandwidth Manager',
  description:
    'Cilium’s Bandwidth Manager allows rate-limiting per Pod with just one line of YAML. Compared to other alternatives, the Bandwidth Manager provides a 4x reduction in latency, ensuring a smooth network experience and isn’t detrimental to performances and is designed for multi-queue and multi-core NICs. ',
  imageSrc: BandWidthImage2,
  imageAlt: 'Cilium bandwidth manager illustration',
};

const sectionContent2 = {
  title: 'Accelerate network performance with Cilium BBR',
  description:
    'Cilium supports BBR, a congestion control algorithm developed by Google, making it the first platform to do so. Google observed up to 2,700x improvement in throughput when testing BBR, making it a valuable addition for optimizing network performance. Cilium’s BBR provides exceptional improvements in throughput and latency for external-facing applications, offering consumers a delightful user experience',
  imageSrc: BandWidthImage3,
  imageAlt: 'Cilium bandwidth manager illustration',
  whiteBackground: true,
  imageRight: false,
};

const sectionContent3 = {
  title: '100Gbit/S Clusters With Cilium: Building Tomorrows Networking',
  description:
    "Cilium BIG TCP allows for larger packets than the traditional 64KB limit by leveraging IPv6's Hop-by-Hop header, which can specify payload lengths up to 512KB. This is particularly useful for organizations building networks capable of 100Gbps and beyond. BIG TCP does not require modifying the MTU on network devices, making it easier to implement than Jumbo Frames. With BIG TCP, Cilium offers enhanced network performance for nodes, enabling users to extract as much performance as possible from the network.",
  videoSrc: 'https://www.youtube.com/embed/Kvdh78TURck',
};

const testimonials = [
  {
    logo: IsovalentLogo,
    title: 'BIG Performances with BIG TCP on Cilium',
    CTAtext: 'Read The Blog Post',
    url: 'https://isovalent.com/blog/post/big-tcp-on-cilium/',
    description:
      'Many of the organizations adopting Cilium – cloud providers, financial institutions and telecommunications providers – all have something in common: they all want to extract as much performance from the network as possible and they are constantly looking out for marginal performance gains.',
  },
];

const BandwidthLatencyPage = () => (
  <MainLayout>
    <IntroSection {...introContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <FeatureSection {...sectionContent3} />
    <UseCaseCard heading="Learn More About Cilium’s Big TCP Feature" testimonials={testimonials} />
    <JoinUsCard />
  </MainLayout>
);

export default BandwidthLatencyPage;

export const Head = () => <title>{introContent.title}</title>;
