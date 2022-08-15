import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import backgroundSmSvg from './images/background-sm.svg';
import backgroundSvg from './images/background.svg';

const title = 'Cilium Brand Guidelines';
const description =
  'We’ve created some guidelines to help you use our brand  and assets, including our logo, content and trademarks';

const Hero = () => (
  <section className="relative bg-gray-4 pb-24 pt-20 xs:pb-36 xs:pt-32 sm:pt-10 sm:pb-28 md:pb-36 lg:pt-24 lg:pb-40">
    <Container className="z-10 flex flex-col text-center sm:text-left">
      <Heading tag="h1" size="xl" className="xs:text-3xl">
        {title}
      </Heading>
      <div className="mt-7 flex flex-col lg:mx-auto lg:max-w-[708px] lg:self-end lg:text-right xl:ml-80">
        <p className="text-base md:max-w-[600px] md:text-lg lg:text-xl">{description}</p>
        <Button
          to="/"
          theme="primary-1"
          className="mt-6 !px-7 sm:mt-12 sm:max-w-[257px] sm:self-center md:mt-6 lg:self-end"
        >
          Download Brand Guide
        </Button>
      </div>
    </Container>
    <img
      className="hidden sm:absolute sm:top-1/4 sm:left-1/2 sm:block sm:-translate-x-1/2 sm:translate-y-0 md:top-4 lg:top-12 xl:-bottom-8 xl:top-0"
      src={backgroundSvg}
      alt=""
      aria-hidden
    />
    <img
      className="absolute -bottom-[5%] left-1/2 -translate-x-1/2 translate-y-0 xs:-bottom-4 xs:max-w-[390px] sm:hidden"
      src={backgroundSmSvg}
      alt=""
      aria-hidden
    />
  </section>
);

export default Hero;
