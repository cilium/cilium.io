/* eslint-disable react/prop-types */
import React from 'react';

import Logos from 'components/pages/adopters/logos';
import HeroWithoutImage from 'components/shared/hero-without-image';
import SEO from 'components/shared/seo';
import UserCommunity from 'components/shared/user-community';
import MainLayout from 'layouts/main/main';
import caseStudiesData from 'utils/case-studies-data';
import { adopters as seo } from 'utils/seo-metadata';

const {
  eficode,
  tietoevry,
  unitedcloud,
  planetscale,
  nine,
  kubehetzner,
  kilo,
  polverio,
  polarsignals,
  daimlertruck,
  clickhouse,
  proton,
  cistec,
  bloomberg,
  azure,
  robinhood,
  vshn,
  edgelessSystems,
  giantSwarm,
  immerok,
  magicLeap,
  sapian,
  ungleich,
  elasticpath,
  bytedance,
  seznam,
  sandp,
  google,
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
  cosmonic,
  form3,
  kubesphere,
  meltwater,
  palantir,
  postfinance,
  scaleway,
  sportradar,
  utmost,
  yahoo,
  homeRetailer,
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
  frsca,
  rafay,
  hetzner,
  ascend,
  palark,
} = caseStudiesData;

const hero = {
  title: 'Adopters',
  description:
    'Here are some of the organizations we know are using Cilium.<br/> If you’re using Cilium and aren’t on this list, <a href="https://github.com/cilium/cilium/blob/master/USERS.md" target="_blank">please submit a pull request</a>!',
};

const userCommunity1 = {
  theme: 'gray',
  items: [
    kubermatic,
    yahoo,
    eficode,
    clickhouse,
    tietoevry,
    bloomberg,
    azure,
    robinhood,
    vshn,
    adobe,
    theNewYorkTimes,
    seznam,
    sandp,
    postfinance,
    nexxiot,
    alibabaCloud,
    aws,
    sky,
    datadog,
    cosmonic,
    wildLife,
    capitalOne,
    masmovil,
    trip,
    cengn,
    digitalOcean,
    google,
    hetzner,
    bell,
    gitlab,
    uswitch,
    utmost,
    meltwater,
    homeRetailer,
    ect888,
    mobilab,
    skybet,
    form3,
    ascend,
    palark,
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
    unitedcloud,
    frsca,
    rafay,
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
    kubesphere,
    elasticpath,
    palantir,
    scaleway,
    sportradar,
    plaid,
    isovalent,
    schubergPhilis,
    spherity,
    ayedo,
    cognite,
    finleap,
    infomaniak,
    jumo,
    liquidReply,
    myFitnessPal,
    mux,
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
    edgelessSystems,
    giantSwarm,
    immerok,
    magicLeap,
    sapian,
    ungleich,
    planetscale,
    nine,
    kilo,
    polverio,
    polarsignals,
    daimlertruck,
    proton,
    cistec,
    kubehetzner,
  ],
  buttonText: 'Add Your Company',
  buttonUrl: 'https://github.com/cilium/cilium/blob/master/USERS.md',
  buttonTarget: '_blank',
};

userCommunity2.items.sort((a, b) =>
  a.iconName.toLowerCase().localeCompare(b.iconName.toLowerCase())
);

const logos1 = {
  title: 'Deploy on your preferred cloud',
  items: [
    'equinix',
    'scaleway',
    'alibabaCloud',
    'googleCloud',
    'aws',
    'sovereign',
    'openStack',
    'civo',
    'nine',
    'tencentCloud',
    'digitalOcean',
    'daocloud',
    'exoscale',
    'appuio',
    'hetzner',
    'azure',
  ],
  spaceXSize: 'sm',
};

const logos2 = {
  title: 'Use your favorite Kubernetes distribution',
  items: [
    'azureKs',
    'openshift',
    'amazonEks',
    'constellation',
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
    'kubelift',
  ],
  spaceXSize: 'sm',
};

const Adopters = () => (
  <MainLayout theme="gray">
    <HeroWithoutImage {...hero} />
    <UserCommunity className="pt-6 pb-10 md:pt-10 md:pb-20 lg:pt-14 lg:pb-32" {...userCommunity1} />
    <Logos {...logos1} id="preferred-cloud" />
    <Logos {...logos2} id="kubernetes-distribution" />
    <UserCommunity
      className="mt-10 py-10 md:mt-20 md:py-20 lg:mt-28 lg:py-28"
      {...userCommunity2}
      id="cilium-is-everywhere"
    />
  </MainLayout>
);

export default Adopters;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = { ...seo, slug: pathname };
  return <SEO data={pageMetadata} />;
};
