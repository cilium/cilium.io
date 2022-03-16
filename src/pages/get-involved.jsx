import React from 'react';

import Guidelines from 'components/pages/get-involved/guidelines';
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
    buttonUrl: 'https://cilium.herokuapp.com/',
    buttonTarget: '_blank',
  },
  {
    iconName: 'twitter',
    title: 'Twitter',
    description: 'Don’t forget to follow Cilium on Twitter for the latest news and announcements.',
    buttonText: 'Follow Cilium on Twitter',
    buttonUrl: 'https://twitter.com/ciliumproject',
    buttonTarget: '_blank',
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
    <Guidelines />
  </MainLayout>
);

export default GetInvolved;
