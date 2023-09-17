import PropTypes from 'prop-types';
import React from 'react';

import bloombergLogo from './img/bloomberg.png';

const AdoptersLogo = ({ logos }) => 
  /* 
   NOTES: 
    1. The logos currently have padding within them, please handle that.
    2. I only used one logo here, import all the logos and add them to the logos list
  */

  // const logos = [
  //   {
  //     src: bloombergLogo,
  //     alt: 'bloomberg',
  //     width: '327px',
  //     height: '57px',
  //   },
  //   {
  //     src: bloombergLogo,
  //     alt: 'bloomberg',
  //     width: '327px',
  //     height: '57px',
  //   },
  //   {
  //     src: bloombergLogo,
  //     alt: 'bloomberg',
  //     width: '327px',
  //     height: '57px',
  //   },
  //   {
  //     src: bloombergLogo,
  //     alt: 'bloomberg',
  //     width: '327px',
  //     height: '57px',
  //   },
  //   {
  //     src: bloombergLogo,
  //     alt: 'bloomberg',
  //     width: '327px',
  //     height: '57px',
  //   },
  //   {
  //     src: bloombergLogo,
  //     alt: 'bloomberg',
  //     width: '327px',
  //     height: '57px',
  //   },
  //   {
  //     src: bloombergLogo,
  //     alt: 'bloomberg',
  //     width: '327px',
  //     height: '57px',
  //   },
  //   {
  //     src: bloombergLogo,
  //     alt: 'bloomberg',
  //     width: '327px',
  //     height: '57px',
  //   },
  //   {
  //     src: bloombergLogo,
  //     alt: 'bloomberg',
  //     width: '327px',
  //     height: '57px',
  //   },
  // ];
   (
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
  )
;

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
