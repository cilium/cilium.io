import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'Subscribe to the eCHO News';
const description =
  'Want to stay up to date with the latest from around the Cilium  and eBPF community?';

const Subscribe = () => (
  <section className="mt-10 bg-gray-4 pt-20 pb-24 text-center md:mt-20 lg:mt-32">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <p className="mt-2.5">{description}</p>
      <form className="relative mx-auto mt-10 max-w-[656px]">
        <input
          className="w-full rounded-xl py-[22px] pl-6 pr-44  text-xl leading-normal shadow-input"
          placeholder="Email address..."
        />
        <Button className="absolute right-3 top-1/2 -translate-y-1/2" theme="primary-1">
          Subscribe
        </Button>
      </form>
    </Container>
  </section>
);

export default Subscribe;
