import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const AdoptersLogo = ({ logos, className }) => (
  <Container>
    <div className={classNames('mx-auto text-center lg:gap-y-[8px]', className)}>
      {logos.map((Logo, index) => (
        <img
          src={Logo}
          alt="adopter logos"
          key={index}
          className="max-w-[80px] lg:max-h-[90px] lg:max-w-[200px]"
        />
      ))}
    </div>
  </Container>
);
AdoptersLogo.propTypes = {
  className: PropTypes.string,
  logos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

AdoptersLogo.defaultProps = {
  className: 'lg:grid lg:grid-cols-5',
};

export default AdoptersLogo;
