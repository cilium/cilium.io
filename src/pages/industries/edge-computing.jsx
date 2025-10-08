import React from 'react';

import BulletSection from 'components/pages/industries/bullet-section';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import Testimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import EdgeImage1 from 'images/pages/industries/edge-computing/edge-1.webp';
import EdgeImage2 from 'images/pages/industries/edge-computing/edge-2.webp';
import EdgeImage3 from 'images/pages/industries/edge-computing/edge-3.webp';
import RouterBee from 'images/pages/industries/edge-computing/multinetwork-bee.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'Edge Computing',
  texts: [
    'Edge computing is transforming how businesses deploy and manage applications across distributed environments. As workloads move closer to data sources and end-users, Cilium emerges as the ideal networking solution to address the unique challenges of edge infrastructures.',
    'In the race to bring computing power closer to data sources and users, edge deployments face security, observability, and network efficiency challenges. By leveraging the power of eBPF, Cilium tackles these hurdles head-on, providing a unified networking solution that secures edge infrastructures, delivers deep visibility, and optimizes performance—even in resource-constrained environments.',
  ],
  imageSrc: RouterBee,
  imageAlt: 'router bee',
};

const kubeEdgeTestimonial = {
  logo: 'kubeedge',
  description:
    'KubeEdge extends cluster orchestration capabilities down to edge environments to provide unified cluster management and sophisticated edge-specific features.',
  quotedText:
    'Enabling Cilium allows us to take advantage of its benefits in edge computing environments. We can deploy the application containers where EdgeCore is running and use Cilium to connect with workloads in the cloud. Cilium can also enable WireGuard VPN for transparent encryption of traffic between Cilium-managed endpoints. We also rely on Cilium Tetragon for security observability and runtime enforcement to confine security risks and vulnerabilities in edge environments.',
  withPerson: true,
  CTAtext: 'Read The Blog Post',
  name: 'Tomoya Fujita',
  role: 'Software Engineer, Sony',
  url: 'https://kubeedge.io/blog/enable-cilium/',
};

const rocheTestimonial = {
  logo: 'roche',
  description:
    'Roche, one of the largest global healthcare companies, has embarked on the challenging journey of building a modern, cloud native edge compute platform that helps run applications on customer premises, such as laboratories or hospitals.',
  quotedText:
    "All of our edge clusters are running Cilium today. With that, we've increased our network performance and leveled up our network security and observability with Hubble. We brought the firewall closer to the workloads and can manage edge-to-network traffic securely using a GitOps approach.",
  withPerson: true,
  CTAtext: 'Watch The Talk',
  name: 'Hector Monsalve',
  role: 'Kubernetes Platform Engineer, Roche',
  url: 'https://www.youtube.com/watch?v=kC8efabCH6s',
};

const bulletSection1 = {
  heading: 'Deep Visibility for Edge Operations',
  paragraphs: [
    "Cilium revolutionizes observability in complex edge environments where traditional monitoring tools fall short. By leveraging Hubble for real-time network flow analysis and Tetragon for security event monitoring, Cilium provides deep security and visibility across distributed edge topologies. Cilium's seamless integration with SIEM and monitoring platforms allows organizations to maintain consistency in their security and observability practices from cloud to edge. ",
    'With Cilium, operators gain deep, actionable insights into their edge infrastructure, empowering them to quickly identify, troubleshoot, and resolve issues across their entire network, thereby maintaining optimal performance and security in even the most challenging edge computing scenarios.',
  ],
  imageSrc: EdgeImage2,
  imageAlt: 'cilium mesh illustration',
  imageRight: false,
};

const bulletSection2 = {
  heading: 'Optimized for Resource-Constrained Environments',
  paragraphs: [
    'Edge computing often means working with limited resources. Cilium is designed to be lightweight and efficient, leveraging cutting-edge eBPF technology to deliver unparalleled performance and efficiency in resource-constrained edge environments. Cilium is optimized for both x86 and ARM-based architectures. By implementing load balancing directly in XDP, Cilium achieves remarkable resource efficiency.',
    'With Cilium, businesses can maximize the potential of their edge infrastructure, handling more traffic with fewer resources. This efficiency translates to reduced hardware costs, lower energy consumption, and the ability to deploy more powerful edge applications on existing hardware.',
  ],
  imageSrc: EdgeImage3,
  imageAlt: 'cilium multi-cluster illustration',
};

const bulletSection3 = {
  heading: 'Seamless Connectivity  for Edge Infrastructures',
  paragraphs: [
    "Cilium's ClusterMesh feature revolutionizes edge computing by seamlessly extending Cilium's powerful networking and security capabilities across multiple clusters. It enables secure, high-performance connectivity between edge locations, data centers, and cloud resources without complex VPN setups. ClusterMesh facilitates global service discovery, unified security policies, and intelligent cross-cluster load balancing, ensuring consistent protection and optimal performance across your entire edge infrastructure.",
    'This unified approach significantly reduces operational complexity while enhancing the resilience and efficiency of distributed edge applications.',
  ],
  imageSrc: EdgeImage1,
  imageAlt: 'hetzner cilium test illustration',
};

const cloudTalks = [
  {
    title: 'Which Edge Are You on? Service Affinity with Cilium Cluster Mesh',
    videoSrc: 'https://www.youtube.com/embed/Chk2PTS2Bwc',
    description:
      'This talk equips the audience with an appreciation for how eBPF can ensure you communicate right on the edge.',
  },
  {
    title: 'Connecting Clusters on the Edge with Deep Dive into Cilium Cluster Mesh',
    videoSrc: 'https://www.youtube.com/embed/UcsEVnFtrLY',
    description:
      ' This talk explores how Cluster Mesh allows endpoints in connected clusters to communicate while providing full security policy enforcement',
  },
  {
    title: 'Meshing It up Securely: How Roche Manages Network Connectivity for 1000+ Edge Clusters',
    videoSrc: 'https://www.youtube.com/embed/kC8efabCH6s?si=Pbs7_jaDxplL9s6-"',
    description:
      'This talk discuss the challenges of highly protected environments and show how leveraging Cilium Service Mesh can bring “the firewall” closer to the workloads',
  },
];

const EdgeComputingPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="h-auto lg:w-[350px]" />
    <Testimonial {...rocheTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection3} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection2} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...kubeEdgeTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection1} className="mt-10 md:mt-20 lg:mt-32" />
    <FeaturedTalks talks={cloudTalks} useDefaultBg={false} />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default EdgeComputingPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description:
      'Cilium delivers efficient, secure networking for edge computing deployments across distributed locations with limited resources.',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
