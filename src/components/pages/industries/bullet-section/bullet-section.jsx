import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const BulletSection = ({
  heading,
  className,
  withImage,
  imageSrc,
  paragraphs,
  imageAlt,
  imageStyle,
}) => (
  <Container>
    <div className={classNames('py-8', className)}>
      <div className="lg:flex lg:items-start lg:gap-[42px]">
        <div className="">
          <h2 className="text-2xl font-bold lg:pb-6">{heading}</h2>
          <div className="items-center lg:flex lg:gap-12">
            <div className="grow">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {withImage && (
              <img
                className={classNames('"w-full  lg:w-1/2 lg:grow', imageStyle)}
                src={imageSrc}
                alt={imageAlt}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  </Container>
);

BulletSection.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageStyle: PropTypes.string,
  withImage: PropTypes.bool,
};

BulletSection.defaultProps = {
  className: {},
  withImage: false,
  imageSrc: '',
  imageAlt: '',
  imageStyle: '',
  paragraphs: [],
};

export default BulletSection;
