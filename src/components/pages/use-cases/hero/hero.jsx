import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Label = ({ category }) => (
  <span
    className={classNames(
      'w-fit rounded py-2 px-2.5 text-sm font-semibold uppercase leading-none tracking-wider',
      {
        'bg-additional-green/10 text-additional-green': category === 'Networking',
      },
      { 'bg-additional-red/10 text-additional-red': category === 'Security' },
      {
        'bg-additional-blue/10 text-additional-blue': category === 'Observability',
      }
    )}
  >
    {category}
  </span>
);

const Hero = ({
  category,
  title,
  tagline,
  subHeading,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  videoSrc,
}) => (
  <section className="mb-10 bg-gray-4 md:mb-20 lg:mb-28">
    <Container className="grid grid-cols-12 gap-y-6 gap-x-6 pt-5 pb-10 md:pt-16 md:pb-20 lg:pb-[138px] xl:gap-x-8">
      <div
        className={classNames(
          imageSrc || videoSrc ? 'col-span-full lg:col-span-6' : 'col-span-full lg:col-span-8'
        )}
      >
        <Label category={category} />
        <Heading
          className="mt-6 mb-3 leading-tight lg:leading-tight xl:!text-44 xl:leading-tight"
          tag="h1"
          size="md"
        >
          {title}
        </Heading>
        <small className="text-xl leading-normal ">{tagline}</small>
        <Heading
          className="pt-5 mt-5 mb-2 font-semibold border-t border-gray-3"
          tag="h2"
          size="3xs"
        >
          {subHeading}
        </Heading>
        <p className="text-base leading-normal" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      {(imageSrc || videoSrc) && (
        <div
          className={classNames(
            'col-span-full col-start-1 pt-6 pl-0 md:col-span-8 md:col-start-3 lg:col-span-6 lg:pt-8 lg:pl-8',
            imageSrc && 'place-self-center '
          )}
        >
          {imageSrc && (
            <img
              className="max-h-[350px]"
              width={imageWidth}
              height={imageHeight}
              src={imageSrc}
              alt={imageAlt}
              loading="eager"
            />
          )}
          {videoSrc && (
            <iframe
              className="w-full"
              width={560}
              height={315}
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

Hero.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  videoSrc: PropTypes.string,
};

Hero.defaultProps = {
  videoSrc: null,
  imageSrc: null,
  imageAlt: null,
  imageWidth: 592,
  imageHeight: 350,
};

export default Hero;
