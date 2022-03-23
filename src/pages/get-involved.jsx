import React from 'react';

import Guidelines from 'components/pages/get-involved/guidelines';
import HandsOn from 'components/pages/get-involved/hands-on';
import Hero from 'components/pages/get-involved/hero';
import ReportBugs from 'components/pages/get-involved/report-bugs';
import Subscribe from 'components/pages/get-involved/subscribe';
import Cards from 'components/shared/cards';
import MainLayout from 'layouts/main';
import { getInvolved as seo } from 'utils/seo-metadata';

const cardItems1 = [
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

const cardItems2 = {
  title: 'Develop and contribute',
  items: [
    {
      iconName: 'github',
      title: 'GitHub',
      description:
        'Want to report a bug or ask for a feature? Issues can be found in the <a href="/">GitHub issue tracker</a>. If you want to report a bug or a new feature please file the issue according to the <a href="/">GitHub template</a>.',
    },
    {
      iconName: 'devstats',
      title: 'Devstats',
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
      buttonText: 'See project activity on Devstats',
      buttonUrl: '/',
      buttonTarget: '_blank',
    },
    {
      iconName: 'conduct',
      title: 'Code of Conduct',
      description:
        'To make Cilium a welcoming and harassment-free experience for everyone, we follow our Code of Conduct.',
      buttonText: 'Read code of conduct',
      buttonUrl: 'https://github.com/cilium/cilium/blob/master/CODE_OF_CONDUCT.md',
      buttonTarget: '_blank',
    },
  ],
};

const GetInvolved = () => (
  <MainLayout theme="gray" pageMetadata={seo} footerWithoutTopBorder>
    <Hero />
    <Cards
      className="pt-12 pb-10 md:pb-20 md:pt-16 lg:pt-[72px] lg:pb-28"
      items={cardItems1}
      buttonType="link"
      theme="gray"
    />
    <Guidelines />
    <Cards className="mt-16 md:mt-20 lg:mt-28 xl:mt-40" {...cardItems2} buttonType="link" />
    <ReportBugs />
    <HandsOn />
    <Subscribe />
  </MainLayout>
);

export default GetInvolved;
