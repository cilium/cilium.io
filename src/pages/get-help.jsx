import React from 'react';

import Hero from 'components/pages/get-help/hero';
import Community from 'components/shared/community';
import MainLayout from 'layouts/main/main';

const GetHelp = () => (
  <MainLayout theme="gray">
    <Hero />
    <Community />
  </MainLayout>
);

export default GetHelp;
