/* eslint-disable react/prop-types */
// import { graphql } from 'gatsby';
import { graphql } from 'gatsby';
import React from 'react';

import FeaturedPosts from 'components/pages/blog/featured-posts';
import FeaturedTalks from 'components/shared/featured-talks';

import MainLayout from '../layouts/main';

const BlogPage = (props) => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
    pageContext: { featured, popularPosts },
  } = props;
  return (
    <MainLayout>
      <FeaturedPosts featuredStory={featured.frontmatter} popularPosts={popularPosts} />
      <FeaturedTalks />
    </MainLayout>
  );
};

export default BlogPage;

export const blogPostsQuery = graphql`
  query blogPostsQuery($skip: Int!, $limit: Int!, $queryFilter: String!) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/blog-posts/" }
        fields: { category: { glob: $queryFilter }, isFeatured: { eq: false } }
      }
      sort: { order: DESC, fields: fileAbsolutePath }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          category
          title
          summary
          cover {
            childImageSharp {
              gatsbyImageData(width: 320)
            }
          }
        }
      }
    }
  }
`;
