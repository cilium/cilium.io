import React from 'react';

import Community from 'components/pages/enterprise/community';
import Hero from 'components/pages/enterprise/hero';
import MainLayout from 'layouts/main';

const IndexPage = () => (
  <MainLayout>
    <Hero />
    <Community />
  </MainLayout>
);

export default IndexPage;
