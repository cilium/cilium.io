import React from 'react';

import BulletSection from 'components/pages/industries/bullet-section';
import SecurityCard from 'components/pages/industries/cards/security';
import TetragonCard from 'components/pages/industries/cards/tetragon';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import Container from 'components/shared/container/container';
import SecurityImage2 from 'images/pages/industries/security-2.png';
import SecurityImage3 from 'images/pages/industries/security-3.gif';
import SecurityBee from 'images/pages/industries/security-bee.png';
import TetragonImage from 'images/pages/industries/tetragon.png';
import MainLayout from 'layouts/main/main';

import EnforcementIcon from './images/enforcement.inline.svg';
import ProcessIcon from './images/process.inline.svg';
import RuntimeIcon from './images/runtime.inline.svg';
import tetragonImage1 from './images/tetragon-illustration.png';

const heroContent = {
  heading: 'Security',
  texts: [
    'For businesses at the forefront of cybersecurity and those for whom security is integral to their operations, the rise of cloud native applications presents immense opportunities and accompanying challenges. The dynamism of cloud native architectures, from microservices to containerization and distributed computing, demands a paradigm shift in securing these environments.',
    'Traditional security approaches struggle to adapt to the ephemeral and dynamic nature of cloud native applications. ',
    'Cilium delivers robust cloud native security with features like zero trust security, transparent encryption, security observability, and runtime protection. Leveraging eBPF,  Cilium offers efficient observability across the entire application stack, integrates seamlessly with SIEM systems, and ensures compliance with standards like FIPS, FedRAMP, and SOC. Cilium aligns security practices with the realities of cloud native applications.',
  ],
  imageSrc: SecurityBee,
  imageAlt: 'isovalent security bee',
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
    "Cilium's forensic capabilities prioritize quick and efficient issue investigation at the application level, while also enabling threat detection at the network level. By granting app owners multi-tenant access to network data flows, Cilium ensures deep insights into network flows, and provides easy-to-use tools for integration and analysis.",
  ],
  withImage: true,
  imageSrc: SecurityImage2,
  imageAlt: '',
};

const bullectSection2 = {
  heading:
    'Better Understand Security Breaches and Recover Quickly with Cilium’s Forensics Capabilities.',
  paragraphs: [
    "Cilium's forensic capabilities prioritize quick and efficient issue investigation at the application level, while also enabling threat detection at the network level. By granting app owners multi-tenant access to network data flows, Cilium ensures deep insights into network flows, and provides easy-to-use tools for integration and analysis.",
  ],
  withImage: true,
  imageSrc: SecurityImage3,
  imageAlt: '',
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
    title: 'Securing the Superpowers: Who Loaded That EBPF Program?',
    description:
      "Design for eBPF auditing and security and use Tetragon's (an open source eBPF based security tool) to show an implementation.",
    videoSrc: 'https://www.youtube.com/embed/UBVTJ0LeXxc',
  },
];
const SecurityPage = () => (
  <MainLayout>
    <Hero {...heroContent} imageStyle="lg:h-[395px] lg:w-[350px]" />
    <SecurityCard {...tetragonContent} className="py-12" />
    <TetragonCard contents={tetragonCardContents} />
    <Container className="my-12 py-12">
      <img src={tetragonImage1} alt="" />
    </Container>
    <BulletSection {...bulletSection1} />
    <BulletSection {...bullectSection2} />
    <FeaturedTalks heading="Featured talks" talks={securityTalks} />
  </MainLayout>
);

export default SecurityPage;
