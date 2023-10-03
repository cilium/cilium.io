import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import ResourcesCard from 'components/pages/industries/resources';
import AdopterTestimonial from 'components/pages/industries/testimonial';
import AzureLogo from 'icons/logo-azure.inline.svg';
import GoogleCloudLogo from 'icons/logo-googlecloud.inline.svg';
import HetznerLogo from 'icons/logo-hetzner.inline.svg';
import AstronautBee from 'images/pages/industries/astronaut-bee.png';

import BandWidthIcon from './images/bandwidth-latency-optimization.inline.svg';
import NativeSupportIcon from './images/native-support.inline.svg';

const heroContent = {
  heading: 'Cloud Providers',
  texts: [
    'Most Cloud Providers provide their custom CNIs, resulting in operational complexity for customers operating in multi-cloud environments. For example, the configuration and capabilities of the AWS VPC CNI, Azure CNI, and OpenShift SDN are significantly different. This fragmentation increases overhead in installing, operating, and troubleshooting network interfaces across these cloud environments.',
    'Cilium addresses these issues by presenting a unified networking solution tailored for Kubernetes that is compatible across various clouds, providing a consistent workflow that simplifies operations. Using eBPF, Cilium extends beyond Kubernetes basic networking capabilities, offering enhanced observability, security, and reduced latency. Major cloud providers, including Google Cloud, AWS, Azure, and Alibaba, have all standardized on Cilium for Kubernetes networking and security as a testament to its efficiency. ',
  ],
  imageSrc: AstronautBee,
  imageAlt: 'astronaut public speaking bee',
};

const azureTestimonial = {
  logo: AzureLogo,
  description:
    'Cilium combines with the existing control plane of Azure CNI to bring a high-performance eBPF-based dataplane with extensive security and observability capabilities to Azure Kubernetes Service (AKS)',
  quotedText:
    'Azure Kubernetes Service will now be deployed with Cilium open sourced data plane and natively integrated with Azure CNI. Microsoft will handle first-line support and collaborate with Isovalent on specific support issues to their deep knowledge of the technology.',
  withPerson: true,
  name: 'Deepak Bansal',
  role: ' CVP and Technical Fellow, Microsoft Azure',
  url: 'https://www.youtube.com/watch?v=8it8Hm2F_GM',
};

const googleTestimonial = {
  logo: GoogleCloudLogo,
  description:
    'Google uses Cilium and eBPF as the new networking dataplane for Google’s managed Kubernetes offering (GKE) and Anthos.',
  quotedText:
    'The Cilium community has put in a tremendous amount of effort to bootstrap the Cilium project, which is the most mature eBPF implementation for Kubernetes out there. We at Google actively contribute to the Cilium project, so that the entire Kubernetes community can leverage the advances we are making with eBPF.',
  withPerson: true,
  name: 'Gobind Johar',
  role: 'Product Manager, Google Kubernetes Engine',
  url: 'https://cilium.io/blog/2020/08/19/google-chooses-cilium-for-gke-networking/',
};

const hertznerTestimonial = {
  description:
    'Hetzner Cloud is a German public cloud provider that supplies a variety of cloud products like load balancers, virtual machines, storage, and firewalls',
  quotedText:
    "Hetzner was looking to upgrade the company's current ingress architecture to a Kubernetes native solution that a offers ECMP, firewall, IPv6, and DSR capabilities. Overall, Cilium provided a massive increase in both RPS and throughput while still reducing CPU usage.",
  withPerson: true,
  name: 'Pol Arroyo',
  role: 'DevOps Engineer, Hetzner Cloud ',
};

const bulletSection1 = {
  heading:
    'Enhance Content Delivery and User Experience with Cilium’s Transparent Acceleration and  Load Balancing ',
  withImage: true,
  paragraphs: [
    'Streaming platforms and content delivery services need to scale rapidly to meet the ever-growing consumer demands for high-quality and on-demand media. Cilium offers intelligent load balancing, ensuring that the high volume of user requests typical for OTT platforms are distributed efficiently. This results in consistent content and smooth streaming experiences for end users.',
    'By leveraging technologies like XDP (eXpress Data Path), bandwidth manager, and BIG TCP, Cilium optimizes the datapath, significantly reducing latency. For an industry that thrives on seamless content delivery, this is paramount.',
  ],
  // imageSrc: MediaImage1,
  imageAlt: 'cilium big tcp stats',
};

const bulletSection2 = {
  heading: 'Robust Security, Scalability, and Flexibility at a Reduced Operational Overhead',
  paragraphs: [
    'Safeguarding content and user data is vital in media and entertainment. Cilium enables efficient workload isolation, protecting the entire ecosystem from potential breaches. As platforms grow, Cilium adapts to shifting network needs. ',
    "Cilium integrates with both traditional and cloud-native infrastructures. Companies like Cosmonic have extended Cilium beyond Kubernetes to platforms like Nomad. In scenarios where it is impossible to use Cilium as the Default CNI, Cilium's CNI chaining mode lets you utilize Cilium's features like Hubble for observability and Tetragon for security, ensuring organizations can benefit from Cilium regardless of their infrastructure choices.",
  ],
  withImage: true,
  // imageSrc: MediaImage2,
  imageAlt: 'cilium xdp',
};

// const mediaUsecases = [
//   {
//     icon: NativeSupportIcon,
//     title: 'Load Balancing ',
//     description:
//       ' Leverage the Power of Cilium’s XDP Acceleration for High-Speed, Efficient Load Balancing in Your Kubernetes Cluster',
//     url: '/use-cases/load-balancer',
//   },
//   {
//     icon: BandWidthIcon,
//     title: 'Bandwidth and Latency Optimization',
//     description:
//       'Optimize TCP and UDP workload with rate limiting and fair queuing. Rely on our TCP congestion control algorithm automization ',
//     url: '/use-cases/bandwidth-optimization',
//   },

//   {
//     icon: ServiceMapIcon,
//     title: 'Service Map',
//     description:
//       'Enable platform teams to provide self-service portal to app teams to observe their own workloads, dependencies, and flows.',
//     url: '/use-cases/service-map',
//   },
// ];

const MediaEntertainmentPage = () => (
  <MainLayout>
    <Hero {...heroContent} imageStyle="lg:h-[350px] lg:w-[350px] mb-24">
      <AdopterTestimonial {...azureTestimonial} />
    </Hero>
    {/* <BulletSection {...bulletSection1} />
    <BulletSection {...bulletSection2} /> */}
    <AdopterTestimonial {...hertznerTestimonial} className="mt-8 pb-8" />
    <AdopterTestimonial {...googleTestimonial} className="mt-8 pb-8" />

    {/* <AdoptersLogo className="my-16 grid grid-cols-4" logos={companyLogos} /> */}
    {/* <ResourcesCard
      heading="See Real World Stories on Companies in the Media and Entertainment Industry"
      resources={mediaResources}
    />
    <IndustryUseCases
      heading="Cilium’s Solutions for Media & Entertainment"
      usecases={mediaUsecases}
    /> */}
  </MainLayout>
);

export default MediaEntertainmentPage;

// export const Head = ({ location: { pathname } }) => {
//   const pageMetadata = { ...seo, slug: pathname };
//   return <SEO data={pageMetadata} />;
// };
