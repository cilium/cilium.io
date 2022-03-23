import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import decor1 from './images/decor-1.svg';
import decor2 from './images/decor-2.svg';

const title = 'Find out how to get help with Cilium';
const description = 'Get help with Cilium through slack, training, support and FAQs';

const Hero = () => (
  <section className="overflow-x-hidden bg-gray-4 pb-10 pt-5 md:py-20 lg:py-24">
    <Container className="grid grid-cols-12 gap-y-14 sm:gap-y-20 md:gap-y-24 lg:items-center lg:gap-y-0 lg:gap-x-8 xl:items-stretch">
      <div className="col-span-full lg:col-span-5 xl:pt-14">
        <Heading size="lg" tag="h1">
          {title}
        </Heading>
        <p className="mt-5 text-lg">{description}</p>
      </div>
      <div className="relative col-start-2 col-end-12 justify-self-center md:col-span-full lg:col-start-7 lg:col-end-13 lg:self-start">
        <img
          className="absolute bottom-[-6%] left-[-12.3%] w-[120%] max-w-none xl:w-[696px]"
          width={700}
          height={410}
          src={decor2}
          alt=""
          aria-hidden
        />
        <StaticImage
          className="rounded-xl"
          imgClassName="rounded-xl"
          src="./images/hero-image.jpg"
          width={650}
          height={373}
          quality={95}
          loading="eager"
          alt="Cilium team"
        />
        <img
          className="absolute bottom-[-14.6%] left-[-5.75%] w-[115%] max-w-none xl:w-[676px]"
          src={decor1}
          width={676}
          height={374}
          alt=""
          aria-hidden
        />
      </div>
    </Container>
  </section>
);

export default Hero;
