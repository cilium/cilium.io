import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import BlogPostsList from './blog-posts-list';
import Categories from './categories';
import Pagination from './pagination';

const PostsBoard = ({ categories, posts, currentCategory, currentPage, numPages }) => {
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
        <Heading tag="h2">{blockTitle}</Heading>
        <Categories id="categories" categories={categories} currentCategory={currentCategory} />
        <BlogPostsList posts={posts} />
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          currentCategory={currentCategory}
        />
      </Container>
    </section>
  );
};

PostsBoard.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
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
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default PostsBoard;
