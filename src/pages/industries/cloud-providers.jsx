import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import ResourcesCard from 'components/pages/industries/resources';
import Testimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import AlibabaCloudOffice from 'images/pages/industries/cloud-providers/alibabacloud-office.jpg';
import AstronautBee from 'images/pages/industries/cloud-providers/astronaut-bee.png';
import AWSOfficeImage from 'images/pages/industries/cloud-providers/awsoffice.png';
import CloudImage1 from 'images/pages/industries/cloud-providers/cloud-1.png';
import CloudImage2 from 'images/pages/industries/cloud-providers/cloud-2.png';
import DigitalOceanOffice from 'images/pages/industries/cloud-providers/DigitalOceanOffice.png';
import GoogleOfficeImage from 'images/pages/industries/cloud-providers/googleoffice.png';
import MicrosoftOffice from 'images/pages/industries/cloud-providers/microsoftoffice.png';
import QingCloudOffice from 'images/pages/industries/cloud-providers/qingcloud-office.jpeg';
import SysElevenOffice from 'images/pages/industries/cloud-providers/syselvenoffice.jpg';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'Cloud Providers',
  texts: [
    'Most cloud providers have their own custom CNIs, resulting in operational complexity for customers operating in multi-cloud environments. For example, the configuration and capabilities of the AWS VPC CNI and OpenShift SDN are significantly different. This fragmentation increases overhead in installing, operating, and troubleshooting network interfaces across cloud environments.',
    'Cilium addresses these issues by presenting a unified networking solution tailored for Kubernetes that is compatible across various clouds, providing a consistent workflow that simplifies operations. Using eBPF, Cilium extends beyond Kubernetes basic networking capabilities, offering enhanced observability, security, and reduced latency. Major cloud providers, including Google Cloud, AWS, Azure, and Alibaba, have all standardized on Cilium for Kubernetes networking and security as a testament to its scalability, performance, and rich feature set. ',
  ],
  imageSrc: AstronautBee,
  imageAlt: 'astronaut public speaking bee',
};

const azureTestimonial = {
  logo: 'azure',
  description:
    'Cilium combines with the existing control plane of Azure CNI to bring a high-performance eBPF-based dataplane with extensive security and observability capabilities to Azure Kubernetes Service (AKS)',
  quotedText:
    'Our customers get all the benefits from a scalability and performance perspective which is key for a platform to provide and they are setting up their cloud native platform for the next set of challenges.',
  withPerson: true,
  name: 'Deepak Bansal',
  role: ' CVP and Technical Fellow, Microsoft Azure',
  url: 'https://www.youtube.com/watch?v=8it8Hm2F_GM',
};

const googleTestimonial = {
  logo: 'googleCloud',
  description:
    'Google uses Cilium and eBPF as the new networking dataplane for Google’s managed Kubernetes offering (GKE) and Anthos.',
  quotedText:
    'The Cilium community has put in a tremendous amount of effort to bootstrap the Cilium project, which is the most mature eBPF implementation for Kubernetes out there. We at Google actively contribute to the Cilium project, so that the entire Kubernetes community can leverage the advances we are making with eBPF.',
  withPerson: true,
  name: 'Gobind Johar',
  role: 'Product Manager, Google Kubernetes Engine',
  url: 'https://cilium.io/blog/2020/08/19/google-chooses-cilium-for-gke-networking/',
  CTAtext: 'Read The Blog Post',
};

const hertznerTestimonial = {
  description:
    'Hetzner Cloud is a German public cloud provider that supplies a variety of cloud products like load balancers, virtual machines, storage, and firewalls',
  quotedText:
    "Hetzner was looking to upgrade the company's current ingress architecture to a Kubernetes native solution that a offers ECMP, firewall, IPv6, and DSR capabilities. Overall, Cilium provided a massive increase in both RPS and throughput while still reducing CPU usage.",
  withPerson: true,
  name: 'Pol Arroyo',
  role: 'DevOps Engineer, Hetzner Cloud ',
  url: 'https://cilium.io/blog/2023/01/25/hetzner-performance-testing/',
  CTAtext: 'Read The Blog Post',
  logo: 'hetzner',
};

const bulletSection1 = {
  heading: 'Empowering Azure’s AKS Clusters with Cilium ',
  paragraphs: [
    "Cilium's open source data plane is natively integrated with Azure CNI in Azure Kubernetes Service (AKS). This integration allows users to tap into Cilium's feature-rich ecosystem, right from the Azure Marketplace.",
  ],
  imageSrc: CloudImage1,
  imageAlt: 'cilium big tcp stats',
  imageRight: false,
};

const bulletSection2 = {
  heading: 'Hetzner Cloud Adopts Cilium for a Cloud Native Ingress Architecture',
  paragraphs: [
    'Hetzner Cloud, a leading German public cloud provider, recently overhauled its ingress architecture to pursue modern and scalable cloud services. Hetzner was scouting for a Kubernetes-native solution with ECMP, firewall, IPv6, and DSR capabilities. Cilium emerged as the ideal choice. Before adopting Cilium, Hetzner ran tests deploying different Cilium configurations in a Kubernetes cluster to benchmark RPS and throughput and then checking the CPU usage as a metric to compare the tests. These tests showed Cilium provided a massive increase in both RPS and throughput while still reducing CPU usage. ',
    "With Cilium's Kubernetes-native support, scalability, enhanced security, IPv6 compatibility, and efficiency with DSR, Cilium is a compelling choice for cloud providers. The results of Hetzner Cloud's performance tests highlight the value of adopting Cilium to elevate performance, security, and scalability in the cloud infrastructure landscape.",
  ],
  imageSrc: CloudImage2,
  imageAlt: 'hetzner cilium test illustration',
};

const cloudTalks = [
  {
    title: 'Cilium on Azure: Scale and Performance',
    videoSrc: 'https://www.youtube.com/embed/y3z6s-CTtU0',
    description:
      'Cilium in Azure provides highly efficient load-balancing, extensive network security features, and rich observability integrated well along with robust and scalable Azure CNI IP management and native Azure networking routing',
  },
  {
    title: 'From Managed Kubernetes to App Platform: Cilium Usage at DigitalOcean',
    videoSrc: 'https://www.youtube.com/embed/xez34h7EY3A',
    description:
      'Digital Ocean migrated its Managed Kubernetes offering DKOS from to Cilium. Today Cilium powers over 10,000 DOKS clusters.',
  },
  {
    title: 'Cilium, eBPF, and EKS Anywhere',
    videoSrc: 'https://www.youtube.com/embed/ez0YUyoxMcg',
    description:
      'EKS-Anywhere comes with Cilium as its default CNI. Liz Rice and Duffie Cooley talk about the details',
  },
];

const cloudAdoptersLogo = [
  'google',
  'aws',
  'azure',
  'alibaba',
  'digitalocean',
  'syseleven',
  'hetzner',
  'civo',
  'tencent',
  'openshift',
  'sovereigncloud',
  'openstack',
  'plusserver',
  'vkcloud',
  'netways',
  'sealos',
  'gcore',
  'infomaniak',
  'scaleway',
];

const cloudResouces = [
  {
    title: 'AWS picks Cilium for Networking & Security on EKS Anywhere',
    description:
      'AWS picked Cilium as the built-in default for networking and security. As you create your first EKS Anywhere (EKS-A) cluster, you will automatically have Cilium installed.',
    buttonLink:
      'https://isovalent.com/blog/post/2021-09-aws-eks-anywhere-chooses-cilium/?utm_source=website-cilium&utm_medium=referral&utm_campaign=cilium-blog',
    imageSrc: AWSOfficeImage,
    imageAlt: 'aws office building',
  },
  {
    title: 'Google chooses Cilium in Datapath V2 for GKE and Anthos',
    description:
      'GKE Dataplane V2 harnesses the power of eBPF and Cilium to bring Kubernetes Network Policy logging to Google Kubernetes Engine (GKE) among other features.',
    buttonLink: 'https://cilium.io/blog/2020/08/19/google-chooses-cilium-for-gke-networking/',
    imageSrc: GoogleOfficeImage,
    imageAlt: 'google office building',
  },
  {
    title: 'Azure CNI Powered by Cilium',
    description:
      'Azure CNI Powered by Cilium combines the robust control plane of Azure CNI with the data plane of Cilium to provide high-performance networking and security.',
    buttonLink: 'https://www.youtube.com/watch?v=8it8Hm2F_GM',
    imageSrc: MicrosoftOffice,
    imageAlt: 'microsoft office buidling',
  },
  {
    title: 'Alibaba Cloud Turns to Cilium for Improved Network Performance and Scalability',
    description:
      'Alibaba cloud integrated Cilium into their Container Service for Kubernetes (ACK) network infrastructure to solve their service and network latency issues. Additionally, Cilium also delivered significant performance improvements to their network and added network policy capabilities.',
    buttonLink: 'https://www.cncf.io/case-studies/alibaba/',
    imageSrc: AlibabaCloudOffice,
    imageAlt: 'Alibaba office buidling',
  },
  {
    title: 'DigitalOcean Picks Cilium as the Preferred Networking Solution for DOKS',
    description:
      'DigitalOcean chose Cilium as the preferred networking, security, and observability solution for their DOKS platform due to its prominent role in the cloud native ecosystem, its capabilities in IP Address Management (IPAM), and its powerful network policies.',
    buttonLink: 'https://www.cncf.io/case-studies/digitalocean/',
    imageSrc: DigitalOceanOffice,
    imageAlt: 'DigitalOcean office buidling',
  },
  {
    title: 'SysEleven Picks Cilium as the Preferred Networking Solution for their Platform',
    description:
      'SysEleven selected Cilium as their networking, security, and observability solution for their cloud platform due to its simplicity, native routing capabilities, and prominence in the cloud native ecosystem.',
    buttonLink: 'https://www.cncf.io/case-studies/syseleven/',
    imageSrc: SysElevenOffice,
    imageAlt: 'SysEleven office buidling',
  },
  {
    title: 'QingCloud boosted performance and networking with Cilium',
    description:
      'QingCloud Technologies Corp uses Cilium to offer advanced networking features, such as multi-cluster management and high performance while ensuring cost-efficiency and alignment with customer needs',
    buttonLink: 'https://www.cncf.io/case-studies/qingcloud/',
    imageSrc: QingCloudOffice,
    imageAlt: 'Qingcloud office buidling',
  },
];

const MediaEntertainmentPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="h-auto lg:w-[350px]" />
    <Testimonial {...azureTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection2} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...hertznerTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection1} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...googleTestimonial} className="my-10 md:my-20 lg:my-32" />
    <FeaturedTalks talks={cloudTalks} />
    <AdoptersLogo items={cloudAdoptersLogo} className="mt-10 md:mt-20 lg:mt-32" />
    <ResourcesCard
      heading="Bring Your Favorite Cloud. One Solution, Every Cloud"
      resources={cloudResouces}
    />
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
