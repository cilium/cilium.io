import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import CiliumStory from 'components/pages/get-help/cilium-story';
import EventBox from 'components/pages/get-help/event-box';
import Faq from 'components/pages/get-help/faq';
import Cards from 'components/shared/cards';
import Community from 'components/shared/community';
import HeroWithImage from 'components/shared/hero-with-image';
import decor1 from 'images/pages/get-help/hero/decor-1.svg';
import decor2 from 'images/pages/get-help/hero/decor-2.svg';
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
    buttonText: 'Go There Now',
    buttonUrl: '/enterprise',
  },
  {
    iconName: 'github',
    title: 'GitHub',
    description:
      'Cilium uses GitHub tags to maintain a list of asked questions. You can check if your question is answered there.',
    buttonText: 'Join GitHub',
    buttonUrl:
      'https://github.com/cilium/cilium/issues?utf8=%E2%9C%93&q=label%3Akind%2Fquestion%20',
    buttonTarget: '_blank',
  },
];

const GetHelp = () => {
  const { heroImage } = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "pages/get-help/hero/hero-image.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 650, quality: 90)
        }
      }
    }
  `);
  const hero = {
    title: 'Find out how to get help with Cilium',
    description: 'Get help with Cilium through slack, training, support, and FAQs',
    imgWrapperClassName: 'lg:!col-start-7',
    heroImage,
    decor1: {
      src: decor1,
      className: 'absolute bottom-[-14.6%] left-[-5.75%] w-[115%] max-w-none',
    },
    decor2: {
      src: decor2,
      className: 'absolute bottom-[-6%] left-[-12.3%] w-[118.5%] max-w-none',
    },
  };

  return (
    <MainLayout theme="gray" pageMetadata={seo}>
      <HeroWithImage className="pb-10 pt-5 md:py-20 lg:py-24" {...hero} />
      <Cards
        className="pt-4 pb-10 md:pb-20 lg:pt-12 lg:pb-28"
        theme="gray"
        items={items}
        textSize="lg"
      />
      <CiliumStory />
      <EventBox />
      <Faq />
      <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
    </MainLayout>
  );
};

export default GetHelp;
