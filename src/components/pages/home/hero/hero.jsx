import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'eBPF-based Networking, Observability, Security';
const description =
  'Cilium is an open source, cloud native solution for providing, securing, and observing network connectivity between workloads, fueled by the revolutionary Kernel technology eBPF';

const Hero = () => (
  <section className="relative overflow-hidden bg-gray-4 dark:bg-gray-900 pt-5 pb-0 md:pt-8 md:pb-10 lg:pt-10 lg:pb-14">
    <Container className="grid grid-cols-12 md:gap-x-8 items-center">
      <div className="relative z-10 col-span-full lg:col-span-6 2xl:col-span-7">
        <Heading className="dark:text-[#579dd6]" tag="h1" size="lg" asHTML>
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
      <div className=" flex justify-center col-span-full lg:col-span-6 2xl:col-span-5 mt-8 lg:mt-0 lg:block">
        <StaticImage
          className="w-full max-w-[650px] h-auto mx-auto xl:max-w-[750px] xl:w-[750px]"
          src="./images/hero-illustration.svg" // StaticImage doesn't support dynamic imports
          alt={title}
          loading="eager"
          placeholder="blurred"
        />
      </div>
    </Container>
  </section>
);

export default Hero;
