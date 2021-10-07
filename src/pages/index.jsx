import React from 'react';

import Hero from 'components/pages/home/hero';
import Highlights from 'components/pages/home/highlights';
import Learn from 'components/pages/home/learn';
import FeaturedTalks from 'components/pages/home/learn/featured-talks';
import Platforms from 'components/pages/home/platforms';
import Community from 'components/shared/community';
import Logos from 'components/shared/logos';
import TryCilium from 'components/shared/try-cilium';
import MainLayout from 'layouts/main';

const IndexPage = () => (
  <MainLayout>
    <Hero />
    <Logos
      className="mt-10 md:mt-20 lg:mt-28 xl:mt-36"
      title="More than 100 companies Trust cilium"
    />
    <Highlights />
    <TryCilium />
    <Platforms />
    <FeaturedTalks />
    <Learn />
    <Community />
  </MainLayout>
);

export default IndexPage;
