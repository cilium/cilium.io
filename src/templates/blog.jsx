/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import FeaturedPosts from 'components/pages/blog/featured-posts';
import PostsBoard from 'components/pages/blog/posts-board';
import Cards from 'components/shared/cards';
import SEO from 'components/shared/seo';

import MainLayout from '../layouts/main';

const cardItems = [
  {
    iconName: 'slack',
    title: 'Slack',
    description:
      'For live conversation and quick questions, join the Cilium Slack workspace. Don’t forget to say hi!',
    buttonText: 'Join slack workspace',
    buttonUrl: 'https://slack.cilium.io',
    buttonTarget: '_blank',
  },
  {
    iconName: 'twitter',
    title: 'X',
    description: 'Follow Cilium on X for the latest news and announcements.',
    buttonText: 'Follow Cilium on X',
    buttonUrl: 'https://x.com/ciliumproject',
    buttonTarget: '_blank',
  },
  {
    iconName: 'github',
    title: 'Github',
    description: 'Cilium uses GitHub tags to maintain a list of asked questions.',
    buttonText: 'Join Github',
    buttonUrl: 'https://github.com/cilium/cilium',
    buttonTarget: '_blank',
  },
];

const BlogPage = (props) => {
  const {
    data: {
      allPosts: { nodes: posts },
      featuredPostEdges: { nodes: featuredStory },
    },
    pageContext: { categories, currentCategory, basePath, currentPage, numPages },
    location: { pathname },
  } = props;
  const isCategoryPage = pathname.includes('categories');

  return (
    <MainLayout headerWithSearch>
      {!isCategoryPage && <FeaturedPosts featuredStory={featuredStory?.[0]} />}
      <PostsBoard
        categories={categories}
        posts={posts}
        currentCategory={currentCategory}
        basePath={basePath}
        currentPage={currentPage}
        numPages={numPages}
      />
      <Cards
        className="py-10 md:py-20 lg:py-28"
        title="Community"
        items={cardItems}
        buttonType="link"
        theme="white"
      />
    </MainLayout>
  );
};

export default BlogPage;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'Blog — Cilium',
    description: 'The latest articles covering eBPF-based Networking, Observability, and Security',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};

export const blogPostsQuery = graphql`
  query blogPostsQuery(
    $skip: Int!
    $limit: Int!
    $currentCategory: String!
    $draftFilter: [Boolean]!
  ) {
    allPosts: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "/posts/" } }
        fields: {
          categories: { glob: $currentCategory }
          isFeatured: { eq: false }
          draft: { in: $draftFilter }
        }
      }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        fields {
          externalUrl
          ogImageUrl
        }
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

    featuredPostEdges: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "/posts/" } }
        fields: { isFeatured: { eq: true } }
      }
    ) {
      nodes {
        fields {
          externalUrl
          ogImageUrl
        }
        frontmatter {
          path
          date(locale: "en", formatString: "MMM DD, yyyy")
          categories
          title
          ogSummary
          ogImage {
            childImageSharp {
              gatsbyImageData(width: 735)
            }
          }
        }
      }
    }
  }
`;
