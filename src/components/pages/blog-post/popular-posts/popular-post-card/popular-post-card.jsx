import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const PopularPostCard = ({ frontmatter: { date, title, ogImage: cover, path } }) => (
  <Link
    className="flex flex-col flex-1 p-6 space-y-4 border rounded-lg md:space-y-4 md:p-8 lg:flex-row border-gray-3 lg:space-y-0 lg:space-x-7"
    to={path}
  >
    <GatsbyImage
      className="flex-shrink-0 lg:max-w-[198px] md:min-h-[170px] lg:min-h-0"
      imgClassName="rounded"
      image={getImage(cover)}
      objectFit="contain"
      alt="Cover"
    />
    <div>
      <span className="text-sm font-normal leading-none text-gray-1">{date}</span>
      <h3 className="mt-3 font-bold line-clamp-3 md:text-lg md:leading-normal">{title}</h3>
    </div>
  </Link>
);

PopularPostCard.propTypes = {
  frontmatter: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ogImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape(PropTypes.any),
      }),
    }),
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default PopularPostCard;
