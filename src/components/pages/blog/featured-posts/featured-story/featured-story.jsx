import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const FeaturedStory = ({ className, title, date, ogImage: cover, ogSummary: summary, path }) => (
  <div className={className}>
    <Link
      className="flex flex-col items-center flex-1 space-y-6 group lg:items-start md:space-y-0 md:flex-row md:space-x-10 xl:space-x-14"
      to={path}
    >
      <div className="flex items-center flex-1 border border-gray-3 transition rounded-2xl group-hover:shadow-tertiary group-hover:border-transparent md:max-w-[464px] xl:flex-none">
        <GatsbyImage imgClassName="rounded-2xl" image={getImage(cover)} alt="" />
      </div>
      <div className="flex flex-col flex-1">
        <span className="font-medium leading-none text-gray-1">{date}</span>
        <Heading className="mt-4 line-clamp-2 group-hover:text-primary-1" tag="h3" size="lg">
          {title}
        </Heading>
        <p className="mt-3 md:text-lg md:leading-relaxed line-clamp-3">{summary}</p>
      </div>
    </Link>
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
