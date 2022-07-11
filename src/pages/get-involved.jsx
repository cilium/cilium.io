import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Guidelines from 'components/pages/get-involved/guidelines';
import ReportBugs from 'components/pages/get-involved/report-bugs';
import Subscribe from 'components/pages/get-involved/subscribe';
import Cards from 'components/shared/cards';
import HandsOn from 'components/shared/hands-on';
import HeroWithImage from 'components/shared/hero-with-image';
import decor1 from 'images/pages/get-involved/hero/decor-1.svg';
import decor2 from 'images/pages/get-involved/hero/decor-2.svg';
import MainLayout from 'layouts/main';
import { getInvolved as seo } from 'utils/seo-metadata';

const cardItems1 = [
  {
    iconName: 'slack',
    title: 'Slack',
    description: 'For live conversation and quick questions, join the Cilium Slack workspace.',
    buttonText: 'Join slack workspace',
    buttonUrl: 'https://cilium.herokuapp.com/',
    buttonTarget: '_blank',
  },
  {
    iconName: 'twitter',
    title: 'Twitter',
    description: "Don't forget to follow Cilium on Twitter for the latest news and announcements.",
    buttonText: 'Follow on twitter',
    buttonUrl: 'https://twitter.com/ciliumproject',
    buttonTarget: '_blank',
  },
  {
    iconName: 'newsletter',
    title: 'Newsletter',
    description: 'Keep up with the latest news from the Cilium and eBPF communities.',
    buttonText: 'Subscribe',
    buttonUrl: '/newsletter',
  },
  {
    iconName: 'youtube',
    title: 'YouTube',
    description: 'Watch the videos from the Cilium and eBPF Communities.',
    buttonText: 'Watch on youtube',
    buttonUrl: 'https://www.youtube.com/c/eBPFCiliumCommunity/',
    buttonTarget: '_blank',
  },
];

const cardItems2 = {
  title: 'Develop and contribute',
  items: [
    {
      iconName: 'github',
      title: 'GitHub',
      description:
        'Want to report a bug or ask for a feature? Issues can be found in the <a href="https://github.com/cilium/cilium/issues" target="_blank" rel="noopener noreferrer">GitHub issue tracker</a>. If you want to report a bug or a new feature please file the issue according to the <a href="https://github.com/cilium/cilium/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHub template</a>.',
    },
    {
      iconName: 'devstats',
      title: 'Devstats',
      description: 'Check the project activity on Devstats to see how fast we are moving.',
      buttonText: 'See project activity on Devstats',
      buttonUrl: 'https://cilium.devstats.cncf.io/',
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

const GetInvolved = () => {
  const { heroImage } = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "pages/get-involved/hero/hero-image.png" }) {
        childImageSharp {
          gatsbyImageData(width: 521, quality: 95)
        }
      }
    }
  `);
  const hero = {
    title: 'Join the Cilium community',
    description:
      "Cilium is an open source project that anyone in the community can use, improve, and enjoy. We'd love you to join us! Here's a few ways to find out what's happening and get involved.",
    heroImage,
    decor1: {
      src: decor1,
      className: 'absolute top-[5.3%] left-[32.5%] w-[27%] max-w-none',
    },
    decor2: {
      src: decor2,
      className: 'absolute top-[-5.4%] left-[-7.2%] w-[113.8%] max-w-none',
    },
  };
  return (
    <MainLayout theme="gray" pageMetadata={seo}>
      <HeroWithImage
        className="pb-10 pt-5 md:pt-10 lg:py-16"
        imgWrapperClassName="mr-0 xl:mr-8 lg:!justify-self-center"
        {...hero}
      />
      <Cards
        className="pt-4 pb-10 md:pb-20 md:pt-16 lg:pt-[72px] lg:pb-28"
        items={cardItems1}
        buttonType="link"
        theme="gray"
        cardSize="sm"
      />
      <Guidelines />
      <Cards className="mt-16 md:mt-20 lg:mt-32" {...cardItems2} buttonType="link" />
      <ReportBugs />
      <HandsOn />
      <Subscribe />
    </MainLayout>
  );
};

export default GetInvolved;
