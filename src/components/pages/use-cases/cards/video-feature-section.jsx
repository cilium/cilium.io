import PropTypes from 'prop-types';
import React from 'react';

const VideoFeatureSection = ({ headingText, description, videoSrc }) => (
  <div className="py-16">
    <div className="container mx-auto w-10/12">
      <div className="block items-center gap-8 md:flex">
        <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
          <h3 className="mb-4 text-xl font-bold ">{headingText}</h3>
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

VideoFeatureSection.propTypes = {
  headingText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
};

export default VideoFeatureSection;
