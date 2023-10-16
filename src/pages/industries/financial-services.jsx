/* eslint-disable react/prop-types */
import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import ResourcesCard from 'components/pages/industries/resources';
import Stats from 'components/pages/industries/stats';
import Testimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import BloombergLogo from 'icons/logo-bloomberg.inline.svg';
import PostFinanceLogo from 'icons/logo-postfinance.inline.svg';
import FinanceImage1 from 'images/pages/industries/finance-1.png';
import FinanceImage2 from 'images/pages/industries/finance-2.png';
import FinanceImage3 from 'images/pages/industries/finance-3.png';
import ExecelBee from 'images/pages/usecase/excel-bee.png';
import MainLayout from 'layouts/main';

import CapitalOnefficeImage from './images/capitaloneoffice.png';
import EgressGatewayIcon from './images/egress-gateway.inline.svg';
import EncryptionIcon from './images/encryption.inline.svg';
import NetworkPolicyIcon from './images/network-policy.inline.svg';
import PostFinanceOfficeImage from './images/postfinanceoffice.png';
import RobinhoodOfficeImage from './images/robinhoodoffice.png';

const heroContent = {
  heading: 'Financial Services ',
  texts: [
    "Regulatory oversight is a hallmark of the financial industry. Cilium's detailed traffic monitoring and logging mechanisms support institutions in establishing transparent audit trails, complying with stringent regulations, and conducting forensic investigations.",
    "The world of fintech revolves around APIs – from mobile banking apps to trading platforms. Cilium's API-aware network security ensures that these critical APIs can be secured, empowering teams with the toolsets needed to understand and guard against malicious patterns in API calls. Cilium supports L7 policies (e.g., allow HTTP GET /foo) for fine-grained access control to shared API services running common cloud native protocols like HTTP, gRPC, Kafka, etc. Cilium also supports deny-based, cluster-wide, and host-layer firewall network policies.",
    'With Cilium, companies in the financial services industry can achieve improved observability, maintain security controls, and weave compliance and security governance for Kubernetes environments directly into the DevOps process.',
  ],
  imageSrc: ExecelBee,
  imageAlt: 'ebeedex excel bee',
};

const bloombergTestimonial = {
  description:
    'Bloomberg successfully enhanced the security and access control of its BQuant Enterprise workloads through the implementation of robust network security measures.',
  quotedText:
    'We started by looking at some other tools, and we first used [the cloud provider CNI]. But we found that Cilium, with its host-based policies and its ability to replace what we had out of the box, was really valuable.',
  withPerson: true,
  name: 'Anne Zepecki',
  CTAtext: 'read the case study',
  role: 'Team Lead for the BQuant Enterprise Identity Management team',
  url: 'https://www.cncf.io/case-studies/bloomberg-2/',
  logo: BloombergLogo,
};

const postfinanceStats = {
  logo: PostFinanceLogo,
  description:
    "Post Finance one of Switzerland's leading financial institutions uses Cilium for Cloud Native Networking",
  CTAtext: 'read the case study',
  url: 'https://www.youtube.com/watch?v=fjhKw49YcY4',
  stats: [
    {
      heading: '17',
      subHeading: 'Clusters',
    },
    {
      heading: '7-75',
      subHeading: 'Clusters',
    },
    {
      heading: 'x12k',
      subHeading: 'Faster Pod startup',
    },
    {
      heading: '2.4M',
      subHeading: 'Users',
    },
    {
      heading: '1000s',
      subHeading: 'Containers',
    },
  ],
};

const bulletSection2 = {
  heading: 'Weave Compliance and Security Throughout the DevOps Process',
  paragraphs: [
    'Cilium empowers you to free your security and operations teams from the need to review each policy change manually. Cilium is natively integrated into the Kubernetes ecosystem and plays nicely with other tools, making it easier to weave compliance and security governance into the DevOps process. For example, operators can write Kubernetes admission controllers to ensure that only compliant containers and workloads are deployed. This integration helps maintain and enforce security and compliance standards throughout your DevOps processes.',
  ],
  withImage: true,
  imageSrc: FinanceImage2,
  imageAlt: 'cilium TLS keys and certificate illustration',
};

const bulletSection1 = {
  heading: 'Enforce Zero-Trust Security with Ease. No Disparate Tools,  No Performance Hits',
  paragraphs: [
    'Adopting a Zero Trust-based approach to network security architecture is essential for companies in the financial service industry to maintain compliance with stringent regulations and keep customer data secure.',
    'Cilium provides a unified tool that implements a range of features to enforce Zero Trust networking security principles. These features include identity-aware service to service communication and observability, advanced network policies with native HTTP and DNS protocol support, transparent encryption using in-kernel IPsec or WireGuard. Enforcement of TLS via Network Policy allows operators to restrict the allowed TLS SNIs in their network, and provide a more secure environment. Powerful security observability and real-time runtime enforcement with Tetragon and cluster-wide network policies provide security guardrails while having more specific policies to secure the application and operating system access control on different levels such as system calls, TCP/IP, file access, and namespace.',
  ],
  withImage: true,
  imageSrc: FinanceImage3,
  imageAlt: 'cilium TLS keys and certificate illustration',
};

const bulletSection3 = {
  heading: '“Always On” Workload Analysis for Continuous Compliance',
  paragraphs: [
    'In a highly regulated industry such as financial services, ensuring that software and systems comply with these regulations is a constant challenge for development and operations teams. Cilium empowers teams with tools to ensure continuous compliance with standards like FIPS, PCIDSS, Open Banking, Fedramp, and SOC 2 by offering real-time monitoring and analysis of workload communication to identify non-compliant connections. It emphasizes encryption, traffic analysis, and full-stack monitoring without imposing performance constraints, ensuring confidentiality, integrity, and availability in regulated environments.    ',
  ],

  withImage: true,
  imageSrc: FinanceImage1,
  imageAlt: 'Cilium continuous compliance image',
};

const financialUsecases = [
  {
    icon: EncryptionIcon,
    title: 'Transparent Encryption ',
    url: '/use-cases/transparent-encryption',
    description:
      'Elevate compliance and lower risk with Cilium transparent encryption. With just one switch, no application changes, service meshes  or additional proxies',
  },
  {
    icon: NetworkPolicyIcon,
    title: 'Network Policy ',
    url: '/use-cases/network-policy',
    description:
      'Maintain identity based policies effectively at scale with Cilium’s advanced network polices ',
  },
  {
    icon: EgressGatewayIcon,
    title: 'Egress Gateway',
    url: '/use-cases/egress-gateway',
    description:
      'Present a group of cloud native workloads from a stable IP address to integrate with traditional firewalls',
  },
];

const financialTalks = [
  {
    title: "eBPF, a road to invisible network: S&P Global's Network Transformation Journey",
    description:
      'Guru Ramamoorthy talks about how S&P Global’s network engineers leveraged eBPF-based networking with Cilium to connect and secure their clouds',
    videoSrc: 'https://www.youtube.com/embed/6CZ_SSTqb4g',
  },
  {
    title: 'Cilium in Practice: Building Data Sandboxes at Bloomberg',
    videoSrc: 'https://www.youtube.com/embed/8fiYVyISyz4',
    description:
      'Bloomberg leverages Cilium to construct data sandboxes that restrict users from exfiltrating data from the sandbox',
  },
  {
    title: 'Multi-cluster networking with Cilium at Form3',
    description:
      'Adelina Simon, a technology evangelist at Form3 talks about how they built a multi-cloud payments platform using Cilium',
    videoSrc: 'https://www.youtube.com/embed/vKgRf4OzTIE?si=w_-F3oQysthruVtA',
  },
];

const financialResources = [
  {
    imageSrc: PostFinanceOfficeImage,
    imageAlt: 'post finance office',
    title: ' Post Finance picks Cilium for Cloud Native Networking',
    url: 'https://www.youtube.com/watch?v=fjhKw49YcY4',
    CTAtext: 'Watch The Case Study',
    description:
      'Cilium helped the Post Finance team build a scalable Kubernetes platform which meets the demanding requirements to run mission-critical banking software in production.',
  },
  {
    imageSrc: CapitalOnefficeImage,
    imageAlt: 'capital office building',
    title: ' How Capital One used eBPF and Cilium to build a secure, maintainable PaaS',
    url: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w',
    CTAtext: 'Watch The Talk',
    description:
      'Capital One leveraged Cilium to build a multi-tenant platform meeting all its requirements for security, maintainability, network visibility, and scale. ',
  },

  {
    imageSrc: RobinhoodOfficeImage,
    imageAlt: 'robinhoo office building',
    title: 'More Churn No Problem: Lessons Learned Running Cilium in Production',
    url: 'https://www.youtube.com/watch?v=qdr9XQ6h5zs',
    CTAtext: 'Watch The Talk',
    description:
      "Robinhood's war stories from running Cilium in a high-churn near-production environment, learn how they overcame challenges by better understanding and tuning Cilium.",
  },
];

const financeLogos = [
  'capitalone',
  'postfinance',
  'robinhood',
  'bloomberg',
  'form3',
  'et888',
  'qwist',
];

const FinancialServicesPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="lg:h-[470px] lg:w-[470px] lg:-mt-10">
      <Testimonial {...bloombergTestimonial} className="mt-8" />
    </Hero>
    <BulletSection {...bulletSection3} />
    <Stats className="my-8" {...postfinanceStats} />
    <BulletSection {...bulletSection1} />
    <BulletSection {...bulletSection2} />
    <FeaturedTalks heading="Featured talks" talks={financialTalks} className="mt-8" />
    <AdoptersLogo items={financeLogos} className="my-16 grid grid-cols-3 lg:grid lg:grid-cols-4" />
    <ResourcesCard
      heading="Join Global Financial Leaders in the Cloud Native Networking Revolution "
      resources={financialResources}
      className="mt-8"
    />
    <IndustryUseCases
      heading="Cilium’s Solutions for Financial Services"
      usecases={financialUsecases}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default FinancialServicesPage;

export const Head = ({ location: { pathname } }) => <SEO slug={pathname} />;
