import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import IntroSection from 'components/pages/use-cases/intro-section';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import BloombergLogo from 'icons/logo-bloomberg.inline.svg';
import NewYorkTimesLogo from 'icons/logo-newyork.inline.svg';
import AuditBee from 'images/pages/usecase/audit-bee.png';
import FlowImage1 from 'images/pages/usecase/flow-1.webp';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'Identity-aware L3/L4/DNS Network Flow Logs',
  category: 'Observability',
  tagline: 'Holistic view of your network traffic',
  subHeading: 'How can you trace traffic to a specific workload in a complex environment?',
  description:
    'Traditional network flow logs often lack the necessary level of detail and context needed to monitor and troubleshoot network issues in complex environments making it difficult to trace traffic back to specific workloads. This makes debugging difficult and time-consuming and makes it challenging to identify the source and scope of security incidents.',
  imageSrc: AuditBee,
  imageAlt: 'Audit Bee',
};

const sectionContent1 = {
  title: 'Real time visibility for Network Flows',
  description:
    'By providing real-time visibility into network flows with enhanced metadata, including identity-based information about Kubernetes workloads, Cilium simplifies the process of monitoring and troubleshooting network traffic in Kubernetes clusters. This makes it easier to trace traffic back to specific workloads, simplifying the process of monitoring, troubleshooting, and addressing network issues, and enabling operators to quickly identify and respond to security incidents.  ',
  videoSrc: 'https://www.youtube.com/embed/hD2iJUyIXQw',
};

const sectionContent2 = {
  title: 'Kubernetes-aware Network Flow Logs',
  description:
    'Cilium enhances network flow logs with additional information about the identity of the Kubernetes workloads generating or receiving the traffic. This identity information is based on the Kubernetes labels and annotations assigned to the workloads, as well as any other metadata that can be retrieved from the Kubernetes API server.',
  imageSrc: FlowImage1,
  imageAlt: 'cilium metrics and tracing with grafana illustration',
  whiteBackground: true,
};

const testimonials = [
  {
    logo: NewYorkTimesLogo,
    title: 'Observability for a highly available multi cluster environment with Hubble',
    CTAtext: 'Watch The Talk',
    url: 'https://www.youtube.com/embed/9FDpMNvPrCw',
    description:
      'Perhaps the most important feature from Hubble UI is the network flow itself. If you look deeper into the  flow you’ll see full deep rich information about every single packet traversed between different services. And that’s important so that we can build understanding of how traffic is flung between services.',
    quote: true,
    person: 'Ahmed Bebars - Software engineer, The New York Times',
  },
  {
    logo: BloombergLogo,
    title: 'Building Data Sandboxes at Bloomberg',
    CTAtext: 'Watch The Talk',
    url: 'https://www.youtube.com/embed/8fiYVyISyz4',
    description:
      '“We definitely love Hubble, provides us with a lot of observability which is very helpful not only to have that application and network visibility as we’re looking into what’s happening in our client cluster but we’ve also found out that this is a really beneficial learning tool for people in our team that are new to Cilium or new to the team to able to see the network flows  to see what’s happening to trafiic as it is coming in and out of our workloads has been a really powerful way to visualize how things work together”',
    quote: true,
    person: 'Anne Zepecki & Sritej Attaluri - Bloomberg',
  },
];

const NetworkFlowLogsPage = () => (
  <MainLayout>
    <IntroSection {...introContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <UseCaseCard
      heading="Who’s using Cilium’s for Network Flow logs?"
      testimonials={testimonials}
    />
    <JoinUsCard />
  </MainLayout>
);

export default NetworkFlowLogsPage;

export const Head = () => <title>{introContent.title}</title>;
