import React from 'react';

import Hero from 'components/pages/get-involved/hero';
import Cards from 'components/shared/cards';
import MainLayout from 'layouts/main';

const items = [
  {
    iconName: 'slack',
    title: 'Slack',
    description:
      'For live conversation and quick questions, join the Cilium Slack workspace. Don’t forget to say hi!',
    buttonText: 'Join slack workspace',
    buttonUrl: '/',
  },
  {
    iconName: 'twitter',
    title: 'Twitter',
    description: 'Don’t forget to follow Cilium on Twitter for the latest news and announcements.',
    buttonText: 'Follow Cilium on Twitter',
    buttonUrl: '/',
  },
  {
    iconName: 'newsletter',
    title: 'Newsletter',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonText: 'Subscribe to newsletter',
    buttonUrl: '/',
  },
];

const GetInvolved = () => (
  <MainLayout>
    <Hero />
    <Cards items={items} buttonType="link" />
  </MainLayout>
);

export default GetInvolved;
