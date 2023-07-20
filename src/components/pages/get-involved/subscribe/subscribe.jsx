import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import SubscribeForm from 'components/shared/subscribe-form';

const title = 'Subscribe to the eCHO News';
const description =
  'Want to stay up to date with the latest from around the Cilium  and eBPF community?';

const Subscribe = () => (
  <section className="mt-10 bg-gray-4 py-10 text-center md:mt-20 md:py-14 lg:mt-32 lg:pt-20 lg:pb-24">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <p className="mt-2.5">{description}</p>
      <SubscribeForm className="mt-10 max-w-[656px]" />
    </Container>
  </section>
);
export default Subscribe;
