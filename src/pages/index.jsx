import React from 'react';

import Learn from 'components/pages/home/learn';
import UserCommunity from 'components/pages/home/user-community';
import Community from 'components/shared/community';
import Hero from 'components/shared/hero';
import TryCilium from 'components/shared/try-cilium';
import illustration from 'images/shared/hero/illustration-learn.svg';
import MainLayout from 'layouts/main';

const hero = {
  title: 'eBPF-based Networking, Observability, and Security',
  description:
    'Cilium is an open source software for providing, securing and observing network connectivity between container workloads - cloud native, and fueled by the revolutionary Kernel technology eBPF.',
  buttonText: 'Learn more',
  buttonUrl: '/learn',
  illustration,
};

const tryCilium = {
  title: 'Try Cilium',
  items: [
    {
      iconName: 'guide',
      name: 'Getting Started Guide',
      text: 'Check out the Cilium documentation to quickly get started on a Kubernetes cluster of your choice.',
      buttonUrl: '/learn',
      buttonText: 'Start Learn Cilium',
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

const IndexPage = () => (
  <MainLayout>
    <Hero className="mt-16 lg:mt-32" {...hero} />
    <TryCilium {...tryCilium} />
    <UserCommunity />
    <Learn />
    <Community />
  </MainLayout>
);

export default IndexPage;
