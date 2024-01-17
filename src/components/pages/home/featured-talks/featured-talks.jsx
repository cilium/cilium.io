import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

const FeaturedTalks = ({ heading, talks, className }) => (
  <div className={classNames('featured-talks  py-10 md:py-20 lg:py-32', className)}>
    <Container>
      <Heading tag="h2" className="text-center">
        {heading}
      </Heading>
      <div className="mt-6 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-6 lg:mt-14 lg:gap-8">
        {talks.map(({ title, description, videoSrc }, index) => (
          <div key={index} className="basis-1/3">
            <iframe
              src={videoSrc}
              title="YouTube video player"
              className="aspect-video w-full rounded-lg border border-gray-3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <Heading className="mt-3 !text-xl md:mt-5" tag="h3" size="xs">
              {title}
            </Heading>
            <p className="mt-2">{description}</p>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

FeaturedTalks.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
  talks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      videoSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

FeaturedTalks.defaultProps = {
  className: '',
  heading: 'Featured Talks',
};

export default FeaturedTalks;
