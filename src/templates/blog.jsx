/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import FeaturedPosts from 'components/pages/blog/featured-posts';
import PostsBoard from 'components/pages/blog/posts-board';
import Community from 'components/shared/community';
import FeaturedTalks from 'components/shared/featured-talks';
import SeoMetadata from 'utils/seo-metadata';

import MainLayout from '../layouts/main';

const BlogPage = (props) => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
    pageContext: { featured, popularPosts, categories, queryFilter, currentPage, numPages },
  } = props;

  return (
    <MainLayout pageMetadata={SeoMetadata.blog}>
      <FeaturedPosts featuredStory={featured.frontmatter} popularPosts={popularPosts} />
      <FeaturedTalks />
      <PostsBoard
        categories={categories}
        posts={posts}
        queryFilter={queryFilter}
        currentPage={currentPage}
        numPages={numPages}
      />
      <Community />
    </MainLayout>
  );
};

export default BlogPage;

export const blogPostsQuery = graphql`
  query blogPostsQuery($skip: Int!, $limit: Int!, $queryFilter: String!) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        fields: { categories: { glob: $queryFilter }, isFeatured: { eq: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
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
      }
    }
  }
`;
