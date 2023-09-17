import PropTypes from 'prop-types';
import React from 'react';

// @todo remeber to pass bullet color as prop
const BulletSection = ({ heading, text }) => (
  <div className="lg:pb-28">
    <div className="py-28 lg:flex lg:items-start lg:gap-[42px]">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="51"
          viewBox="0 0 45 51"
          fill="none"
        >
          <path
            d="M22.5 0L44.5836 12.75V38.25L22.5 51L0.416351 38.25V12.75L22.5 0Z"
            fill="#0073E5"
          />
        </svg>
      </span>
      <div>
        <h2 className="text-[36px] font-bold lg:pb-6">{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

BulletSection.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BulletSection;
