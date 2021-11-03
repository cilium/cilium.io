/* eslint-disable react/prop-types */
import React from 'react';
import 'prismjs/themes/prism.css';

import Content from 'components/pages/blog-post/content';
import PopularPosts from 'components/pages/blog-post/popular-posts';

import MainLayout from '../layouts/main';

const BlogPostPage = (props) => {
  const {
    pageContext: { postData, popularPosts },
    location: { pathname },
  } = props;
  const {
    body: html,
    frontmatter: { path, title, date, tags, ogImage, ogSummary },
  } = postData;
  const shouldShowBanner = pathname.startsWith('/blog');
  const slug = path.startsWith('/') ? path.slice(1) : path;
  const seoMetadata = {
    title,
    description: ogSummary,
    image: ogImage || null,
    slug,
  };
  return (
    <MainLayout showBanner={shouldShowBanner} pageMetadata={seoMetadata}>
      <Content path={path} html={html} date={date} title={title} tags={tags} summary={ogSummary} />
      {!!popularPosts?.length && <PopularPosts items={popularPosts} />}
    </MainLayout>
  );
};

export default BlogPostPage;
