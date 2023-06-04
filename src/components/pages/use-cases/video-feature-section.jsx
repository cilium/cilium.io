import PropTypes from 'prop-types';
import React from 'react';

const VideoFeatureSection = ({ title, description, videoSrc, whiteBackground }) => (
  <div className={`py-16 ${whiteBackground ? 'bg-white' : ''}`}>
    <div className="container mx-auto w-10/12">
      <div className="block items-center gap-8 md:flex">
        <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
          <h3 className="mb-4 text-xl font-bold ">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="lg:basis-2/4">
          <iframe
            className="h-[300px] w-full"
            width="560"
            height="315"
            src={videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </div>
);

VideoFeatureSection.defaultProps = {
  whiteBackground: false,
};

VideoFeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  whiteBackground: PropTypes.bool,
};

export default VideoFeatureSection;
