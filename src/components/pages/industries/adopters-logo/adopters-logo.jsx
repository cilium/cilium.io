import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const AdoptersLogo = ({ logos, className }) => (
  <Container>
    <div
      className={classNames(className, 'mx-auto text-center lg:grid lg:grid-cols-5 lg:gap-y-[8px]')}
    >
      {logos.map((Logo, index) => (
        <img src={Logo} alt="" key={index} className="max-h-[90px] max-w-[200px]" />
      ))}
    </div>
  </Container>
);
AdoptersLogo.propTypes = {
  className: PropTypes.string,
  logos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

AdoptersLogo.defaultProps = {
  className: '',
};

export default AdoptersLogo;
