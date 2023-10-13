import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import ResourcesCard from 'components/pages/industries/resources';
import AdopterTestimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import NewYorkTimesLogo from 'icons/logo-newyork.inline.svg';
import SeznamLogo from 'icons/logo-seznam.inline.svg';
import MediaImage1 from 'images/pages/industries/media-1.webp';
import MediaImage2 from 'images/pages/industries/media-2.png';
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
import NewyorkTimeOfficeImage from './images/newyorkoffice.png';
import ServiceMapIcon from './images/service-map.inline.svg';
import SkyOfficeImage from './images/skyoffice.png';
import YahooOfficeImage from './images/yahoooffice.png';

const heroContent = {
  heading: 'Media and Entertainment',
  texts: [
    'The Media and Entertainment industry is navigating a digital transformation era with scalability, security, and latency challenges—traditional tooling struggles to handle rising consumer demands for high-quality, on-demand media. Security vulnerabilities can threaten valuable content and customer data, while latency issues undermine user experience. These challenges are compounded by rising operational costs and increasingly stringent regulatory environments.',
    'Cilium is designed to provide high-performance, secure, and scalable networking and observability. It offers a wide range of features, helping companies in the media and entertainment industry deliver seamless experiences, reduce operational complexity, and secure their environments. ',
  ],
  imageSrc: PublicSPeakingBee,
  imageAlt: 'ebeedex public speaking bee',
};

const newyorktimesTestimonial = {
  logo: NewYorkTimesLogo,
  description:
    'Cilium was a critical choice to increase networking performance while providing identity and application-aware security and visibility for cloud native workloads running on EKS at The New York Times.',
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
  imageAlt: 'cilium big tcp stats',
};

const bulletSection2 = {
  heading: 'Robust Security, Scalability, and Flexibility at a Reduced Operational Overhead',
  paragraphs: [
    'Safeguarding content and user data is vital in media and entertainment. Cilium enables efficient workload isolation, protecting the entire ecosystem from potential breaches. As platforms grow, Cilium adapts to shifting network needs. ',
    "Cilium integrates with both traditional and cloud-native infrastructures. Companies like Cosmonic have extended Cilium beyond Kubernetes to platforms like Nomad. In scenarios where it is impossible to use Cilium as the Default CNI, Cilium's CNI chaining mode lets you utilize Cilium's features like Hubble for observability and Tetragon for security, ensuring organizations can benefit from Cilium regardless of their infrastructure choices.",
  ],
  withImage: true,
  imageSrc: MediaImage2,
  imageAlt: 'cilium xdp',
};

const seznamTestimonial = {
  logo: SeznamLogo,
  url: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
  description:
    "Seznam.cz tested Cilium's Standalone L4LB XDP as an alternative to their IPVS load balancer due to increasing traffic concerns.",
  withPerson: true,
  quotedText:
    "Under synthetic load tests, IPVS began dropping packets around 3Mpps, whereas L4LB XDP managed up to 14.8Mpps before experiencing issues. In real-world applications, L4LB XDP demonstrated significantly better efficiency, handling similar traffic rates as IPVS but using only half a CPU compared to IPVS's 2x18 CPUs. The results indicate Cilium's L4LB XDP superior performance and efficiency over IPVS.",
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
      'Cilium was a critical choice to increase networking performance while providing identity and application-aware security and visibility for cloud native workloads running on EKS at the New York Times.',
  },

  {
    imageSrc: SkyOfficeImage,
    imageAlt: 'sky group  office building',
    title: 'Zero Trust Networking at Scale (20k+ VCPUs, 100+ Dev Teams)',
    CTAtext: 'Read The Blog Post',
    url: 'https://cilium.io/blog/2023/05/04/telecommunications-user-story/',
    description:
      'Sky required a performant and secure solution to help them implement zero-trust network security and landed on leveraging additional features in Cilium as the answer.',
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
      ' Leverage the power of Cilium’s XDP acceleration for high-speed, efficient Load Balancing in your Kubernetes cluster',
    url: '/use-cases/load-balancer',
  },
  {
    icon: BandWidthIcon,
    title: 'Bandwidth and Latency Optimization',
    description:
      'Optimize TCP and UDP workload with rate limiting and fair queuing. Rely on our TCP congestion control algorithm for improved performance',
    url: '/use-cases/bandwidth-optimization',
  },

  {
    icon: ServiceMapIcon,
    title: 'Service Map',
    description:
      'Enable platform teams to provide a self-service portal to app teams to observe their own workloads, dependencies, and network flows',
    url: '/use-cases/service-map',
  },
];

const MediaEntertainmentPage = () => (
  <MainLayout>
    <Hero {...heroContent} imageStyle="lg:h-[350px] lg:w-[350px] mb-24">
      <AdopterTestimonial {...newyorktimesTestimonial} />
    </Hero>
    <BulletSection {...bulletSection1} />
    <BulletSection {...bulletSection2} />
    <AdopterTestimonial {...seznamTestimonial} className="mt-8 pb-8" />
    <AdoptersLogo className="my-16 grid grid-cols-3 lg:grid lg:grid-cols-4" logos={companyLogos} />
    <ResourcesCard
      heading="See Real World Stories on Companies in the Media and Entertainment Industry"
      resources={mediaResources}
    />
    <IndustryUseCases
      heading="Cilium’s Solutions for Media and Entertainment"
      usecases={mediaUsecases}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default MediaEntertainmentPage;

// export const Head = ({ location: { pathname } }) => {
//   const pageMetadata = { ...seo, slug: pathname };
//   return <SEO data={pageMetadata} />;
// };
