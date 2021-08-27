import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import ListWithIcon from 'components/shared/list-with-icon';

const title = 'Install & Deploy Cilium';

const featuredBlogs = {
  title: 'Featured Blogs',
  items: [
    { linkUrl: '/', linkText: 'How to monitor Cilium Deployments' },
    { linkUrl: '/', linkText: 'Troubleshooting Network Issues' },
    { linkUrl: '/', linkText: 'CNI Benchmark: Understanding Cilium Network Performance' },
    { linkUrl: '/', linkText: 'Troubleshooting Network Issues' },
  ],
};

const suggestions = {
  title: 'Suggestions',
  items: [
    { linkUrl: '/', linkText: 'Enterprise Distributions' },
    { linkUrl: '/', linkText: 'Best Practices' },
  ],
};

const InstallDeploy = () => (
  <section className="mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-12 lg:mt-14 gap-x-8 gap-y-16">
        <ListWithIcon className="md:col-span-6 lg:col-span-5" {...featuredBlogs} />
        <ListWithIcon className="md:col-start-7 md:col-end-13 lg:col-end-12" {...suggestions} />
      </div>
    </Container>
  </section>
);

export default InstallDeploy;
