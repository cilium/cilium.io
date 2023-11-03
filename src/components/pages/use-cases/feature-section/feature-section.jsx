import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageRight,
  videoSrc,
  withBackground,
  className,
}) => (
  <section className={classNames(withBackground && 'bg-gray-4')}>
    <Container
      className={classNames(
        'grid grid-cols-12 gap-y-6 gap-x-6 pb-10 md:pb-20 lg:pb-28 xl:gap-x-8 xl:pb-32',
        className
      )}
    >
      <div
        className={classNames(
          'col-span-full lg:col-span-5',
          !imageRight ? 'lg:col-start-8' : 'lg:col-start-1'
        )}
      >
        <Heading
          className="mb-5 leading-tight lg:leading-tight xl:leading-tight"
          tag="h3"
          size="md"
        >
          {title}
        </Heading>
        <p className="text-lg leading-normal" dangerouslySetInnerHTML={{ __html: description }} />
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
            className="max-h-full w-full lg:max-h-[350px]"
            width={592}
            height={350}
            src={imageSrc}
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
            allowFullScreen
          />
        )}
      </div>
    </Container>
  </section>
);

FeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
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
  imageSrc: null,
  imageAlt: null,
  className: null,
};

export default FeatureSection;
