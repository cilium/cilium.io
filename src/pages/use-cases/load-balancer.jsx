import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import UseCaseCard from 'components/pages/use-cases/cards/use-case-card';
import IntroSection from 'components/pages/use-cases/intro-section';
import PageTitle from 'components/pages/use-cases/page-title';
import VideoFeatureSection from 'components/pages/use-cases/video-feature-section';
import SeznamLogo from 'icons/logo-seznam.inline.svg';
import YahooLogo from 'icons/logo-yahoo.inline.svg';
import DetectiveBeeImage from 'images/pages/usecase/detective-bee.png';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'Layer 4 Load Balancer',
  category: 'Networking',
  tagline: 'High performance load balancing with low overhead',
  subHeading: 'How can I implement efficient L4 load balancing with low overhead and cost?',
  description:
    'Configuring and managing load balancing into your cluster can be challenging due to the complexity involved in setting up connectivity and synchronization between the clusters and the outside world. Traditional hardware load balancers can be very costly while software load balancers may not provide the performance you need. External-to-Pod (North-South) LB also typically requires additional tooling, adding more complexity, cost, and overhead. ',
  imageSrc: DetectiveBeeImage,
  imageAlt: 'Electrician Bee',
};

const sectionContent1 = {
  title: 'XDP and eBPF powered scalable Load Balancing and Ingress',
  description:
    "Cilium can attract traffic with BGP and accelerate it leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing. Cilium and eBPF operate at the kernel layer. With this level of context intelligent decisions can be made about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance. Cilium's standalone load balancer offers a high-performance LB, providing huge throughput gains at a reduced CPU overhead.",
  videoSrc: 'https://www.youtube.com/embed/OIyPm6K4ooY',
  whiteBackground: true,
};

const sectionContent2 = {
  title: 'Cilium Standalone Layer 4 Load Balancer XDP',
  description:
    "Cilium's high performance, robust load balancing implementation is tuned for the scale and churn of cloud native environments. You can replace expensive legacy boxes in your network with Cilium as a standalone load balancer. This unlocks the potential of DSR and Maglev for handling north/south traffic in on-premises environments without requiring Kubernetes to manage the network border.",
  videoSrc: 'https://www.youtube.com/embed/xwjZF3alO7g',
};

const testimonials = [
  {
    logo: <SeznamLogo />,
    title:
      'Efficiently handling production traffic with Cilium Standalone Layer 4 Load Balancer XDP',
    CTAtext: 'Read The Blog Post',
    url: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
    description:
      'Seznam previously used a multiple tier setup - ECMP routing as the first tier + IPVS as the second tier (L4 load balancer (L4LB)) + Envoy proxy as the third tier (L7 load balancer). They experienced increased traffic during COVID and needed a way to utilize hardware efficiently. Using  L4LB XDP consumed only half of a single CPU compared to 2x18 CPUs when IPVS was handling the traffic. By switching to L4LB XDP at the driver layer, Seznam was able to save 36 CPUs while doubling throughput.',
  },
  {
    title: 'Software L4 Load Balancing for Kubernetes Services at Yahoo',
    logo: <YahooLogo />,
    CTAtext: 'Watch the Talk',
    url: 'https://www.youtube.com/watch?v=-C86fBMcp5Q',
    description:
      'Yahoo needed a way to solve LB APIs not being optimized for dynamic updates, the absence of autoscaling, and a severe performance degradation with large number of cluster services. Switching to Cilium L4 LB powered by XDP provided Yahoo with performance on par with hardware LBs, ability to hook into Kubernetes to dynamically configure backends, support for direct return mode, high availability, and resiliency through Maglev consistent hashing.',
  },
];

const KubeProxyReplacementPage = () => {
  const pageTitle = introContent.title;
  return (
    <>
      <PageTitle title={pageTitle} />
      <MainLayout>
        <section className="bg-[#F6F7F8]">
          <IntroSection {...introContent} />
          <VideoFeatureSection {...sectionContent1} />
          <VideoFeatureSection {...sectionContent2} />
          <UseCaseCard
            heading="Who’s using Cilium for Layer 4 Load Balancing?"
            testimonials={testimonials}
          />
          <JoinUsCard />
        </section>
      </MainLayout>
    </>
  );
};

export default KubeProxyReplacementPage;
