import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const blockTitle = 'Featured story';

const FeaturedStory = ({ className, title, date, cover, summary, path }) => (
  <div className={className}>
    <Heading tag="h2" size="xxs" theme="gray">
      {blockTitle}
    </Heading>
    <div className="flex flex-col flex-1 p-10 mt-8 border border-gray-3 rounded-large">
      <Link to={path}>
        <GatsbyImage imgClassName="rounded-lg" image={getImage(cover)} alt="" />
      </Link>
      <span className="mt-8 font-medium leading-none text-gray-1">{date}</span>
      <Link to={path}>
        <Heading className="mt-4" tag="h3" size="sm">
          {title}
        </Heading>
      </Link>
      <p className="mt-3 md:text-lg md:leading-relaxed">{summary}</p>
    </div>
  </div>
);

FeaturedStory.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
};

FeaturedStory.defaultProps = {
  className: null,
};

export default FeaturedStory;
