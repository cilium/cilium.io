import React from 'react';

import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase';
import Testimonial from 'components/pages/industries/testimonial';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import Community from 'components/shared/community';
import Heading from 'components/shared/heading';
import SEO from 'components/shared/seo';
import EccoLogo from 'icons/ecco.inline.svg';
import AscendLogo from 'icons/logo-ascend.inline.svg';
import Form3Logo from 'icons/logo-form3.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';
import SicrediLogo from 'icons/sicredi.inline.svg';
import CloudBee from 'images/pages/outcomes/multi-cloud-connectivity/cloud-bee.png';
import CloudImage1 from 'images/pages/outcomes/multi-cloud-connectivity/multi-cloud-1.png';
import CloudImage2 from 'images/pages/outcomes/multi-cloud-connectivity/multi-cloud-2.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'Multi-Cloud Connectivity',
  tagline: 'Seamless service-to-service communication across clouds, clusters, and regions.',
  texts: [
    'Connecting workloads across multiple clouds is often fragile and complex, introducing issues like overlapping IPs and inconsistent rules. Cilium solves this with a unified, eBPF-powered network that offers native service discovery, identity-aware security, and scalable performance that works wherever your infrastructure lives.',
  ],
  imageSrc: CloudBee,
  imageAlt: 'cloud bee',
};

const SicrediTestimonial = {
  logo: 'sicredi',
  description:
    'Sicredi is Brazil’s first credit union with more than 120 years of experience in the business and over 7.5 million members.',
  quotedText: [
    'Cilium Cluster Mesh gave us possibilities that we didn’t have before. We can run the same application across our data centers and AWS. It provides us with a consistent networking experience wherever we need to go.',
    'Applications in different clusters can communicate with each other without needing to go through an ingress controller. We are expanding this capability for more applications because this value is already proven. Cluster Mesh works, it’s fast, and it’s reliable.',
  ],
  withPerson: true,
  name: 'Matheus Morais',
  role: 'IT Infrastructure Analyst, Sicredi',
  url: 'https://www.cncf.io/case-studies/sicredi/',
  CTAtext: 'Read The Case Study',
};

const AscendTestimonial = {
  logo: 'ascend',
  description:
    'Ascend is a data automation platform that runs a lot of batch and short lived workloads to ingest, transform, and orchestrate customer data.',
  quotedText: [
    'A lot has changed since we first started adopting Cilium. The industry has become more clear with Cilium becoming the de facto networking layer for all three clouds. The last one that really sent it home was the Azure switching to using Cilium as their CNI.',
    'This brings us consistency across all clouds wherever our customers are. For points of leverage to reduce the amount of work that we need to do overall, this consistency is a major one of them. It allows us to know what we’re working with everywhere and we have the same networking layer in all three clouds.',
  ],
  withPerson: true,
  name: 'Joe Stevens',
  role: 'Technical Staff, Ascend',
  url: 'https://www.cncf.io/case-studies/ascend/',
  CTAtext: 'Read The Case Study',
};

const sectionContent1 = {
  heading: 'Unified connectivity and service discovery across clusters',
  paragraphs: [
    'Cilium’s Cluster Mesh enables services across multiple clusters in any cloud or on-prem environment to connect and discover each other natively, as if running in the same cluster. Connections are fast, encrypted, and identity-aware by default, with no need for complex networking configurations.',
  ],
  imageSrc: CloudImage1,
  imageAlt: 'cilium big tcp stats',
  imageRight: true,
};

const sectionContent2 = {
  heading: 'Trusted across cloud providers',
  paragraphs: [
    'Cilium powers the default networking for major Kubernetes platforms like GKE, EKS-A, and AKS, and is trusted by leading organizations operating at scale. Its performance and security model have been validated across a wide range of public clouds, private data centers, and edge environments, making it a reliable foundation for multi-cloud and hybrid infrastructure.',
    "Whether you're running in one cloud or many, Cilium makes sure your clusters have consistent connectivity, performance, and security.",
  ],
  imageSrc: CloudImage2,
  imageAlt: 'cilium big tcp stats',
  imageRight: false,
};

const testimonials = [
  {
    logo: SicrediLogo,
    title: 'From Network Outages to Seamless Connectivity',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/sicredi',
      },
    ],
    description:
      "Sicredi, Brazil's largest credit union cooperative, chose CIlium to resolve the persistent Kubernetes networking issues they faced, including production outages. Cluster Mesh lets Sicredi connect workloads across data centres and clouds using a dependable service network. This enables secure multi-cluster communication, platform resiliency, and microservices architecture scaling to serve over 7.5 million subscribers.",
  },
  {
    title: 'Scaling secure payments across regions',
    logo: Form3Logo,
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/form3/',
      },
    ],
    description:
      'Form3, a global fintech company, adopted Cilium to power secure, zero-downtime connectivity across on-prem and cloud environments. Using Cluster Mesh, they connected clusters running in AWS, Google Cloud, and Azure, enabling a real-time, active-active-active architecture. Cilium’s fine-grained network policies also helped them meet strict compliance requirements while simplifying operations across their multi-cloud payment platform.',
  },
  {
    logo: TripLogo,
    title: 'Simplifying global service communication at scale',

    description:
      'Trip.com, one of the world’s largest travel service providers, turned to Cilium to scale Kubernetes networking across over 20,000 nodes running on both on-prem infrastructure and public clouds like AWS and Alibaba Cloud. Cilium helped them overcome scalability bottlenecks and enabled unified connectivity across hybrid environments. With Cilium and Hubble, they gained reliable performance and improved security with full observability across clusters globally.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/trip-com-group/',
      },
    ],
  },
  {
    logo: AscendLogo,
    title: 'Reliable, flexible connectivity for data automation',

    description:
      'Ascend uses Cilium in its infrastructure to deliver secure, high-throughput connectivity across diverse customer environments. With Cilium, they’ve eliminated IP churn issues, enabled consistent encryption, and simplified deployments across clouds and on-prem. Debug times dropped from hours to seconds, pod density improved, and the team gained a flexible, unified network layer that can adapt to wherever customer data is stored.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/ascend/',
      },
    ],
  },
  {
    logo: EccoLogo,
    title: 'Bridging Clouds for smarter operations',

    description:
      'ECCO adopted Cilium to simplify networking and observability across multiple Kubernetes clusters. By adopting Cilium, they gained secure cross-cluster connectivity, streamlined operations, and enhanced visibility across Kubernetes workloads running in different regions.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/ecco/',
      },
    ],
  },
];

const MultiCloudSolutions = [
  {
    icon: 'scalableKubernetes',
    title: 'High Performance Container Network Interface (CNI)',
    description:
      'Cilium integrates seamlessly with Kubernetes, providing networking and security as a CNI plugin. Cilium has been tested, validated, and optimized across multiple clouds and Kubernetes distributions. All major cloud providers have already standardized on Cilium for cloud native networking and security needs. Cilium is the de facto standard CNI for the cloud native world.',
    buttonLink: '/use-cases/cni',
  },
  {
    icon: 'clusterMesh',
    title: 'Cluster Mesh',
    description:
      'Cluster Mesh enhances service high availability and fault tolerance. It supports the operation of Kubernetes clusters across multiple regions or availability zones. If resources become temporarily unavailable, are misconfigured in one cluster, or offline for upgrades, it enables failover to other clusters, ensuring your services remain accessible at all times.',
    buttonLink: '/use-cases/cluster-mesh',
  },
];

const MultiCloudPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="h-auto lg:w-[280px] mx-auto" />
    <Testimonial {...SicrediTestimonial} className="my-10 md:my-20 lg:my-32" />
    <Heading tag="h2" className="mt-10 md:mt-20 lg:mt-32 text-center dark:text-white text-black">
      How Cilium enables Multi-Cloud Connectivity
    </Heading>
    <BulletSection {...sectionContent1} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent2} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...AscendTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <UseCaseCard
      heading="Who’s using Cilium for multi-cloud connectivity"
      testimonials={testimonials}
    />
    <IndustryUseCases
      heading="Cilium’s Solutions for Multi–cloud Connectivity"
      usecases={MultiCloudSolutions}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default MultiCloudPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description: 'How Cilium enables Multi-cloud Connectivity',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
