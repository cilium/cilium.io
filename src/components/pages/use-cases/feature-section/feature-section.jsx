import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
  imageRight,
  videoSrc,
  withBackground,
  className,
}) => {
  const descriptionList = Array.isArray(description) ? description : [description];

  return (
    <section className={classNames(withBackground && 'bg-gray-4')}>
      <Container
        className={classNames(
          'grid grid-cols-12 gap-y-6 gap-x-6 pb-10 md:pb-20 lg:pb-28 xl:gap-x-8 xl:pb-32',
          className
        )}
      >
        <div
          className={classNames(
            'col-span-full lg:col-span-5 flex flex-col justify-center',
            !imageRight ? 'lg:col-start-8' : 'lg:col-start-1'
          )}
        >
          <Heading
            className="mb-5 leading-tight lg:leading-tight xl:leading-tight dark:text-white text-black"
            tag="h3"
            size="md"
          >
            {title}
          </Heading>
          {descriptionList.map((item, index) => (
            <p
              key={index}
              className={classNames(
                'text-lg leading-normal dark:text-gray-2 text-black',
                index < descriptionList.length - 1 && 'mb-2'
              )}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </div>
        <div
          className={classNames(
            'col-span-full col-start-1 pt-6 md:col-span-8 md:col-start-3 lg:col-span-7 lg:pt-0',
            !imageRight
              ? 'pr-0 lg:col-start-1 lg:row-start-1 lg:pr-10 xl:pr-[72px]'
              : 'pl-0 lg:pl-10 xl:pl-[72px]'
          )}
        >
          {imageSrc && (
            <img
              className="h-auto w-full"
              width={imageWidth}
              height={imageHeight}
              src={imageSrc}
              loading="lazy"
              alt={imageAlt}
            />
          )}
          {videoSrc && (
            <iframe
              className="w-full"
              width="560"
              height="315"
              src={videoSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </Container>
    </section>
  );
};

FeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    .isRequired,
  imageSrc: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  imageAlt: PropTypes.string,
  imageRight: PropTypes.bool,
  withBackground: PropTypes.bool,
  videoSrc: PropTypes.string,
  className: PropTypes.string,
};

FeatureSection.defaultProps = {
  imageRight: true,
  withBackground: false,
  videoSrc: null,
  imageWidth: 592,
  imageHeight: 350,
  imageSrc: null,
  imageAlt: null,
  className: null,
};

export default FeatureSection;
