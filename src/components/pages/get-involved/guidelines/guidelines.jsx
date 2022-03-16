import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import illustration from './images/illustration.svg';

const title = 'Brand and Logo Guidelines';
const description =
  'Check out the branding section for logos, color, and icons for your website, swag, or presentation.';
const buttonText = 'Check Guidelines';
const buttonUrl = '/';

const Guidelines = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container className="grid grid-cols-12 lg:gap-x-8 items-center">
      <div className="col-span-5">
        <Heading tag="h2">{title}</Heading>
        <p className="mt-5 text-lg">{description}</p>
        <Button className="mt-7" theme="primary-1" to={buttonUrl}>
          {buttonText}
        </Button>
      </div>
      <img
        className="col-start-7 col-end-13"
        width={592}
        height={352}
        src={illustration}
        alt="Guidelines illustration"
      />
    </Container>
  </section>
);

export default Guidelines;
