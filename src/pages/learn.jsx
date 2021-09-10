import React from 'react';

import EnterpriseDistributions from 'components/pages/learn/enterprise-distributions';
import InstallDeploy from 'components/pages/learn/install-deploy';
import Learn from 'components/pages/learn/learn';
import RelatedProjects from 'components/pages/learn/related-projects';
import Community from 'components/shared/community';
import Hero from 'components/shared/hero';
import TryCilium from 'components/shared/try-cilium';
import illustration from 'images/shared/hero/illustration-learn.svg';
import MainLayout from 'layouts/main';
import SeoMetadata from 'utils/seo-metadata';

const hero = {
  title: 'What is Cilium?',
  description:
    '<p>Cilium is open source software for cloud native networking, security and observability. Cilium provides and secures networking between the applications running in the containers on the Kubernetes of your choice, on the public cloud you are using today.</p><p>Technically Cilium can operate at two different layers: Layer 3/4 is used to provide traditional networking and security services as well as loadbalancing. At Layer 7 Cilium protects and secures modern application protocols such as HTTP, gRPC and Kafka.</p>',
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
      buttonText: 'Start Learn Cilium',
      buttonTarget: '_blank',
    },
    {
      iconName: 'installFest',
      name: 'Weekly InstallFest',
      text: 'Join us at our weekly InstallFest Meetup, learn and discuss how to setup and get started with Cilium.',
      buttonUrl: '',
      buttonText: 'Coming soon',
    },
  ],
};

const LearnPage = () => (
  <MainLayout pageMetadata={SeoMetadata.learn}>
    <Hero className="mt-16 lg:mt-28" {...hero} />
    <Learn />
    <TryCilium {...tryCilium} />
    <EnterpriseDistributions />
    <RelatedProjects />
    <InstallDeploy />
    <Community />
  </MainLayout>
);

export default LearnPage;
