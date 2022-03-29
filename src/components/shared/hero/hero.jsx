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
    <Container className="grid gap-y-6 lg:grid-cols-2 xl:gap-x-8">
      <div className="flex-1 lg:max-w-[488px]">
        <Heading
          className="leading-relaxed lg:leading-relaxed xl:leading-relaxed"
          tag="h1"
          size="lg"
        >
          {title}
        </Heading>
        <div
          className="text-md with-link-primary mt-5 space-y-5 leading-relaxed md:text-lg md:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="relative flex flex-1 justify-center">
        <img
          className="left-auto h-full w-full md:max-w-[720px] lg:absolute lg:-right-10 lg:top-1/2 lg:my-0 lg:h-auto lg:w-[500px] lg:translate-y-[calc(-50%+1rem)] xl:w-[592px] 2xl:left-0"
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
