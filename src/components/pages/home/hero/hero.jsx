import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import illustration from './images/hero-illustration.svg';

const title = 'eBPF-based Networking, Observability, Security';
const description =
  'Cilium is an open source, cloud native solution for providing, securing, and observing network connectivity between workloads, fueled by the revolutionary Kernel technology eBPF';

const Hero = () => (
  <section className="overflow-hidden bg-gray-4 dark:bg-gray-900 pt-5 pb-0 md:pt-16 md:pb-20 lg:pt-28 lg:pb-36">
    <Container className="grid grid-cols-12 md:gap-x-8">
      <div className="relative z-10 col-span-full lg:col-span-6 2xl:col-span-7">
        <Heading
          className="font-semibold dark:text-[#579dd6] text-black leading-tight lg:max-w-2xl lg:leading-tight"
          tag="h1"
          size="lg"
          asHTML
        >
          {title}
        </Heading>
        <div
          className="with-link-primary dark:text-[#579dd6] text-black mt-5 space-y-5 md:text-lg lg:max-w-[488px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="mt-7 flex xs:flex-row xs:gap-[18px] flex-col gap-3">
          <Button className="!pt-[18px]" to="/get-started" theme="primary-1">
            Discover Cilium
          </Button>
          <Button
            className="bg-white"
            to="/labs/categories/getting-started/"
            theme="outline-gray-dark"
          >
            Start Lab
          </Button>
        </div>
      </div>
      <div className="relative col-span-full mt-5 flex justify-center lg:col-span-6 lg:mt-0 2xl:col-span-5 2xl:-ml-8">
        <img
          className="top-0 h-full w-full max-w-[512px] lg:absolute lg:-right-16 lg:h-auto lg:w-[580px] lg:max-w-max xl:-top-[74px] xl:-right-16 xl:w-max"
          src={illustration}
          alt={title}
          loading="eager"
          width={761}
          height={555}
        />
      </div>
    </Container>
  </section>
);

export default Hero;
