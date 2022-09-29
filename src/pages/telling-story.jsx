/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/telling-story/hero';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';
import { tellingStory as seo } from 'utils/seo-metadata';

const TellingStoryPage = () => (
  <MainLayout theme="gray" pageMetadata={seo}>
    <Hero />
  </MainLayout>
);

export default TellingStoryPage;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = { ...seo, slug: pathname };
  return <SEO data={pageMetadata} />;
};
