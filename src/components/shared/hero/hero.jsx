import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Hero = ({ className, title, description, illustration }) => (
  <section className={className}>
    <Container className="flex flex-col items-center lg:flex-row">
      <div className="flex-1 lg:max-w-[490px] xl:max-w-[592px]">
        <Heading tag="h1" size="lg">
          {title}
        </Heading>
        <div
          className="mt-5 space-y-5 text-lg with-link-primary"
          dangerouslySetInnerHTML={{ __html: description }}
        />
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  className: null,
};

export default Hero;
