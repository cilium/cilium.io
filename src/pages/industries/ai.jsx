import React from 'react';

import BulletSection from 'components/pages/industries/bullet-section';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import ResourcesCard from 'components/pages/industries/resources';
import Testimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import AiImage1 from 'images/pages/industries/ai/ai-1.png';
import AiImage2 from 'images/pages/industries/ai/ai-2.png';
import AiImage3 from 'images/pages/industries/ai/ai-3.png';
import AiImage4 from 'images/pages/industries/ai/ai-4.png';
import AiImage5 from 'images/pages/industries/ai/ai-5.png';
import BackendOfficeImage from 'images/pages/industries/ai/backed-office.jpeg';
import MeltwaterOfficeImage from 'images/pages/industries/ai/meltwater-office.jpeg';
import RouterBee from 'images/pages/industries/ai/router-bee.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'Artificial Intelligence',
  texts: [
    'The AI revolution is here, and with it comes unprecedented demands on network infrastructure. From training massive language models to serving real-time inference, AI workloads require high-performance networking, robust security, and deep observability. Kubernetes has evolved from just a platform for running workloads like web services and microservices to the ideal platform for supporting the end-to-end lifecycle of large artificial intelligence (AI) and machine learning (ML) workloads.',
    'Cilium is the cloud native solution for providing, securing, and observing network connectivity between workloads, empowering AI workloads to thrive in cloud native environments. Organizations ranging from artificial intelligence research institutions that build sophisticated training models to financial institutions and startups rely on Cilium to support their distributed AI/ML workloads on Kubernetes.',
  ],
  imageSrc: RouterBee,
  imageAlt: 'router bee',
};

const azureTestimonial = {
  logo: 'meltwater',
  description:
    ' Meltwater is a global leader in media, social and consumer intelligence. They have been building machine learning models for nearly 20 years and use AI at the heart of their operations for use cases such as natural language processing, speech processing, clustering and summarization, and more.',
  quotedText:
    'Cilium helped us centralize and move functionality within the CNI without having to run anything extra resulting in fewer pieces to manage and reduced cost. For the future, we are looking at Cluster Mesh with blue-green deployments to get to the point where we can swap entire clusters under workloads without users noticing. Cilium has already solved a lot of issues, but what it opens up is even better.',
  withPerson: true,
  name: 'Simone Sciarrati',
  role: 'Principal Engineer, Meltwater',
  url: 'https://www.cncf.io/case-studies/meltwater/',
  CTAtext: 'Read The Case Study',
};

const ascendTestimonial = {
  logo: 'ascend',
  description:
    'Ascend.io uses Cilium Transparent Encryption to support their use of Apache Spark, the analytics engine for large-scale data processing.',
  quotedText:
    'Spark was the other reason that Cilium became a killer feature that we needed to roll out across every cloud. Spark is a great tool, but sometimes their built in encryption will fail at random. Statistically, at some point it will crash so if you’re dealing with a 12 hour job, it’s gonna fail on hour 11 and that is a terrible thing to try to explain to the customer. Cilium with IPsec doesn’t have that problem. Why have Spark be doing encryption when what we really want Spark to be doing is processing data. We chose to have a reasonable isolation of priorities and responsibilities and have Spark be focused on data processing and have the network layer that is responsible for encryption.',
  withPerson: true,
  name: 'Joe Stevens',
  role: 'Member of the Technical Staff, Ascend.',
  url: 'https://www.cncf.io/case-studies/ascend/',
  CTAtext: 'Read The Case Study',
};

const bulletSection1 = {
  heading: 'Fulfilling the Networking Demands of AI/ML Workloads',
  paragraphs: [
    'AI workloads typically require massive data transfers, ultra-low latency, high throughput, and high bandwidth networking. Traditional networking solutions struggle to keep up, leading to bottlenecks and inefficiencies.',
    'Cilium leverages eBPF to deliver kernel-level networking performance, eliminating the overhead of traditional Linux networking. With features like eXpress Data Path (XDP) and BIG TCP, Cilium ensures high-throughput, low-latency communication—ideal for AI/ML workloads. Cilium provides a comprehensive networking toolset for model deployment with load balancers, ingress controllers, network policies, egress gateway, service mesh, and more. These features facilitate the seamless deployment of AI/ML workloads and their integration into services and applications.',
  ],
  imageSrc: AiImage1,
  imageAlt: 'cilium big tcp stats',
};

const bulletSection2 = {
  heading: 'Robust Security for AI/ML Models and Data',
  paragraphs: [
    'AI models are the result of significant investment in research and infrastructure. Protecting these models and the sensitive data they process is non-negotiable for enterprises. Traditional security solutions often lack the granularity and scalability for dynamic, cloud native environments.',
    'Cilium provides robust security features that enhance Kubernetes security. These features include zero-trust security with identity-aware security policies, mutual authentication, and advanced network policies. Cilium supports native HTTP and DNS protocol enforcement, ensuring only authorized services can access endpoints. Cilium’s Transparent Encryption (using IPsec or WireGuard) effortlessly encrypts data in transit, safeguarding intellectual property and easing compliance.',
  ],
  imageRight: false,
  imageSrc: AiImage2,
  imageAlt: 'hetzner cilium test illustration',
};

const bulletSection3 = {
  heading: ' Deep Observability for AI/ML Infrastructure and Workloads',
  paragraphs: [
    'AI/ML workflows can be incredibly complex, with data flowing across multiple services and clusters. Monitoring performance, debugging issues, or optimizing resource usage without deep observability becomes a hassle. Cilium’s Hubble observability platform provides granular insights into network traffic, API calls, and service dependencies. You can monitor DNS performance, HTTP latency, and error rates with real-time metrics, ensuring AI/ML workloads run smoothly.',
  ],
  imageSrc: AiImage3,
  imageAlt: 'hetzner cilium test illustration',
};

const bulletSection4 = {
  heading: 'Scaling AI/ML Infrastructure Efficiently',
  paragraphs: [
    'AI workloads are resource intensive and often experience fluctuating demands. Scaling infrastructure to meet these demands without overspending or inefficiently allocating resources is a significant challenge for operators. The ability to scale up and down depending on the resource demand is one of the most significant advantages Kubernetes brings to AI/ML. Cilium further enhances this advantage, empowering you to scale AI workloads efficiently. Cilium’s advanced load balancing and traffic management capabilities ensure your AI applications can scale dynamically without disruption. By optimizing resource allocation and reducing overhead, Cilium helps you maximize the ROI of your AI/ML investments.',
  ],
  imageSrc: AiImage4,
  imageAlt: 'hetzner cilium test illustration',
};

const bulletSection5 = {
  heading: 'Seamless Management of Multi-Cluster and Hybrid Cloud Environments',
  paragraphs: [
    'AI workloads often span multiple clusters, clouds, and on-premises environments. Managing networking, observability, and security across these heterogeneous environments can be an operational nightmare. Cilium integrates seamlessly across environments, providing a unified networking, observability, and security layer. Abstracting away the underlying infrastructure provides a consistent and reliable experience for your entire AI infrastructure. Cilium Cluster Mesh effectively allows multiple clusters to be joined into a large unified network, regardless of the Kubernetes distribution or location where each is running. Cilium host firewall extends Kubernetes declarative, policy-driven security model to the nodes hosting your workloads, delivering seamless, consistent protection across your entire environment.',
  ],
  imageSrc: AiImage5,
  imageAlt: 'hetzner cilium test illustration',
};

const aiResouces = [
  {
    title: 'Building the core fabric of accelerated hybrid AI clusters using Cilium',
    description:
      "Backend.ai switched from the Docker's own overlay network driver to Cilium. As a result, they observed significant throughput and latency improvements in specific inter-container networking scenarios, including application proxy to auto-scale and load balance the ML inference traffic at a large scale.",
    buttonLink: 'https://drive.google.com/file/d/1XEoVzQGf4TDQJqkyZ2t1v73IuHNs_JJS/view',
    imageSrc: BackendOfficeImage,
    imageAlt: 'backend ai office building',
  },
  {
    title: "Meltwater's Live Migration to Cilium for Richer Features",
    description:
      'Meltwater is a global leader in media, social and consumer intelligence. They have been building machine learning models for nearly 20 years and use AI at the heart of their operations for use cases such as natural language processing, speech processing, clustering and summarization, and more.',
    buttonLink: 'https://www.cncf.io/case-studies/meltwater/',
    imageSrc: MeltwaterOfficeImage,
    imageAlt: 'meltwater office',
  },
];

const aiTalks = [
  {
    title: 'High Performance Data Backend for Your AI/ML with MinIO and Cilium Cluster Mesh',
    videoSrc: 'https://www.youtube.com/embed/Ennjmo9TFaM?si=Jy8mQ61Ckwk1rHfw',
    description:
      'This talk demonstrates how embedding your storage into a cluster mesh with Spark and ML containers via Cilium can outperform classic commercial blob storage offerings',
  },
  {
    title: 'Building the core fabric of accelerated hybrid AI clusters using Cilium',
    videoSrc: 'https://www.youtube.com/embed/nYOG41fUO1s?si=dTWw_yRkSwNFicR6',
    description:
      "This talk covers why and how Backend.ai switched from  Docker's own overlay network driver to Cilium and how this transition resulted in extra capabilities such as fine-grained control over both inter-container and external traffic and also achieving the sensitive throughput and latency requirements of their target workloads.",
  },
  {
    title: 'How Meltwater migrated from the Amazon VPC CNI plugin to Cilium in K8s',
    videoSrc: 'https://www.youtube.com/embed/wMXV7I3kq9k?si=btypPQp2wwGmukke',
    description:
      'This talks covers how Meltwater  migrated from the Amazon VPC CNI plugin to Cilium in K8s',
  },
];

const MediaEntertainmentPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="h-auto lg:w-[350px]" />
    <BulletSection {...bulletSection1} className="mt-10 md:mt-20 lg:mt-32" />
    {/* <Testimonial {...azureTestimonial} className="mt-10 md:mt-20 lg:mt-32" /> */}
    <BulletSection {...bulletSection2} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection3} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...ascendTestimonial} className="my-10 md:my-20 lg:my-32" />
    <BulletSection {...bulletSection4} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...bulletSection5} className="mt-10 px-10 md:mt-20 lg:mt-32" />
    <FeaturedTalks talks={aiTalks} className="mt-10" />
    <ResourcesCard
      heading="See Real World Stories of Companies using Cilium for AI/ML"
      resources={aiResouces}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default MediaEntertainmentPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description: 'Discover Cloud Providers use Cilium',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
