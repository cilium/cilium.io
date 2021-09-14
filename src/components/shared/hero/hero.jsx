import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Hero = ({ className, topText, title, description, buttonUrl, buttonText, illustration }) => (
  <section className={className}>
    <Container className="flex flex-col items-center lg:flex-row">
      <div className="flex-1 lg:max-w-[490px] xl:max-w-[592px]">
        {topText && (
          <span className="inline-block mb-5 uppercase tracking-wider leading-none font-bold text-xs text-primary-1 py-2 px-2.5 border-2 border-primary-1 rounded">
            {topText}
          </span>
        )}
        <Heading tag="h1" size="lg">
          {title}
        </Heading>
        <div
          className="mt-5 space-y-5 text-lg with-link-primary"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {buttonUrl && buttonText && (
          <Button className="mt-8" to={buttonUrl}>
            {buttonText}
          </Button>
        )}
      </div>
      <img
        className="flex-1 w-full my-10 lg:right-10 xl:right-0 lg:-translate-y-1/2 md:max-w-[720px] lg:max-w-[450px] xl:max-w-max lg:absolute lg:top-1/2  md:my-14 lg:my-0 xl:w-max"
        src={illustration}
        alt=""
      />
    </Container>
  </section>
);

Hero.propTypes = {
  className: PropTypes.string,
  topText: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
};

Hero.defaultProps = {
  className: null,
  topText: null,
  buttonText: null,
  buttonUrl: null,
};

export default Hero;
