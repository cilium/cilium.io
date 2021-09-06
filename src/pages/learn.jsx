import React from 'react';

import Community from 'components/pages/learn/community';
import EnterpriseDistributions from 'components/pages/learn/enterprise-distributions';
import InstallDeploy from 'components/pages/learn/install-deploy';
import Learn from 'components/pages/learn/learn';
import RelatedProjects from 'components/pages/learn/related-projects';
import TryCilium from 'components/pages/learn/try-cilium';
import Hero from 'components/shared/hero';
import illustration from 'images/shared/hero/illustration-learn.svg';
import MainLayout from 'layouts/main';
import SeoMetadata from 'utils/seo-metadata';

const hero = {
  title: 'What is Cilium?',
  description:
    '<p>Cilium is open source software for cloud native networking, security and observability. Cilium provides and secures networking between the applications running in the containers on the Kubernetes of your choice, on the public cloud you are using today.</p><p>Technically Cilium can operate at two different layers: Layer 3/4 is used to provide traditional networking and security services as well as loadbalancing. At Layer 7 Cilium protects and secures modern application protocols such as HTTP, gRPC and Kafka.</p>',
  illustration,
};

const LearnPage = () => (
  <MainLayout pageMetadata={SeoMetadata.learn}>
    <Hero className="mt-16 lg:mt-28" {...hero} />
    <Learn />
    <TryCilium />
    <EnterpriseDistributions />
    <RelatedProjects />
    <InstallDeploy />
    <Community />
  </MainLayout>
);

export default LearnPage;
