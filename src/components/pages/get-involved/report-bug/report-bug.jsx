import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import illustration from './images/illustration.svg';

const title = 'Security Bugs';
const description =
  'We strongly encourage you to report security vulnerabilities to our private security mailing list';
const buttonText = 'Report a Bug';
const buttonUrl = '/';

const ReportBug = () => (
  <section className="mt-10">
    <Container className="bg-dark-blue text-white rounded-xl relative overflow-hidden">
      <div className="max-w-[640px] py-14 pl-20">
        <Heading tag="h2">{title}</Heading>
        <p className="mt-5 text-lg">{description}</p>
        <Button theme="primary-1" className="mt-7" to={buttonUrl}>
          {buttonText}
        </Button>
      </div>
      <img
        className="absolute top-1/2 -translate-y-1/2 right-[54px]"
        src={illustration}
        width={484}
        height={484}
        alt={title}
      />
    </Container>
  </section>
);

export default ReportBug;
