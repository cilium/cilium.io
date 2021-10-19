import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const blockTitle = 'Popular posts';

const PopularPosts = ({ className, items }) => (
  <div className={className}>
    <Heading tag="h2" theme="gray" size="xxs">
      {blockTitle}
    </Heading>
    <div className="grid flex-col flex-1 gap-6 mt-6 md:mt-8 sm:grid-cols-2 md:gap-8 xl:gap-0 xl:flex xl:space-y-8">
      {items.map(({ frontmatter: { date, title, cover, path } }, index) => (
        <Link
          className="flex flex-col flex-1 p-6 space-y-4 border rounded-lg md:space-y-4 md:p-8 lg:flex-row border-gray-3 lg:space-y-0 lg:space-x-7"
          key={index}
          to={path}
        >
          <GatsbyImage
            className="flex-shrink-0 lg:max-w-[198px] md:min-h-[170px] lg:min-h-0"
            imgClassName="rounded"
            image={getImage(cover)}
            alt="Cover"
          />
          <div>
            <span className="text-sm font-normal leading-none text-gray-1">{date}</span>
            <h3 className="mt-3 font-bold line-clamp-3 md:text-lg md:leading-normal">{title}</h3>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

PopularPosts.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.shape(PropTypes.any),
          }),
        }).isRequired,
        slug: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

PopularPosts.defaultProps = {
  className: null,
};

export default PopularPosts;
