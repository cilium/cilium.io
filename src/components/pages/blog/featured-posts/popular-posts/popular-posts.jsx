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
    <div className="flex flex-col flex-1 mt-8 space-y-8">
      {items.map(({ frontmatter: { date, title, cover, path } }, index) => (
        <Link
          className="flex flex-1 p-8 border rounded-lg border-gray-3 space-x-7"
          key={index}
          to={path}
        >
          <GatsbyImage
            className="flex-shrink-0 max-w-[198px]"
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
