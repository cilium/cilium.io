import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const Hero = ({ children, heading, texts, imageSrc, imageAlt }) => (
  <section className="bg-[#F6F7F8] lg:pb-24">
    <Container>
      <div className="items-center justify-between lg:flex">
        <div>
          <h2 className="mt-2.5 mb-3 py-10 text-3xl font-bold leading-tight lg:text-4xl lg:leading-tight xl:!text-44 xl:leading-tight">
            {heading}
          </h2>
          <div className="items-start justify-start gap-[103px] lg:flex">
            <div className="flex flex-col gap-6 text-base leading-normal lg:flex lg:w-[610px] lg:flex-col lg:gap-6">
              {texts.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <figure>
              <img src={imageSrc} alt={imageAlt} className="h-[470px] w-[470px] lg:-mt-16" />
            </figure>
          </div>
        </div>
      </div>
      {children}
    </Container>
  </section>
);
Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default Hero;
