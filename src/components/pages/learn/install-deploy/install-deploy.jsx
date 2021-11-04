import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import List from 'components/shared/list';

import Podcasts from '../learn/podcasts';

const title = 'Digging Deeper';

const featuredBlogs = {
  title: 'Technical Resources',
  items: [
    {
      linkUrl: 'https://cilium.io/blog/2021/05/11/cni-benchmark',
      linkText: 'CNI Benchmark: Understanding Cilium Performance',
    },
    {
      linkUrl: 'https://isovalent.com/blog/post/its-dns',
      linkTarget: '_blank',
      linkText: 'Troubleshooting DNS Issues',
    },
    {
      linkUrl: 'https://cilium.io/blog/2020/10/06/skybet-cilium-migration',
      linkText: 'How to perform a CNI Live Migration from Flannel+Calico to Cilium',
    },
    {
      linkUrl: 'https://thenewstack.io/how-ebpf-streamlines-the-service-mesh/',
      linkText: 'How eBPF Streamlines the Service Mesh',
      linkTarget: '_blank',
    },
  ],
};

const InstallDeploy = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 mt-6 md:mt-10 md:grid-cols-12 lg:mt-14 gap-x-8 gap-y-8 md:gap-y-12 lg:gap-y-16">
        <Podcasts className="md:col-span-6 lg:col-span-5" />
        <List className="md:col-start-7 md:col-end-13 lg:col-end-12" {...featuredBlogs} />
      </div>
    </Container>
  </section>
);

export default InstallDeploy;
