import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import UseCaseCard from 'components/pages/use-cases/cards/use-case-card';
import ImageFeatureSection from 'components/pages/use-cases/image-feature-section';
import IntroSection from 'components/pages/use-cases/intro-section';
import VideoFeatureSection from 'components/pages/use-cases/video-feature-section';
import FRSCALogo from 'icons/logo-frsca.inline.svg';
import RuntimeEnforcementImage1 from 'images/pages/usecase/runtime-1.png';
import TetragonBee from 'images/pages/usecase/tetragon-bee.png';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'Runtime Enforcement',
  category: 'Security',
  tagline: 'Prevent threats and enforce policies in real-time',
  subHeading:
    'Achieve threat prevention in cloud native environments while maintaining operational agility',
  description:
    'Cloud native environments are often dynamic and distributed, requiring a security approach that encompasses detection and prevention. Observing and filtering events in user space can be resource-intensive and lead to blind spots in security monitoring, leaving systems vulnerable to attacks.',
  imageSrc: TetragonBee,
  imageAlt: 'Tetragon bee',
};

const sectionContent1 = {
  title: 'Security Observability and Runtime Enforcement with Cilium’s Tetragon',
  description:
    "Tetragon enables transparent security observability and real-time runtime enforcement through its eBPF-based technology. It provides deep visibility without requiring changes to the application and operates with low overhead through in-kernel filtering and aggregation logic built into the eBPF-based kernel-level collector. Tetragon's embedded runtime enforcement layer offers access control capabilities at various enforcement levels, including system call control. ",
  videoSrc: 'https://www.youtube.com/embed/EDGnwLnP9Do',
};

const sectionContent2 = {
  title: 'Kubernetes-aware Real Time Enforcement',
  description:
    'Tetragon is Kubernetes-aware, meaning it recognizes Kubernetes identities like namespaces and pods. This enables security event detection that can be tailored to individual workloads. Using eBPF, Tetragon can access the Linux kernel state and combine it with Kubernetes awareness and user policy to generate rules that are enforced by the kernel in real-time. This allows for capabilities like process namespace and capabilities annotation and enforcement, process file descriptor to filename association, and socket to process control.',
  imageSrc: RuntimeEnforcementImage1,
  imageAlt: 'identities with cilium',
  whiteBackground: true,
  imageRight: false,
};

const testimonials = [
  {
    logo: <FRSCALogo />,
    CTAtext: 'Check Out The Project',
    title: 'Integrating Tetragon  for Secured Build Pipelines',
    url: 'https://buildsec.github.io/frsca/',
    description:
      'Factory for Repeatable Secure Creation of Artifacts FRSCA is utilizing tetragon integrated with Tekton to create runtime attestation to attest artifact and builder attributes. ',
  },
];

const RuntimeEnforcementPage = () => (
  <MainLayout>
    <section className="bg-[#F6F7F8]">
      <IntroSection {...introContent} />
      <VideoFeatureSection {...sectionContent1} />
      <ImageFeatureSection {...sectionContent2} />
      <UseCaseCard
        heading="Who’s using  Cilium’s Tetragon for Security Observability and Runtime Enforcement?"
        testimonials={testimonials}
      />
      <JoinUsCard />
    </section>
  </MainLayout>
);

export default RuntimeEnforcementPage;
