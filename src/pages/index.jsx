import React from 'react';

import Hero from 'components/pages/home/hero';
import Highlights from 'components/pages/home/highlights';
import Learn from 'components/pages/home/learn';
import TwitterCards from 'components/pages/home/twitter-cards';
import CNCFBanner from 'components/shared/cncf-banner';
import Community from 'components/shared/community';
import FeaturedTalks from 'components/shared/featured-talks';
import HandsOn from 'components/shared/hands-on';
import UserCommunity from 'components/shared/user-community';
import MainLayout from 'layouts/main';
import caseStudiesData from 'utils/case-studies-data';

const {
  google,
  bell,
  ikea,
  aws,
  wildLife,
  adobe,
  capitalOne,
  alibabaCloud,
  masmovil,
  trip,
  cengn,
  digitalOcean,
} = caseStudiesData;

const userCommunity1 = {
  items: [google, bell, ikea, aws],
};

const userCommunity2 = {
  title: 'User community',
  isTitleCentered: true,
  items: [wildLife, adobe, capitalOne, alibabaCloud, masmovil, trip, cengn, digitalOcean],
};

const IndexPage = () => (
  <MainLayout theme="gray">
    <Hero />
    <UserCommunity className="pb-10 pt-8 md:pb-20 lg:pb-32" theme="gray" {...userCommunity1} />
    <Highlights />
    <CNCFBanner />
    <HandsOn />
    <UserCommunity
      className="mt-10 py-10 md:mt-20 md:py-20 lg:mt-28 lg:py-32"
      theme="gray"
      {...userCommunity2}
    />
    <FeaturedTalks />
    <Learn />
    <TwitterCards title="What people think about Cilium" />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default IndexPage;
