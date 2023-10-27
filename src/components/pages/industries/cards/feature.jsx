import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

// eslint-disable-next-line import/prefer-default-export
export const FeatureCard = ({ heading, subHeading, features, className }) => (
  <Container className={className}>
    <Heading tag="h2" className="text-center">
      {heading}
    </Heading>
    <p className="mt-3 text-center text-lg font-light lg:mt-4">{subHeading}</p>
    <div className="mt-6 grid grid-cols-2 gap-4 md:mt-10 md:gap-6 lg:mt-14 lg:gap-8">
      {features.map(({ icon: Icon, title, description }, index) => (
        <div
          key={index}
          className="col-span-2 rounded-xl bg-white p-8 shadow-primary lg:col-span-1"
        >
          <img className="pb-2" src={Icon} alt="" />
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
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

FeatureCard.defaultProps = {
  className: '',
  features: [],
};
