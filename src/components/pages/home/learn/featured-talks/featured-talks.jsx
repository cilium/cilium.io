import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import CardSvg from './images/card.inline.svg';

const title = 'Featured talks';

const videoUrls = [
  'https://youtu.be/vNuEx0wB_-4',
  'https://youtu.be/fNtG0iHYne4',
  'https://youtu.be/u-4naOMfs_w',
  'https://youtu.be/slBAYUDABDA',
];

const FeaturedTalks = ({ className }) => (
  <div className={className}>
    <Heading tag="h3" theme="gray">
      {title}
    </Heading>
    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 xs:grid-cols-2">
      {videoUrls.map((url, index) => (
        <Link key={index} to={url} target="_blank" rel="noopener noreferrer">
          <CardSvg className="w-full h-auto" />
        </Link>
      ))}
    </div>
  </div>
);

FeaturedTalks.propTypes = {
  className: PropTypes.string,
};

FeaturedTalks.defaultProps = {
  className: null,
};

export default FeaturedTalks;
