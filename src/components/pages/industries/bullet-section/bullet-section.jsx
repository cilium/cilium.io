import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

const BulletSection = ({
  heading,
  className,
  imageSrc,
  imageRight,
  paragraphs,
  imageAlt,
  imageStyle,
  withBackground,
}) => (
  <section className={classNames(withBackground && 'bg-gray-4 ')}>
    <Container className={classNames('grid grid-cols-12 gap-y-6 gap-x-6 xl:gap-x-8', className)}>
      <div className={classNames('col-span-full lg:col-span-6')}>
        <Heading className="mb-5 leading-tight dark:text-white text-black" tag="h2" size="sm">
          {heading}
        </Heading>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={classNames(
              'dark:text-gray-2 text-black',
              index < paragraphs.length - 1 && 'mb-4'
            )}
          >
            {paragraph}
          </p>
        ))}
      </div>
      {imageSrc && (
        <div
          className={classNames(
            'col-span-full flex items-center justify-center justify-self-center pt-6 md:col-span-8 lg:col-span-6 lg:pt-0',
            !imageRight
              ? 'pr-0 lg:col-start-1 lg:row-start-1 lg:pr-10 xl:pr-[72px]'
              : 'pl-0 lg:pl-10 xl:pl-[72px]'
          )}
        >
          <img
            className={classNames(
              'max-h-full w-full lg:max-h-[350px] bg-white rounded-lg',
              imageStyle
            )}
            width={592}
            height={350}
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
          />
        </div>
      )}
    </Container>
  </section>
);

BulletSection.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageStyle: PropTypes.string,
  imageRight: PropTypes.bool,
  withBackground: PropTypes.bool,
};

BulletSection.defaultProps = {
  className: null,
  imageSrc: null,
  imageAlt: null,
  imageStyle: '',
  paragraphs: [],
  imageRight: true,
  withBackground: false,
};

export default BulletSection;
