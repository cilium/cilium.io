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
      filteredPostsByCategory: { nodes: filteredPostsByCategory },
      filteredPostsByTag: { nodes: filteredPostsByTag },
    },
    pageContext: { featured, popularPosts, categories, type, queryFilter, currentPage, numPages },
  } = props;
  const posts = type === 'categories' ? filteredPostsByCategory : filteredPostsByTag;
  return (
    <MainLayout pageMetadata={SeoMetadata.blog}>
      <FeaturedPosts featuredStory={featured.frontmatter} popularPosts={popularPosts} />
      <FeaturedTalks />
      <PostsBoard
        categories={categories}
        posts={posts}
        type={type}
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
    filteredPostsByCategory: allMdx(
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
    filteredPostsByTag: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        fields: { isFeatured: { eq: false } }
        frontmatter: { tags: { glob: $queryFilter } }
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
