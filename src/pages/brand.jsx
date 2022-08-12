import React from 'react';

import Hero from 'components/pages/brand/hero';
import MainLayout from 'layouts/main/main';
import { brand as seo } from 'utils/seo-metadata';

const Brand = () => (
  <MainLayout pageMetadata={seo} theme="gray" footerWithTopBorder>
    <Hero />
  </MainLayout>
);

export default Brand;
