import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import SEO from 'components/shared/seo';
import HostFirewallImage1 from 'images/pages/usecase/hostfirewall-1.gif';
import NetworkingBeeImage from 'images/pages/usecase/networking-bee.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'Host Firewall',
  category: 'Networking',
  tagline: 'Host Security That Scales With Kubernetes',
  subHeading: 'How can I secure the host namespace with same consistent security model?',
  description:
    'Kubernetes nodes are the backbone of any cluster, but securing them presents unique challenges beyond the capabilities of traditional firewalls. Without granular host-level controls, nodes are vulnerable to unauthorized access, exposing critical cluster components, like kube-apiserver or etcd, to potential breaches. Static firewall rules struggle to adapt to the dynamic nature of Kubernetes environments, leaving gaps in protection during workload changes or updates. Additionally, misconfigurations in restrictive policies can disrupt essential communications, while limited visibility into host-level traffic makes monitoring and troubleshooting difficult.',
  imageSrc: NetworkingBeeImage,
  imageAlt: 'Networking Bee',
  imageWidth: 350,
  imageHeight: 350,
};

const sectionContent1 = {
  title: 'Consistent Security for Nodes and Pods',
  description:
    'Traditionally, securing Kubernetes environments required managing separate security models for nodes and pods, resulting in operational complexity and potential blind spots. Cilium Host Firewall eliminates this inconsistency by applying the same network policy model to the host. This approach extends Kubernetes declarative, policy-driven security model to the nodes hosting your workloads, delivering seamless, consistent protection across your entire environment. By leveraging YAML manifests, administrators can define, apply, and manage host-level policies with the same ease and precision as Kubernetes Network Policies, creating a unified approach to securing both pods and their underlying hosts.',
  videoSrc: 'https://www.youtube.com/embed/GLLLcz398K0',
};

const sectionContent2 = {
  title: 'Host Security That Scales With Kubernetes',
  description:
    'Cilium Host Firewall empowers administrators to enforce fine-grained policies for node-level traffic. By matching on node labels, you can create targeted rules that allow or deny traffic based on specific needs, such as permitting only SSH or ICMP traffic to specific nodes. This level of control ensures that your nodes are protected from unauthorized access while maintaining the flexibility required for smooth operations. Cilium Host Firewall ensures consistent, granular, and adaptable security for every node in your cluster, giving you the confidence to scale securely in even the most demanding environments.',
  imageSrc: HostFirewallImage1,
  imageRight: false,
};

const KubeProxyReplacementPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <JoinUsCard className="pt-8" />
  </MainLayout>
);

export default KubeProxyReplacementPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.title,
    description: heroContent.tagline,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
