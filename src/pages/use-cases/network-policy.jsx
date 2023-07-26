import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import UseCaseCard from 'components/pages/use-cases/cards/use-case-card';
import ImageFeatureSection from 'components/pages/use-cases/image-feature-section';
import IntroSection from 'components/pages/use-cases/intro-section';
import VideoFeatureSection from 'components/pages/use-cases/video-feature-section';
import ClickHouseLogo from 'icons/logo-clickhouse.inline.svg';
import UtmostLogo from 'icons/logo-utmost.inline.svg';
import NetworkPolicyImage1 from 'images/pages/usecase/network-1.png';
import NetworkPolicyImage2 from 'images/pages/usecase/network-2.png';
import NetworkPolicyImage3 from 'images/pages/usecase/network-3.png';
import NetworkPolicyImage4 from 'images/pages/usecase/network-4.png';
import SecurityBee from 'images/pages/usecase/security-bee.png';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'Advanced Network Policy',
  category: 'Security',
  tagline: 'Maintain identity based policies effectively at scale',
  subHeading: 'How can I implement granular security policies when IPs change quickly? ',
  description:
    "Kubernetes network policies provide an application-centric construct for defining security policies at L3/L4 level. One of the primary challenges is how to effectively enforce security policies when traditional IP rules don't apply. Modern systems often churn IPs dynamically making it difficult to rely entirely on TCP/UDP ports and IP addresses for scaling security policies. ",
  imageSrc: SecurityBee,
};

const sectionContent1 = {
  title: 'Application and DNS Aware Policies with Cilium ',
  description:
    'Cilium implements Kubernetes Network Policies for L3/L4 level and extends with L7 policies for fine grained API-level security for common protocols such as HTTP, Kafka, gRPC, etc. For example, the endpoint with label role=frontend can only perform the REST API call GET /userdata/[0-9]+, all other API interactions with role=backend are restricted. ',
  videoSrc: 'https://www.youtube.com/embed/yikVhGM2ye8',
};

const sectionContent2 = {
  title: 'Scaling policies with Identities not IPs',
  description:
    'Cilium decouples security from network addressing using workload identity derived from labels and metadata, allowing for more flexible and efficient scaling without constant security rule updates. ',
  imageSrc: NetworkPolicyImage1,
  imageAlt: 'identities with cilium',
  whiteBackground: true,
  imageRight: false,
};

const sectionContent3 = {
  title: 'Policy visualization and editing',
  description:
    'Cilium provides a simple and intuitive network policy editor UI easing the cognitive overhead of writing network policies. It can often be painful to get the YAML syntax and formatting right when implementing network policies. There are many subtleties in the behavior of the network policy specification (e.g. default allow/deny, namespacing, wildcarding, rules combination, etc) that can result in misconfiguration. ',
  imageSrc: NetworkPolicyImage2,
  imageAlt: 'Cilium network policy editor UI',
};

const sectionContent4 = {
  title: 'Multi-cluster Policies ',
  description:
    "Cluster Mesh, Cilium's multi-cluster implementation features Network policy enforcement spanning multiple clusters. The same policy enforcement you are familiar with from a single cluster simply expands and works across multiple clusters. ",
  imageSrc: NetworkPolicyImage3,
  imageAlt: 'cilium multi cluster illustration',
  whiteBackground: true,
  imageRight: false,
};

const sectionContent5 = {
  title: 'Cluster-wide Policies ',
  description:
    'Cilium also features cluster wide policies which are non-namespaced and cluster scoped via the extended  CiliumClusterwideNetworkPolicy CRD. Using cluster-wide policies, administrators can enforce consistent policies across all namespaces, simplifying network management. ',
  imageSrc: NetworkPolicyImage4,
  imageAlt: 'Cilium network policy editor UI',
};

const testimonials = [
  {
    logo: <UtmostLogo />,
    title: 'Observability for a highly available multi cluster environment with Hubble',
    CTAtext: 'Read The Case Study',
    url: 'https://www.cncf.io/case-studies/utmost/',
    description:
      ' Utmost achieved Zero Trust Networking by replacing their existing CNI with Cilium to address networking, security, and visibility for container workloads. Utmost processes 1207 flows per second, each validated against a multitude of network policies to approve or deny access.',
  },
  {
    logo: <ClickHouseLogo />,
    title: 'How ClickHouse is Using Cilium to Implement Efficient Network Policies',
    CTAtext: 'Read The Case Study',
    url: 'https://www.cncf.io/case-studies/clickhouse/',
    description:
      'ClickHouse turned to Cilium as their preferred networking solution to take advantage of eBPF performance and simplify the process of isolating customers from each other. Cilium enabled them to create dedicated CiliumNetworkPolicies for each customer’s Kubernetes namespace to control access to specific resources, even if a customer manages to break into their Kubernetes pods.',
  },
];

const NetworkPolicyPage = () => (
  <MainLayout>
    <section>
      <IntroSection {...introContent} />
      <VideoFeatureSection {...sectionContent1} />
      <ImageFeatureSection {...sectionContent2} />
      <ImageFeatureSection {...sectionContent3} />
      <ImageFeatureSection {...sectionContent4} />
      <ImageFeatureSection {...sectionContent5} />
      <UseCaseCard
        heading="Who’s using  Cilium’s Advanced Network Policy?"
        testimonials={testimonials}
      />
      <JoinUsCard />
    </section>
  </MainLayout>
);

export default NetworkPolicyPage;

export const Head = () => <title>{introContent.title}</title>;
