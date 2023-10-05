import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import ResourcesCard from 'components/pages/industries/resources';
import AdopterTestimonial from 'components/pages/industries/testimonial';
import AzureLogo from 'icons/logo-azure.inline.svg';
import GoogleCloudLogo from 'icons/logo-googlecloud.inline.svg';
import HetznerLogo from 'icons/logo-hetzner.inline.svg';
import AstronautBee from 'images/pages/industries/astronaut-bee.png';
import CloudImage1 from 'images/pages/industries/cloud-1.png';
import MainLayout from 'layouts/main/main';

import AWSOfficeImage from './images/awsoffice.png';
import GoogleOfficeImage from './images/googleoffice.png';
import GrayedAlibabaCloudLogo from './images/logos/alibaba.svg';
import GrayedAWSLogo from './images/logos/aws.svg';
import GrayedAzureLogo from './images/logos/azure.svg';
import GrayedCivoLogo from './images/logos/civo.svg';
import GrayedDigitaloceanLogo from './images/logos/digitalocean.svg';
import GrayedGooglecloudLogo from './images/logos/google.svg';
import GrayedHetznerLogo from './images/logos/hetzner.svg';
import GrayedInfomaniakLogo from './images/logos/infomaniak.svg';
import GrayedOpenshiftLogo from './images/logos/openshift.svg';
import GrayedOpenStackLogo from './images/logos/openstack.svg';
import GrayedPlusserverLogo from './images/logos/plusserver.svg';
import GrayedScalewayLogo from './images/logos/scaleway.svg';
import GrayedSovereignCloud from './images/logos/sovereign.svg';
import GrayedTencentCloudLogo from './images/logos/tencentcloud.svg';
import MicrosoftOffice from './images/microsoftoffice.png';

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
  CTAtext: 'Read The Blog Post',
};

const hertznerTestimonial = {
  description:
    'Hetzner Cloud is a German public cloud provider that supplies a variety of cloud products like load balancers, virtual machines, storage, and firewalls',
  quotedText:
    "Hetzner was looking to upgrade the company's current ingress architecture to a Kubernetes native solution that a offers ECMP, firewall, IPv6, and DSR capabilities. Overall, Cilium provided a massive increase in both RPS and throughput while still reducing CPU usage.",
  withPerson: true,
  name: 'Pol Arroyo',
  role: 'DevOps Engineer, Hetzner Cloud ',
  url: 'https://cilium.io/blog/2023/01/25/hetzner-performance-testing/',
  CTAtext: 'Read The Blog Post',
  logo: HetznerLogo,
};

const bulletSection1 = {
  heading: 'Empowering Azure’s AKS Clusters with Cilium ',
  withImage: true,
  paragraphs: [
    "Cilium's open source data plane is natively integrated with Azure CNI in Azure Kubernetes Service (AKS). This integration allows users to tap into Cilium's feature-rich ecosystem, right from the Azure Marketplace. Microsoft has committed to handling first-line support, ensuring that Azure users benefit from rapid issue resolution and updates.    ",
  ],
  imageSrc: CloudImage1,
  imageAlt: 'cilium big tcp stats',
};

const bulletSection2 = {
  heading: "Hetzner Cloud's Adoption of Cilium for a Cloud Native Ingress Architecture",
  paragraphs: [
    'Hetzner Cloud, a leading German public cloud provider, recently overhauled its ingress architecture to pursue modern and scalable cloud services. Hetzner was scouting for a Kubernetes-native solution with ECMP, firewall, IPv6, and DSR capabilities. Cilium emerged as the ideal choice. Before adopting Cilium, Hetzner ran tests deploying diverse Cilium configurations in a Kubernetes cluster to benchmark RPS and throughput and then checking the CPU usage as a metric to compare the tests. These tests showed Cilium provided a massive increase in both RPS and throughput while still reducing CPU usage. ',
    "With Cilium's Kubernetes-native support, scalability, enhanced security, IPv6 compatibility, and efficiency with DSR, Cilium is a compelling choice for cloud providers. The results of Hetzner Cloud's performance tests highlight the value of adopting Cilium to elevate performance, security, and scalability in the cloud infrastructure landscape.",
  ],
};

const cloudTalks = [
  {
    title: 'Cilium on Azure: Most Scalable and Performant Implementation in the Cloud',
    videoSrc: 'https://www.youtube.com/embed/y3z6s-CTtU0',
    description:
      'Cilium in Azure will provide highly efficient load-balancing, extensive network security features, and rich observability integrated well along with robust and scalable Azure CNI IP management and native Azure networking routing,',
  },
  {
    title: 'From Managed Kubernetes to App Platform: Cilium Usage at DigitalOcean',
    videoSrc: 'https://www.youtube.com/embed/xez34h7EY3A',
    description: "Digital Ocean's Managed Kubernetes aka DKOS uses Cilium extensively.",
  },
  {
    title: 'Cilium, eBPF, and EKS Anywhere',
    videoSrc: 'https://www.youtube.com/embed/ez0YUyoxMcg',
    description:
      'How Cilium and its eBPF data plane was extended to support telco networking requirements in a cloud native way',
  },
];

const cloudAdoptersLogo = [
  GrayedGooglecloudLogo,
  GrayedAWSLogo,
  GrayedAzureLogo,
  GrayedAlibabaCloudLogo,
  GrayedDigitaloceanLogo,
  GrayedScalewayLogo,
  GrayedHetznerLogo,
  GrayedInfomaniakLogo,
  GrayedCivoLogo,
  GrayedTencentCloudLogo,
  GrayedOpenshiftLogo,
  GrayedSovereignCloud,
  GrayedOpenStackLogo,
  GrayedPlusserverLogo,
];

const cloudResouces = [
  {
    title: 'AWS picks Cilium for Networking & Security on EKS Anywhere',
    description:
      'AWS picked Cilium as the built-in default for networking and security. As you create your first EKS Anywhere (EKS-A) cluster, you will automatically have Cilium installed.',
    url: 'https://isovalent.com/blog/post/2021-09-aws-eks-anywhere-chooses-cilium/',
    imageSrc: AWSOfficeImage,
    imageAlt: 'aws office building',
    CTAtext: 'Learn More',
  },
  {
    title: 'Google chooses Cilium in Datapath V2 for GKE and Anthos',
    description:
      'GKE Dataplane V2 harnesses the power of eBPF and Cilium to bring Kubernetes Network Policy logging to Google Kubernetes Engine (GKE) among other features.',
    url: 'https://cilium.io/blog/2020/08/19/google-chooses-cilium-for-gke-networking/',
    imageSrc: GoogleOfficeImage,
    imageAlt: 'google office building',
    CTAtext: 'Learn More',
  },
  {
    title: 'Microsoft and Isovalent bring eBPF-based Networking and Security to Azure',
    description: 'Microsoft and Isovalent bring eBPF-based Networking and Security to Azure',
    url: 'https://www.youtube.com/watch?v=8it8Hm2F_GM',
    imageSrc: MicrosoftOffice,
    imageAlt: 'microsoft office buidling',
    CTAtext: 'Learn More',
  },
];

const MediaEntertainmentPage = () => (
  <MainLayout>
    <Hero {...heroContent} imageStyle="lg:h-[350px] lg:w-[350px] mb-24">
      <AdopterTestimonial {...azureTestimonial} />
    </Hero>
    <BulletSection {...bulletSection2} />
    <AdopterTestimonial {...hertznerTestimonial} className="mt-8 pb-8" />
    <BulletSection {...bulletSection1} />
    <AdopterTestimonial {...googleTestimonial} className="my-8 pb-8" />
    <AdoptersLogo logos={cloudAdoptersLogo} />
    <FeaturedTalks talks={cloudTalks} />
    <ResourcesCard
      heading="Bring Your Favorite Cloud. One Solution, Every Cloud"
      resources={cloudResouces}
      className="my-8"
    />
  </MainLayout>
);

export default MediaEntertainmentPage;

// export const Head = ({ location: { pathname } }) => {
//   const pageMetadata = { ...seo, slug: pathname };
//   return <SEO data={pageMetadata} />;
// };
