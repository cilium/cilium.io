import React from 'react';

import Community from 'components/pages/learn/community';
import InstallDeploy from 'components/pages/learn/install-deploy';
import Learn from 'components/pages/learn/learn';
import RelatedProjects from 'components/pages/learn/related-projects';
import TryCilium from 'components/pages/learn/try-cilium';
import Hero from 'components/shared/hero';
import illustration from 'images/shared/hero/illustration-learn.svg';
import MainLayout from 'layouts/main';
import SeoMetadata from 'utils/seo-metadata';

const hero = {
  topText: 'Originally Created by Isovalent',
  title: 'Cilium Getting Started',
  description:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis</p>',
  illustration,
};

const LearnPage = () => (
  <MainLayout pageMetadata={SeoMetadata.learn}>
    <Hero {...hero} />
    <Learn />
    <TryCilium />
    <RelatedProjects />
    <InstallDeploy />
    <Community />
  </MainLayout>
);

export default LearnPage;
