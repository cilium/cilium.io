/* eslint-disable react/prop-types */
import React from 'react';

import Distributions from 'components/pages/enterprise/distributions';
import Training from 'components/pages/enterprise/training';
import Community from 'components/shared/community';
import Hero from 'components/shared/hero';
import SEO from 'components/shared/seo';
import illustration from 'images/pages/enterprise/hero/illustration-without-bg.svg';
import MainLayout from 'layouts/main';
import { enterprise as seo } from 'utils/seo-metadata';

const EnterprisePage = () => {
  const hero = {
    title: 'Cilium Enterprise Distributions & Training',
    description:
      '<p>Cilium was originally created by Isovalent and is a CNCF Graduation level project</p><p>The listed partners offer enterprise distributions, training, and commercial support for Cilium</p>',
    illustration,
  };

  return (
    <MainLayout pageMetadata={seo} theme="gray">
      <Hero className="pt-5 pb-10 md:pt-24 md:pb-20 lg:pb-[70px]" size="lg" {...hero} />
      <Distributions />
      <Training />
      <Community theme="gray" isTitleCentered />
    </MainLayout>
  );
};

export default EnterprisePage;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = { ...seo, slug: pathname };
  return <SEO data={pageMetadata} />;
};
