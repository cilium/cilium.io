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
  <section className="mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-12 mt-14 gap-x-8">
        <ListWithIcon className="col-span-5" {...featuredBlogs} />
        <ListWithIcon className="col-start-7 col-end-12" {...suggestions} />
      </div>
    </Container>
  </section>
);

export default InstallDeploy;
