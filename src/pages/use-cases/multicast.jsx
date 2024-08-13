import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import SEO from 'components/shared/seo';
import CaptaineBee from 'images/pages/usecase/captain-bee.png';
import MulticastImage1 from 'images/pages/usecase/multicast-1.webp';
import MulticastImage2 from 'images/pages/usecase/multicast-2.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'Multicast',
  category: 'Networking',
  tagline: 'eBPF-Powered Efficiency for Multicast in Kubernetes',
  subHeading: 'Smarter Network Utilization',
  description:
    'IP multicast is a bandwidth-conserving technology that reduces traffic by simultaneously delivering a single stream of information to potentially thousands of recipients. Multicast addresses the technical challenge of efficiently delivering data from a single source to multiple recipients simultaneously over a network. Multicast has found its use case in traditional networking, but Kubernetes networking often relies on unicast and broadcast methods.<br /><br />In data transmission to containers within a Kubernetes cluster, packets are replicated and sent to every container regardless of their need. This approach might not be ideal for some applications with specific requirements and can lead to significant network congestion, high bandwidth, and overhead.',
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
  title: 'Bringing the eBPF Revolution to Multicast',
  description:
    "Cilium's multicast implementation is not just efficient, it's also technically advanced. It's based on eBPF, a technology known for its exceptional efficiency and performance. By leveraging eBPF, Cilium ensures that the same level of optimization is brought to multicast as it does to a variety of other networking use cases. ",
  imageSrc: MulticastImage2,
  imageWidth: 624,
  imageHeight: 509,
  imageRight: false,
  imageAlt: 'multi-cast ebee',
};

const BGPPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <JoinUsCard className="pt-10" />
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
