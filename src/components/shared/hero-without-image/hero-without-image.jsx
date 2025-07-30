import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const HeroWithoutImage = ({ title, description }) => (
  <section className="bg-gray-4 pt-5 md:pt-10 lg:pt-20 bg-gray-4 dark:bg-gray-900">
    <Container className="text-center dark:text-gray-3 text-black" size="xs">
      <Heading tag="h1">{title}</Heading>
      <p
        className="flat-breaks lg:flat-none with-link-primary-light mt-4 md:mt-5 md:text-lg"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Container>
  </section>
);

HeroWithoutImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroWithoutImage;
