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
      linkUrl: 'https://isovalent.com/blog/post/2021-09-aws-eks-anywhere-chooses-cilium',
      linkText: 'AWS picks Cilium for Networking & Security on EKS Anywhere',
      linkTarget: '_blank',
    },
  ],
};

const InstallDeploy = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container>
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-12 md:grid-cols-12 md:gap-y-12 lg:mt-16 lg:gap-y-16">
        <Podcasts className="md:col-span-6 lg:col-span-5" />
        <List className="md:col-start-7 md:col-end-13 lg:col-end-12" {...featuredBlogs} />
      </div>
    </Container>
  </section>
);

export default InstallDeploy;
