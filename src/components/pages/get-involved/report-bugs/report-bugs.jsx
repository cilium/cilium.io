import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import illustration from './images/illustration.svg';

const title = 'Security Bugs';
const description =
  'We strongly encourage you to report security vulnerabilities to our private security mailing list';
const buttonText = 'Report a Bug';
const buttonUrl = 'mailto:security@cilium.io';

const ReportBugs = () => (
  <section className="mt-10 mb-10">
    <Container>
      <div className="relative flex flex-col space-y-8 overflow-hidden rounded-xl bg-white dark:bg-gray-2 shadow-primary py-8 px-8 md:py-10 lg:space-y-0 lg:py-14 lg:pl-16 xl:pl-20">
        <div className="lg:max-w-[500px] xl:max-w-[550px]">
          <Heading tag="h2">{title}</Heading>
          <p className="mt-5 md:text-lg">{description}</p>
          <Button theme="primary-1" className="mt-7" to={buttonUrl}>
            {buttonText}
          </Button>
        </div>
        <img
          className="top-1/2 right-[54px] self-center lg:absolute lg:w-[400px] lg:-translate-y-1/2 lg:self-stretch xl:w-[484px]"
          src={illustration}
          width={484}
          height={484}
          alt={title}
          loading="lazy"
        />
      </div>
    </Container>
  </section>
);

export default ReportBugs;
