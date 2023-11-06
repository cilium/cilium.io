import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

import Card from './card';

const ResourcesCard = ({ heading, resources }) => (
  <Container className="mt-10 md:mt-20 lg:mt-32">
    <Heading tag="h2" className="text-center">
      {heading}
    </Heading>
    <div className="mt-6 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-6 lg:mt-14 lg:gap-8">
      {resources.map((item, index) => (
        <Card
          {...item}
          key={index}
          buttonTarget="_blank"
          buttonText={item.buttonText || 'Learn More'}
        />
      ))}
    </div>
  </Container>
);

ResourcesCard.propTypes = {
  heading: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      buttonText: PropTypes.string,
      buttonLink: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResourcesCard;
