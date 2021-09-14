import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import List from 'components/shared/list';

import FeaturedTalks from './featured-talks';
import TwitterCards from './twitter-cards';

const title = 'Learn about Cilium & eBPF';

const featuredBlogs = {
  title: 'Featured Blogs',
  items: [
    {
      linkUrl: '',
      linkText: 'eBPF and Cilium Office Hours - Highlights from Season 1',
    },
    {
      linkUrl: '',
      linkText:
        'Cilium 1.10: WireGuard, BGP Support, Egress IP Gateway, New Cilium CLI, XDP Load Balancer, Alibaba Cloud Integration and more',
    },
    {
      linkUrl: '',
      linkText: 'CNI Benchmark: Understanding Cilium Network Performance',
    },
    {
      linkUrl: '',
      linkText: 'Introducing the Cilium Certified OpenShift Plug-in',
    },
  ],
  buttonUrl: '/',
  buttonText: 'Read more',
};
const Learn = () => (
  <section className="mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 mt-10 lg:mt-14 lg:grid-cols-12 gap-x-8 gap-y-10">
        <List className="lg:col-span-5" {...featuredBlogs} />
        <FeaturedTalks className="lg:col-start-7 lg:col-end-13 xl:col-end-12" />
      </div>
      <TwitterCards />
    </Container>
  </section>
);

export default Learn;
