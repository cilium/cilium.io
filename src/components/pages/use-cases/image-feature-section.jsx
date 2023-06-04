import PropTypes from 'prop-types';
import React from 'react';

const ImageFeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageRight,
  whiteBackground,
}) => (
  <div className={`py-16 ${whiteBackground ? 'bg-white' : ''}`}>
    <div className="container mx-auto w-10/12">
      <div className="block items-center gap-8 md:flex">
        {!imageRight && (
          <div className="lg:basis-2/4">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        )}
        <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
          <h3 className="mb-4 text-xl font-bold ">{title}</h3>
          <p>{description}</p>
        </div>
        {imageRight && (
          <div className="lg:basis-2/4">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        )}
      </div>
    </div>
  </div>
);

ImageFeatureSection.defaultProps = {
  imageRight: true,
  whiteBackground: false,
};

ImageFeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageRight: PropTypes.bool,
  whiteBackground: PropTypes.bool,
};

export default ImageFeatureSection;
