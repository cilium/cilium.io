import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

const Hero = ({ heading, texts, imageSrc, imageAlt, imageStyle, className }) => (
  <section className={classNames('bg-[#F6F7F8] py-10 md:py-20 lg:py-24', className)}>
    <Container>
      <div className="items-start justify-start gap-[103px] lg:flex">
        <div className="flex flex-col gap-6 text-base leading-normal lg:flex lg:w-[610px] lg:flex-col lg:gap-6">
          <Heading
            className="leading-tight lg:leading-tight xl:!text-44 xl:leading-tight"
            tag="h1"
            size="md"
          >
            {heading}
          </Heading>
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <figure className="flex h-full items-center justify-center">
          <img src={imageSrc} alt={imageAlt} className={classNames('', imageStyle)} />
        </figure>
      </div>
    </Container>
  </section>
);

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageStyle: PropTypes.string,
  className: PropTypes.string,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Hero.defaultProps = {
  imageStyle: 'lg:h-[470px] lg:w-[470px]',
  className: '',
};

export default Hero;
