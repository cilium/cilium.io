import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

// eslint-disable-next-line import/prefer-default-export
export const FeatureCard = ({ heading, subHeading, features = [], className }) => (
  <Container className={className}>
    <h3 className="text-center text-3xl font-bold">{heading}</h3>
    <p className="pb-8 text-center text-base font-light">{subHeading}</p>
    <div className="lg:grid lg:grid-cols-2">
      {features.map(({ icon: Icon, title, description }, index) => (
        <div
          key={index}
          className=" m-8 rounded-xl bg-white p-8"
          style={{ boxShadow: '0px 2px 10px 0px rgba(20, 26, 31, 0.15)' }}
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
  ).isRequired,
};

FeatureCard.defaultProps = {
  className: '',
};
