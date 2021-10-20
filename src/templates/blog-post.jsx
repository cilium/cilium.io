/* eslint-disable react/prop-types */
import React from 'react';

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
    frontmatter: { title, date, cover, socialImage },
  } = postData;

  const seoMetadata = {
    title,
    image: socialImage && cover,
  };
  return (
    <MainLayout pageMetadata={seoMetadata}>
      <Content html={html} date={date} title={title} />
      <PopularPosts items={popularPosts} />
      <Community />
    </MainLayout>
  );
};

export default BlogPostPage;
