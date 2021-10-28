import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const FeaturedStory = ({ className, title, date, ogImage: cover, ogSummary: summary, path }) => (
  <div className={className}>
    <div className="flex flex-col items-center flex-1 space-y-6 lg:items-start md:space-y-0 md:flex-row md:space-x-10 xl:space-x-14">
      <Link
        className="flex items-center flex-1 md:max-w-[464px] hover:shadow-tertiary transition-shadow rounded-2xl xl:flex-none"
        to={path}
      >
        <GatsbyImage imgClassName="rounded-2xl" image={getImage(cover)} alt="" />
      </Link>
      <div className="flex flex-col flex-1">
        <span className="font-medium leading-none text-gray-1">{date}</span>
        <Link className="hover:text-primary-1" type="text" to={path}>
          <Heading className="mt-4 line-clamp-2" tag="h3" size="lg">
            {title}
          </Heading>
        </Link>
        <p className="mt-3 md:text-lg md:leading-relaxed line-clamp-3">{summary}</p>
      </div>
    </div>
  </div>
);

FeaturedStory.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  ogSummary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  ogImage: PropTypes.shape({
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
