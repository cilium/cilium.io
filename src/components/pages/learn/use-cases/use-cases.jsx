import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

const title = 'Use cases';
const description =
  'Cilium supports a continuously growing list of use cases for cloud native environments. Below is a list of the key use cases that Cilium provides with the help of eBPF:';

const UseCases = () => (
  <section className="mt-10 md:mt-20 lg:mt-28 xl:mt-32">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <p className="max-w-3xl mt-5 md:text-lg">{description}</p>
    </Container>
  </section>
);

export default UseCases;
