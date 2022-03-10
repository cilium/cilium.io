import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Hero = ({ title, description }) => (
  <section className="mt-12 md:mt-16 lg:mt-20">
    <Container className="text-center" size="xs">
      <Heading tag="h1">{title}</Heading>
      <p
        className="mt-4 md:mt-5 md:text-lg flat-breaks lg:flat-none"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Container>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
