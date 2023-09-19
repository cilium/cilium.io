import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const Hero = ({ children, heading, texts, imageSrc, imageAlt }) => (
  <section className="bg-[#F6F7F8] lg:pb-24">
    <Container>
      <div className="items-center justify-between lg:flex">
        <div>
          <h2 className="py-10 text-3xl font-bold lg:text-4xl">{heading}</h2>
          <div className="items-start justify-start gap-[103px] lg:flex">
            <div className="flex flex-col gap-6 lg:flex lg:w-[610px] lg:flex-col lg:gap-6">
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
