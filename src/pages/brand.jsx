import React from 'react';

import Colors from 'components/pages/brand/colors';
import Hero from 'components/pages/brand/hero';
import LegalBox from 'components/pages/brand/legal-box';
import Logos from 'components/pages/brand/logos';
import Community from 'components/shared/community';
import MainLayout from 'layouts/main/main';
import { brand as seo } from 'utils/seo-metadata';

const Brand = () => (
  <MainLayout pageMetadata={seo} theme="gray" footerWithTopBorder>
    <Hero />
    <Logos />
    <Colors />
    <LegalBox />
    <Community theme="gray" isTitleCentered />
  </MainLayout>
);

export default Brand;
