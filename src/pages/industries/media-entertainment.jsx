import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import ResourcesCard from 'components/pages/industries/resources';
import Testimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import MediaImage1 from 'images/pages/industries/media-entertainment/media-1.png';
import MediaImage2 from 'images/pages/industries/media-entertainment/media-2.png';
import NewyorkTimeOfficeImage from 'images/pages/industries/media-entertainment/newyorkoffice.png';
import PublicSPeakingBee from 'images/pages/industries/media-entertainment/public-speaking-bee.png';
import SkyOfficeImage from 'images/pages/industries/media-entertainment/skyoffice.png';
import YahooOfficeImage from 'images/pages/industries/media-entertainment/yahoooffice.png';
import MainLayout from 'layouts/main';

const heroContent = {
  heading: 'Media and Entertainment',
  texts: [
    'The Media and Entertainment industry is navigating a digital transformation era with scalability, security, and latency challenges—traditional tooling struggles to handle rising consumer demands for high-quality, on-demand media. Security vulnerabilities can threaten valuable content and customer data, while latency issues undermine user experience. Rising operational costs and increasingly stringent regulatory environments compound these challenges.',
    'Media companies must deliver high-quality content to a vast and global audience. This requires infrastructure that can handle spikes in demand, especially during live events and popular content releases. Cilium offers intelligent load balancing, ensuring that the high volume of user requests typical for OTT platforms are distributed efficiently. This results in consistent content and smooth media experiences for end users. Load balancing across multi-cloud and hybrid cloud clusters is easier to configure and operate with Cilium, allowing the design of more resilient and fault-tolerant infrastructure.',
    'Leverage the Cilium advantage to deliver seamless experiences to your users, reduce operational complexity for your teams, and secure your environments.',
  ],
  imageSrc: PublicSPeakingBee,
  imageAlt: 'ebeedex public speaking bee',
};

const newyorktimesTestimonial = {
  logo: 'newYorkTimes',
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
  heading: "Global Content Delivery at Scale with Cilium's Load Balancing",
  paragraphs: [
    "Companies in the media and entertainment industry with strict latency and failover requirements can benefit from Cilium's scalable load balancing with XDP, an eBPF-based high-performance data path. Production users found it doubled throughput while reducing CPU usage by 72x. Cilium's standalone Layer 4 load balancer comes at a fraction of the cost of traditional hardware load balancers while delivering higher performance.",
  ],
  imageSrc: MediaImage2,
  imageAlt: 'cilium big tcp stats',
};

const bulletSection2 = {
  heading: 'Robust Security, Scalability, and Flexibility at a Reduced Operational Overhead',
  paragraphs: [
    "Many companies in the media and entertainment industries maintain legacy infrastructure for varying reasons. Cilium is flexible enough to integrate with both traditional and cloud native infrastructures. Companies like Cosmonic have extended Cilium beyond Kubernetes to platforms like Nomad. In scenarios where it is impossible to use Cilium as the Default CNI, Cilium's CNI chaining mode lets you utilize Cilium's features like Hubble for observability and Tetragon for security. Companies running workloads on non-k8s environments can leverage Cilium's Layer 4 standalone load balancer for efficient and scalable load balancing. This flexibility ensures your organization can benefit from Cilium regardless of your infrastructure choices.",
  ],
  imageSrc: MediaImage1,
  imageAlt: 'cilium xdp',
  imageRight: false,
};

const seznamTestimonial = {
  logo: 'seznam',
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
    buttonText: 'Watch the Talk',
    buttonLink: 'https://www.youtube.com/watch?v=-C86fBMcp5Q',
    description:
      'Yahoo improved load balancing performance and scalability by switching to Cilium L4 LB with XDP, achieving hardware-level efficiency and dynamic backend management.',
  },

  {
    imageSrc: NewyorkTimeOfficeImage,
    imageAlt: 'newyork times  office building',
    title: 'Designing and Securing a Multi-Tenant Runtime Environment at the New York Times',
    buttonText: 'Watch the Talk',
    buttonLink: 'https://www.youtube.com/watch?v=9FDpMNvPrCw',
    description:
      'Cilium was a critical choice to increase networking performance while providing identity and application-aware security and visibility for cloud native workloads running on EKS at the New York Times.',
  },

  {
    imageSrc: SkyOfficeImage,
    imageAlt: 'sky group  office building',
    title: 'Zero Trust Networking at Scale (20k+ VCPUs, 100+ Dev Teams)',
    buttonText: 'Watch the Talk',
    buttonLink: 'https://www.youtube.com/watch?v=1LXKafeuTPo',
    description:
      'Sky required a performant and secure solution to help them implement zero-trust network security and landed on leveraging additional features in Cilium as the answer.',
  },
];

const companyLogos = [
  'bytedance',
  'newyorktimes',
  'skybet',
  'seznam',
  'sportradar',
  'radiofrance',
  'wildlife',
  'yahoo',
];

const mediaUsecases = [
  {
    icon: 'nativeSupport',
    title: 'Load Balancing ',
    description:
      ' Leverage the power of Cilium’s XDP acceleration for high-speed, efficient Load Balancing in your Kubernetes cluster',
    buttonLink: '/use-cases/load-balancer',
  },
  {
    icon: 'bandWidth',
    title: 'Bandwidth and Latency Optimization',
    description:
      'Optimize TCP and UDP workload with rate limiting and fair queuing. Rely on our TCP congestion control algorithm for improved performance',
    buttonLink: '/use-cases/bandwidth-optimization',
  },

  {
    icon: 'serviceMap',
    title: 'Service Map',
    description:
      'Enable platform teams to provide a self-service portal to app teams to observe their own workloads, dependencies, and network flows',
    buttonLink: '/use-cases/service-map',
  },
];

const MediaEntertainmentPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="h-auto lg:w-[400px]" />
    <Testimonial {...newyorktimesTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection1} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...seznamTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection2} className="mt-10 md:mt-20 lg:mt-32" />
    <AdoptersLogo items={companyLogos} className="mt-10 md:mt-20 lg:mt-32" />
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

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description:
      'Discover how companies in the media and entertainment industry leverage cilium for robust security, scalability, and flexibility at a reduced operational overhead',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
