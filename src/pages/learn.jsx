import React from 'react';

import EnterpriseDistributions from 'components/pages/learn/enterprise-distributions';
import InstallDeploy from 'components/pages/learn/install-deploy';
import Learn from 'components/pages/learn/learn';
import RelatedProjects from 'components/pages/learn/related-projects';
import Community from 'components/shared/community';
import Hero from 'components/shared/hero';
import Logos from 'components/shared/logos';
import TryCilium from 'components/shared/try-cilium';
import illustration from 'images/shared/hero/illustration-learn.svg';
import MainLayout from 'layouts/main';
import SeoMetadata from 'utils/seo-metadata';

const hero = {
  title: 'What is Cilium?',
  description:
    '<p>Cilium is an open source project to provide networking, security, and observability for cloud native environments such as Kubernetes clusters and other container orchestration platforms.</p><p>At the foundation of Cilium is a new Linux kernel technology called eBPF, which enables the dynamic insertion of powerful security, visibility, and networking control logic into the Linux kernel. eBPF is used to provide high-performance networking, multi-cluster and multi-cloud capabilities, advanced load balancing, transparent encryption, extensive network security capabilities, transparent observability, and much more.</p>',
  illustration,
};

const tryCilium = {
  title: 'Try Cilium',
  items: [
    {
      iconName: 'guide',
      name: 'Getting Started Guide',
      text: 'Check out the Cilium documentation to quickly get started on a Kubernetes cluster of your choice.',
      buttonUrl: 'https://docs.cilium.io/en/stable/gettingstarted/k8s-install-default/',
      buttonText: 'Learn more',
      buttonTarget: '_blank',
    },
    {
      iconName: 'installFest',
      name: 'Weekly InstallFest',
      text: 'Join us at our weekly InstallFest Meetup, learn and discuss how to setup and get started with Cilium.',
      buttonUrl: '',
      buttonText: 'Register',
    },
  ],
};

const LearnPage = () => (
  <MainLayout pageMetadata={SeoMetadata.learn}>
    <Hero className="mt-16 lg:mt-28" {...hero} />
    <Learn />
    <Logos className="mt-14 lg:mt-20" />
    <TryCilium {...tryCilium} />
    <EnterpriseDistributions />
    <RelatedProjects />
    <InstallDeploy />
    <Community />
  </MainLayout>
);

export default LearnPage;
