/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import FeaturedPosts from 'components/pages/blog/featured-posts';
import PostsBoard from 'components/pages/blog/posts-board';
import Community from 'components/shared/community';
import FeaturedTalks from 'components/shared/featured-talks';

import MainLayout from '../layouts/main';

const BlogPage = (props) => {
  const {
    data: {
      filteredPostsByCategory: { nodes: filteredPostsByCategory },
      filteredPostsByTag: { nodes: filteredPostsByTag },
    },
    pageContext: {
      featured,
      popularPosts,
      categories,
      type,
      queryFilter,
      currentPage,
      numPages,
      canonicalUrl,
      slug,
    },
    location: { pathname },
  } = props;
  const posts = type === 'categories' ? filteredPostsByCategory : filteredPostsByTag;
  const shouldShowBanner = pathname.startsWith('/blog');

  const seoMetadata = {
    title: 'Blog — Cilium',
    description: 'The latest articles covering eBPF-based Networking, Observability, and Security',
    slug,
  };
  return (
    <MainLayout
      showBanner={shouldShowBanner}
      canonicalUrl={canonicalUrl}
      pageMetadata={seoMetadata}
    >
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
  query blogPostsQuery($skip: Int!, $limit: Int!, $queryFilter: String!, $draftFilter: [Boolean]!) {
    filteredPostsByCategory: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        fields: {
          categories: { glob: $queryFilter }
          isFeatured: { eq: false }
          draft: { in: $draftFilter }
        }
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
        fields: { isFeatured: { eq: false }, draft: { in: $draftFilter } }
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
