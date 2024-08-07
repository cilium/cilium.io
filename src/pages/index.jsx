/* eslint-disable react/prop-types */
import React from 'react';

import FeaturedTalks from 'components/pages/home/featured-talks';
import Hero from 'components/pages/home/hero';
import Highlights from 'components/pages/home/highlights';
import InProduction from 'components/pages/home/in-production';
import Learn from 'components/pages/home/learn';
import TwitterCards from 'components/pages/home/twitter-cards';
import CNCFBanner from 'components/shared/cncf-banner';
import Community from 'components/shared/community';
import HandsOn from 'components/shared/hands-on';
import SEO from 'components/shared/seo';
import UserCommunity from 'components/shared/user-community';
import MainLayout from 'layouts/main';
import caseStudiesData from 'utils/case-studies-data';

const { google, bell, aws, adobe } = caseStudiesData;

const userCommunity = {
  items: [google, bell, adobe, aws],
};

const talks = [
  {
    title: 'The Cilium Story - Why We Created Cilium - Thomas Graf, Isovalent',
    description:
      'What was the vision? How close was it to what Cilium has become today? As we make our way exploring the many Cilium milestones',
    videoSrc: 'https://www.youtube.com/embed/FucmPqU_pvw?si=wC6K5urFjtjMxi20',
  },
  {
    title: 'eBPF - Everything You Need to Know in 5 Minutes',
    description:
      ' Why eBPF matters and why it exists. What it can do. What it can’t do. Who uses it for what. And finally, what the future holds.',
    videoSrc: 'https://www.youtube.com/embed/KhPrMW5Rbbc?si=QnUMF1UcU4HjMeve',
  },
  {
    title: 'Introduction to Cilium with Liz Rice & Thomas Graf',
    description:
      'eCHO Stream, Liz Rice, Chief Open Source Officer, Isovalent, Thomas Graf, Co-Creator Cilium',
    videoSrc: 'https://www.youtube.com/embed/80OYrzS1dCA?si=46mPj1lXsIe0vuU-',
  },
];
const IndexPage = () => (
  <MainLayout theme="gray">
    <Hero />
    <UserCommunity className="pt-8 pb-10 md:pb-20 lg:pb-32" theme="gray" {...userCommunity} />
    <Highlights />
    <CNCFBanner />
    <HandsOn />
    <InProduction />
    <FeaturedTalks talks={talks} />
    <Learn />
    <TwitterCards title="What people think about Cilium" />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default IndexPage;

export const Head = ({ location: { pathname } }) => <SEO slug={pathname} />;
