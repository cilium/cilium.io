import React from 'react';

import EnterpriseDistributions from 'components/pages/learn/enterprise-distributions';
import InstallDeploy from 'components/pages/learn/install-deploy';
import Learn from 'components/pages/learn/learn';
import RelatedProjects from 'components/pages/learn/related-projects';
import Community from 'components/shared/community';
import Hero from 'components/shared/hero';
import Logos from 'components/shared/logos';
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

const LearnPage = () => (
  <MainLayout pageMetadata={SeoMetadata.learn}>
    <Hero className="pt-5 md:pt-16 lg:pb-5" {...hero} />
    <Learn />
    <Logos className="mt-10 md:mt-20 lg:mt-28" />
    <TryCilium />
    <EnterpriseDistributions />
    <RelatedProjects />
    <InstallDeploy />
    <Community />
  </MainLayout>
);

export default LearnPage;
