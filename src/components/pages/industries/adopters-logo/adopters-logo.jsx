import PropTypes from 'prop-types';
import React from 'react';

// import bloombergLogo from './img/bloomberg.png';

const AdoptersLogo = ({ logos }) => (
  <div className="mx-auto text-center lg:grid lg:grid-cols-3 lg:gap-y-[10px]">
    {logos.map((logo, index) => (
      <img
        className="mb-4 inline-block"
        key={index}
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
      />
    ))}
  </div>
);
AdoptersLogo.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AdoptersLogo;
