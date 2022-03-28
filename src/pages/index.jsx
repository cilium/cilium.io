import React from 'react';

import Discover from 'components/pages/home/discover';
import Hero from 'components/pages/home/hero';
import Highlights from 'components/pages/home/highlights';
import Learn from 'components/pages/home/learn';
import TwitterCards from 'components/pages/home/twitter-cards';
import UserCommunity from 'components/pages/home/user-community';
import Community from 'components/shared/community';
import FeaturedTalks from 'components/shared/featured-talks';
import MainLayout from 'layouts/main';

const userCommunity1 = {
  className: '!mt-0',
  items: [
    {
      iconName: 'google',
      text: 'Google chooses Cilium for Google Kubernetes Engine (GKE) networking',
      links: [
        {
          linkText: 'Read blog',
          linkUrl:
            'https://cloud.google.com/blog/products/containers-kubernetes/bringing-ebfp-and-cilium-to-google-kubernetes-engine',
          linkTarget: '_blank',
        },
      ],
    },
    {
      iconName: 'bell',
      text: 'Why eBPF is changing the Telco networking space?',
      links: [
        {
          linkText: 'Watch video',
          linkUrl: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
          linkTarget: '_blank',
        },
      ],
    },
    {
      iconName: 'gitlab',
      text: 'Kubernetes Network Policies in Action with Cilium',
      links: [
        {
          linkText: 'Video',
          linkUrl: 'https://www.youtube.com/watch?v=kwQ0ooO3UM8&ab_channel=eBPFSummit',
          linkTarget: '_blank',
        },
        {
          linkText: 'Docs',
          linkUrl:
            'https://docs.gitlab.com/ee/user/application_security/threat_monitoring/#container-network-policy',
          linkTarget: '_blank',
        },
      ],
    },
    {
      iconName: 'aws',
      text: 'AWS picks Cilium for Networking & Security on EKS Anywhere',
      links: [
        {
          linkText: 'Read blog',
          linkUrl: 'https://isovalent.com/blog/post/2021-09-aws-eks-anywhere-chooses-cilium',
          linkTarget: '_blank',
        },
      ],
    },
  ],
};

const userCommunity2 = {
  title: 'User Community',
  items: [
    {
      iconName: 'wildLife',
      text: 'Building a Global Multi Cluster Gaming Infrastructure with Cilium',
      links: [
        {
          linkText: 'Blog',
          linkUrl:
            'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
        },
        {
          linkText: 'Video',
          linkUrl: 'https://www.youtube.com/watch?v=_1t3bXzptP0&ab_channel=eBPFSummit',
          linkTarget: '_blank',
        },
      ],
    },
    {
      iconName: 'adobe',
      text: 'What Makes a Good Multi-tenant Kubernetes Solution',
      links: [
        {
          linkText: 'Video 1',
          linkUrl: 'https://www.youtube.com/watch?v=7UQ2CU6UEGY&ab_channel=eBPFSummit',
          linkTarget: '_blank',
        },
        {
          linkText: 'Video 2',
          linkUrl: 'https://www.youtube.com/watch?v=39FLsSc2P-Y&feature=youtu.be&t=116',
          linkTarget: '_blank',
        },
      ],
    },
    {
      iconName: 'capitalOne',
      text: 'Building a Secure and Maintainable PaaS',
      links: [
        {
          linkText: 'Watch video',
          linkUrl: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
          linkTarget: '_blank',
        },
      ],
    },
    {
      iconName: 'alibabaCloud',
      text: 'Building High-Performance Cloud-Native Pod Networks',
      links: [
        {
          linkText: 'Read blog',
          linkUrl:
            'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
          linkTarget: '_blank',
        },
      ],
    },
    {
      iconName: 'masmovil',
      text: 'Scaling a Multi-Tenant k8s Cluster in a Telco',
      links: [
        {
          linkText: 'Watch video',
          linkUrl: 'https://www.youtube.com/watch?v=JH3pcmhNEHA&ab_channel=eBPFSummit',
          linkTarget: '_blank',
        },
      ],
    },
    {
      iconName: 'trip',
      text: 'First step towards cloud native networking',
      links: [
        {
          linkText: 'Read blog',
          linkUrl: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
        },
      ],
    },
    {
      iconName: 'cengn',
      text: 'Cloud Native Networking with eBPF',
      links: [
        {
          linkText: 'Watch video',
          linkUrl: 'https://www.youtube.com/watch?v=yXm7yZE2rk4',
          linkTarget: '_blank',
        },
      ],
    },
    {
      iconName: 'digitalOcean',
      text: 'Managed Kubernetes: 1.5 Years of Cilium Usage at DigitalOcean',
      links: [
        {
          linkText: 'Watch video',
          linkUrl: 'https://youtu.be/jw8tEPP6jwQ?t=7885',
          linkTarget: '_blank',
        },
      ],
    },
  ],
};

const IndexPage = () => (
  <MainLayout>
    <Hero />
    <UserCommunity {...userCommunity1} />
    <Highlights withBanner />
    {/* Discover component will have the same name but the content will be from the Get Hands-on with Cilium from PR #31 */}
    <Discover />
    <UserCommunity {...userCommunity2} />
    <FeaturedTalks />
    <Learn />
    <TwitterCards title="What people think about Cilium" />
    <Community />
  </MainLayout>
);

export default IndexPage;
