import React from 'react';

import Hero from 'components/pages/adopters/hero';
import Logos from 'components/pages/adopters/logos';
import UserCommunity from 'components/shared/user-community';
import MainLayout from 'layouts/main/main';
import caseStudiesData from 'utils/case-studies-data';

const {
  google,
  bell,
  gitlab,
  aws,
  wildLife,
  adobe,
  capitalOne,
  alibabaCloud,
  masmovil,
  trip,
  cengn,
  digitalOcean,
  canonical,
  civo,
  datadog,
  form3,
  kubesphere,
  meltwater,
  palantir,
  postfinance,
  scaleway,
  sportradar,
  utmost,
  yahoo,
} = caseStudiesData;

const hero = {
  title: 'Adopters',
  description:
    'Here are some of the organizations we know are using Cilium.<br/> If you’re using Cilium and aren’t on this list, please submit a pull request!',
};

const userCommunity1 = {
  title: 'Real world case studies',
  titleTheme: 'gray',
  isTitleCentered: true,
  items: [
    wildLife,
    adobe,
    capitalOne,
    alibabaCloud,
    masmovil,
    trip,
    cengn,
    digitalOcean,
    google,
    bell,
    gitlab,
    aws,
  ],
};

const userCommunity2 = {
  title: 'Cilium is everywhere',
  isTitleCentered: true,
  items: [
    canonical,
    civo,
    datadog,
    form3,
    kubesphere,
    meltwater,
    palantir,
    postfinance,
    scaleway,
    sportradar,
    utmost,
    yahoo,
  ],
};

const logos1 = {
  title: 'Deploy on your prefered cloud',
  items: [
    'aws',
    'tencentCloud',
    'googleCloud',
    'azure',
    'appuio',
    'alibabaCloud',
    'scaleway',
    'digitalOcean',
    'openStack',
  ],
  spaceXSize: 'sm',
};

const logos2 = {
  title: 'Use your favorite Kubernetes installers',
  items: ['kind', 'kubespray', 'kops'],
  spaceXSize: 'md',
};

const Adopters = () => (
  <MainLayout>
    <Hero {...hero} />
    <UserCommunity className="mt-10 md:mt-20 lg:mt-24" {...userCommunity1} />
    <Logos {...logos1} />
    <Logos {...logos2} />
    <UserCommunity className="mt-10 md:mt-20 lg:mt-32" {...userCommunity2} />
  </MainLayout>
);

export default Adopters;
