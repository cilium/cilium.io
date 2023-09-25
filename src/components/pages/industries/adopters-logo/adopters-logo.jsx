import PropTypes from 'prop-types';
import React from 'react';

const AdoptersLogo = ({ logos }) => (
  <div className="mx-auto text-center lg:grid lg:grid-cols-3 lg:gap-y-[10px]">
    {logos.map(({ logo: Logo, index }) => (
      <Logo key={index} />
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
