import React from 'react';

import Hero from 'components/pages/home/hero';
import Highlights from 'components/pages/home/highlights';
import Learn from 'components/pages/home/learn';
import UserCommunity from 'components/pages/home/user-community';
import Community from 'components/shared/community';
import Logos from 'components/shared/logos';
import TryCilium from 'components/shared/try-cilium';
import MainLayout from 'layouts/main';

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
      buttonText: 'Register',
    },
  ],
};

const IndexPage = () => (
  <MainLayout>
    <Hero />
    <Logos className="mt-20 lg:mt-28 xl:mt-36" title="more than 100 companies Trust cilium" />
    <Highlights />
    <TryCilium {...tryCilium} />
    <UserCommunity />
    <Learn />
    <Community />
  </MainLayout>
);

export default IndexPage;
