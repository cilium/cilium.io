import React from 'react';

import Cards from 'components/pages/get-help/cards';
import Faq from 'components/pages/get-help/faq';
import Hero from 'components/pages/get-help/hero';
import Community from 'components/shared/community';
import MainLayout from 'layouts/main/main';
import { getHelp as seo } from 'utils/seo-metadata';

const GetHelp = () => (
  <MainLayout theme="gray" pageMetadata={seo} footerWithoutTopBorder>
    <Hero />
    <Cards />
    <Faq />
    <Community theme="gray" isTitleCentered />
  </MainLayout>
);

export default GetHelp;
