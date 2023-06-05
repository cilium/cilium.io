import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import UseCaseCard from 'components/pages/use-cases/cards/use-case-card';
import ImageFeatureSection from 'components/pages/use-cases/image-feature-section';
import IntroSection from 'components/pages/use-cases/intro-section';
import VideoFeatureSection from 'components/pages/use-cases/video-feature-section';
import BandWidthImage1 from 'images/pages/usecase/bandwidth-1.png';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'Bandwidth and Latency Optimization  ',
  category: 'Networking',
  tagline: 'Simple and intuitive network performance optimization',
  subHeading:
    'Offering latency and throughput improvements while controlling pod network contention',
  description:
    "Kubernetes lacks native traffic control capabilities, making Traffic Rate-Limiting essential for optimal resource consumption and to prevent bandwidth exhaustion. While Kubernetes does offer Bandwidth Rate-Limiting, it is still experimental and can have detrimental effects on latency. Furthermore, connecting to external-facing Kubernetes clusters may result in a poor user experience due to most TCP congestion protocols not being designed for today's diverse networks.",
  imageSrc: BandWidthImage1,
  imageAlt: 'bandwidth illustration',
};

const BandwidthLatencyPage = () => (
  <MainLayout>
    <section className="bg-[#F6F7F8]" />
    <IntroSection {...introContent} />
    <JoinUsCard />
  </MainLayout>
);

export default BandwidthLatencyPage;
