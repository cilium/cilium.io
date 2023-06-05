import PropTypes from 'prop-types';
import React from 'react';

const IntroSection = ({
  category,
  title,
  tagline,
  subHeading,
  description,
  imageSrc,
  imageAlt,
}) => (
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
          <div className="inline-block lg:basis-2/4">
            <img className="mx-auto max-h-[350px]" src={imageSrc} alt={imageAlt} />
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
  imageAlt: PropTypes.string.isRequired,
};

export default IntroSection;
