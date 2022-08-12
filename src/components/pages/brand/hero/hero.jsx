import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import backgroundSvg from './images/background.svg';

const title = 'Cilium Brand Guidlines';
const description =
  'We’ve created some guidelines to help you use our brand  and assets, including our logo, content and trademarks';

const Hero = () => (
  <section className="relative bg-gray-4 pt-10 md:pb-10 md:pt-12 lg:pt-24 lg:pb-40">
    <Container className="z-10">
      <Heading tag="h1" size="xl">
        {title}
      </Heading>
      <div className="mt-7 flex max-w-[708px] flex-col xl:ml-80">
        <p className="text-base md:text-lg lg:text-xl">{description}</p>
        <Button to="/get-started" theme="primary-1" className="mt-6 !px-7 md:max-w-[257px]">
          Download Brand Guide
        </Button>
      </div>
    </Container>
    <img
      className="lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0 xl:-bottom-8"
      src={backgroundSvg}
      alt=""
      aria-hidden
    />
  </section>
);

export default Hero;
