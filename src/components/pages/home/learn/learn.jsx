import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import List from 'components/shared/list';

const title = 'Latest News & Blogs';

const featuredBlogs = {
  title: 'Featured Blogs',
  items: [
    {
      linkUrl: 'https://isovalent.com/blog/post/2021-09-aws-eks-anywhere-chooses-cilium',
      linkTarget: '_blank',
      linkText: 'AWS picks Cilium for Networking & Security on EKS Anywhere',
    },
    {
      linkUrl: 'https://cilium.io/blog/2021/08/03/best-of-echo',
      linkText: 'eBPF and Cilium Office Hours - Highlights from Season 1',
    },
    {
      linkUrl: 'https://cilium.io/blog/2021/05/20/cilium-110',
      linkText:
        'Cilium 1.10: WireGuard, BGP Support, Egress IP Gateway, New Cilium CLI, XDP Load Balancer, Alibaba Cloud Integration and more',
    },
    {
      linkUrl: 'https://cilium.io/blog/2021/05/11/cni-benchmark',
      linkText: 'CNI Benchmark: Understanding Cilium Network Performance',
    },
    {
      linkUrl: 'https://cilium.io/blog/2021/04/19/openshift-certification',
      linkText: 'Introducing the Cilium Certified OpenShift Plug-in',
    },
  ],
  buttonUrl: '/blog',
  buttonText: 'Read more',
};
const Learn = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 mt-6 md:mt-10 lg:mt-14 lg:grid-cols-12 gap-x-8">
        <List className="lg:col-span-10" {...featuredBlogs} />
      </div>
    </Container>
  </section>
);

export default Learn;
