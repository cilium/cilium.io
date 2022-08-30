import React from 'react';

import Logos from 'components/pages/adopters/logos';
import HeroWithoutImage from 'components/shared/hero-without-image';
import UserCommunity from 'components/shared/user-community';
import MainLayout from 'layouts/main/main';
import caseStudiesData from 'utils/case-studies-data';
import { adopters as seo } from 'utils/seo-metadata';

const {
  elasticpath,
  bytedance,
  google,
  planetscale,
  sproutfi,
  superorbital,
  acoss,
  arangodb,
  bell,
  gitlab,
  aws,
  wildLife,
  adobe,
  accuknox,
  capitalOne,
  alibabaCloud,
  masmovil,
  trip,
  cengn,
  digitalOcean,
  canonical,
  civo,
  sky,
  solo,
  uswitch,
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
  ikea,
  overstock,
  ayedo,
  cognite,
  finleap,
  infomaniak,
  jumo,
  kubermatic,
  liquidReply,
  myFitnessPal,
  mux,
  theNewYorkTimes,
  nexxiot,
  northflank,
  radioFrance,
  rapyutaRobotics,
  sap,
  simple,
  kryptos,
  melenion,
  smileDirectClub,
  snapp,
  tsi,
  tailorBrands,
  f5,
  innoq,
  kubeOvn,
  mobilab,
  ect888,
  skybet,
  plaid,
  isovalent,
  schubergPhilis,
  spherity,
} = caseStudiesData;

const hero = {
  title: 'Adopters',
  description:
    'Here are some of the organizations we know are using Cilium.<br/> If you’re using Cilium and aren’t on this list, <a href="https://github.com/cilium/cilium/blob/master/USERS.md" target="_blank">please submit a pull request</a>!',
};

const userCommunity1 = {
  theme: 'gray',
  items: [
    adobe,
    postfinance,
    nexxiot,
    alibabaCloud,
    aws,
    sky,
    datadog,
    wildLife,
    capitalOne,
    masmovil,
    trip,
    cengn,
    digitalOcean,
    google,
    bell,
    gitlab,
    uswitch,
    utmost,
    meltwater,
    ikea,
    ect888,
    mobilab,
    skybet,
  ],
};

userCommunity1.items.sort((a, b) =>
  a.iconName.toLowerCase().localeCompare(b.iconName.toLowerCase())
);

const userCommunity2 = {
  title: 'Cilium is everywhere',
  isTitleCentered: true,
  theme: 'gray',
  items: [
    innoq,
    f5,
    sproutfi,
    solo,
    overstock,
    accuknox,
    arangodb,
    acoss,
    canonical,
    melenion,
    civo,
    form3,
    kubesphere,
    elasticpath,
    palantir,
    scaleway,
    sportradar,
    yahoo,
    plaid,
    isovalent,
    schubergPhilis,
    spherity,
    ayedo,
    cognite,
    finleap,
    infomaniak,
    jumo,
    kubermatic,
    liquidReply,
    myFitnessPal,
    mux,
    theNewYorkTimes,
    northflank,
    radioFrance,
    rapyutaRobotics,
    sap,
    simple,
    smileDirectClub,
    snapp,
    tsi,
    tailorBrands,
    bytedance,
    kubeOvn,
    kryptos,
    superorbital,
    planetscale,
  ],
  buttonText: 'Add Your Company',
  buttonUrl: 'https://github.com/cilium/cilium/blob/master/USERS.md',
  buttonTarget: '_blank',
};

userCommunity2.items.sort((a, b) =>
  a.iconName.toLowerCase().localeCompare(b.iconName.toLowerCase())
);

const logos1 = {
  title: 'Deploy on your prefered cloud',
  items: [
    'aws',
    'sovereign',
    'tencentCloud',
    'openStack',
    'civo',
    'nine',
    'equinix',
    'alibabaCloud',
    'scaleway',
    'googleCloud',
    'digitalOcean',
    'daocloud',
    'azure',
    'exoscale',
    'appuio',
    'hetzner',
  ],
  spaceXSize: 'sm',
};

const logos2 = {
  title: 'Use your favorite Kubernetes distribution',
  items: [
    'azureKs',
    'openshift',
    'amazonEks',
    'rke2',
    'googleKe',
    'gardener',
    'kind',
    'crane',
    'kops',
    'kubekey',
    'k8e',
    'kubeasz',
    'kubeone',
    'kubespray',
    'deckhouse',
  ],
  spaceXSize: 'lg',
};

const Adopters = () => (
  <MainLayout pageMetadata={seo} theme="gray">
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
