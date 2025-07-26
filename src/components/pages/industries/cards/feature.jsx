import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

// eslint-disable-next-line import/prefer-default-export
export const FeatureCard = ({ heading, subHeading, features, className }) => (
  <Container className={className}>
    <Heading tag="h2" className="text-center text-black dark:text-white">
      {heading}
    </Heading>
    <p className="mt-3 text-center text-lg font-light lg:mt-4 dark:text-gray-2 text-black">
      {subHeading}
    </p>
    <div className="mt-6 grid grid-cols-2 gap-4 md:mt-10 md:gap-6 lg:mt-14 lg:gap-8">
      {features.map(({ title, description }, index) => (
        <div
          key={index}
          className="col-span-2 rounded-xl bg-white dark:bg-gray-2 p-8 shadow-primary lg:col-span-1"
        >
          <p className="pb-2 font-bold">{title}</p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </Container>
);

FeatureCard.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  className: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

FeatureCard.defaultProps = {
  className: '',
  features: [],
};
