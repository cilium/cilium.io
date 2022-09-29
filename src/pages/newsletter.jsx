/* eslint-disable react/prop-types */
import React from 'react';

import Cards from 'components/pages/newsletter/cards';
import Hero from 'components/pages/newsletter/hero';
import Issues from 'components/pages/newsletter/issues';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main/main';
import { newsletter as seo } from 'utils/seo-metadata';

const Newsletter = () => (
  <MainLayout pageMetadata={seo} theme="gray" footerWithTopBorder>
    <Hero />
    <Cards />
    <Issues />
  </MainLayout>
);

export default Newsletter;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = { ...seo, slug: pathname };
  return <SEO data={pageMetadata} />;
};
