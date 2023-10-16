import PropTypes from 'prop-types';
import React from 'react';

const YoutubeIframe = ({ embedId }) => (
  <figure className="relative w-full max-w-[1008px] cursor-pointer pb-[56.25%]">
    <iframe
      className="absolute left-0 top-0 h-full w-full"
      width="796"
      height="447"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded YouTube"
      allowFullScreen
    />
  </figure>
);

YoutubeIframe.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeIframe;
