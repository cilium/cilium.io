import React from 'react';

import Cards from 'components/pages/get-help/cards';
import Faq from 'components/pages/get-help/faq';
import Hero from 'components/pages/get-help/hero';
import Community from 'components/shared/community';
import MainLayout from 'layouts/main/main';
import { getHelp as seo } from 'utils/seo-metadata';

const items = [
  {
    iconName: 'slack',
    title: 'Slack',
    description:
      'For live conversation and quick questions, join the Cilium Slack workspace. Don’t forget to say hi!',
    buttonText: 'Join Slack',
    buttonUrl: 'https://cilium.herokuapp.com/',
    buttonTarget: '_blank',
  },
  {
    iconName: 'support',
    title: 'Training and Support',
    description: 'Please check the Enterprise page.',
    buttonText: 'Check it Now',
    buttonUrl: '/enterprise',
  },
  {
    iconName: 'github',
    title: 'GitHub',
    description:
      'Cilium uses GitHub tags to maintain a list of asked questions. So you can check if your question is answered.',
    buttonText: 'Join GitHub',
    buttonUrl: 'https://github.com/cilium/cilium',
    buttonTarget: '_blank',
  },
];

const GetHelp = () => (
  <MainLayout theme="gray" pageMetadata={seo} footerWithoutTopBorder>
    <Hero />
    <Cards items={items} />
    <Faq />
    <Community theme="gray" isTitleCentered />
  </MainLayout>
);

export default GetHelp;
