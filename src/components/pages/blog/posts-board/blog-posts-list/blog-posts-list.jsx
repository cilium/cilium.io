import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';

const BlogPostsList = ({ posts }) => (
  <div className="grid gap-6 mt-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:mt-11">
    {posts.map(({ frontmatter }, index) => (
      <BlogPostCard {...frontmatter} key={index} />
    ))}
  </div>
);

BlogPostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
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
      }),
    })
  ).isRequired,
};

export default BlogPostsList;
