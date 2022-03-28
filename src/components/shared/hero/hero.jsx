import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const themeClassNames = {
  white: 'bg-white',
  gray: 'bg-gray-4',
};

const Hero = ({ className, title, description, illustration, theme }) => (
  <section className={classNames(className, themeClassNames[theme])}>
    <Container className="grid gap-y-6 xl:gap-x-8 lg:grid-cols-2">
      <div className="flex-1 lg:max-w-[488px]">
        <Heading
          className="leading-relaxed lg:leading-relaxed xl:leading-relaxed"
          tag="h1"
          size="lg"
        >
          {title}
        </Heading>
        <div
          className="mt-5 space-y-5 leading-relaxed text-md md:text-lg with-link-primary md:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="relative flex justify-center flex-1">
        <img
          className="w-full h-full lg:h-auto lg:-right-10 left-auto md:max-w-[720px] lg:w-[500px] xl:w-[592px] lg:absolute lg:top-1/2 lg:translate-y-[calc(-50%+1rem)] lg:my-0 2xl:left-0"
          src={illustration}
          alt=""
        />
      </div>
    </Container>
  </section>
);

Hero.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
};

Hero.defaultProps = {
  className: null,
  theme: 'white',
};

export default Hero;
