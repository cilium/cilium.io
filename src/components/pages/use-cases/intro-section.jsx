import PropTypes from 'prop-types';
import React from 'react';

const IntroSection = ({ category, title, tagline, subHeading, description, imageSrc }) => (
  <div className="pt-8 pb-16">
    <div className="container mx-auto w-10/12">
      <div>
        <span className=" my-3 inline-block rounded-[5px] bg-[#6b91c7]/30 py-1 px-12 font-bold text-[#6B91C7]">
          {category}
        </span>
        <h2 className="text-4xl font-bold">{title}</h2>
        <small className="font-semibold text-[#8E98AC]">{tagline}</small>
      </div>
      <div>
        <div className="block items-center gap-8 md:flex">
          <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
            <h3 className="my-4 max-w-2xl text-xl font-bold md:my-8">{subHeading}</h3>
            <p>{description}</p>
          </div>
          <div className="relative lg:basis-2/4">
            <img
              className="hidden max-h-[300px] md:block lg:absolute lg:top-2/4 lg:left-2/4 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:overflow-hidden"
              src={imageSrc}
              alt="astronaut bee"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

IntroSection.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default IntroSection;
