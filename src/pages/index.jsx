import React from 'react';

import Discover from 'components/pages/home/discover';
import Hero from 'components/pages/home/hero';
import Highlights from 'components/pages/home/highlights';
import Learn from 'components/pages/home/learn';
import TwitterCards from 'components/pages/home/twitter-cards';
import Community from 'components/shared/community';
import FeaturedTalks from 'components/shared/featured-talks';
import UserCommunity from 'components/shared/user-community';
import MainLayout from 'layouts/main';
import caseStudiesData from 'utils/case-studies-data';

const {
  google,
  bell,
  gitlab,
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
  items: [google, bell, gitlab, aws],
};

const userCommunity2 = {
  items: [wildLife, adobe, capitalOne, alibabaCloud, masmovil, trip, cengn, digitalOcean],
};

const IndexPage = () => (
  <MainLayout>
    <Hero />
    <UserCommunity className="mt-10 md:mt-20 lg:mt-28" {...userCommunity1} />
    <Highlights className="mt-10 md:mt-20 lg:mt-28" />
    <Discover />
    <UserCommunity className="mt-10 md:mt-20 lg:mt-28" {...userCommunity2} />
    <FeaturedTalks />
    <Learn />
    <Community withBanner />
    <TwitterCards />
  </MainLayout>
);

export default IndexPage;
