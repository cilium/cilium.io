import React from 'react';

import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase';
import Testimonial from 'components/pages/industries/testimonial';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import Community from 'components/shared/community';
import Heading from 'components/shared/heading';
import SEO from 'components/shared/seo';
import EccoLogo from 'icons/ecco.inline.svg';
import KakaoLogo from 'icons/kakao.inline.svg';
import MeltwaterLogo from 'icons/logo-meltwater.inline.svg';
import SeznamLogo from 'icons/logo-seznam.inline.svg';
import SmartnewsLogo from 'icons/smartnews.inline.svg';
import SavingsImage1 from 'images/pages/outcomes/cost-and-carbon-savings/cc-image1.png';
import SavingsImage2 from 'images/pages/outcomes/cost-and-carbon-savings/cc-image2.png';
import SavingsBee from 'images/pages/outcomes/cost-and-carbon-savings/savings-bee.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'Cost and Carbon Savings',
  tagline: 'Do more with less',
  texts: [
    'Manual and legacy network systems often come with hidden overhead like inefficient IP usage, many network redirects, and cloud charges that add up fast. Cilium removes these inefficiencies with a streamlined, eBPF-powered network engine, lowering costs while reducing compute waste and carbon dioxide emissions.',
  ],
  imageSrc: SavingsBee,
  imageAlt: 'savings bee',
};

const EccoTestimonial = {
  logo: 'ecco',
  description:
    'ECCO’s IT infrastructure, nearly 100% Kubernetes-based, is designed to facilitate machine learning (ML) workflows that enable intelligent decision making and supply chain management.',
  quotedText: [
    'Our new storage system and networking setup powered by Cilium provided up to a 50% reduction in storage operational cost, and it’s all thanks to Cilium enabling a more efficient network. Even with IPv6 networks, enabling Cilium was just a flip of a switch. It was surprisingly straightforward.',
  ],
  withPerson: true,
  name: 'George Zubrienko',
  role: 'Data & AI lead platform engineer, ECCO',
  url: 'https://www.cncf.io/case-studies/ecco/',
  CTAtext: 'Read The Case Study',
};

const KakaoTestimonial = {
  logo: 'kakao',
  description:
    'Kakao Corp is a South Korean company known for its popular messaging application, KakaoTalk, that serves over 50 million users. They not only help people stay connected but also offer additional services such as maps, comics, online shopping, banking, taxis, and more.',
  quotedText: [
    'As an engineer, I can say that Cilium has lowered our costs for performance and network. Because we have so many clusters and nodes, we always need more machines for new services to be served. By reducing network costs and CPU consumption with Cilium, we can manage with fewer nodes. Compared to kube-proxy, Calico, or Flannel, Cilium offers more value in that aspect.',
  ],
  withPerson: true,
  name: 'Kwang Hun Choi',
  role: 'Cloud Engineer, Kakao Corp',
  url: 'https://www.cncf.io/case-studies/kakao/',
  CTAtext: 'Read The Case Study',
};

const sectionContent1 = {
  heading: 'Why Sustainability Starts at the Network Layer',
  paragraphs: [
    '​​In Kubernetes environments, inefficiencies in networking can grow quickly. Traditional solutions are often heavy on resource consumption, requiring extra nodes, IP addresses, and compute power. This not only inflates costs but also increases energy use and carbon emissions. Cilium changes that by optimizing network paths, removing unnecessary components, and providing granular observability, meaning teams can reclaim resources, cut bills, and improve sustainability.',
  ],
  videoSrc: 'https://www.youtube.com/embed/LCQ89uBB7zE',
  imageRight: true,
};

const sectionContent2 = {
  heading: 'eBPF-powered dataplanes cut CPU costs',
  paragraphs: [
    'Cilium replaces traditional kube-proxy and iptables-based networking with an eBPF-based dataplane. This removes the need for userspace proxies and reduces the overhead of managing long rule chains. By processing traffic closer to the source, Cilium shortens the network path, lowers CPU consumption, and frees up compute resources for actual workloads, saving both money and energy.',
  ],
  imageSrc: SavingsImage1,
  imageAlt: 'cilium big tcp stats',
  imageRight: true,
};

const sectionContent3 = {
  heading: 'High pod density with lean IP allocation',
  paragraphs: [
    'Particularly when used at scale, other CNIs may require large blocks of IP addresses for every node, limiting pod density and resulting in wasted resources. Because Cilium manages IP allocation more efficiently, you can run more pods per node without running out of IPs. This improves resource utilisation and decreases infrastructure and electricity costs by reducing the number of nodes needed.',
  ],
  videoSrc: 'https://www.youtube.com/embed/yikVhGM2ye8',
  imageRight: false,
};

const sectionContent4 = {
  heading: 'Eliminate cloud load balancer charges',
  paragraphs: [
    "With Cilium's Cluster Mesh, native pod-to-pod communication between clusters is possible without the need for costly cloud load balancers. This simplifies your architecture and prevents excessive data transfer fees. By removing external dependencies, teams gain more control over traffic, reduce latency, and cut down significantly on cloud networking costs.",
  ],
  imageSrc: SavingsImage2,
  imageWidth: 624,
  imageHeight: 399,
  imageAlt: 'multi-cluster illustration',
  imageRight: true,
};

const testimonials = [
  {
    logo: SmartnewsLogo,
    title: 'Cutting networking overhead at scale',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/smartnews',
      },
    ],
    description:
      'SmartNews adopted Cilium to reduce the compute and cost impact of Kubernetes networking. With eBPF-based routing and automated policy enforcement, they reduced the number of nodes needed to run their workloads efficiently and improved resource efficiency, and direct savings on infrastructure and energy.',
  },
  {
    title: 'Lowering network costs while debugging faster',
    logo: KakaoLogo,
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/kakao/',
      },
    ],
    description:
      'Kakao transitioned from kube-proxy to Cilium’s eBPF dataplane across 7,000 clusters and more than 120,000 nodes. This move cut network and performance costs, simplified operations by removing proxies, and sped up debugging workflows, resulting in fewer nodes and lower emissions.',
  },
  {
    logo: SeznamLogo,
    title: 'Lower costs with high-performance',

    description:
      'Seznam adopted Cilium to modernize its networking stack. The migration delivered improved network performance while also reducing both capital and operational costs, helping Seznam operate more efficiently at scale.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/seznam/',
      },
    ],
  },
  {
    logo: EccoLogo,
    title: 'Cutting storage costs and cloud networking complexity',

    description:
      'ECCO chose Cilium with Cluster Mesh to simplify multi-cluster communication and avoid costly cloud load balancers and NAT gateways. This decreased storage costs by 50% and reduced latency by over 30%. ',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/ecco/',
      },
    ],
  },
  {
    logo: MeltwaterLogo,
    title: 'Reducing cloud bills and IP footprint',

    description:
      'By migrating from AWS VPC CNI, Meltwater eliminated API rate limits and lowered IP usage with Cilium’s more efficient IP address management. Their performance improved and AWS costs dropped significantly.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/meltwater/',
      },
    ],
  },
];

const SavingSolutions = [
  {
    icon: 'bandWidth',
    title: 'Bandwidth and Latency Optimization',
    description:
      'Cilium adds fine-grained rate-limiting and intelligent traffic control to help manage pod network contention, improve throughput, and ensure low-latency performance, especially in large or externally exposed clusters. By optimizing bandwidth usage and reducing unnecessary resource strain, Cilium also helps reduce infrastructure costs.',
    buttonLink: '/use-cases/bandwidth-optimization',
  },
  {
    icon: 'scalableKubernetes',
    title: 'High Performance Container Network Interface (CNI)',
    description:
      'Cilium replaces traditional Container Network Interfaces with a lightweight, eBPF-based implementation that reduces overhead, eliminates IP exhaustion issues, and improves pod density, all while cutting resource usage.',
    buttonLink: '/use-cases/cni',
  },
  {
    icon: 'kubeProxy',
    title: 'Kube-proxy Replacement',
    description:
      'As a replacement for kube-proxy, Cilium eliminates iptables and speeds up service routing. This boosts performance and reduces CPU cycles from inefficient packet processing.',
    buttonLink: '/use-cases/kube-proxy',
  },
];

const SavingsPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="h-auto lg:w-[280px] mx-auto" />
    <BulletSection {...sectionContent1} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...EccoTestimonial} className="my-10 md:my-20 lg:my-32" />
    <Heading tag="h2" className="mt-10 md:mt-20 lg:mt-32 text-center dark:text-white text-black">
      How Cilium Saves Money and Carbon
    </Heading>
    <BulletSection {...sectionContent2} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent3} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent4} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...KakaoTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <UseCaseCard heading="Who’s Saving with Cilium" testimonials={testimonials} />
    <IndustryUseCases
      heading="Cilium’s Solutions for Costs and Carbon Saving"
      usecases={SavingSolutions}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default SavingsPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description: 'How Cilium delivers Network Automation',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
