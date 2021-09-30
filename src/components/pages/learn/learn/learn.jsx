import PropTypes from 'prop-types';
import React from 'react';

import CardItem from 'components/shared/card-item';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import List from 'components/shared/list';

import ConceptsIcon from './images/concepts.inline.svg';
import IntroductionIcon from './images/introduction.inline.svg';
import NetworkingIcon from './images/networking.inline.svg';
import Logos from './logos';
import UserStories from './user-stories';

const title = 'Learn about Cilium & eBPF';
const items = [
  {
    icon: IntroductionIcon,
    name: 'Introduction to Cilium',
    linkUrl: 'https://www.youtube.com/watch?v=80OYrzS1dCA&t=405s',
    linkTarget: '_blank',
    linkText: 'Watch video',
  },
  {
    icon: ConceptsIcon,
    name: 'Cilium Introduction / AMA <br> Thomas Graf, CO-Founder Cilium',
    linkTarget: '_blank',
    linkUrl: 'https://calendly.com/cilium-events/cilium-introduction',
    linkText: 'Register',
  },
  {
    icon: NetworkingIcon,
    name: 'The Future of eBPF based Networking and Security',
    linkUrl: 'https://www.youtube.com/watch?v=vNuEx0wB_-4',
    linkTarget: '_blank',
    linkText: 'Watch video',
  },
];

const featuredBlogs = {
  title: 'Featured Blogs',
  items: [
    {
      linkUrl: 'https://isovalent.com/blog/post/2021-09-aws-eks-anywhere-chooses-cilium',
      linkTarget: '_blank',
      linkText: 'AWS picks Cilium for Networking & Security on EKS Anywhere',
    },
    {
      linkUrl: 'https://cilium.io/blog/2020/11/10/ebpf-future-of-networking/',
      linkText: 'eBPF - The Future of Networking & Security',
    },
    {
      linkUrl:
        'https://cloud.google.com/blog/products/containers-kubernetes/bringing-ebpf-and-cilium-to-google-kubernetes-engine',
      linkTarget: '_blank',
      linkText: 'GKE Dataplane v2',
    },
  ],
};

const Learn = () => (
  <section className="mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 lg:mt-14">
        {items.map((item, index) => (
          <CardItem {...item} key={index} />
        ))}
      </div>
      <div className="grid grid-cols-1 mt-16 lg:mt-20 lg:grid-cols-12 gap-x-8 gap-y-10">
        <UserStories className="lg:col-span-5" />
        <List {...featuredBlogs} className="lg:col-start-7 lg:col-end-12" />
      </div>
      <Logos className="mt-14 lg:mt-20" />
    </Container>
  </section>
);

export default Learn;
