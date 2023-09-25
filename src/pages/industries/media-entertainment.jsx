import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import AdopterTestimonial from 'components/pages/industries/testimonial';
import NewYorkTimesLogo from 'icons/logo-newyork.inline.svg';
import SeznamLogo from 'icons/logo-seznam.inline.svg';
import PublicSPeakingBee from 'images/pages/industries/public-speaking-bee.png';
import MainLayout from 'layouts/main';

const heroContent = {
  heading: 'Media and Entertainment',
  texts: [
    'The Media and Entertainment industry is navigating a digital transformation era with scalability, security, and latency challenges—traditional tooling struggles to handle rising consumer demands for high-quality, on-demand media. Security vulnerabilities can threaten valuable content and customer data, while latency issues undermine user experience. These challenges are compounded by rising operational costs and increasingly stringent regulatory environments.',
    'Cilium is designed to provide high-performance, secure, and scalable networking and observability. It offers a wide range of features, helping companies in the media and entertainment industry deliver seamless experiences, reduce operational complexity, and secure their environment.',
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
  text: 'Streaming platforms and content delivery services need to scale rapidly to meet the ever-growing consumer demands for high-quality and on-demand media. Cilium offers intelligent load balancing, ensuring that the high volume of user requests typical for OTT platforms is distributed efficiently. This results in consistent and smooth streaming experiences for end-users By leveraging XDP (eXpress Data Path), Cilium optimizes the datapath, significantly reducing latency. For an industry that thrives on seamless content delivery, this is paramount.',
};

const bulletSection2 = {
  heading: 'Robust Security, Scalability, and Flexibility at a Reduced Operational Overhead',
  text: "In the media and entertainment industry, safeguarding proprietary content and user data is critical. Cilium, leveraging BPF, allows for efficient workload isolation, ensuring a breach in one segment doesn't jeopardize the entire ecosystem. As platforms expand, Cilium's adaptability meets changing network demands. Moreover, with Kubernetes as the go-to for containerized applications, Cilium's integration empowers companies to deploy and scale with unparalleled efficiency.",
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

const companyLogos = [];
const MediaEntertainment = () => (
  <MainLayout>
    <Hero {...heroContent}>
      <AdopterTestimonial {...newyorktimesTestimonial} />
    </Hero>
    <BulletSection {...bulletSection1} />
    <BulletSection {...bulletSection2} />
    <AdopterTestimonial {...seznamTestimonial} />
    <AdoptersLogo />
  </MainLayout>
);

export default MediaEntertainment;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = { ...seo, slug: pathname };
  return <SEO data={pageMetadata} />;
};
