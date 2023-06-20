import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';

const BlogPostsList = ({ posts }) => (
  <div className="mt-6 grid gap-6 sm:grid-cols-2 md:gap-8 lg:mt-11 lg:grid-cols-3">
    {posts.map(({ frontmatter, fields }, index) => (
      <BlogPostCard {...frontmatter} {...fields} key={index} />
    ))}
  </div>
);

BlogPostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({}),
      frontmatter: PropTypes.shape({}),
    })
  ).isRequired,
};

export default BlogPostsList;
