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
  whiteBackground,
}) => (
  <section className={classNames(whiteBackground && 'bg-gray-4')}>
    <Container className="grid grid-cols-12 gap-y-6 gap-x-6 py-10 md:py-20 lg:py-28 lg:pb-[138px] xl:gap-x-8">
      <div
        className={classNames(
          'col-span-full lg:col-span-6 ',
          !imageRight ? 'pl-0 lg:col-start-7 lg:pl-5' : 'pr-0 lg:pr-5'
        )}
      >
        <Heading
          className="mb-5 leading-tight lg:leading-tight xl:leading-tight"
          tag="h3"
          size="md"
        >
          {title}
        </Heading>
        <p className="text-lg leading-normal">{description}</p>
      </div>
      <div
        className={classNames(
          'col-span-full col-start-1 pt-6 md:col-span-8 md:col-start-3 lg:col-span-6 lg:pt-0',
          !imageRight && 'lg:col-start-1 lg:row-start-1'
        )}
      >
        {imageSrc && <img className="max-h-full lg:max-h-[350px]" src={imageSrc} alt={imageAlt} />}
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

FeatureSection.defaultProps = {
  imageRight: true,
  whiteBackground: false,
  videoSrc: null,
  imageSrc: null,
  imageAlt: null,
};

FeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageRight: PropTypes.bool,
  whiteBackground: PropTypes.bool,
  videoSrc: PropTypes.string,
};

export default FeatureSection;
