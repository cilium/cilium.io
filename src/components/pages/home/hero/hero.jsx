import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import illustration from 'images/hero-illustration.svg';

const title = 'eBPF-based Networking, Observability, Security';
const description =
  'Cilium is an open source software for providing, securing and observing network connectivity between container workloads - cloud native, and fueled by the revolutionary Kernel technology eBPF.';

const Hero = () => (
  <section className="pt-5 overflow-hidden md:pt-16 lg:pt-32 bg-gray-4">
    <Container className="grid grid-cols-12 md:gap-x-8">
      <div className="col-span-full lg:-mr-8 lg:col-span-6 2xl:col-span-7 2xl:mr-0">
        <Heading className="max-w-2xl" tag="h1" size="lg" asHTML>
          {title}
        </Heading>
        <div
          className="mt-5 md:mt-7 space-y-5 md:text-lg with-link-primary lg:max-w-[488px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex flex-col items-start mt-5 xl:flex-row xl:items-center md:mt-7 ">
          <Button to="/learn">Discover Cilium</Button>
        </div>
      </div>
      <div className="relative flex justify-center col-span-full lg:col-span-6 2xl:col-span-5 2xl:-ml-8">
        <img
          className="w-full h-full mt-4 lg:h-auto md:mt-10 lg:-right-10 lg:max-w-max lg:absolute top-0 xl:-top-16 lg:mt-0 lg:w-[580px] xl:w-max xl:right-auto xl:left-0"
          src={illustration}
          alt=""
        />
      </div>
    </Container>
  </section>
);

export default Hero;
