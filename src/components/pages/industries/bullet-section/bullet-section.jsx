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
  videoSrc,
  paragraphs,
  imageAlt,
  imageStyle,
  withBackground,
}) => (
  <section className={classNames(withBackground && 'bg-gray-4 ')}>
    <Container className={classNames('grid grid-cols-12 gap-y-6 gap-x-6 xl:gap-x-8', className)}>
      <div
        className={classNames(
          'col-span-full lg:col-span-5 flex flex-col justify-center',
          !imageRight ? 'lg:col-start-8' : 'lg:col-start-1'
        )}
      >
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
      {(imageSrc || videoSrc) && (
        <div
          className={classNames(
            'col-span-full col-start-1 pt-6 md:col-span-8 md:col-start-3 lg:col-span-7 lg:pt-0',
            !imageRight
              ? 'pr-0 lg:col-start-1 lg:row-start-1 lg:pr-10 xl:pr-[72px]'
              : 'pl-0 lg:pl-10 xl:pl-[72px]'
          )}
        >
          {imageSrc && !videoSrc && (
            <img
              className={classNames('h-auto w-full', imageStyle)}
              width={592}
              height={350}
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
            />
          )}
          {videoSrc && (
            <iframe
              className="max-h-full w-full lg:max-h-[350px] rounded"
              width={592}
              height={350}
              src={videoSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
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
  videoSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageStyle: PropTypes.string,
  imageRight: PropTypes.bool,
  withBackground: PropTypes.bool,
};

BulletSection.defaultProps = {
  className: null,
  imageSrc: null,
  videoSrc: null,
  imageAlt: null,
  imageStyle: '',
  paragraphs: [],
  imageRight: true,
  withBackground: false,
};

export default BulletSection;
