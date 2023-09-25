import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import HexIcon from 'icons/hex.inline.svg';

// @todo remeber to pass bullet color as prop
const BulletSection = ({ heading, text, className, bulletColor }) => (
  <Container>
    <div className={classNames('py-10', className)}>
      <div className="lg:flex lg:items-start lg:gap-[42px]">
        <span className="text-primary-1">
          <HexIcon
            fill="currentColor"
            className="hidden  shrink-0  lg:inline-block lg:h-8 lg:w-8"
          />
        </span>
        <div>
          <h2 className="text-2xl font-bold lg:pb-6">{heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  </Container>
);

BulletSection.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  bulletColor: PropTypes.string,
};

BulletSection.defaultProps = {
  className: {},
  bulletColor: 'additional-blue',
};

export default BulletSection;
