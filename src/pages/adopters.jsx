import React from 'react';

import Logos from 'components/pages/adopters/logos';
import HeroWithoutImage from 'components/shared/hero-without-image';
import UserCommunity from 'components/shared/user-community';
import MainLayout from 'layouts/main/main';
import caseStudiesData from 'utils/case-studies-data';
import { adopters as seo } from 'utils/seo-metadata';

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
  theme: 'gray',
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
  theme: 'gray',
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
  buttonText: 'Add Your Company',
  buttonUrl: '/telling-story',
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
  <MainLayout pageMetadata={seo} theme="gray" footerWithoutTopBorder>
    <HeroWithoutImage {...hero} />
    <UserCommunity className="pt-6 pb-10 md:pt-10 md:pb-20 lg:pt-14 lg:pb-32" {...userCommunity1} />
    <Logos {...logos1} />
    <Logos {...logos2} />
    <UserCommunity
      className="mt-10 py-10 md:mt-20 md:py-20 lg:mt-28 lg:py-28"
      {...userCommunity2}
    />
  </MainLayout>
);

export default Adopters;
