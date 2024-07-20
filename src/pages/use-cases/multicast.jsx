import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import SEO from 'components/shared/seo';
import CiliumLogo from 'icons/logo-cilium.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';
import CaptaineBee from 'images/pages/usecase/captain-bee.png';
import MulticastImage1 from 'images/pages/usecase/multicast-1.webp';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'Multicast',
  category: 'Networking',
  tagline: 'eBPF-Powered Efficiency for Multicast in Kubernetes',
  subHeading: 'Smarter Network Utilization',
  description:
    'Multicast addresses the technical challenge of efficiently delivering data from a single source to multiple recipients simultaneously over a network. Multicast has found its use case in traditional networking, but Kubernetes networking often relies on unicast and broadcast methods. In data transmission to containers within a Kubernetes cluster, packets are replicated and sent to every container regardless of their need. This approach might not be ideal for some applications with specific requirements and can lead to significant network congestion, high bandwidth, and overhead.',
  imageSrc: CaptaineBee,
  imageAlt: 'Travel Bee',
  imageWidth: 350,
  imageHeight: 350,
};

const sectionContent1 = {
  title: 'Muticast the Cloud Native Way',
  description:
    "Cilium's multicast feature enables efficient network communication. By leveraging multicast, Cilium can efficiently transmit and replicate a single data stream to reach multiple consumer containers in a Kubernetes cluster, reducing the overall network bandwidth and overhead. This approach is particularly beneficial for industries like financial services, media, and entertainment, which typically have multiple services and endpoints that need to communicate simultaneously.",
  imageSrc: MulticastImage1,
  imageWidth: 624,
  imageHeight: 509,
  imageAlt: 'multi-cluster illustration',
};

const sectionContent2 = {
  title: 'Effortless Integration of Existing Network Infrastructure',
  description:
    "Cilium's BGP support is designed to be simple and easy to integrate with your existing networking infrastructure. Wherever your application is running, Cilium can ensure efficient BGP routing for all your workloads. Many network infrastructures already use BGP for routing. By leveraging BGP, Cilium can  seamlessly integrate with existing infrastructure, allowing Kubernetes pods to communicate with other parts of the network.",
  videoSrc: 'https://www.youtube.com/embed/Nzh2jc6qW6Y',
};

const testimonials = [
  {
    logo: TripLogo,
    title: "Trip.com's Hybrid Cloud Approach with Cilium for Workload Routing",
    CTAtext: 'Read The Blog Post',
    url: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
    description:
      'Trip.com chose a topology based on where workloads run. Bare-metal on-premises workloads use Direct routing via BGP using BIRD, while AWS workloads use AWS ENI routing mode via Cilium AWS ENI support. This topology provides native routing architecture in both the bare-metal and AWS environments with all its performance benefits. In addition, it provides a universal Kubernetes services and Network Policy model across all environments to minimize the differences between the bare-metal and cloud environments.',
  },
  {
    title: 'Leveraging Cilium’s BGP in Private Data Centers',
    logo: CiliumLogo,
    CTAtext: 'Watch The Talk',
    url: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
    description:
      "We run all our Kubernetes nodes as routers that advertises Kubernetes pods IP's to our data center network. We run our nodes with 4 network interfaces in 2 pairs (ECMP). 1 pair for frontend application traffic, 1 pair for backend replication/data traffic. This provides us with flexibility, scalability, redundancy and global routable pod IPs.",
    quote: true,
    person: 'Karsten Nielsen - Senior Systems Engineer, Ikea Retail',
  },
];

const BGPPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <UseCaseCard heading="Who’s using Cilium’s BGP ?" testimonials={testimonials} />
    <JoinUsCard />
  </MainLayout>
);

export default BGPPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.title,
    description: heroContent.tagline,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
