import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import ResourcesCard from 'components/pages/industries/resources';
import AdopterTestimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import BellLogo from 'icons/logo-bell.inline.svg';
import BulldozerBee from 'images/pages/industries/bulldozer-bee.png';
import TelcoImage1 from 'images/pages/industries/telco-1.webp';
import TelcoImage2 from 'images/pages/industries/telco-2.png';
import TelcoImage3 from 'images/pages/industries/telco-3.webp';
import MainLayout from 'layouts/main';

import BandWidthIcon from './images/bandwidth-latency-optimization.inline.svg';
import BellOfficeImage from './images/belloffice.png';
import BGPIcon from './images/bgp.inline.svg';
import ScalableKubernetesIcon from './images/scalable-kubernetes.inline.svg';

const heroContent = {
  heading: 'Telcos and Data Center Operators',
  texts: [
    'Telcos grapple with the challenges of maintaining legacy technologies, complying with regulatory constraints, and the complexity of managing and delivering diversified service offerings. In an increasingly evolving landscape, advancements with technologies like 5G further amplify the demand for flexible and efficient network solutions.',
    "Cilium provides a comprehensive suite of capabilities that empower telcos and data center providers to transition seamlessly from traditional infrastructure to cloud native environments. As operators transition from IPv4 to IPv6, Cilium's NAT46/64 support provides a smooth pathway to ease this transition. Cilium's IPv6 support with BGP lets users advertise their IPv6 Pod CIDRs. Cilium's SRv6 L3VPN offers a scalable and flexible solution for interconnecting multiple sites while maintaining end-to-end network slicing and service isolation. Notably, Cilium supports SCTP, a protocol typically used by service providers and mobile operators. ",
  ],
  imageSrc: BulldozerBee,
  imageAlt: 'ebeedex public speaking bee',
};

const bellTestimonial = {
  logo: BellLogo,
  description:
    "Bell is Canada's largest telecommunications company, providing mobile phone, TV, high speed and wireless Internet, and residential home phone services.",
  quotedText:
    'With Cilium, Kubernetes Pods now have a single interface with only a default route. Nothing complex, no forwarding rules, no insanities of IPv6 static routes! And from a developer perspective, you just assign a VRF and the rest is really quite simple.',
  withPerson: true,
  name: 'Daniel Bernier',
  role: 'Technical  Director, Bell Canada',
  url: 'https://www.youtube.com/watch?v=vJaOKGWiyvU',
};

const bulletSection1 = {
  heading:
    'Simplify Integration Between Kubernetes Environments and Existing Network Infrastructure With CIlium’s BGP',
  withImage: true,
  paragraphs: [
    'Telco and data center operators often have a blend of cloud native and legacy systems that require seamless communication. BGP, a common data center connectivity protocol is not natively integrated in Kubernetes.',
    "With Cilium's native BGP support, operators can interconnect their legacy environment with a Cilium-managed environment, integrate seamlessly with Top of Rack devices, and automatically advertise pod CIDRs to BGP neighbors. Operators can also significantly reduce CAPEX by leveraging Cilium's standalone load balancer to replace expensive legacy hardware load balancers.",
  ],
  imageSrc: TelcoImage1,
  imageAlt: 'cilium bgp',
};

const bulletSection2 = {
  heading: 'Future-proof Operations with Cilium’s Dual Stack IPv4/IPv6 and NAT46/64 Support',
  paragraphs: [
    "Cilium's dual-stack IPv4/IPv6 networking allows each pod to be allocated IPv4 and IPv6 addresses, ensuring seamless communication with modern IPv6 systems and legacy IPv4 applications and services. For businesses in the process of transitioning from IPv4 to IPv6, Cilium's NAT46/64 support provides a pathway to ease this transition. Cilium's IPv6 support with BGP lets users advertise their IPv6 Pod CIDRs. Together, these features offer scalability and prepare businesses for a future where IPv6 will be the norm rather than the exception.",
  ],
  withImage: true,
  imageSrc: TelcoImage2,
  imageAlt: 'cilium big tcp over IPv6',
};

const bulletSection3 = {
  heading:
    'Connect Multiple Sites While Maintaining End-to-End Network Slicing and Service Isolation with Cilium’s SRv6 L3VPN',
  paragraphs: [
    'Cilium supports SRv6 L3VPN, enabling users to cross-connect Kubernetes worker nodes to other services and Kubernetes clusters using Segment Routing over IPv6 (SRv6). This feature allows users to create virtual private networks that span multiple sites, providing secure and isolated connectivity between Kubernetes clusters, data centers, and public clouds.',
  ],
  withImage: true,
  imageSrc: TelcoImage3,
  imageAlt: 'cilium SRv6',
};

const telcoTalks = [
  {
    title: 'Leveraging Cilium and SRv6 for Telco Networking',
    description:
      'Learn how Cilium and its eBPF data plane was extended to support telco networking requirements in a cloud native way',
    videoSrc: 'https://www.youtube.com/embed/vJaOKGWiyvU',
  },
  {
    title: 'eCHO Episode 59: Dual Stack with Cilium',
    videoSrc: 'https://www.youtube.com/embed/SwXvGeMy3Wg',
    description: "Watch Cilium's out-of-the-box support for both IPv4 and IPv6",
  },
  {
    title: 'BGP with Cilium',
    description:
      'Interconnect Cilium-managed clusters with an existing network without using a  3rd party tool.',
    videoSrc: 'https://www.youtube.com/embed/AXTKS0WCXjE',
  },
];

const telcoResources = [
  {
    imageSrc: BellOfficeImage,
    imageAlt: 'bell canada office building',
    title: 'Leveraging Cilium and SRv6 for Telco Networking',
    CTAtext: 'Watch the Talk',
    url: 'https://www.youtube.com/watch?v=vJaOKGWiyvU',
    description:
      'Bell is extending Cilium data plane to support telco networking requirements in a cloud native way to provide network segmentation and Multi-VRF support with or without the use of multiple interfaces.',
  },

  {
    imageSrc: BellOfficeImage,
    imageAlt: 'Bell canada office building',
    title: 'Implementing Telco Services with the Cloud',
    CTAtext: 'Watch the Talk',
    url: 'https://www.segment-routing.net/images/MPLS-WC-2023/20230419-SR-Paris-Bell-slides.pdf',
    description:
      'The race to 5G has seen the global operators  movement like Bell collaborate with hyper scaler clouds to deliver next generation network experiences for customers leveraging tools like Cilium and eBPF ',
  },
];

const telcoLogos = ['bell', 'equinix', 'masmovil', 'telenor', 'tsystems'];

const telcoUsecases = [
  {
    icon: ScalableKubernetesIcon,
    title: 'High Performance Cloud Native Networking (CNI)',
    description:
      'Enabling network operators to abstract and manage the cloud native network, including on-prem integration with BGP and overlay networking compatible with Cloud SDNs.',
    url: '/use-cases/cni',
  },
  {
    icon: BGPIcon,
    title: 'BGP',
    description:
      'Make Pod networks and/or Services of type LoadBalancer reachable from outside the cluster for environments that support BGP.',
    url: '/use-cases/bgp',
  },

  {
    icon: BandWidthIcon,
    title: 'Bandwidth and Latency Optimization',
    description:
      'Optimize your bandwidth and latency with rate limiting and fair queuing. Rely on Cilium’s TCP congestion control algorithm automization.',
    url: '/use-cases/bandwidth-optimization',
  },
];

const MediaEntertainmentPage = () => (
  <MainLayout>
    <Hero {...heroContent} imageStyle="">
      <AdopterTestimonial {...bellTestimonial} />
    </Hero>
    <BulletSection {...bulletSection1} />
    <BulletSection {...bulletSection2} />
    <BulletSection {...bulletSection3} />
    <FeaturedTalks heading="Featured talks" talks={telcoTalks} />
    <AdoptersLogo className="my-16 grid grid-cols-4" items={telcoLogos} />
    <ResourcesCard
      heading="Transform Your Telecom Infrastructure with Cilium: Your Gateway to 5G, Edge Computing, and Beyond"
      resources={telcoResources}
    />
    <IndustryUseCases
      heading="Cilium’s Solutions for Telco and Data Center Operators"
      usecases={telcoUsecases}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default MediaEntertainmentPage;

// export const Head = ({ location: { pathname } }) => {
//   const pageMetadata = { ...seo, slug: pathname };
//   return <SEO data={pageMetadata} />;
// };
