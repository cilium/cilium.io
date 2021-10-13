import React from 'react';

import Highlights from 'components/pages/home/highlights';
import UserCommunity from 'components/pages/home/user-community';
import Architecture from 'components/pages/learn/architecture';
import EnterpriseDistributions from 'components/pages/learn/enterprise-distributions';
import InstallDeploy from 'components/pages/learn/install-deploy';
import Learn from 'components/pages/learn/learn';
import RelatedProjects from 'components/pages/learn/related-projects';
import UseCases from 'components/pages/learn/use-cases';
import Community from 'components/shared/community';
import Hero from 'components/shared/hero';
import TryCilium from 'components/shared/try-cilium';
import illustration from 'images/hero-illustration.svg';
import MainLayout from 'layouts/main';
import SeoMetadata from 'utils/seo-metadata';

const hero = {
  title: 'What is Cilium?',
  description:
    '<p>Cilium is an open source project to provide networking, security, and observability for cloud native environments such as Kubernetes clusters and other container orchestration platforms.</p><p>At the foundation of Cilium is a new Linux kernel technology called eBPF, which enables the dynamic insertion of powerful security, visibility, and networking control logic into the Linux kernel. eBPF is used to provide high-performance networking, multi-cluster and multi-cloud capabilities, advanced load balancing, transparent encryption, extensive network security capabilities, transparent observability, and much more.</p>',
  illustration,
};

const userCommunity = {
  title: 'User stories',
  items: [
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
      iconName: 'sky',
      text: 'eBPF & Cilium at Sky',
      links: [
        {
          linkText: 'Watch video',
          linkUrl: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
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
      iconName: 'datadog',
      text: 'How Datadog uses Cilium',
      links: [
        {
          linkText: 'Watch video',
          linkUrl: 'https://www.youtube.com/watch?v=6mTVuZUHLBg&ab_channel=eBPFSummit',
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
  ],
};

const LearnPage = () => (
  <MainLayout pageMetadata={SeoMetadata.learn}>
    <Hero className="pt-5 md:pt-16 lg:pb-5" {...hero} />
    <UseCases />
    <Highlights className="mt-10 md:mt-20" />
    <Architecture />
    <Learn />
    <TryCilium />
    <UserCommunity {...userCommunity} />
    <EnterpriseDistributions />
    <RelatedProjects />
    <InstallDeploy />
    <Community />
  </MainLayout>
);

export default LearnPage;
