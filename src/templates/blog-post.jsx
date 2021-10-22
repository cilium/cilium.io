/* eslint-disable react/prop-types */
import React from 'react';
import 'prismjs/themes/prism.css';

import Content from 'components/pages/blog-post/content';
import PopularPosts from 'components/pages/blog-post/popular-posts';
import Community from 'components/shared/community';

import MainLayout from '../layouts/main';

const BlogPostPage = (props) => {
  const {
    pageContext: { postData, popularPosts },
  } = props;
  const {
    body: html,
    frontmatter: { path, title, date, tags, ogImage, ogSummary },
  } = postData;

  const seoMetadata = {
    title,
    description: ogSummary,
    image: ogImage || null,
  };
  return (
    <MainLayout pageMetadata={seoMetadata}>
      <Content path={path} html={html} date={date} title={title} tags={tags} summary={ogSummary} />
      <PopularPosts items={popularPosts} />
      <Community />
    </MainLayout>
  );
};

export default BlogPostPage;
