import React from 'react';

import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase';
import Stats from 'components/pages/industries/stats';
import Testimonial from 'components/pages/industries/testimonial';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import Community from 'components/shared/community';
import Heading from 'components/shared/heading';
import SEO from 'components/shared/seo';
import BloombergLogo from 'icons/logo-bloomberg.inline.svg';
import DigitalOceanLogo from 'icons/logo-digital-ocean.inline.svg';
import UtmostLogo from 'icons/logo-utmost.inline.svg';
import RabobankLogo from 'icons/rabobank.inline.svg';
import wso2Logo from 'icons/wso2.inline.svg';
import SecurityBee from 'images/pages/outcomes/zero-trust/security-bee.png';
import ZeroTrustImage1 from 'images/pages/outcomes/zero-trust/zero-trust-1.png';
import ZeroTrustImage2 from 'images/pages/outcomes/zero-trust/zero-trust-2.png';
import ZeroTrustImage3 from 'images/pages/outcomes/zero-trust/zero-trust-3.png';
import ZeroTrustImage4 from 'images/pages/outcomes/zero-trust/zero-trust-4.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'Zero Trust Networking',
  tagline: 'Enforce what matters, where it matters.',
  texts: [
    'Traditional network security measures can be ineffective in cloud native systems due to the transient nature of IP addresses, the dynamic nature of workloads, and the rapid growth of east-west traffic. These internal communication routes are undefended by standard firewall-based security, and it becomes next to impossible to maintain static IP rules or network segments across numerous environments.',
    'Zero Trust Networking directly addresses these challenges by shifting the focus from trusting the network to explicitly verifying each connection and workload. Instead of assuming anything inside the network is safe, Zero Trust Networking requires all communication to be authenticated and authorized based on what a workload is, not where it runs. Cilium makes this practical in cloud native environments by enforcing identity-aware policies tied to Kubernetes service accounts and labels, applying them efficiently in the kernel with eBPF, supporting multi-cluster and multi-cloud deployments, and providing deep visibility into and security for service-to-service communication.',
  ],
  imageSrc: SecurityBee,
  imageAlt: 'security bee',
};

const ws02Testimonial = {
  logo: 'wso2',
  description:
    'WS02 is a software company that creates products for API management, enterprise integration, and identity and access management.',
  quotedText:
    'Implementing the Zero Trust Networking security model within Choreo using Cilium significantly bolsters our SOC2 compliance posture. The core principles of the Zero Trust model, including multi layered authentication, least privilege access, encryption, and perpetual logging and monitoring, align with the stringent operational and security control requirements of a SOC2 audit.',
  withPerson: true,
  name: ' ',
  role: 'WS02',
  url: 'https://wso2.com/library/blogs/how-we-implemented-zero-trust-in-choreo/',
  CTAtext: 'Read The Blog',
};

const utmostTestimonial = {
  logo: 'utmost',
  description:
    'Utmost handles sensitive personal data and needed SOC 2 Type II attestation, ISO 27001 certification, and zero trust networking to demonstrate their commitment to security and data privacy as core values of their business.',
  quotedText: [
    "We don’t want all of network security landing on the systems engineers. We needed the ability for our developers to understand the network policies themselves as well as how to update them for what they need and validate the fix. We've seen it with banks and other companies where they implement network security, but the maintenance of that thing becomes a nightmare and ends up strangling developers.",
    'They can’t get their changes through without bumping their head against red tape. We wanted to compliment the service, not take away from it. Developers should be able to deploy when and where they need to and Cilium enables our developers to do this.',
  ],
  withPerson: true,
  name: 'Andrew Holt',
  role: 'Senior Systems Engineer, Utmost.',
  url: 'https://www.cncf.io/case-studies/utmost/',
  CTAtext: 'Read The Case Study',
};

const sectionContent1 = {
  heading: 'Keep internal traffic secure at any scale',
  paragraphs: [
    'In modern infrastructure, internal communication is often the largest and most vulnerable attack surface. In the absence of Zero Trust controls, attackers who breach one service have the ability to extend their attacks laterally, gain access to sensitive data, and escalate their attacks. For regulatory frameworks like PCI DSS, GDPR, and HIPAA, protection for internal communication is becoming increasingly necessary in order to comply, and firewall-based controls aren’t enough. Cilium helps you meet these security and compliance demands by enforcing Zero Trust networking policies that protect every connection, no matter how large or complex your environment becomes.',
    'Cilium leverages eBPF to deliver kernel-level networking performance, eliminating the overhead of traditional Linux networking. With features like eXpress Data Path (XDP) and BIG TCP, Cilium ensures high-throughput, low-latency networking ideal for needs of AI/ML workloads. Cilium provides a comprehensive networking toolset for deploying AI/ML models with load balancers, ingress controllers, network policies, egress gateway, service mesh, and more. These features facilitate the seamless deployment of AI/ML workloads and their integration into services and applications.',
  ],
  imageSrc: ZeroTrustImage1,
  imageAlt: 'cilium TLS keys and certificate illustration',
};

const wso2Stats = {
  description:
    'WS02 is a software company that creates products for API management, enterprise integration, and identity and access management.',
  logo: 'wso2',
  stats: [
    {
      heading: '60 Trillion+',
      subHeading: 'Transactions/year',
    },
    {
      heading: '20 Trillion+',
      subHeading: 'Managed API transactions/year',
    },
    {
      heading: '1 Billion+',
      subHeading: 'Managed Identities/year',
    },
  ],
  url: 'https://www.cncf.io/case-studies/wso2/',
  CTAtext: 'READ THE CASE STUDY',
};

const sectionContent2 = {
  heading: 'Enforce identity-driven policies instead of IP-based rules',
  paragraphs: [
    'As workloads scale, restart, or move across nodes and clusters, IP addresses change constantly, creating gaps or needing constant rule updates.',
    'Cilium solves this by applying security policies tied to Kubernetes-native identities like service accounts, pod labels, and namespaces. These identities stay consistent even as workloads shift or restart, so policies automatically follow the right services wherever they run, removing the need to manage static network rules and ensuring reliable Zero Trust enforcement at scale.',
  ],
  imageSrc: ZeroTrustImage2,
  imageWidth: 624,
  imageHeight: 431,
  imageAlt: 'identities with cilium',
  imageRight: true,
};

const sectionContent3 = {
  heading: 'Enforce policies at the kernel level',
  paragraphs: [
    'Typically, enforcing Zero Trust often relies on proxies, sidecars, or userspace components to inspect and control traffic. These methods can make things more complicated to run, especially as systems scale.',
    'Cilium takes a different approach by using eBPF to apply security policies directly in the Linux kernel. This allows high-performance enforcement at the source of the traffic without extra components in the data path. The result is fast, low-latency security that scales cleanly with your infrastructure.',
  ],
  imageSrc: ZeroTrustImage3,
  imageWidth: 624,
  imageHeight: 399,
  imageAlt: ' illustration',
  imageRight: false,
};

const sectionContent4 = {
  heading: 'Secure at the API and application layer, not just at the network layer',
  paragraphs: [
    'In cloud native environments, many microservices communicate through APIs. Traditional security solutions stop at IP addresses and ports, leaving critical API traffic and application-level interactions vulnerable to misuse. This creates blind spots that attackers can exploit once inside the network.',
    'Cilium extends Zero Trust to Layer 7, enabling network policies that inspect and control traffic based on API paths, HTTP methods, gRPC calls, DNS queries, and more. This ensures services communicate only as intended and minimizes unnecessary exposure within your environment.',
  ],
  videoSrc: 'https://www.youtube.com/embed/yikVhGM2ye8',
  imageRight: true,
};

const sectionContent5 = {
  heading: 'Built-in distributed firewalling for Zero Trust at scale',
  paragraphs: [
    'Rather than relying on centralized firewalls or sidecar proxies, Cilium enforces security policies directly at the source of traffic using eBPF inside the Linux kernel. This distributed model applies identity-aware policies consistently across all nodes, clusters, and environments, without introducing bottlenecks.',
    'With visibility and control from Layer 3 to Layer 7, Cilium prevents unauthorized lateral movement and delivers scalable, low-overhead Zero Trust enforcement across cloud native infrastructure.',
  ],
  videoSrc: 'https://www.youtube.com/embed/GLLLcz398K0',
  imageRight: false,
};

const sectionContent6 = {
  heading: 'Keep Zero Trust enforcement consistent across clusters and clouds',
  paragraphs: [
    'Applications rarely run in just one cluster, region, or cloud. As environments grow more distributed, keeping security policies consistent across all of them becomes complex, and any gaps in enforcement across environments creates risk.',
    'Cilium makes it simple to define and apply Zero Trust policies uniformly, no matter where your workloads run. Whether you operate in a single Kubernetes cluster, across multiple clouds, or in hybrid setups, Cilium helps ensure security stays consistent without duplication or increased complexity.',
  ],
  imageSrc: ZeroTrustImage4,
  imageWidth: 624,
  imageHeight: 362,
  imageAlt: 'multi-cluster Uniform Network Policy Enforcement',
  imageRight: true,
};

const testimonials = [
  {
    logo: RabobankLogo,
    title: 'Implementing Zero Trust in highly regulated financial systems',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/rabobank/',
      },
    ],
    description:
      'To protect its infrastructure built on Kubernetes, Rabobank uses Cilium, which offers identity-aware policies and comprehensive insight into service communication. This helps the bank in meeting regulatory obligations, safeguarding sensitive financial data, and preserving a constant security posture in a variety of dynamic circumstances.',
  },
  {
    title: 'Enforcing Zero Trust isolation in a multi-tenant platform',
    logo: DigitalOceanLogo,
    CTAs: [
      {
        CTAtext: 'Read The Case Study ',
        url: 'https://www.cncf.io/case-studies/digitalocean/',
      },
    ],
    description:
      "DigitalOcean uses Cilium to secure its multi-tenant Kubernetes environments with identity-aware network policies. Cilium serves as a vital security layer by running in default-deny mode, isolating each customer's control plane within its namespace and allowing only the minimal communication required for each tenant.",
  },
  {
    logo: wso2Logo,
    title: 'Building Zero Trust into the Choreo platform',

    description:
      "Cilium enables Zero Trust networking in WSO2's Choreo platform. By applying identity-driven policies and API-level controls, WSO2 protects microservices, safeguards customer data, and ensures only authorized service-to-service communication is allowed.",
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/wso2/',
      },
      {
        CTAtext: 'Watch the Talk',
        url: 'https://www.youtube.com/watch?v=4_uP7r9My7g',
      },
      {
        CTAtext: 'Read The Blog',
        url: 'https://wso2.com/library/blogs/how-we-implemented-zero-trust-in-choreo/',
      },
    ],
  },
  {
    logo: UtmostLogo,
    title: 'Strengthening security and compliance across multi-cloud HR systems',

    description:
      'Utmost uses Cilium to apply consistent Zero Trust policies across multi-cloud environments, protecting sensitive HR data and making it easier to meet regulatory and compliance requirements. Cilium also gives the team full visibility into internal traffic and reduces the risk of lateral movement between services.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/utmost/',
      },
    ],
  },
  {
    logo: BloombergLogo,
    title: 'Enforcing Zero Trust data protection and access controls',

    description:
      'Bloomberg uses Cilium to protect its BQuant Enterprise workloads by implementing fine-grained network policies that prohibit unauthorised access and data exfiltration. Cilium allows Bloomberg to impose license limits across datasets, secure sensitive information, and obtain network observability via Hubble to improve troubleshooting and service map knowledge.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/bloomberg-2/',
      },
    ],
  },
];

const zeroTrustSolutions = [
  {
    icon: 'networkPolicy',
    title: 'Network Policy',
    description:
      'Cilium implements Kubernetes Network Policies for L3/L4 level and extends with L7 policies for fine grained API-level security for common protocols such as HTTP, Kafka, gRPC, etc.',
    buttonLink: '/use-cases/network-policy',
  },

  {
    icon: 'protocol-visibility',
    title: 'Advanced Network Protocol Visibility',
    description:
      "Cilium's protocol-aware visibility provides application owners with extensive insight into their workload's communications by natively understanding common protocols and enabling fine-grained observability of API-specific endpoints and DNS identities for external endpoints.",
    buttonLink: '/use-cases/protocol-visibility',
  },

  {
    icon: 'network-flow',
    title: 'Identity-aware L3/L4/DNS Network Flow Logs',
    description:
      'By providing real-time visibility into network flows with enhanced metadata, including identity-based information about Kubernetes workloads, Cilium simplifies the process of monitoring and troubleshooting network traffic in Kubernetes clusters.',
    buttonLink: '/use-cases/network-flow-logs',
  },

  {
    icon: 'multicast',
    title: 'Host Firewall',
    description:
      'Cilium Host Firewall ensures consistent, granular, and adaptable security for every node in your cluster, giving you the confidence to scale securely in even the most demanding environments.',
    buttonLink: '/use-cases/host-firewall',
  },
];

const ZeroTrustNetworkingPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="h-auto lg:w-[400px] self-center" />
    <Testimonial {...ws02Testimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent1} className="mt-10 md:mt-20 lg:mt-32" />
    <Stats {...wso2Stats} className="mt-10 md:mt-20 lg:mt-32" />
    <Heading tag="h2" className="mt-10 md:mt-20 lg:mt-32 text-center dark:text-white text-black">
      How Cilium scales Zero Trust Networking
    </Heading>
    <BulletSection {...sectionContent2} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent3} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent4} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent5} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent6} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...utmostTestimonial} className="my-10 md:my-20 lg:my-32" />
    <UseCaseCard
      heading="Who’s using Cilium for Zero Trust Networking"
      testimonials={testimonials}
    />
    <IndustryUseCases
      heading="Cilium’s Solutions for Zero Trust Networking"
      usecases={zeroTrustSolutions}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default ZeroTrustNetworkingPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description: 'How Cilium scales Zero Trust Networking',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
