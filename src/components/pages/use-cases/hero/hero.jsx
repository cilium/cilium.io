import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Label from 'components/shared/type-label';

const Hero = ({
  category,
  title,
  tagline,
  subHeading,
  description,
  imageSrc,
  imageAlt,
  videoSrc,
}) => (
  <section className="bg-gray-4">
    <Container className="grid grid-cols-12 gap-y-6 gap-x-6 pt-5 pb-10 md:pt-16 md:pb-20 lg:pb-[138px] xl:gap-x-8">
      <div
        className={classNames(
          imageSrc || videoSrc ? 'col-span-full lg:col-span-6' : 'col-span-full lg:col-span-8'
        )}
      >
        <Label type={category}>{category}</Label>
        <Heading
          className="mt-5 mb-3 leading-tight lg:leading-tight xl:leading-tight"
          tag="h1"
          size="lg"
        >
          {title}
        </Heading>
        <small className="text-base font-medium text-gray-1">{tagline}</small>
        <Heading className="my-5" tag="h2" size="xs">
          {subHeading}
        </Heading>
        <p className="text-lg leading-normal">{description}</p>
      </div>
      {(imageSrc || videoSrc) && (
        <div
          className={classNames(
            'col-span-full col-start-1 pt-6 md:col-span-8 md:col-start-3 lg:col-span-6 lg:pt-14',
            imageSrc && 'place-self-center '
          )}
        >
          {imageSrc && <img className="max-h-[350px]" src={imageSrc} alt={imageAlt} />}
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
      )}
    </Container>
  </section>
);

Hero.defaultProps = {
  videoSrc: null,
  imageSrc: null,
  imageAlt: null,
};

Hero.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  videoSrc: PropTypes.string,
};

export default Hero;
