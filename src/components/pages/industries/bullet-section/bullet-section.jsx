import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

// @todo remeber to pass bullet color as prop
const BulletSection = ({ heading, text }) => (
  <Container>
    <div className="lg:pb-28">
      <div className="py-28 lg:flex lg:items-start lg:gap-[42px]">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45 51"
            fill="none"
            className="hover:hover-1 hidden fill-additional-blue lg:inline-block lg:h-10 lg:w-10"
          >
            <path d="M22.5 0L44.5836 12.75V38.25L22.5 51L0.416351 38.25V12.75L22.5 0Z" />
          </svg>
        </span>
        <div>
          <h2 className="text-2xl font-bold lg:pb-6 lg:text-3xl">{heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  </Container>
);

BulletSection.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BulletSection;
