import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import { sanitize } from 'utils/sanitize-html';

const themeClassNames = {
  white: 'bg-white',
  gray: 'bg-gray-4',
};

const sizeClassName = {
  md: {
    content: 'lg:max-w-[488px]',
    illustration: 'lg:w-[500px] lg:translate-y-[calc(-50%+1rem)] xl:w-[592px] 2xl:left-0',
  },
  lg: {
    content: 'lg:max-w-[592px] z-10',
    illustration:
      '-ml-[15%] sm:-ml-[8%] w-[130%] max-w-none lg:ml-0 lg:translate-y-[calc(-50%+1.6rem)] lg:-right-7 lg:w-[620px] xl:w-[726px]',
  },
};
const Hero = ({ className, title, description, illustration, theme, size }) => (
  <section
    className={classNames('overflow-hidden lg:overflow-visible', className, themeClassNames[theme])}
  >
    <Container className="grid gap-y-6 lg:grid-cols-2 xl:gap-x-8">
      <div className={classNames('flex-1', sizeClassName[size].content)}>
        <Heading className="leading-tight lg:leading-tight xl:leading-tight" tag="h1" size="lg">
          {title}
        </Heading>
        <div
          className="text-md with-link-primary mt-5 space-y-5 leading-relaxed md:text-lg md:leading-relaxed lg:max-w-[503px]"
          dangerouslySetInnerHTML={{ __html: sanitize(description) }}
        />
      </div>
      <div className="relative flex flex-1 justify-center">
        <img
          className={classNames(
            'left-auto h-full w-full md:max-w-[720px] lg:absolute lg:-right-10 lg:top-1/2 lg:my-0 lg:h-auto',
            sizeClassName[size].illustration
          )}
          src={illustration}
          alt=""
          loading="eager"
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
  size: PropTypes.oneOf(Object.keys(sizeClassName)),
};

Hero.defaultProps = {
  className: null,
  theme: 'white',
  size: 'md',
};

export default Hero;
