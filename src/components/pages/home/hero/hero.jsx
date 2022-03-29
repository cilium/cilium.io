import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import illustration from 'images/hero-illustration.svg';

const title = 'eBPF-based Networking, Observability, Security';
const description =
  'Cilium is an open source software for providing, securing and observing network connectivity between container workloads - cloud native, and fueled by the revolutionary Kernel technology eBPF.';

const Hero = () => (
  <section className="overflow-hidden bg-gray-4 pt-5 md:pt-16 lg:pt-32">
    <Container className="grid grid-cols-12 md:gap-x-8">
      <div className="col-span-full lg:col-span-6 lg:-mr-8 2xl:col-span-7 2xl:mr-0">
        <Heading
          className="max-w-2xl font-semibold leading-tight lg:leading-tight"
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
          className="top-0 z-10 mt-4 h-full w-full md:mt-10 lg:absolute lg:-right-10 lg:mt-0 lg:h-auto lg:w-[580px] lg:max-w-max xl:-top-28 xl:right-auto xl:-left-24 xl:w-max"
          src={illustration}
          alt=""
        />
      </div>
    </Container>
  </section>
);

export default Hero;
