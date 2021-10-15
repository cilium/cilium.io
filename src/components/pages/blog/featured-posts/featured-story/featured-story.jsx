import { format } from 'date-fns';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const blockTitle = 'Featured story';
const FeaturedStory = ({ className, title, date, cover, summary, slug }) => {
  const publishDate = format(new Date(date), 'MMMM dd, yyyy');

  return (
    <div className={className}>
      <Heading tag="h2" size="xxs" theme="gray">
        {blockTitle}
      </Heading>
      <div className="flex flex-col p-10 mt-8 border border-gray-3 rounded-large">
        <Link to={slug}>
          <GatsbyImage imgClassName="rounded-lg" image={getImage(cover)} alt="" />
        </Link>
        <span className="mt-8 font-medium leading-none text-gray-1">{publishDate}</span>
        <Heading className="mt-4" tag="h3" size="sm">
          {title}
        </Heading>
        <p className="mt-3">{summary}</p>
      </div>
    </div>
  );
};

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
  slug: PropTypes.string.isRequired,
};

FeaturedStory.defaultProps = {
  className: null,
};

export default FeaturedStory;
