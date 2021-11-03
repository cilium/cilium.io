import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import CiliumLogo from './images/cilium-logo.inline.svg';

const BlogPostCard = ({ path, ogImage: cover, date, title, ogSummary: summary, categories }) => (
  <Link
    to={path}
    className="flex flex-col p-6 transition-all duration-200 border rounded-lg md:p-8 border-gray-3 group hover:border-transparent hover:shadow-tertiary"
  >
    {cover ? (
      <GatsbyImage
        className="min-h-[168px] max-h-[168px]"
        imgClassName="rounded-lg"
        image={getImage(cover)}
        objectFit="contain"
        alt={title}
      />
    ) : (
      <div className="h-[168px] flex justify-center items-center bg-gray-4 rounded-lg">
        <CiliumLogo />
      </div>
    )}

    <div className="flex flex-col flex-grow mt-7">
      <span className="text-sm font-medium leading-none text-gray-1">{date}</span>
      <h3 className="mt-3 font-bold leading-normal transition-colors duration-200 line-clamp-3 group-hover:text-primary-1 md:text-lg">
        {title}
      </h3>
      <p className="mt-2 mb-4 line-clamp-5">{summary}</p>
      <div className="flex flex-wrap mt-auto gap-x-2 gap-y-2">
        {categories?.map((category) => (
          <span
            className="text-primary-1 font-bold bg-additional-4 bg-opacity-70 rounded p-2.5 tracking-wider uppercase text-xs leading-none"
            key={category}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

BlogPostCard.propTypes = {
  path: PropTypes.string.isRequired,
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }),
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ogSummary: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
};

BlogPostCard.defaultProps = {
  ogImage: null,
  ogSummary: null,
  categories: null,
};

export default BlogPostCard;
