import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const SecurityCard = ({ heading, description, imageSrc, imageAlt, className }) => (
  <div>
    <Container className={className}>
      <h2 className="text-3xl font-bold">{heading}</h2>
      <div className="items-center lg:flex lg:gap-10">
        <p className="w-full py-8 lg:max-w-[694px] lg:py-0 lg:text-center">{description}</p>
        <figure className="lg:mt-8">
          <img className="w-60" src={imageSrc} alt={imageAlt} />
        </figure>
      </div>
    </Container>
  </div>
);

SecurityCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SecurityCard.defaultProps = {
  className: '',
};

export default SecurityCard;
