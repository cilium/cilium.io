import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import ResourcesCard from 'components/pages/industries/resources';
import AdopterTestimonial from 'components/pages/industries/testimonial';
import NewYorkTimesLogo from 'icons/logo-newyork.inline.svg';
import SeznamLogo from 'icons/logo-seznam.inline.svg';
import MediaImage1 from 'images/pages/industries/media-1.png';
import PublicSPeakingBee from 'images/pages/industries/public-speaking-bee.png';
import MainLayout from 'layouts/main';

import BandWidthIcon from './images/bandwidth-latency-optimization.inline.svg';
import GrayedByteDanceLogo from './images/logos/bytedance.svg';
import GrayedNewYorkTimesLogo from './images/logos/newyork.svg';
import GrayedRadiofranceLogo from './images/logos/radiofrance.svg';
import GrayedSeznamLogo from './images/logos/seznam.svg';
import GrayedSkyBetLogo from './images/logos/skybet.svg';
import GrayedSportRadarLogo from './images/logos/sportradar.svg';
import GrayedWildLifeLogo from './images/logos/wildlife.svg';
import GrayedYahooLogo from './images/logos/yahoo.svg';
import NativeSupportIcon from './images/native-support.inline.svg';
import NewyorkTimeOfficeImage from './images/newyorkoffice.jpg';
import SeznamOfficeImage from './images/seznamoffice.jpg';
import YahooOfficeImage from './images/yahoooffice.png';

const heroContent = {
  heading: 'Media and Entertainment',
  texts: [
    'The Media and Entertainment industry is navigating a digital transformation era with scalability, security, and latency challenges—traditional tooling struggles to handle rising consumer demands for high-quality, on-demand media. Security vulnerabilities can threaten valuable content and customer data, while latency issues undermine user experience. These challenges are compounded by rising operational costs and increasingly stringent regulatory environments.',
    'Cilium is designed to provide high-performance, secure, and scalable networking and observability. It offers a wide range of features, helping companies in the media and entertainment industry deliver seamless experiences, reduce operational complexity, and secure their environment. ',
  ],
  imageSrc: PublicSPeakingBee,
  imageAlt: 'isovalent public speaking bee',
};

const newyorktimesTestimonial = {
  logo: NewYorkTimesLogo,
  description:
    'Cilium was a critical choice to increase networking performance while providing identity and application-aware security and visibility for cloud native workloads running on EKS at the New York Times.',
  quotedText:
    'Perhaps the most important feature from Hubble UI is the network flow itself. If you look deeper into the flow you’ll see full deep rich information about every single packet traversed between different services. And that’s important so that we can build understanding of how traffic is flung between services.',
  withPerson: true,
  name: 'Ahmed Bebars',
  role: 'Software Engineer, Delivery Engineering, The New York Times',
  url: 'https://cilium.io/blog/2022/10/13/publishing-user-story/',
};

const bulletSection1 = {
  heading:
    'Enhance Content Delivery and User Experience with Cilium’s Transparent Acceleration and  Load Balancing ',
  withImage: true,
  paragraphs: [
    'Streaming platforms and content delivery services need to scale rapidly to meet the ever-growing consumer demands for high-quality and on-demand media. Cilium offers intelligent load balancing, ensuring that the high volume of user requests typical for OTT platforms are distributed efficiently. This results in consistent content and smooth streaming experiences for end users.',
    'By leveraging technologies like XDP (eXpress Data Path), bandwidth manager, and BIG TCP, Cilium optimizes the datapath, significantly reducing latency. For an industry that thrives on seamless content delivery, this is paramount.',
  ],
  imageSrc: MediaImage1,
  imageAlt: 'cilium xdp',
};

const bulletSection2 = {
  heading: 'Robust Security, Scalability, and Flexibility at a Reduced Operational Overhead',
  paragraphs: [
    "In the media and entertainment industry, safeguarding proprietary content and user data is critical. Cilium, leveraging BPF, allows for efficient workload isolation, ensuring a breach in one segment doesn't jeopardize the entire ecosystem. As platforms expand, Cilium's adaptability meets changing network demands. Moreover, with Kubernetes as the go-to for containerized applications, Cilium's integration empowers companies to deploy and scale with unparalleled efficiency.",
  ],
};

const seznamTestimonial = {
  logo: SeznamLogo,
  url: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
  description:
    "Seznam.cz tested Cilium's Standalone L4LB XDP as an alternative to their IPVS load balancer due to increasing traffic concerns.",
  withPerson: true,
  quotedText:
    "nder synthetic load tests, IPVS began dropping packets around 3Mpps, whereas L4LB XDP managed up to 14.8Mpps before experiencing issues. In real-world applications, L4LB XDP demonstrated significantly better efficiency, handling similar traffic rates as IPVS but using only half a CPU compared to IPVS's 2x18 CPUs. The results indicate L4LB XDP's superior performance and efficiency over IPVS.",
  name: 'Ondrej Blazek',
  role: 'Infrastructure Engineer, Seznam.com',
};

const mediaResources = [
  {
    imageSrc: YahooOfficeImage,
    imageAlt: 'yahoo office building',
    title: 'Software L4 Load Balancing for Kubernetes Services at Yahoo',
    CTAtext: 'Watch the Talk',
    url: 'https://www.youtube.com/watch?v=-C86fBMcp5Q',
    description:
      'Yahoo improved load balancing performance and scalability by switching to Cilium L4 LB with XDP, achieving hardware-level efficiency and dynamic backend management.',
  },

  {
    imageSrc: NewyorkTimeOfficeImage,
    imageAlt: 'newyork times  office building',
    title: 'Designing and Securing a Multi-Tenant Runtime Environment at the New York Times',
    CTAtext: 'Watch the Talk',
    url: 'https://www.youtube.com/watch?v=9FDpMNvPrCw',
    description:
      'Yahoo improved load balancing performance and scalability by switching to Cilium L4 LB with XDP, achieving hardware-level efficiency and dynamic backend management.',
  },

  {
    imageSrc: SeznamOfficeImage,
    imageAlt: 'newyork times  office building',
    title: "From IPVS to L4LB XDP: Seznam.cz's Journey to Optimized Load Balancing",
    CTAtext: 'Read The Blog Post',
    url: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
    description:
      "Seznam.cz, a Czech tech company, tested Cilium's Layer 4 Load Balancer XDP against their existing IPVS system and found significant CPU efficiency gains.",
  },
];

const companyLogos = [
  GrayedByteDanceLogo,
  GrayedNewYorkTimesLogo,
  GrayedSkyBetLogo,
  GrayedSeznamLogo,
  GrayedSportRadarLogo,
  GrayedRadiofranceLogo,
  GrayedWildLifeLogo,
  GrayedYahooLogo,
];

const mediaUsecases = [
  {
    icon: NativeSupportIcon,
    title: 'Load Balancing ',
    description:
      ' Leverage the Power of Cilium’s XDP Acceleration for High-Speed, Efficient Load Balancing in Your Kubernetes Cluster',
    url: '/use-cases/load-balancer',
  },
  {
    icon: BandWidthIcon,
    title: 'Bandwidth and Latency Optimization',
    description:
      'Optimize TCP and UDP workload with rate limiting and fair queuing. Rely on our TCP congestion control algorithm automization ',
    url: 'use-cases/bandwidth-optimization',
  },
];

const MediaEntertainment = () => (
  <MainLayout>
    <Hero {...heroContent}>
      <AdopterTestimonial {...newyorktimesTestimonial} />
    </Hero>
    <BulletSection {...bulletSection1} />
    <BulletSection {...bulletSection2} />
    <AdopterTestimonial {...seznamTestimonial} />
    <AdoptersLogo className="my-16 lg:grid lg:grid-cols-4" logos={companyLogos} />
    <ResourcesCard
      heading="See Real World Stories on Companies in the Media and Entertainment Industry"
      resources={mediaResources}
    />
    <IndustryUseCases
      heading="Cilium’s Solutions for Media & Entertainment"
      usecases={mediaUsecases}
    />
  </MainLayout>
);

export default MediaEntertainment;

// export const Head = ({ location: { pathname } }) => {
//   const pageMetadata = { ...seo, slug: pathname };
//   return <SEO data={pageMetadata} />;
// };
