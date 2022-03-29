import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import illustration from 'images/hero-illustration.svg';

const title = 'eBPF-based Networking, Observability, Security';
const description =
  'Cilium is an open source software for providing, securing and observing network connectivity between container workloads - cloud native, and fueled by the revolutionary Kernel technology eBPF.';

const Hero = () => (
  <section className="overflow-hidden bg-gray-4 pt-5 pb-10 md:pt-16 md:pb-20 lg:pt-28 lg:pb-36">
    <Container className="grid grid-cols-12 md:gap-x-8">
      <div className="col-span-full lg:col-span-6 2xl:col-span-7">
        <Heading
          className="font-semibold leading-tight lg:max-w-2xl lg:leading-tight"
          tag="h1"
          size="lg"
          asHTML
        >
          {title}
        </Heading>
        <div
          className="with-link-primary mt-5 space-y-5 md:mt-7 md:text-lg lg:max-w-[488px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="mt-5 flex flex-col items-start md:mt-7 xl:flex-row xl:items-center ">
          <Button to="/learn" theme="primary-1">
            Discover Cilium
          </Button>
        </div>
      </div>
      <div className="relative col-span-full flex justify-center lg:col-span-6 2xl:col-span-5 2xl:-ml-8">
        <img
          className="top-0 z-10 h-full w-full lg:absolute lg:-right-10 lg:h-auto lg:w-[580px] lg:max-w-max xl:-top-28 xl:right-auto xl:-left-24 xl:w-max"
          src={illustration}
          alt={title}
          loading="eager"
        />
      </div>
    </Container>
  </section>
);

export default Hero;
