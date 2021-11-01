import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';
import Heading from 'components/shared/heading';

const blockTitle = 'Popular posts';

const PopularPosts = ({ className, items }) => (
  <div className={className}>
    <Heading tag="h2" theme="gray" size="xxs">
      {blockTitle}
    </Heading>
    <div className="grid gap-6 mt-6 md:mt-8 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
      {items.map(({ frontmatter }, index) => (
        <BlogPostCard {...frontmatter} key={index} />
      ))}
    </div>
  </div>
);

PopularPosts.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape(),
    })
  ).isRequired,
};

PopularPosts.defaultProps = {
  className: null,
};

export default PopularPosts;
