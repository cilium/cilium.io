import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

import diagram from './images/diagram.svg';

const title = 'Architecture';
const description =
  'Cilium consists of an agent running on all cluster nodes and servers in your environment.  It provides networking, security, and observability to the workloads running on that node. Workloads can be containerized or running natively on the system.';

const Architecture = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container className="grid grid-cols-12 gap-y-8 md:gap-x-8 md:gap-y-12 lg:gap-y-16">
      <div className="col-span-full lg:col-span-5">
        <Heading tag="h2">{title}</Heading>
        <p className="mt-5 md:text-lg">{description}</p>
      </div>
      <div className="col-span-full mx-auto lg:col-span-7">
        <img className="xl:ml-auto xl:max-w-[664px]" src={diagram} alt="Diagram" loading="lazy" />
      </div>
    </Container>
  </section>
);

export default Architecture;
