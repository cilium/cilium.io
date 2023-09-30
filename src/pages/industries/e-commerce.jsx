import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import ResourcesCard from 'components/pages/industries/resources';
import Stats from 'components/pages/industries/stats';
import AdopterTestimonial from 'components/pages/industries/testimonial';
import NewYorkTimesLogo from 'icons/logo-newyork.inline.svg';
import SeznamLogo from 'icons/logo-seznam.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';
import MediaImage1 from 'images/pages/industries/media-1.webp';
import MediaImage2 from 'images/pages/industries/media-2.png';
import TravelBee from 'images/pages/industries/travel-bee.png';
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
  heading: 'E-commerce',
  texts: [
    'E-commerce platforms have a unique set of networking needs— in most cases, a highly dynamic microservices architecture, exponential increases in user traffic, diverse geographic distribution, and stringent data security requirements.',
    'Cilium addresses unique needs by offering exceptional networking, observability, and security features. By leveraging eBPF technology and seamless Kubernetes integration, Cilium enables easy deployment and management of microservices in a secure and scalable way. This powerful combination also simplifies the management of large Kubernetes deployments, aids in compliance with regulatory requirements, and provides deep visibility into network traffic.',
    'Join the next wave of high-performance e-commerce platforms leveraging the advanced capabilities of eBPF with Cilium to build scalable and secure e-commerce experiences. Gain the edge in speed, security, and observability.',
  ],
  imageSrc: TravelBee,
  imageAlt: 'isovalent public speaking bee',
};

const tripStats = {
  logo: TripLogo,
  url: 'https://www.cncf.io/case-studies/trip-com-group/',
  description:
    'Trip.com operates in 200 countries and 40 languages, using both on-premise and cloud-based Kubernetes.',
  CTAtext: 'READ THE CASE STUDY',
  stats: [
    {
      heading: 'HYBRID CLOUD',
      subHeading: 'With over 20,000 nodes',
    },
    {
      heading: '200,000',
      subHeading: 'Hubble events per second',
    },
    {
      heading: '3,000+',
      subHeading: 'Cilium network policy entries',
    },
  ],
};

const tripTestimonial = {
  logo: TripLogo,
  description:
    'Trip.com operates in 200 countries and 40 languages, using both on-premise and cloud-based Kubernetes. ',
  quotedText: '',
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
      ' Leverage the Power of Cilium’s XDP Acceleration for High-Speed, Efficient Load Balancing in Your Kubernetes Cluster',
    url: '/use-cases/load-balancer',
  },
  {
    icon: BandWidthIcon,
    title: 'Bandwidth and Latency Optimization',
    description:
      'Optimize TCP and UDP workload with rate limiting and fair queuing. Rely on our TCP congestion control algorithm automization ',
    url: '/use-cases/bandwidth-optimization',
  },

  {
    icon: ServiceMapIcon,
    title: 'Service Map',
    description:
      'Enable platform teams to provide self-service portal to app teams to observe their own workloads, dependencies, and flows.',
    url: '/use-cases/service-map',
  },
];

const MediaEntertainmentPage = () => (
  <MainLayout>
    <Hero {...heroContent} imageStyle="lg:h-[350px] lg:w-[350px] mb-24">
      <Stats {...tripStats} className="py-8" />
    </Hero>
    <BulletSection {...bulletSection1} />
    <BulletSection {...bulletSection2} />
    <AdopterTestimonial {...seznamTestimonial} className="mt-8 pb-8" />
    <AdoptersLogo className="my-16 grid grid-cols-4" logos={companyLogos} />
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

export default MediaEntertainmentPage;

// export const Head = ({ location: { pathname } }) => {
//   const pageMetadata = { ...seo, slug: pathname };
//   return <SEO data={pageMetadata} />;
// };
