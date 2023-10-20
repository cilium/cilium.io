import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import ResourcesCard from 'components/pages/industries/resources';
import AdopterTestimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import EficodeLogo from 'icons/logo-efficode.inline.svg';
import PalarkLogo from 'icons/logo-palark.inline.svg';
import ConsultingImage1 from 'images/pages/industries/consulting-1.png';
import ConsultingImage2 from 'images/pages/industries/consulting-2.jpg';
import ElectricianBee from 'images/pages/industries/electrician-bee.png';
import MainLayout from 'layouts/main/main';

import EficodeOfficeImage from './images/eficodeoffice.png';
import PalarkOfficeImage from './images/palarkoffice.png';
import TieToevryOfficeImage from './images/tietoevryoffice.png';

const heroContent = {
  heading: 'Consulting ',
  texts: [
    'Consultancy companies build and maintain software and infrastructure for diverse customers varying in size, industry, and technology stack. Customers typically have different requirements for fault tolerance, scalability, financial expenses, security, and more. As infrastructure stacks continue to evolve, consultancy firms need solutions that meet client expectations and also prepare their platforms for the future. ',
    'World-leading consulting companies are now turning to Cilium, leveraging its capabilities to deliver secure, high-performance, and observable cloud native solutions to clients ranging from startups, nationwide banks, and large enterprises. By adopting Cilium, consultancies ensure streamlined operations across varied client environments, positioning themselves at the forefront of cloud native innovation.',
  ],
  imageSrc: ElectricianBee,
  imageAlt: 'ebeedex electrician bee',
};

const eficodeTestimonial = {
  description:
    'Eficode is the leading DevOps consulting company in northern Europe, helping companies move to a cloud native thinking in their operations and technology. ',
  withPerson: true,
  quotedText:
    "As of today, we have our multi-cloud cluster running. We have nodes running in AWS, Azure, and virtual machines running on-prem, all part of the same cluster. So visibility is all through the same tool - Hubble, you can see it all. It is working quite well, and we're really happy with it.",
  name: 'Andy Alfred',
  role: 'Lead DevOps consultant, Efficode',
  logo: EficodeLogo,
  CTAtext: 'Watch the talk',
  url: 'https://www.youtube.com/watch?t=509&v=RdAO_Kxe6tE',
};

const palarkTestimonial = {
  description:
    'Palark leverages Cilium to design and maintain diverse infrastructure solutions for companies, catering to their unique needs across various industries, technologies, and deployment environments.',
  withPerson: true,
  quotedText:
    'We couldn’t be held back by the existing limitations any longer and decided to find another CNI to use in our Kubernetes platform — one that could handle all the new challenges. After settling on our new networking infrastructure in production environments and evaluating its performance and new features, we are pleased with our decision to adopt Cilium as its benefits are evident.',
  name: 'Anton Kuliashov',
  role: 'Software Engineer, Palark',
  logo: PalarkLogo,
  CTAtext: 'READ THE BLOG POST',
  url: 'https://blog.palark.com/why-cilium-for-kubernetes-networking/',
};

const bulletSection1 = {
  heading: "Easily Integrate With Customer's  Infrastructure.",
  paragraphs: [
    "Consulting companies cater to various clients with different choices of infrastructures and cloud providers. Operating across different environments often results in additional operational and resource overhead. Cilium provides a consistent experience for operators across different environments. With Cilium's cluster mesh,  multiple clusters can be joined into a large unified network regardless of the Kubernetes distribution or location each is running.",
    "Cilium also reduces the number of tools operators have to deal with; for example, Cilium's load balancing can replace traditional hardware load balancers. Cilium's Layer 2 announcement can eliminate the need for extra tooling like MetalLB. Together, these features ensure that consulting companies can offer uniform, high-quality services regardless of their client's chosen infrastructure.",
  ],
  withImage: true,
  imageSrc: ConsultingImage1,
  imageAlt: 'cilium mesh architecture illustration',
};

const bulletSection2 = {
  heading:
    'Visibility Into Customers Infrastructure Across Clouds, Clusters, and Premises, Independent of The Underlying Platform',
  paragraphs: [
    "Cilium's Hubble delivers comprehensive visibility across various platforms, whether on-premises, cloud, or clusters. This unified data plane approach allows for consistent monitoring across deployments, aiding in workload migration between clusters and simplifying the onboarding of new infrastructure providers.",
    'Observability data from Cilium  is made available using modern standards such as Prometheus and can be visualized using powerful tools such as Grafana. Cilium also supports traditional standards such as sFlow and NetFlow.',
  ],
  withImage: true,
  imageSrc: ConsultingImage2,
  imageAlt: "cilium's hubble illlustation",
};

const consultingLogos = [
  'palark',
  'tietoevry',
  'mobilab',
  'cengn',
  'cistec',
  'eficode',
  'innoq',
  'liquid',
  'nine',
  'schuberg',
  'ayedo',
  'superorbital',
];

const consultingResources = [
  {
    title: 'Cilium for Kubernetes networking: Why we use it and why we love it',
    description:
      'After years of relying on a simple solution, Palark faced a growing demand for advanced features backed by our customers’ needs. Cilium brought the networking in their Kubernetes platform to the next level',
    url: 'https://blog.palark.com/why-cilium-for-kubernetes-networking/',
    imageSrc: PalarkOfficeImage,
    imageAlt: 'palark office building',
    CTAtext: 'Watch the Talk',
  },

  {
    title: 'Reducing Kubernetes tool sprawl: Tietoevry uses Cilium and Hubble',
    description:
      'Tietroevry Industries reduced Kubernetes tool sprawl using Cilium, greatly simplifying its overall Kubernetes administration.',
    url: 'https://isovalent.com/blog/post/kubernetes-tool-sprawl/',
    imageSrc: TieToevryOfficeImage,
    imageAlt: 'tieotvry office building',
    CTAtext: 'Watch the Talk',
  },

  {
    title: 'Fostering a cloud native approach with Cilium',
    description:
      'Eficode uses Cilium on-prem and cloud across various client projects, including a nationwide European bank.',
    url: 'https://www.youtube.com/watch?v=RdAO_Kxe6tE&t=509s',
    imageSrc: EficodeOfficeImage,
    imageAlt: 'eficode logo',
    CTAtext: 'Watch the Talk',
  },
];

const ConsultingPage = () => (
  <MainLayout>
    <Hero {...heroContent} imageStyle="lg:h-[360px] lg:w-[360px] mb-24">
      <AdopterTestimonial {...palarkTestimonial} />
    </Hero>
    <BulletSection {...bulletSection1} />
    <BulletSection {...bulletSection2} className="mb-8" />
    <AdopterTestimonial {...eficodeTestimonial} className="mb-8" />
    <AdoptersLogo
      items={consultingLogos}
      className="mt-20 mb-16 grid grid-cols-3 lg:grid lg:grid-cols-4"
    />
    <ResourcesCard
      heading="Meet Customer’s Increasing Demand for Better Security, Performance, and Observability with Cilium"
      resources={consultingResources}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default ConsultingPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description:
      'Discover how consulting companies leverage Cilium to deliver solutions for a wide range of clients',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
