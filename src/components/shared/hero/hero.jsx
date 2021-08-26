import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Hero = ({ topText, title, description, illustration }) => (
  <section className="mt-16">
    <Container className="flex flex-col items-center lg:flex-row lg:space-x-9">
      <div className="flex-1">
        <span className="inline-block uppercase tracking-wider leading-none font-bold text-xs text-primary-1 py-2 px-2.5 border-2 border-primary-1 rounded">
          {topText}
        </span>
        <Heading className="mt-5" tag="h1" size="lg">
          {title}
        </Heading>
        <div
          className="mt-5 space-y-5 text-lg with-link-primary"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <img
        className="flex-1 w-full my-10 lg:w-1/2 md:my-14 lg:my-0 xl:w-max"
        src={illustration}
        alt=""
      />
    </Container>
  </section>
);

Hero.propTypes = {
  topText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
};

export default Hero;
