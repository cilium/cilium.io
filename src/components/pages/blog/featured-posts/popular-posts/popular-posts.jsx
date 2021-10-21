import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import PopularPostCard from 'components/shared/popular-post-card';

const blockTitle = 'Popular posts';

const PopularPosts = ({ className, items }) => (
  <div className={className}>
    <Heading tag="h2" theme="gray" size="xxs">
      {blockTitle}
    </Heading>
    <div className="grid flex-col flex-1 gap-6 mt-6 md:mt-8 sm:grid-cols-2 md:gap-8 xl:gap-0 xl:flex xl:space-y-8">
      {items.map((item, index) => (
        <PopularPostCard {...item} key={index} />
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
        ogImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.shape(PropTypes.any),
          }),
        }),
        path: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

PopularPosts.defaultProps = {
  className: null,
};

export default PopularPosts;
