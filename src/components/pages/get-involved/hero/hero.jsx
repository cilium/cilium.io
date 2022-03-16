import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'Join the Cilium community';
const description =
  "Cilium is an open source project that anyone in the community can use, improve, and enjoy. We'd love you to join us! Here's a few ways to find out what's happening and get involved.";

const Hero = () => (
  <section className="py-10 bg-gray-4">
    <Container className="grid grid-cols-12 gap-x-8 items-center">
      <div className="col-span-5">
        <Heading tag="h1" size="lg">
          {title}
        </Heading>
        <p className="text-lg mt-5">{description}</p>
      </div>
      <div className="col-span-7 justify-self-center">
        <StaticImage
          className="w-[550px]"
          src="./images/hero-image.png"
          alt="Cilium community"
          quality={95}
          width={650}
          height={488}
          loading="eager"
        />
      </div>
    </Container>
  </section>
);

export default Hero;
