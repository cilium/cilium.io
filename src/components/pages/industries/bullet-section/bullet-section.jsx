import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import HexIcon from 'icons/hex.inline.svg';

// @todo remember to pass bullet color as prop
const BulletSection = ({
  heading,
  text,
  className,
  bulletColor,
  withImage,
  imageSrc,
  imageAlt,
}) => (
  <Container>
    <div className={classNames('py-10', className)}>
      <div className="lg:flex lg:items-start lg:gap-[42px]">
        <span className="text-primary-1">
          <HexIcon
            fill="currentColor"
            className="hidden  shrink-0  lg:inline-block lg:h-8 lg:w-8"
          />
        </span>
        <div className="">
          <h2 className="text-2xl font-bold lg:pb-6">{heading}</h2>
          <div className="items-center lg:flex lg:gap-12">
            <p className="grow">{text}</p>
            {withImage && <img className="w-1/2 grow" src={imageSrc} alt={imageAlt} />}
          </div>
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
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  withImage: PropTypes.bool,
};

BulletSection.defaultProps = {
  className: {},
  bulletColor: 'additional-blue',
  withImage: false,
  imageSrc: '',
  imageAlt: '',
};

export default BulletSection;
