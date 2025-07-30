import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';

import backgroundSmSvg from './images/background-sm.svg';
import backgroundSvg from './images/background.svg';

const title = 'Brands Guidelines';
const description =
  'We’ve created some guidelines to help you use our brands and assets, including our logo, content and trademarks';

const Hero = () => (
  <section className="relative overflow-hidden bg-gray-4 dark:bg-gray-900 pb-28 pt-20 sm:pb-28 sm:pt-10 lg:pt-[88px] lg:pb-40">
    <Container className="z-10 flex flex-col items-center text-center">
      <h1 className="max-w-xs text-4xl font-bold leading-tight sm:max-w-none sm:text-44 lg:text-52 dark:text-white sm:dark:text-black">
        {title}
      </h1>
      <p className="mt-4 max-w-xs text-base sm:mt-2.5 md:max-w-[560px] md:text-lg dark:text-gray-2 sm:dark:text-black">
        {description}
      </p>
      <Button
        className="mx-auto mt-6 !rounded-md !px-5 sm:mt-7 sm:!px-7"
        to="/data/cilium-brandbook.pdf"
        target="_blank"
        theme="primary-1"
        asDefaultLink
      >
        Download Brand Guide
      </Button>
    </Container>
    <img
      className="absolute -bottom-0.5 left-1/2 hidden w-[1200px] max-w-none -translate-x-1/2 translate-y-0 sm:block lg:w-[1600px]"
      src={backgroundSvg}
      alt=""
      loading="eager"
      width={1600}
      height={554}
      aria-hidden
    />
    <img
      className="absolute -bottom-6 left-1/2 -translate-x-1/2 translate-y-0 xs:-bottom-4 xs:max-w-[390px] sm:hidden"
      src={backgroundSmSvg}
      width={390}
      height={540}
      loading="eager"
      alt=""
      aria-hidden
    />
  </section>
);

export default Hero;
