import React from 'react';

import Cards from 'components/pages/newsletter/cards';
import Hero from 'components/pages/newsletter/hero';
import MainLayout from 'layouts/main/main';

const Newsletter = () => (
  <MainLayout theme="gray">
    <Hero />
    <Cards />
  </MainLayout>
);

export default Newsletter;
