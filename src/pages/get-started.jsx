import React from 'react';

import Architecture from 'components/pages/get-started/architecture';
import Learn from 'components/pages/get-started/learn';
import News from 'components/pages/get-started/news';
import RelatedProjects from 'components/pages/get-started/related-projects';
import Highlights from 'components/pages/home/highlights';
import CNCFBanner from 'components/shared/cncf-banner';
import Community from 'components/shared/community';
import HandsOn from 'components/shared/hands-on';
import Hero from 'components/shared/hero';
import UserCommunity from 'components/shared/user-community';
import illustration from 'images/pages/get-started/hero/illustration.svg';
import MainLayout from 'layouts/main';
import caseStudiesData from 'utils/case-studies-data';
import { learn as seo } from 'utils/seo-metadata';

const hero = {
  title: 'What is Cilium?',
  description:
    '<p>Cilium is an open source project to provide networking, security, and observability for cloud native environments such as Kubernetes clusters and other container orchestration platforms.</p><p>At the foundation of Cilium is a new Linux kernel technology called eBPF, which enables the dynamic insertion of powerful security, visibility, and networking control logic into the Linux kernel. eBPF is used to provide high-performance networking, multi-cluster and multi-cloud capabilities, advanced load balancing, transparent encryption, extensive network security capabilities, transparent observability, and much more.</p>',
  illustration,
};

const datadog = {
  iconName: 'datadog',
  text: 'How Datadog uses Cilium',
  links: [
    {
      linkText: 'Watch video',
      linkUrl: 'https://www.youtube.com/watch?v=6mTVuZUHLBg&ab_channel=eBPFSummit',
      linkTarget: '_blank',
    },
  ],
};

const { google, bell, gitlab, aws, sky, adobe, capitalOne } = caseStudiesData;

const userCommunity = {
  title: 'Use cases',
  items: [aws, google, bell, sky, adobe, capitalOne, datadog, gitlab],
};

const LearnPage = () => (
  <MainLayout pageMetadata={seo} theme="gray">
    <Hero className="pt-5 pb-10 md:pt-16 md:pb-20 lg:pb-[138px]" theme="gray" {...hero} />
    <Highlights className="mt-10 md:mt-20" />
    <Architecture />
    <HandsOn />
    <CNCFBanner />
    <Learn />
    <RelatedProjects />
    <UserCommunity
      className="mt-10 py-10 md:mt-20 md:py-20 lg:mt-32 lg:py-32 "
      theme="gray"
      isTitleCentered
      {...userCommunity}
    />
    <News />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default LearnPage;
