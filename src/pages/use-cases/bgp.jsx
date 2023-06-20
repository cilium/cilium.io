import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import UseCaseCard from 'components/pages/use-cases/cards/use-case-card';
import ImageFeatureSection from 'components/pages/use-cases/image-feature-section';
import IntroSection from 'components/pages/use-cases/intro-section';
import VideoFeatureSection from 'components/pages/use-cases/video-feature-section';
import CiliumLogo from 'icons/logo-cilium.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';
import BGPImage1 from 'images/pages/usecase/bgp-1.png';
import TravelBee from 'images/pages/usecase/travel-bee.png';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'BGP',
  category: 'Networking',
  tagline: 'Harness the infinite potential of Border Gateway Protocol (BGP) with Cilium',
  subHeading: 'Supercharge Your Routing Protocol',
  description:
    "Traditional IP routing can be static and inflexible, especially in cloud native environments where workloads are constantly being created, moved, and deleted. BGP's inherent ability to manage complex network topologies and routing data makes it an excellent fit for the dynamic and distributed nature of modern cloud native environments.  ",
  imageSrc: TravelBee,
  imageAlt: 'Travel Bee',
};

const sectionContent1 = {
  title: 'Elevate your Networking Infrastructure with Cilium’s BGP',
  description:
    "Cilium amplifies the power of BGP - the backbone of the internet - to bring you high-speed, scalable, and secure routing for your cloud environments. Seamlessly integrating with existing infrastructure, Cilium's BGP is perfect for a range of deployments, from hybrid to multi cloud to edge. With advanced traffic engineering features, you'll have granular control over your network traffic, optimizing your network's performance and security.",
  imageSrc: BGPImage1,
  imageAlt: 'multi-cluster illustration',
};

const sectionContent2 = {
  title: 'Effortless Integration of Existing Network Infrastructure',
  description:
    "Cilium's BGP support is designed to be simple and easy to integrate with your existing networking infrastructure. Wherever your application is running, Cilium can ensure efficient BGP routing for all your workloads. Many network infrastructures already use BGP for routing. By leveraging BGP, Cilium can  seamlessly integrate with existing infrastructure, allowing Kubernetes pods to communicate with other parts of the network.",
  videoSrc: 'https://www.youtube.com/embed/Nzh2jc6qW6Y',
  whiteBackground: true,
};

const testimonials = [
  {
    logo: <TripLogo />,
    title: "Trip.com's Hybrid Cloud Approach with Cilium for Workload Routing",
    CTAtext: 'Read The Blog Post',
    url: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
    description:
      'Trip.com chose a topology based on where workloads run. Bare-metal on-premises workloads use Direct routing via BGP using BIRD, while AWS workloads use AWS ENI routing mode via Cilium AWS ENI support. This topology provides native routing architecture in both the bare-metal and AWS environments with all its performance benefits. In addition, it provides a universal Kubernetes services and Network Policy model across all environments to minimize the differences between the bare-metal and cloud environments.',
  },
  {
    title: 'Leveraging Cilium’s BGP in Private Data Centers',
    logo: <CiliumLogo />,
    CTAtext: 'Watch The Talk',
    url: 'https://clickhouse.com/blog/building-clickhouse-cloud-from-scratch-in-a-year',
    description:
      "We run all our Kubernetes nodes as routers that advertises Kubernetes pods IP's to our data center network. We run our nodes with 4 network interfaces in 2 pairs (ECMP). 1 pair for frontend application traffic, 1 pair for backend replication/data traffic. This provides us with flexibility, scalability, redundancy and global routable pod IPs.",
    quote: true,
    person: 'Karsten Nielson - Senior Systems Engineer, Ikea Retail',
  },
];

const BGPPage = () => (
  <MainLayout>
    <section className="bg-[#F6F7F8]">
      <IntroSection {...introContent} />
      <ImageFeatureSection {...sectionContent1} />
      <VideoFeatureSection {...sectionContent2} />
      <UseCaseCard heading="Who’s using Cilium’s BGP ?" testimonials={testimonials} />
      <JoinUsCard />
    </section>
  </MainLayout>
);

export default BGPPage;
