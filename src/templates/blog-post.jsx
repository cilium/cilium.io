/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import 'prismjs/themes/prism.css';
import React from 'react';

import Content from 'components/pages/blog-post/content';
import PopularPosts from 'components/shared/popular-posts';
import SEO from 'components/shared/seo';

import MainLayout from '../layouts/main';

const BlogPostPage = (props) => {
  const {
    data: { mdx: postData },
    children,
    location: { pathname },
  } = props;
  const {
    frontmatter: { path, title, date, tags, ogSummary },
  } = postData;
  const isBlogPage = pathname.startsWith('/blog');

  return (
    <MainLayout isBlogPage={isBlogPage}>
      <Content
        path={path}
        content={children}
        date={date}
        title={title}
        tags={tags}
        summary={ogSummary}
      />
      <PopularPosts className="my-10 md:my-20 lg:my-28" />
    </MainLayout>
  );
};

export const Head = ({ data: { mdx: postData }, location: { pathname } }) => {
  const {
    frontmatter: { title, ogImage, ogSummary },
  } = postData;
  const pageMetadata = {
    title,
    description: `${ogSummary.slice(0, 133)}...`,
    image: ogImage || null,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMM DD, yyyy")
        title
        path
        tags
        ogSummary
        ogImage {
          childImageSharp {
            resize(jpegQuality: 90, toFormat: JPG, width: 1200, height: 630) {
              src
            }
          }
        }
      }
      body
    }
  }
`;

export default BlogPostPage;
