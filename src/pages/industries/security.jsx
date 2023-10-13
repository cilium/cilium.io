import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import { SecurityCard } from 'components/pages/industries/cards/security';
import { TetragonCard } from 'components/pages/industries/cards/tetragon';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import Community from 'components/shared/community';
import Container from 'components/shared/container/container';
import SecurityImage2 from 'images/pages/industries/security-2.png';
import SecurityImage3 from 'images/pages/industries/security-3.png';
import SecurityImage4 from 'images/pages/industries/security-4.png';
import SecurityBee from 'images/pages/industries/security-bee.png';
import TetragonImage from 'images/pages/industries/tetragon.png';
import MainLayout from 'layouts/main/main';

import EncryptionIcon from './images/encryption.inline.svg';
import EnforcementIcon from './images/enforcement.inline.svg';
import GrayedEgdelessLogo from './images/logos/edgeless.svg';
import GrayedF5Logo from './images/logos/f5.svg';
import GrayedFRSCALogo from './images/logos/frsca.svg';
import GrayedGdataLogo from './images/logos/gdata.svg';
import GrayedKryptosLogo from './images/logos/kryptos.svg';
import GrayedPalantirLogo from './images/logos/palantir.svg';
import GrayedProtonLogo from './images/logos/proton.svg';
import GrayedTestifyLogo from './images/logos/testify.svg';
import NetworkPolicyIcon from './images/network-policy.inline.svg';
import ProcessIcon from './images/process.inline.svg';
import RuntimeEnforcementIcon from './images/runtime-enforcement.inline.svg';
import RuntimeIcon from './images/runtime.inline.svg';
import tetragonImage1 from './images/tetragon-illustration.png';

const heroContent = {
  heading: 'Security',
  texts: [
    'For businesses at the forefront of cybersecurity and those for whom security is integral to their operations, the rise of cloud native applications presents immense opportunities and accompanying challenges. The dynamism of cloud native architectures, from microservices to containerization and distributed computing, demands a paradigm shift in securing these environments.',
    'Traditional security approaches struggle to adapt to the ephemeral and dynamic nature of cloud native applications. ',
    'Cilium delivers robust cloud native security with features like zero trust security, transparent encryption, mutual TLS, security observability, and runtime protection. Leveraging eBPF, Cilium offers efficient observability across the entire application stack, integrates seamlessly with SIEM systems, and ensures compliance with standards like FIPS, FedRAMP, and SOC. Cilium aligns security practices with the realities of building, maintaining, and scaling cloud native applications.',
  ],
  imageSrc: SecurityBee,
  imageAlt: 'ebeedex security bee',
};

const tetragonContent = {
  heading: 'Tetragon: eBPF-based Security Observability and Runtime Enforcement',
  description:
    'Tetragon is a flexible Kubernetes-aware security observability and runtime enforcement tool that applies policy and filtering directly with eBPF, allowing for reduced observation overhead, tracking of any process, and real-time enforcement of policies.',
  imageSrc: TetragonImage,
  imageAlt: 'tetragon image logo',
};

const tetragonCardContents = [
  {
    title: 'Monitor Process Execution',
    text: 'Observe the complete lifecycle of every process on your machine with Kubernetes context awareness',
    icon: ProcessIcon,
  },
  {
    title: 'Runtime Security Policies',
    text: 'Translate high level policies for file monitoring, network observability, container security, and more into low overhead eBPF programs ',
    icon: RuntimeIcon,
  },
  {
    title: 'Real Time Enforcement',
    text: 'Synchronous monitoring, filtering, and enforcement completely in the kernel with eBPF',
    icon: EnforcementIcon,
  },
];

const bulletSection1 = {
  heading:
    'Better Understand Security Breaches and Recover Quickly with Cilium’s Forensics Capabilities.',
  paragraphs: [
    "Critical workloads that run in a Kubernetes environment require cloud native-aware tooling to perform efficient incident investigations and monitor key compliance requirements. Cilium's forensic capabilities enable SecOps teams and App owners to conduct security analysis with a native understanding of cloud native identities. Cilium provides a deep understanding of network flows from L3/L4 up to L7 and runtime visibility from OS to code executions in the pod.",
  ],
  withImage: true,
  imageSrc: SecurityImage2,
  imageAlt: '',
};

const bulletSection2 = {
  heading:
    'Ease Integration with Traditional Firewall Systems Using Cilium’s Static Egress Gateway',
  paragraphs: [
    "With Cilium's Static Egress Gateway, cloud-native workloads can be presented from stable IP addresses, easing integration with traditional firewall systems. This approach ensures that firewall requirements remain consistent even as workloads scale, fostering a bridge between cloud native and conventional environments. ",
  ],
  withImage: true,
  imageSrc: SecurityImage3,
  imageAlt: 'Cilium egress gateway illustration',
};

const bulletSection4 = {
  heading:
    "Bolster Security, Streamline Infrastructure, Reduce Complexity Without Sacrificing Performance Using Cilium's Mutual TLS",
  paragraphs: [
    "Organizations are increasingly looking to bolster their security posture in a cloud native environment. Cilium's sidecar-free service mesh uses mutual authentication to optimize security and performance, ensuring that services authenticate each other's identities before communication occurs.",
    'More than just authentication, Cilium extends the identity concept to processes, binaries, and execution contexts, allowing only specific binaries running in secure contexts to authenticate each other, thereby enhancing the overall security model.',
  ],
  withImage: true,
  imageSrc: SecurityImage4,
  imageAlt: "Cilium's mutual TLS illustration",
};

const securityTalks = [
  {
    title: 'The Next Log4jshell? Preparing for CVEs with eBPF!',
    description:
      'How open source eBPF based tools can give full network and process-level visibility to detect and prevent Log4jshell and your next CVE',
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

const securityAdopters = [
  GrayedPalantirLogo,
  GrayedEgdelessLogo,
  GrayedGdataLogo,
  GrayedFRSCALogo,
  GrayedProtonLogo,
  GrayedKryptosLogo,
  GrayedTestifyLogo,
  GrayedF5Logo,
];

const securityUsecases = [
  {
    icon: EncryptionIcon,
    title: 'Transparent Encryption ',
    url: '/use-cases/transparent-encryption',
    description:
      'Elevate compliance and lower risk with Cilium transparent encryption. With just one switch, no application changes, service meshes, or additional proxies',
  },

  {
    icon: NetworkPolicyIcon,
    title: 'Network Policy',
    url: '/use-cases/network-policy',
    description:
      'Maintain identity based policies effectively at scale with Cilium’s advanced network polices.',
  },
  {
    icon: RuntimeEnforcementIcon,
    title: 'Runtime Enforcement',
    url: '/use-cases/runtime-enforcement',
    description:
      'Prevent unauthorized access to your traffic at runtime to stop attacks on the OS level, preventing malicious actions.',
  },
];

const SecurityPage = () => (
  <MainLayout>
    <Hero {...heroContent} imageStyle="lg:h-[390px] lg:w-[350px]" />
    <SecurityCard {...tetragonContent} className="py-12" />
    <TetragonCard contents={tetragonCardContents} />
    <Container className="my-12 py-12">
      <img src={tetragonImage1} alt="tetragon architecture and features illustration" />
    </Container>
    <BulletSection {...bulletSection4} />
    <BulletSection {...bulletSection1} />
    <BulletSection {...bulletSection2} />
    <FeaturedTalks heading="Featured talks" talks={securityTalks} />
    <AdoptersLogo
      logos={securityAdopters}
      className="my-12 grid grid-cols-3 lg:grid lg:grid-cols-4"
    />
    <IndustryUseCases heading="Cilium’s Security Focused Use Cases" usecases={securityUsecases} />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default SecurityPage;
