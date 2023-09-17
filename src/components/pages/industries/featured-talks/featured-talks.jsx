import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const FeaturedTalks = ({ talks }) => (
  <div className="featured-talks bg-[#F6F7F8] py-12">
    <Container>
      <h3 className="text-center text-[36px] font-bold lg:mb-[64px]">Featured talks</h3>

      <div className="flex flex-col gap-8 text-center md:text-center lg:flex-row lg:text-left">
        {talks.map((talk, index) => (
          <div key={index}>
            <iframe
              style={{ borderRadius: '12px', display: 'block', margin: 'auto', width: '100%' }}
              width="384"
              height="216"
              src={talks.videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
            <h3 className="text-[20px] font-bold lg:mt-5">{talk.title}</h3>
            <p className="text-base lg:mt-3">{talk.description}</p>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

FeaturedTalks.defaultProps = {};

FeaturedTalks.propTypes = {
  talks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      videoSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeaturedTalks;
