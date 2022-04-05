import React from 'react';

import Cards from 'components/pages/newsletter/cards';
import Hero from 'components/pages/newsletter/hero';
import MainLayout from 'layouts/main/main';
import { newsletter as seo } from 'utils/seo-metadata';

const Newsletter = () => (
  <MainLayout pageMetadata={seo} theme="gray">
    <Hero />
    <Cards />
  </MainLayout>
);

export default Newsletter;
