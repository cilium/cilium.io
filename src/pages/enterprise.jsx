import React from 'react';

import Distributions from 'components/pages/enterprise/distributions';
import Training from 'components/pages/enterprise/training';
import Community from 'components/shared/community';
import Hero from 'components/shared/hero';
import illustration from 'images/hero-illustration.svg';
import MainLayout from 'layouts/main';
import SeoMetadata from 'utils/seo-metadata';

const hero = {
  title: 'Cilium Enterprise Distributions & Training',
  description:
    '<p>Cilium was originally created by <a href="https://isovalent.com/" target="_blank" rel="noopener noreferrer">Isovalent</a> and contributed to the CNCF as an incubation-level project in 2021.</p><p>The listed partners offer enterprise distributions, training, and commercial support for Cilium.</p>',
  illustration,
};

const EnterprisePage = () => (
  <MainLayout pageMetadata={SeoMetadata.enterprise}>
    <Hero className="pt-5 md:pt-16 xl:pb-20" {...hero} />
    <Distributions />
    <Training />
    <Community />
  </MainLayout>
);

export default EnterprisePage;
