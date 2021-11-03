import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';
import Heading from 'components/shared/heading';

const blockTitle = 'Popular posts';

const PopularPosts = ({ className, items }) => {
  const {
    allPopularPosts: { posts },
  } = useStaticQuery(graphql`
    query BlogPagePopularPosts {
      allPopularPosts: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/posts/" }
          fields: { isPopular: { eq: true }, isFeatured: { eq: false } }
        }
        limit: 3
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        posts: nodes {
          frontmatter {
            path
            date(locale: "en", formatString: "MMM DD, yyyy")
            categories
            title
            ogSummary
            ogImage {
              childImageSharp {
                gatsbyImageData(width: 550)
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
  `);
  return (
    <div className={className}>
      <Heading tag="h2" theme="gray" size="xxs">
        {blockTitle}
      </Heading>
      <div className="grid gap-6 mt-6 md:mt-8 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {posts.map(({ frontmatter }, index) => (
          <BlogPostCard {...frontmatter} key={index} />
        ))}
      </div>
    </div>
  );
};

PopularPosts.propTypes = {
  className: PropTypes.string,
};

PopularPosts.defaultProps = {
  className: null,
};

export default PopularPosts;
