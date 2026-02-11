import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import ResourcesCard from 'components/pages/industries/resources';
import Stats from 'components/pages/industries/stats';
import Testimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import AscendOfficeImage from 'images/pages/industries/software/ascendoffice.png';
import AuditBee from 'images/pages/industries/software/audit-bee.png';
import ClickhouseOfficeImage from 'images/pages/industries/software/clickhouseoffice.png';
import SoftwareImage1 from 'images/pages/industries/software/software-1.png';
import SoftwareImage2 from 'images/pages/industries/software/software-2.webp';
import SoftwareImage3 from 'images/pages/industries/software/software-3.webp';
import wso2OfficeImage from 'images/pages/industries/software/wso2OfficeImage.jpeg';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'SaaS, Software, and DBaaS',
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
  logo: 'datadog',
  name: 'Laurent Bernaille',
  role: ' Staff Engineer, Datadog',
  url: 'https://www.cncf.io/case-studies/datadog/',
  CTAtext: 'READ THE CASE STUDY',
};

const clickhouseStats = {
  description:
    'ClickHouse turned to Cilium as their preferred networking solution to simplify the process of isolating customers from each other',
  logo: 'clickHouse',
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
  logo: 'ascend',
  withPerson: true,
  quotedText:
    'From experience, we know that getting network policy correct is difficult and when you do get it wrong it is a nightmare. Trying to understand what’s going on with traditional tooling means, you probably throw three engineers at the problem for five hours while with Hubble you know what’s happening in about three seconds. It was one of those very easy trade offs to explain to my CEO. We’re going to encounter the cost of debugging, let’s make it a lot less expensive.',
  name: 'Joe Stevens',
  role: 'Member of the Technical Staff, Ascend',
  url: 'https://www.cncf.io/case-studies/ascend/',
  CTAtext: 'READ THE CASE STUDY',
};

const bulletSection1 = {
  heading: 'Align with DevOps and GitOps Principles',
  paragraphs: [
    "One of the core tenets of DevOps is automation. Cilium's architecture ensures that all its components can be deployed automatically, integrating into existing workflows and augmenting automation capabilities. Platform engineering teams can seamlessly integrate Cilium into their CI/CD pipelines, ensuring continuous delivery and integration without manual intervention.",
    'Cilium is designed to be configured using an API. This aligns with the GitOps principles, where the desired state of infrastructure is declared in code and stored in Git repositories. The API-driven model of Cilium enables organizations to manage, scale, and modify their infrastructure using code, ensuring consistency and repeatability.',
  ],
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
  imageSrc: SoftwareImage2,
  ImageAlt: 'hubble 5xx graphs',
  imageRight: false,
};

const bulletSection3 = {
  heading: 'Build Secure Kubernetes Multi-tenant Environments With Cilium',
  paragraphs: [
    "For enterprises building muti-tenant architectures, Cilium enforces isolation between tenants and ensures different teams can safely run on the same platform. With Cilium's multi-tenant observability features, teams can easily access application metrics without compromising security. Traditional logging systems often fall short when segregating data by tenants. Cilium provides multi-tenant, self-service access using the OpenID Connect (OIDC) standard. Teams can have RBAC-based access to relevant data and connectivity metrics, such as network policy drops, DNS lookup failures, and more.",
  ],
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
    buttonLink: 'https://www.cncf.io/case-studies/ascend/',
    imageSrc: AscendOfficeImage,
    imageAlt: 'ascend office interior',
  },
  {
    title: 'How ClickHouse is Using Cilium to Implement Efficient Network Policies',
    description:
      'Clickhouse leveraged Cilium in building its serverless SaaS offering, Clickhouse Cloud',
    buttonLink: 'https://www.cncf.io/case-studies/clickhouse/',
    imageSrc: ClickhouseOfficeImage,
    imageAlt: 'clickhouse banner',
  },
  {
    title: 'Implementing Zero Trust Security with Cilium',
    description:
      'WSO2 leveraged Cilium to implement zero trust security in their internal Developer Platform as a Service, Choreo',
    buttonLink: 'https://www.cncf.io/case-studies/ws02/',
    imageSrc: wso2OfficeImage,
    imageAlt: 'wso2 banner',
  },
];

const softwareLogos = [
  'adobe',
  'arangodb',
  'cosmonic',
  'ascend',
  'datadog',
  'palantir',
  'wso2',
  'clickhouse',
  'gitlab',
  'planetscale',
  'canonical',
];

const SoftwarePage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <Testimonial {...datadogTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection1} className="mt-10 md:mt-20 lg:mt-32" />
    <Stats {...clickhouseStats} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection2} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...ascendTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection3} className="my-10 md:my-20 lg:my-32" />
    <FeaturedTalks talks={softwareTalks} />
    <AdoptersLogo items={softwareLogos} className="mt-10 md:mt-20 lg:mt-32" />
    <ResourcesCard
      heading="Build on a Secure, Scalable, and Modern Networking and Observability Stack"
      resources={softwareResources}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default SoftwarePage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description:
      'With Cilium, SaaS, software, and DBaaS teams can establish infrastructure capable of scaling their products globally to reach customers wherever they may be.',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
