import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import { TetragonCard } from 'components/pages/industries/cards/tetragon';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import Testimonial from 'components/pages/industries/testimonial';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import GDataLogo from 'images/pages/industries/security/gdata.inline.svg';
import GuardianBee from 'images/pages/industries/security/guardian-bee.png';
import SecurityImage1 from 'images/pages/industries/security/security-1.webp';
import SecurityImage2 from 'images/pages/industries/security/security-2.png';
import SecurityImage3 from 'images/pages/industries/security/security-3.png';
import SecurityImage4 from 'images/pages/industries/security/security-4.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'Security',
  texts: [
    'For businesses at the forefront of cybersecurity and those for whom security is integral to their operations, the rise of cloud native applications presents immense opportunities and accompanying challenges. The dynamism of cloud native architectures, from microservices to containerization and distributed computing, demands a paradigm shift in securing these environments.',
    'Traditional security approaches struggle to adapt to the ephemeral and dynamic nature of cloud native applications. ',
    'Cilium delivers robust cloud native security with features like transparent encryption, mutual authentication, security observability, advanced network polices, egress gateway, and runtime enforcement. Leveraging eBPF, Cilium offers efficient observability across the entire application stack, integrates seamlessly with SIEM systems, and ensures compliance with standards like FIPS, FedRAMP, and SOC. Cilium aligns security practices with the realities of building, maintaining, and scaling cloud native applications.',
  ],
  imageSrc: GuardianBee,
  imageAlt: 'ebeedex security bee',
};

const tetragonContent = {
  heading: 'Tetragon: eBPF-based Security Observability and Runtime Enforcement',
  description:
    "<a href='https://tetragon.io' style='text-decoration: underline;' target='_blank'>Tetragon</a> is a flexible Kubernetes-aware security observability and runtime enforcement tool that applies policy and filtering directly with eBPF, allowing for reduced observation overhead, tracking of any process, and real-time enforcement of policies.",
  imageSrc: 'tetragon',
  imageAlt: 'tetragon image logo',
  contents: [
    {
      title: 'Monitor Process Execution',
      text: 'Observe the complete lifecycle of every process on your machine with Kubernetes context awareness',
      icon: 'process',
    },
    {
      title: 'Runtime Security Policies',
      text: 'Translate high level policies for file monitoring, network observability, container security, and more into low overhead eBPF programs ',
      icon: 'runtime',
    },
    {
      title: 'Real Time Enforcement',
      text: 'Synchronous monitoring, filtering, and enforcement completely in the kernel with eBPF',
      icon: 'enforcement',
    },
  ],
};

const ciliumTestimonial = {
  description:
    'The Cilium project has undergone security and fuzzing audits by a reputable third-party company, Ada Logics, and the CNCF has commissioned the resulting reports.',
  quotedText:
    'The overall conclusion is that Cilium is a well-secured project. The audit found no critical vulnerabilities and found a lot of positives about the security of Cilium. This included both the code displaying positive security awareness as well as the maintainers having thorough understanding about the security posture of Cilium.',
  withPerson: true,
  logo: 'cilium',
  url: 'https://www.cncf.io/blog/2023/02/13/a-well-secured-project-cilium-security-audits-2022-published/',
  CTAtext: 'Read The Blog Post',
  name: 'Adam Korczynski & David Korczynski',
  role: 'Security Researchers, Ada Logics',
};

const bulletSection1 = {
  heading:
    'Better Understand Security Breaches and Recover Quickly with Cilium’s Forensics Capabilities',
  paragraphs: [
    "Critical workloads that run in a Kubernetes environment require cloud native-aware tooling to perform efficient incident investigations and monitor key compliance requirements. Cilium's forensic capabilities enable SecOps teams and App owners to conduct security analysis with a native understanding of cloud native identities. Cilium provides a deep understanding of network flows from L3/L4 up to L7 and runtime visibility from OS to code executions in the pod.",
  ],
  imageSrc: SecurityImage2,
  imageAlt: 'tetragon runtime enforcement illustration',
};

const bulletSection3 = {
  heading:
    "Secure Modern Applications with Cilium's Advanced Network Policies. Scale Policies with Identities, Not IPs",
  paragraphs: [
    "Modern distributed applications rely on containers to facilitate agility in deploying new versions of their application and to scale out on demand. Typical firewalls secure workloads by filtering source IP addresses and ports, but in Kubernetes and other cloud native platforms, IP addresses are ephemeral. Traditional firewalls are not cloud native aware and can't be programmed on the fly as applications scale out or new versions are deployed. Updating the firewall constantly to adapt to the constant changes becomes impossible at scale. ",
    'Cilium features network policies that operate at layers 3, 4, and 7, providing more flexibility in managing ingress and egress traffic. By leveraging eBPF, Cilium can insert security rules based on service/pods/container identity rather than an IP address for identification as in the traditional systems. Cilium makes applying security policies in a dynamic container environment scalable by decoupling security from IP addressing, providing stronger security isolation, and adding the following functionality to the Kubernetes cluster.',
  ],
  imageSrc: SecurityImage1,
  imageAlt: 'l3 - l7 policy illustration',
};
const bulletSection2 = {
  heading:
    "Ease Integration with Traditional Firewall Systems Using Cilium's Static Egress Gateway",
  paragraphs: [
    "With Cilium's Static Egress Gateway, cloud native workloads can be presented from stable IP addresses, easing integration with traditional firewall systems. This approach ensures that firewall requirements remain consistent even as workloads scale, fostering a bridge between cloud native and conventional environments. ",
  ],
  imageSrc: SecurityImage3,
  imageAlt: 'Cilium egress gateway illustration',
  imageRight: false,
};

const bulletSection4 = {
  heading:
    "Bolster Security, Streamline Infrastructure, Reduce Complexity Without Sacrificing Performance Using Cilium's Mutual Authentication",
  paragraphs: [
    "Organizations are increasingly looking to bolster their security posture in cloud native environments. Cilium's sidecar-free service mesh uses mutual authentication to optimize security and performance, ensuring that services authenticate each other's identities before communication occurs.",
    'Cilium features network policies that operate at layers 3, 4, and 7, providing more flexibility in managing ingress and egress traffic. By leveraging eBPF, Cilium can insert security rules based on service/pods/container identity rather than an IP address for identification as in the traditional systems. Cilium makes applying security policies in a dynamic container environment scalable by decoupling security from IP addressing, providing stronger security isolation, and adding security functionality directly to the Kubernetes cluster.',
  ],
  imageSrc: SecurityImage4,
  imageAlt: "Cilium's mutual TLS illustration",
  imageRight: false,
};

const securityTalks = [
  {
    title: 'The Next Log4jshell? Preparing for CVEs with eBPF!',
    description:
      'See how Tetragon can give full network and process-level visibility to detect and prevent Log4jshell and your next CVE',
    videoSrc: 'https://www.youtube.com/embed/u8HKg5pENj4',
  },
  {
    title: 'Tutorial: Getting Familiar with Security Observability Using eBPF &Cilium Tetragon',
    description:
      'Better understand types of data and activity that should be monitored  to prevent malicious events, and the ability to detect a container escape.',
    videoSrc: 'https://www.youtube.com/embed/kTGU-Nc2Db0',
  },
  {
    title: 'Mutual Authentication with Cilium',
    description:
      "Cilium's Mutual Authentication provides authentication, confidentiality, and integrity for service-to-service communications.",
    videoSrc: 'https://www.youtube.com/embed/tE9U1gNWzqs',
  },
];

const securityLogos = [
  'palantir',
  'egdeless',
  'gdata',
  'frsca',
  'proton',
  'kryptos',
  'testify',
  'f5',
];

const testimonials = [
  {
    logo: GDataLogo,
    title: 'Migrating to Cilium for Better Networking, Visibility and Security',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/g-data-cyberdefense/',
      },
    ],
    description:
      'In the beginning, it was hard for our developers to write network policies because we were in our early Kubernetes adoption phase. Everyone had to learn a lot of stuff in Kubernetes and then also had to learn how to write network policies. Cilium helped reduce the mental overhead and helped speed up our development process so that we can bring new features to customers faster.',
    quote: true,
    person: 'Jan Jansen, Platform Engineer, G DATA',
  },
];

const securityUsecases = [
  {
    icon: 'encryption',
    title: 'Transparent Encryption ',
    buttonLink: '/use-cases/transparent-encryption',
    description:
      'Elevate compliance and lower risk with Cilium transparent encryption. With just one switch, no application changes, service meshes, or additional proxies',
  },

  {
    icon: 'networkPolicy',
    title: 'Network Policy',
    buttonLink: '/use-cases/network-policy',
    description:
      'Maintain identity based policies effectively at scale with Cilium’s advanced network polices.',
  },
  {
    icon: 'runtimeEnforcement',
    title: 'Runtime Enforcement',
    buttonLink: '/use-cases/runtime-enforcement',
    description:
      'Prevent unauthorized access to your traffic at runtime to stop attacks on the OS level, preventing malicious actions.',
  },
];

const SecurityPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="scale-75" />
    <Testimonial {...ciliumTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection3} className="mt-10 md:mt-20 lg:mt-32" />
    <TetragonCard {...tetragonContent} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection4} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection1} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection2} className="my-10 md:my-20 lg:my-32" />
    <FeaturedTalks talks={securityTalks} />
    <AdoptersLogo items={securityLogos} className="mt-10 md:mt-20 lg:mt-32" />
    <UseCaseCard
      heading="Who's Using Cilium in The Security Industry?"
      testimonials={testimonials}
    />
    <IndustryUseCases heading="Cilium's Security Focused Use Cases" usecases={securityUsecases} />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default SecurityPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description:
      'Discover how companies in the security industry and companies whom security is integral to their operations leverage cilium.',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
