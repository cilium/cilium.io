import React from 'react';

import Community from 'components/pages/enterprise/community';
import Hero from 'components/shared/hero';
import illustration from 'images/shared/hero/illustration-enterprise.svg';
import MainLayout from 'layouts/main';

const hero = {
  topText: 'Originally Created by Isovalent',
  title: 'Cilium Enterprise Distributions & Training',
  description:
    '<p>Cilium was originally created by Isovalent and contributed to the CNCF as an incubation-level project in 2021.</p><p>The listed partners offer enterprise distributions, training, and commercial support for Cilium. All partners comply with the <a href="#">distribution requirements</a> of the Cilium project.</p>',
  illustration,
};

const IndexPage = () => (
  <MainLayout>
    <Hero {...hero} />
    <Community />
  </MainLayout>
);

export default IndexPage;
