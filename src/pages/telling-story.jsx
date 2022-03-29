import React from 'react';

import Hero from 'components/pages/telling-story/hero';
import MainLayout from 'layouts/main';
import { tellingStory as seo } from 'utils/seo-metadata';

const TellingStoryPage = () => (
  <MainLayout theme="gray" pageMetadata={seo}>
    <Hero />
  </MainLayout>
);

export default TellingStoryPage;
