import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Pagination from 'components/shared/pagination';
import Tabs from 'components/shared/tabs';

import BlogPostsList from './blog-posts-list';

const PostsBoard = ({ categories, posts, currentCategory, basePath, currentPage, numPages }) => {
  const blockTitle = currentCategory === '*' ? 'All posts' : currentCategory;

  const scrollTo = () => {
    const element = document.getElementById('categories');
    const offset = -50;
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y });
  };

  useEffect(() => {
    if (currentPage > 1) {
      scrollTo();
    }
  }, [currentPage]);

  return (
    <section className="mt-10 md:mt-20 lg:mt-28">
      <Container>
        <Heading tag="h2" className="text-black dark:text-white">
          {blockTitle}
        </Heading>
        <Tabs
          id="categories"
          items={categories}
          activeLabel={currentCategory}
          className="mt-6 md:mt-10 lg:mt-14"
        />
        <BlogPostsList posts={posts} />
        {numPages > 1 && (
          <Pagination
            className="mt-12 md:mt-16"
            currentPageIndex={currentPage - 1}
            pageCount={numPages}
            pageURL={basePath}
          />
        )}
      </Container>
    </section>
  );
};

PostsBoard.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      basePath: PropTypes.string,
    })
  ).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string,
        ogImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.shape(),
          }),
        }),
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ogSummary: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
      }),
    })
  ).isRequired,
  currentCategory: PropTypes.string.isRequired,
  basePath: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default PostsBoard;
