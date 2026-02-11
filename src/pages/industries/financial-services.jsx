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
import GresearchOfficeImage from 'images/pages/industries/ai/gresearch-office.jpg';
import CapitalOnefficeImage from 'images/pages/industries/financial-services/capitaloneoffice.png';
import CornerBancaOfficeImage from 'images/pages/industries/financial-services/corneroffice.jpg';
import FinanceImage1 from 'images/pages/industries/financial-services/finance-1.png';
import FinanceImage2 from 'images/pages/industries/financial-services/finance-2.png';
import FinanceImage3 from 'images/pages/industries/financial-services/finance-3.png';
import From3Image from 'images/pages/industries/financial-services/form3.jpeg';
import PostFinanceOfficeImage from 'images/pages/industries/financial-services/postfinanceoffice.png';
import RabobankOfficeImage from 'images/pages/industries/financial-services/rabobank-office.jpeg';
import RobinhoodOfficeImage from 'images/pages/industries/financial-services/robinhoodoffice.png';
import SicrediOfficeImage from 'images/pages/industries/financial-services/sicredi-office.webp';
import ExecelBee from 'images/pages/usecase/excel-bee.png';
import MainLayout from 'layouts/main';

const heroContent = {
  heading: 'Financial Services',
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
  logo: 'bloomberg',
};

const postfinanceStats = {
  logo: 'postFinance',
  description:
    "Post Finance one of Switzerland's leading financial institutions uses Cilium for Cloud Native Networking",
  CTAtext: 'watch the case study',
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
    "By moving from IP to identity, Cilium empowers you to free your security and operations teams from the need to manually review and audit every policy change. Cilium's native integration with the Kubernetes ecosystem enables it to seamlessly weave compliance and security governance into the DevOps process. For example, operators can write network policies based on namespaces or labels rather than hardcoding IPs.",
  ],
  imageSrc: FinanceImage2,
  imageAlt: 'cilium TLS keys and certificate illustration',
};

const bulletSection1 = {
  heading: 'Enforce Zero-Trust Security with Ease. No Disparate Tools, No Performance Hits',
  paragraphs: [
    'Adopting a Zero Trust-based approach to network security architecture is essential for companies in the financial service industry to maintain compliance with stringent regulations and keep customer data secure.',
    'Cilium provides a unified tool that implements a range of features to enforce Zero Trust networking security principles. These features include identity-aware service to service communication and observability, advanced network policies with native HTTP and DNS protocol support, transparent encryption, and using in-kernel IPsec or WireGuard. Enforcement of TLS via Network Policy allows operators to restrict the allowed TLS SNIs in their network, and provide a more secure environment.',
    'Tetragon provides powerful security observability and real time enforcement guardrails. Cilium offers broad cluster-wide network policies that can be mixed with Tetragon tracing policies for more specific protocol controls like system calls, TCP/IP, file access, and namespace privilege capabilities.',
  ],
  imageSrc: FinanceImage3,
  imageAlt: 'cilium TLS keys and certificate illustration',
  imageRight: false,
  imageStyle: "bg-white p-2 rounded-lg"
};

const bulletSection3 = {
  heading: '“Always On” Workload Analysis for Continuous Compliance',
  paragraphs: [
    'In a highly regulated industry such as financial services, ensuring that software and systems comply with these regulations is a constant challenge for development and operations teams. Cilium empowers teams with tools to ensure continuous compliance with standards like FIPS, PCI DSS, Open Banking, and SOC 2 by offering real-time monitoring and analysis of workload communication to identify non-compliant connections. It emphasizes encryption, traffic analysis, and full-stack monitoring without imposing performance constraints, ensuring confidentiality, integrity, and availability in regulated environments.',
  ],
  imageSrc: FinanceImage1,
  imageAlt: 'Cilium continuous compliance image',
};

const financialUsecases = [
  {
    icon: 'encryption',
    title: 'Transparent Encryption',
    buttonLink: '/use-cases/transparent-encryption',
    description:
      'Elevate compliance and lower risk with Cilium transparent encryption. With just one switch, no application changes, service meshes or additional proxies',
  },
  {
    icon: 'networkPolicy',
    title: 'Network Policy',
    buttonLink: '/use-cases/network-policy',
    description:
      'Maintain identity based policies effectively at scale with Cilium’s advanced network policies',
  },
  {
    icon: 'egressGateway',
    title: 'Egress Gateway',
    buttonLink: '/use-cases/egress-gateway',
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
    title: 'High Scale Networking for ML workloads with Cilium',
    videoSrc: 'https://www.youtube.com/embed/kjSFN34dROQ?si=VJQX3EvzffOWrhn0',
    description:
      'G-research uses Cilium as the core network for their on-premise, bare-metal clusters that scale to 1,000 nodes',
  },
];

const financialResources = [
  {
    imageSrc: PostFinanceOfficeImage,
    imageAlt: 'post finance office',
    title: 'Post Finance picks Cilium for Cloud Native Networking',
    buttonLink: 'https://www.cncf.io/case-studies/postfinance/',
    buttonText: 'Read The Case Study',
    description:
      'Cilium helped the Post Finance team build a scalable Kubernetes platform which meets the demanding requirements to run mission-critical banking software in production.',
  },
  {
    imageSrc: CapitalOnefficeImage,
    imageAlt: 'capital office building',
    title: 'How Capital One used eBPF and Cilium to build a secure, maintainable PaaS',
    buttonLink: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w',
    buttonText: 'Watch The Talk',
    description:
      'Capital One leveraged Cilium to build a multi-tenant platform meeting all its requirements for security, maintainability, network visibility, and scale. ',
  },

  {
    imageSrc: RobinhoodOfficeImage,
    imageAlt: 'robinhood office building',
    title: 'More Churn No Problem: Lessons Learned Running Cilium in Production',
    buttonLink: 'https://www.youtube.com/watch?v=qdr9XQ6h5zs',
    buttonText: 'Watch The Talk',
    description:
      "Robinhood's war stories from running Cilium in a high-churn near-production environment, learn how they overcame challenges by better understanding and tuning Cilium.",
  },
  {
    imageSrc: SicrediOfficeImage,
    imageAlt: 'Sicredi logo on a wall',
    title: 'Strengthening Security Across Distributed Kubernetes Clusters',
    buttonLink: 'https://www.youtube.com/watch?v=MSqI-gBiCrc',
    buttonText: 'Watch the Talk',
    description:
      "Sicredi, Brazil's largest credit union, leverages Cilium to reduce operational and maintenance complexity while increasing performance across clouds and on premise.",
  },
  {
    imageSrc: From3Image,
    imageAlt: 'form3 office building',
    title: 'Building a Resilient Payments Platform with Cilium',
    buttonLink: 'https://www.cncf.io/case-studies/form3/',
    buttonText: 'Read The Case Study',
    description:
      'Form3 integrated Cilium into their platform as their primary solution for networking, security, and observability, enabling them to meet their FPS gateway business requirement of seamlessly switching between data centers without any downtime.',
  },
  {
    imageSrc: RabobankOfficeImage,
    imageAlt: 'Rabobank office building',
    title: 'Self-service, Zero Trust Network Security',
    buttonLink: 'https://www.cncf.io/case-studies/rabobank/',
    buttonText: 'Read The Case Study',
    description:
      'Rabobank leverages Cilium to enable zero-trust networking, significantly improving the security and enabling self-service in their financial API platform.',
  },
  {
    imageSrc: CornerBancaOfficeImage,
    imageAlt: 'CornerBanca office building',
    title: 'High Availability for Cilium Egress Gateway',
    buttonLink: 'https://www.youtube.com/watch?v=HVPKSefazl4',
    buttonText: 'Watch The Talk',
    description:
      'Corner Banca SA is a Swiss Bank and they use Cilium as the CNI for their on-prem Kubernetes clusters. Industry regulations require that traffic from a Kubernetes pods are identifiable for authentication, encryption and application of firewall rules. Corner Banca uses the Cilium egress gateway which allows routing outgoing traffic from one or more workloads to a specific egress IP.',
  },
  {
    title: 'High-Scale Networking for ML Workloads With Cilium',
    description:
      'G-Research is a leading quantitative research and technology firm. They use Cilium as the core network layer for the on-prem bare metal Kubernetes clusters with over 1000 nodes. This environment runs thousands of machine learning workloads.',
    buttonLink: 'https://www.youtube.com/watch?v=kjSFN34dROQ',
    buttonText: 'Watch The Talk',
    imageSrc: GresearchOfficeImage,
    imageAlt: 'gresearch office',
  },
];

const financeLogos = [
  'sandp',
  'postfinance',
  'robinhood',
  'bloomberg',
  'form3',
  'et888',
  'qwist',
  'rabobank',
  'sicredi',
];

const FinancialServicesPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <Testimonial {...bloombergTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection3} className="mt-10 md:mt-20 lg:mt-32" />
    <Stats {...postfinanceStats} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection1} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection2} className="my-10 md:my-20 lg:my-32" />
    <FeaturedTalks talks={financialTalks} />
    <AdoptersLogo items={financeLogos} className="mt-10 md:mt-20 lg:mt-32" />
    <ResourcesCard
      heading="Join Global Financial Leaders in the Cloud Native Networking Revolution"
      resources={financialResources}
    />
    <IndustryUseCases
      heading="Cilium’s Solutions for Financial Services"
      usecases={financialUsecases}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default FinancialServicesPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description:
      'Financial services use Cilium to strengthen security, improve observability, and integrate compliance governance directly into DevOps workflows.',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
