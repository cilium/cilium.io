import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const FeaturedTalks = ({ heading = 'Featured talks', talks, className }) => (
  <div className={classNames(className, 'featured-talks bg-[#F6F7F8] py-12')}>
    <Container>
      <h3 className="text-center text-3xl font-bold lg:mb-[64px]">{heading}</h3>
      <div className="flex flex-col gap-8 text-center md:text-center lg:flex-row  lg:text-left">
        {talks.map((talk, index) => (
          <div key={index} className="basis-1/3">
            <iframe
              src={talk.videoSrc}
              title="YouTube video player"
              className="mx-auto block h-48 w-full rounded-lg"
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

FeaturedTalks.defaultProps = {
  className: '',
};

FeaturedTalks.propTypes = {
  heading: PropTypes.string.isRequired,
  className: PropTypes.string,
  talks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      videoSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeaturedTalks;
