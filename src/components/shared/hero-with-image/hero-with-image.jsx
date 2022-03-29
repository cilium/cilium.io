import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from '../container';
import Heading from '../heading';

const HeroWithImage = ({
  className,
  imgWrapperClassName,
  title,
  description,
  heroImage,
  decor1,
  decor2,
}) => (
  <section className={classNames('overflow-x-hidden bg-gray-4', className)}>
    <Container className="grid grid-cols-12 gap-y-14 sm:gap-y-20 md:gap-y-24 lg:items-center lg:gap-y-0 lg:gap-x-8">
      <div className="col-span-full lg:col-span-5">
        <Heading size="lg" tag="h1">
          {title}
        </Heading>
        <div className="mt-5 space-y-5 text-lg" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div
        className={classNames(
          'relative col-start-2 col-end-12 justify-self-center md:col-span-full lg:col-start-7 lg:col-end-13 lg:self-start xl:col-start-6',
          imgWrapperClassName
        )}
      >
        {decor1 && (
          <img
            className={classNames(decor2.className, 'absolute max-w-none')}
            src={decor2.src}
            alt=""
            aria-hidden
          />
        )}
        <GatsbyImage
          className="rounded-xl"
          imgClassName="rounded-xl"
          image={getImage(heroImage)}
          loading="eager"
          alt={title}
        />
        {decor2 && (
          <img
            className={classNames(decor1.className, 'absolute max-w-none')}
            src={decor1.src}
            alt=""
            aria-hidden
          />
        )}
      </div>
    </Container>
  </section>
);

HeroWithImage.propTypes = {
  className: PropTypes.string,
  imgWrapperClassName: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heroImage: PropTypes.shape({}).isRequired,
  decor1: PropTypes.exact({
    className: PropTypes.string,
    src: PropTypes.string,
  }),
  decor2: PropTypes.exact({
    className: PropTypes.string,
    src: PropTypes.string,
  }),
};

HeroWithImage.defaultProps = {
  className: null,
  imgWrapperClassName: null,
  decor1: null,
  decor2: null,
};

export default HeroWithImage;
