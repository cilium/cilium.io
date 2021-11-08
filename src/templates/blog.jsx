/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import FeaturedPosts from 'components/pages/blog/featured-posts';
import PostsBoard from 'components/pages/blog/posts-board';

import MainLayout from '../layouts/main';

const BlogPage = (props) => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
    pageContext: {
      featured,
      popularPosts,
      categories,
      currentCategory,
      currentPage,
      numPages,
      canonicalUrl,
      slug,
    },
    location: { pathname },
  } = props;
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
      <PostsBoard
        categories={categories}
        posts={posts}
        currentCategory={currentCategory}
        currentPage={currentPage}
        numPages={numPages}
      />
    </MainLayout>
  );
};

export default BlogPage;

export const blogPostsQuery = graphql`
  query blogPostsQuery(
    $skip: Int!
    $limit: Int!
    $currentCategory: String!
    $draftFilter: [Boolean]!
  ) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        fields: {
          categories: { glob: $currentCategory }
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
  }
`;
