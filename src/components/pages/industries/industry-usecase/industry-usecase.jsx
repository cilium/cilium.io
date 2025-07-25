import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

import Card from './card';

const IndustryUseCases = ({ heading, usecases }) => (
  <Container className="mt-10 md:mt-20 lg:mt-32">
    <Heading tag="h2" className="text-center dark:text-white text-black">
      {heading}
    </Heading>
    <div className="mt-6 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-6 lg:mt-14 lg:gap-8">
      {usecases.map((item, index) => (
        <Card {...item} key={index} buttonText="Learn more" buttonTarget="_self" />
      ))}
    </div>
  </Container>
);

IndustryUseCases.propTypes = {
  heading: PropTypes.string.isRequired,
  usecases: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      buttonLink: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default IndustryUseCases;
