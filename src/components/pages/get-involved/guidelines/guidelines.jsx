import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import illustration from './images/illustration.svg';

const title = 'Brand and Logo Guidelines';
const description =
  'Check out the branding section for logos, color, and icons for your website, swag, or presentation.';
const buttonText = 'Check Guidelines';
const buttonUrl = 'https://cilium.io/brand/';

const Guidelines = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container className="grid grid-cols-12 items-center gap-y-8 lg:gap-x-8 lg:gap-y-0">
      <div className="col-span-full lg:col-span-5">
        <Heading className="text-black dark:text-white" tag="h2">
          {title}
        </Heading>
        <p className="mt-5 text-lg dark:text-gray-2 text-black">{description}</p>
        <Button
          className="mt-7"
          theme="primary-1"
          to={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonText}
        </Button>
      </div>
      <img
        className="col-span-full justify-self-center lg:col-start-7 lg:col-end-13 lg:justify-self-stretch"
        width={592}
        height={352}
        src={illustration}
        alt="Guidelines illustration"
        loading="lazy"
      />
    </Container>
  </section>
);

export default Guidelines;
