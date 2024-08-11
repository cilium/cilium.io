import React from 'react';

import BulletSection from 'components/pages/industries/bullet-section';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import Testimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import CloudImage1 from 'images/pages/industries/cloud-providers/cloud-1.png';
import CloudImage2 from 'images/pages/industries/cloud-providers/cloud-2.png';
import RouterBee from 'images/pages/industries/edge-computing/router-bee.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'Edge Computing',
  texts: [
    'Edge computing is transforming how businesses deploy and manage applications across distributed environments. As workloads move closer to data sources and end-users, Cilium emerges as the ideal networking solution to address the unique challenges of edge infrastructures.',
    'In the race to bring computing power closer to data sources and users, edge deployments face security, observability, and network efficiency challenges across distributed environments. By leveraging the power of eBPF, Cilium tackles these hurdles head-on, providing a unified networking solution that secures edge infrastructures, delivers deep visibility, and optimizes performance—even in resource-constrained environments. ',
  ],
  imageSrc: RouterBee,
  imageAlt: 'router bee',
};

const kubeEdgeTestimonial = {
  logo: 'kubeedge',
  description:
    'KubeEdge is an open source system for extending native containerized application orchestration capabilities to hosts at Edge.',
  quotedText:
    'Enabling Cilium allows us to take advantage its benefits in edge computing environments. We can deploy the application containers where is EdgeCore running and bind Cilium to connect with workloads in the cloud infrastructure. This is because Cilium can also enable WireGuard VPN with transparent encryption of traffic between Cilium-managed endpoints. We can also rely on Cilium Tetragon Security Observability and Runtime Enforcement to confine security risk and vulnerability in edge environment.',
  withPerson: true,
  name: 'Tomoya Fujita',
  role: 'Software Engineer, KubeEgde',
  url: 'https://kubeedge.io/blog/enable-cilium/',
};

const bulletSection1 = {
  heading: 'Deep Visibility for Edge Operations',
  paragraphs: [
    "Cilium revolutionizes observability in complex edge environments where traditional monitoring tools fall short. By leveraging Hubble for real-time network flow analysis and Tetragon for security event monitoring, Cilium provides unprecedented security and visibility across distributed edge topologies. Cilium's seamless integration with SIEM and monitoring platforms allows organizations to maintain consistency in their security and observability practices from cloud to edge. ",
    'With Cilium, operators gain deep, actionable insights into their edge infrastructure, empowering them to quickly identify, troubleshoot, and resolve issues across their entire network, thereby maintaining optimal performance and security in even the most challenging edge computing scenarios.',
  ],
  imageSrc: CloudImage1,
  imageAlt: 'cilium big tcp stats',
  imageRight: false,
};

const bulletSection2 = {
  heading: 'Optimized for Resource-Constrained Environments',
  paragraphs: [
    'Edge computing often means working with limited resources. Cilium is designed to be lightweight and efficient, leveraging cutting-edge eBPF technology to deliver unparalleled performance and efficiency in resource-constrained edge environments. Cilium is optimized for both x86 and ARM-based architectures. By implementing load balancing directly in XDP, Cilium achieves remarkable resource efficiency.',
    'With Cilium, businesses can maximize the potential of their edge infrastructure, handling more traffic with fewer resources. This efficiency translates to reduced hardware costs, improved energy consumption, and the ability to deploy more powerful edge applications on existing hardware.',
  ],
  imageSrc: CloudImage2,
  imageAlt: 'hetzner cilium test illustration',
};

const bulletSection3 = {
  heading: 'Seamless Connectivity  for Edge Infrastructures',
  paragraphs: [
    "Cilium's ClusterMesh feature revolutionizes edge computing by seamlessly extending Cilium's powerful networking and security capabilities across multiple clusters. It enables secure, high-performance connectivity between edge locations, data centers, and cloud resources without complex VPN setups. ClusterMesh facilitates global service discovery, unified security policies, and intelligent cross-cluster load balancing, ensuring consistent protection and optimal performance across your entire edge infrastructure.",
    'This unified approach significantly reduces operational complexity while enhancing the resilience and efficiency of distributed edge applications.',
  ],
  imageSrc: CloudImage2,
  imageAlt: 'hetzner cilium test illustration',
};

const cloudTalks = [
  {
    title: 'Which Edge Are You on? Service Affinity with Cilium Cluster Mesh',
    videoSrc: 'https://www.youtube.com/embed/Chk2PTS2Bwc',
    description:
      'Cluster Mesh allows endpoints in connected clusters to communicate while providing full security policy enforcement. This talk equips the audience with an appreciation for how eBPF can ensure you communicate right on the edge.',
  },
  {
    title: 'Connecting Klusters on the Edge with Deep Dive into Cilium Cluster Mesh',
    videoSrc: 'https://www.youtube.com/embed/UcsEVnFtrLY',
    description:
      ' This talk explores how Cluster Mesh allows endpoints in connected clusters to communicate while providing full security policy enforcement',
  },
  {
    title: 'Enabling eBPF Super Powers on ARM64 with Cilium',
    videoSrc: 'https://www.youtube.com/embed/Sk_Kn-1pWt8',
    description:
      'This talk from Jianlin Lv provides some historical into the work done to support Cilium on Arm64',
  },
];

const MediaEntertainmentPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="h-auto lg:w-[350px]" />
    <Testimonial {...kubeEdgeTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection2} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection1} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection3} className="mt-10 md:mt-20 lg:mt-32" />
    <FeaturedTalks talks={cloudTalks} />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default MediaEntertainmentPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description: 'Discover Cloud Providers use Cilium',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
