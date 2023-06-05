import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import UseCaseCard from 'components/pages/use-cases/cards/use-case-card';
import ImageFeatureSection from 'components/pages/use-cases/image-feature-section';
import IntroSection from 'components/pages/use-cases/intro-section';
import VideoFeatureSection from 'components/pages/use-cases/video-feature-section';
import KubermaticLogo from 'icons/logo-kubermatic.inline.svg';
import PostFinanceLogo from 'icons/logo-postfinance.inline.svg';
import ElectricianBee from 'images/pages/usecase/electrician-bee.png';
import KubeProxyImage1 from 'images/pages/usecase/kubeproxy-1.webp';
import KubeProxyImage2 from 'images/pages/usecase/kubeproxy-2.png';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'Kube-proxy Replacement',
  category: 'Networking',
  tagline: 'Enhanced networking speed and efficiency for your Kubernetes clusters',
  subHeading: 'Liberating Kubernetes From kube-proxy and IPtables',
  description:
    'IPtables and Netfilter are the two foundational technologies of kube-proxy for implementing the Service abstraction. They carry legacy accumulated over 20 years of development grounded in more traditional networking environments that are typically far more static than your average Kubernetes cluster. In the age of cloud native, they are no longer the best tool for the job, especially in terms of performance, reliability, scalability, and operations.',
  imageSrc: ElectricianBee,
  imageAlt: 'Electrician Bee',
};

const sectionContent1 = {
  title: 'Kubernetes Without kube-proxy',
  description:
    'Cilium’s control and data plane has been built from the ground up for large-scale and highly dynamic cloud native environments where 100s and even 1000s of containers are created and destroyed within seconds. Cilium’s control plane is highly optimized, running in Kubernetes clusters of up to 5K nodes and 100K pods. Cilium’s data plane uses eBPF for efficient load-balancing and incremental updates, avoiding the pitfalls of large IPtables rulesets.',
  videoSrc: 'https://www.youtube.com/embed/bIRwSIwNHC0',
};

const sectionContent2 = {
  title: 'Seamless Integration and Upgrade',
  description:
    'If you already have kube-proxy running as a DaemonSet, transitioning to Cilium is a breeze. Replacing kube-proxy with Cilium is a straightforward process, as Cilium provides a Kubernetes-native implementation that is fully compatible with the Kubernetes API. Existing Kubernetes applications and configurations can continue to work seamlessly with Cilium. ',
  imageSrc: KubeProxyImage1,
  imageAlt: 'kube proxy illustration',
  whiteBackground: true,
};

const sectionContent3 = {
  title: 'Unlock Advanced Configuration Modes',
  description:
    "Cilium's kube-proxy replacement offers advanced configuration modes to cater to your specific needs. Features like client source IP preservation ensure that your service connections remain intact, while Maglev Consistent Hashing enhances load balancing and resiliency. With support for Direct Server Return (DSR) and Hybrid DSR/SNAT modes, you can optimize traffic routing and improve performance.  ",
  imageSrc: KubeProxyImage2,
  imageAlt: 'kube-proxy with direct server return mode illustration',
  imageRight: false,
};

const testimonials = [
  {
    logo: <PostFinanceLogo />,
    title: 'Post Finance picks Isovalent Cilium for Cloud Native Networking',
    CTAtext: 'Read The Case Study',
    url: 'https://isovalent.com/data/isovalent-case-study-postfinance.pdf',
    description:
      'Cilium helped our team to build a scalable Kubernetes platform which meets our demanding requirements to run mission-critical banking software in production. We were able to solve the scale issues of our previous CNI plugin and to simplify our Kubernetes setup by eliminating the need for kube-proxy.',
  },
  {
    title: 'Service Load-Balancing Without Kube-Proxy on Kubermatic',
    logo: <KubermaticLogo />,
    CTAtext: 'Read The Blog Post',
    url: 'https://www.kubermatic.com/blog/cilium-cni-integration-in-kubermatic-kubernetes-platform/',
    description:
      'We use Cilium because it uses eBPF and provides high throughput, lower latency, and less resource consumption, especially when the number of services is large. It also works well across all three major cloud providers, including Google GKE and Azure AKS, which was a critical factor in our choice.',
  },
];

const ClusterMeshPage = () => (
  <MainLayout>
    <section className="bg-[#F6F7F8]">
      <IntroSection {...introContent} />
      <VideoFeatureSection {...sectionContent1} />
      <ImageFeatureSection {...sectionContent2} />
      <ImageFeatureSection {...sectionContent3} />
      <UseCaseCard
        heading="Who’s using Cilium’s kube-proxy replacement?"
        testimonials={testimonials}
      />
      <JoinUsCard />
    </section>
  </MainLayout>
);

export default ClusterMeshPage;
