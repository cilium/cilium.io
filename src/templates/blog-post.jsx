/* eslint-disable react/prop-types */
import React from 'react';

import Content from 'components/pages/blog-post/content';
import PopularPosts from 'components/pages/blog-post/popular-posts';

import MainLayout from '../layouts/main';

const BlogPostPage = (props) => {
  const {
    pageContext: { postData, popularPosts },
  } = props;
  const { body: html, frontmatter } = postData;
  return (
    <MainLayout>
      <Content html={html} date={frontmatter.date} title={frontmatter.title} />
      <PopularPosts items={popularPosts} />
    </MainLayout>
  );
};

export default BlogPostPage;
