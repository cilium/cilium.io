import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import ResourcesCard from 'components/pages/industries/resources';
import Stats from 'components/pages/industries/stats';
import AdopterTestimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import AscendLogo from 'icons/logo-ascend.inline.svg';
import ClickHouseLogo from 'icons/logo-clickhouse.inline.svg';
import DatadogLogo from 'icons/logo-datadog.inline.svg';
import AuditBee from 'images/pages/industries/audit-bee.png';
import SoftwareImage1 from 'images/pages/industries/software-1.png';
import SoftwareImage2 from 'images/pages/industries/software-2.webp';
import SoftwareImage3 from 'images/pages/industries/software-3.webp';
import MainLayout from 'layouts/main/main';

import AscendOfficeImage from './images/ascendoffice.png';
import ClickhouseOfficeImage from './images/clickhouseoffice.png';

const heroContent = {
  heading: 'SaaS, Software, and  DBaaS',
  texts: [
    "In today's fast-evolving software landscape, teams behind SaaS, standalone software, and DBaaS offerings grapple with networking, security, and scalability challenges. Traditional networking solutions often fail to support distributed systems' complex demands spanning multiple clusters and clouds. Furthermore, the rise of microservices intensifies the need for fine-grained security measures and deep visibility into application communications.",
    'Cilium is purpose-built to secure and accelerate the delivery of cloud native applications. It leverages eBPF to provide API-aware networking and security with unparalleled granularity without compromising performance. With Cilium, SaaS, software, and DBaaS teams can establish infrastructure capable of scaling their products globally to reach customers wherever they may be. Cilium enables the creation of secure Kubernetes multi-tenant environments, empowering these companies to meet the challenges of modern software deployment head-on.',
  ],
  imageSrc: AuditBee,
  imageAlt: 'ebeedex audit bee',
};

const datadogTestimonial = {
  quotedText:
    'eBPF and Cilium helped us to push the boundaries both within operations and also with product development. To do things safer, faster and more easily than what we could have with traditional techniques. The overlay of features in a single product, compatibility with multiple cloud providers, and ability to just run it. These three things are what made Cilium an obvious choice for us',
  description:
    'Datadog uses Cilium to secure and monitor the network traffic of their containerized applications running on Kubernetes',
  withPerson: true,
  logo: DatadogLogo,
  name: 'Laurent Bernaille',
  role: ' Staff Engineer, Datadog',
  url: 'https://www.cncf.io/case-studies/datadog/',
  CTAtext: 'READ THE CASE STUDY',
};

const clickhouseStats = {
  description:
    'ClickHouse turned to Cilium as their preferred networking solution to simplify the process of isolating customers from each other',
  logo: ClickHouseLogo,
  stats: [
    {
      heading: 'MASSIVE SCALE',
      subHeading:
        'Secured 10+PiB of streaming data & 30+ trillion inserted records in the first months of deployment',
    },
    {
      heading: 'MULTI-CLOUD',
      subHeading: '10,000+ pods across multiple regions, availability zones and cloud providers',
    },
    {
      heading: 'TIME TO VALUE',
      subHeading: 'Reduced time to weeks from proof of concept to in-production deployment',
    },
  ],
  url: 'https://www.cncf.io/case-studies/clickhouse/',
  CTAtext: 'READ THE CASE STUDY',
};

const ascendTestimonial = {
  description:
    'Ascend turned to Cilium as their CNI which simplified integrating into customer networks, eliminated their IP churn and density issues.',
  logo: AscendLogo,
  withPerson: true,
  quotedText:
    'From experience, we know that getting network policy correct is difficult and when you do get it wrong it is a nightmare. Trying to understand what’s going on with traditional tooling means, you probably throw three engineers at the problem for five hours while with Hubble you know what’s happening in about three seconds. It was one of those very easy trade offs to explain to my CEO. We’re going to encounter the cost of debugging, let’s make it a lot less expensive.',
  name: 'Joe Stevens',
  role: 'Member of the Technical Staff, Ascend',
  url: 'https://www.cncf.io/case-studies/ascend/',
  CTAtext: 'READ THE CASE STUDY',
};

const bulletSection1 = {
  heading: 'Align with DevOps  and  GitOps Principles',
  paragraphs: [
    "One of the core tenets of DevOps is automation. Cilium's architecture ensures that all its components can be deployed automatically, integrating into existing workflows and augmenting automation capabilities. Platform engineering teams can seamlessly integrate Cilium into their CI/CD pipelines, ensuring continuous delivery and integration without manual intervention.",
    'Cilium is designed to be configured using an API. This aligns with the GitOps principles, where the desired state of infrastructure is declared in code and stored in Git repositories. The API-driven model of Cilium enables organizations to manage, scale, and modify their infrastructure using code, ensuring consistency and repeatability.',
  ],
  withImage: true,
  imageSrc: SoftwareImage1,
  ImageAlt: 'cilium saas tools and dbs illustration',
};

const bulletSection2 = {
  heading:
    "Streamline Onboarding New Applications and Teams and Accelerate Debugging with Hubble's Service Map",
  paragraphs: [
    "Cilium's Hubble Service Map allows platform teams to furnish application developers with a portal to view their own workloads, dependencies, and network flows. This self-service model makes it easier to identify service connections, calls, and even DNS operations, all crucial for diagnosing application networking problems. The service map helps streamline the onboarding of new applications and teams and accelerates the debugging process.",
    'By mitigating disputes between application and infrastructure operation teams, Cilium accelerates the investigation of application-layer issues, enabling frictionless, self-service root cause analysis for developers.',
  ],
  withImage: true,
  imageSrc: SoftwareImage2,
  ImageAlt: 'hubble 5xx graphs',
};

const bulletSection3 = {
  heading: 'Build Secure Kubernetes Multi-tenant Environments With Cilium ',
  paragraphs: [
    "For enterprises building muti-tenant architectures, Cilium enforces isolation between tenants and ensures different teams can safely run on the same platform. With Cilium's multi-tenant observability features, teams can easily access application metrics without compromising security. Traditional logging systems often fall short when segregating data by tenants. Cilium provides multi-tenant, self-service access using the OpenID Connect (OIDC) standard. Teams can have RBAC-based access to relevant data and connectivity metrics, such as network policy drops, DNS lookup failures, and more.",
  ],
  withImage: true,
  imageSrc: SoftwareImage3,
  ImageAlt: 'hubble architecture',
};

const softwareTalks = [
  {
    title: 'Tales from an eBPF Program’s Murder Mystery',
    description:
      "How datadog leveraged Cilium's observability features and eBPF to investigate and get the bottom of an issue with their Kubernetes clusters",
    videoSrc: 'https://www.youtube.com/embed/YK7GyEJdJGo',
  },

  {
    title: 'Running Cilium with Nomad',
    description:
      'Cosmonic wrote an application called Netreap that ties together data from Nomad and Consul to replace the Cilium Kubernetes operator to maintain endpoints and labels',
    videoSrc: 'https://www.youtube.com/embed/DSkf9Y06-lE',
  },

  {
    description:
      'Adobe leverages Cilium in many way. One way is to achieve network isolation of tenants on multi-tenant clusters',
    videoSrc: 'https://www.youtube.com/embed/7UQ2CU6UEGY',
    title: 'eBPF at Adobe - Brandon Cook, Adobe',
  },
];

const softwareResources = [
  {
    title: 'How Ascend Leverages Cilium as a Networking Layer',
    description:
      'Ascend turned to Cilium as their CNI which simplified integrating into customer networks, eliminated their IP churn and density issues, and provided them with reliable encryption and network policies',
    url: 'https://www.cncf.io/case-studies/ascend/',
    imageSrc: AscendOfficeImage,
    imageAlt: 'ascend office interior',
    CTAtext: 'Learn More',
  },
  // {
  //     title: "Cilium User Story: Securing 100,000+ RPS in a Multi-Tenant Environment",
  //     description: "A company in the publishing industry leverages to create secure and scalable multi tenant kubernetes environments",
  //     url: "https://cilium.io/blog/2022/10/13/publishing-user-story/",
  //     imageSrc: "",
  //     imageAlt: "",
  //     CTAtext: ""

  // },
  {
    title: 'How ClickHouse is Using Cilium to Implement Efficient Network Policies',
    description:
      'Clickhouse leveragd Cilium in bulding its serverless SaaS offering, Clickhouse Cloud',
    url: 'https://www.cncf.io/case-studies/clickhouse/',
    imageSrc: ClickhouseOfficeImage,
    imageAlt: 'clickhouse banner',
    CTAtext: 'Learn More',
  },
];

const softwareLogos = [
  'adobe',
  'clickhouse',
  'palantir',
  'ascend',
  'datadog',
  'planetscale',
  'arrango',
  'gitlab',
  'canonical',
  'cosmonic',
];
const SoftwarePage = () => (
  <MainLayout>
    <Hero {...heroContent} imageStyle="" className="">
      <AdopterTestimonial {...datadogTestimonial} />
    </Hero>
    <BulletSection {...bulletSection1} className="my-8" />
    <Stats {...clickhouseStats} />
    <BulletSection {...bulletSection2} className="my-8" />
    <AdopterTestimonial {...ascendTestimonial} />
    <BulletSection {...bulletSection3} className="my-8" />
    <AdoptersLogo items={softwareLogos} className="my-16 grid grid-cols-3 lg:grid lg:grid-cols-4" />
    <FeaturedTalks heading="Featured Talks" talks={softwareTalks} />
    <ResourcesCard
      className="mt-10"
      heading="Build on a Secure, Scalable, and Modern Networking and Observability Stack"
      resources={softwareResources}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default SoftwarePage;
