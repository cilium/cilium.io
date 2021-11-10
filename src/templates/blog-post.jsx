/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';
import 'prismjs/themes/prism.css';

import Content from 'components/pages/blog-post/content';
import PopularPosts from 'components/pages/blog-post/popular-posts';

import MainLayout from '../layouts/main';

const BlogPostPage = (props) => {
  const {
    data: { mdx: postData },
    location: { pathname },
  } = props;
  const {
    body: html,
    frontmatter: { path, title, date, tags, ogImage, ogSummary },
  } = postData;
  const shouldShowBanner = pathname.startsWith('/blog');
  const slug = path.startsWith('/') ? path.slice(1) : path;
  const description = `${ogSummary.slice(0, 133)}...`;
  const seoMetadata = {
    title,
    description,
    image: ogImage || null,
    slug,
  };

  return (
    <MainLayout showBanner={shouldShowBanner} pageMetadata={seoMetadata}>
      <Content path={path} html={html} date={date} title={title} tags={tags} summary={ogSummary} />
      <PopularPosts />
    </MainLayout>
  );
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
