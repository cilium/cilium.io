import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import List from 'components/shared/list';

import Podcasts from '../learn/podcasts';

const title = 'Digging Deeper';

const featuredBlogs = {
  title: 'In the news',
  items: [
    {
      linkUrl: 'https://thenewstack.io/how-ebpf-streamlines-the-service-mesh/',
      linkText: 'How eBPF Streamlines the Service Mesh',
      linkTarget: '_blank',
    },
    {
      linkUrl: 'https://cilium.io/blog/2021/10/13/cilium-joins-cncf/',
      linkText: 'Cilium joins the CNCF',
    },
    {
      linkUrl:
        'https://isovalent.com/blog/post/2021-09-aws-eks-anywhere-chooses-cilium/?utm_source=website-cilium&utm_medium=referral&utm_campaign=cilium-blog',
      linkText: 'AWS picks Cilium for Networking & Security on EKS Anywhere',
      linkTarget: '_blank',
    },
  ],
};

const InstallDeploy = () => (
  <section className="mt-10 md:mt-20 lg:mt-32">
    <Container>
      <Heading className="text-center text-black dark:text-white" tag="h2">
        {title}
      </Heading>
      <div className="grid grid-cols-1 mt-8 gap-x-8 gap-y-8 md:mt-12 md:grid-cols-12 md:gap-y-12 lg:mt-16 lg:gap-y-16">
        <Podcasts className="md:col-span-6 lg:col-span-5" />
        <List
          className="md:col-start-7 md:col-end-13 lg:col-end-12
                     [&_a]:transition-colors [&_a]:text-black [&_a:hover]:text-hover-1
                     dark:[&_a]:text-white"
          {...featuredBlogs}
        />
      </div>
    </Container>
  </section>
);

export default InstallDeploy;
