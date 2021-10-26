import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import BlogPostsList from './blog-posts-list';
import Categories from './categories';
import Pagination from './pagination';

const blockTitle = 'All posts';

const PostsBoard = ({ categories, posts, queryFilter, currentPage, numPages }) => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{blockTitle}</Heading>
      <Categories categories={categories} currentCategory={queryFilter} />
      <BlogPostsList posts={posts} />
      <Pagination currentPage={currentPage} numPages={numPages} queryFilter={queryFilter} />
    </Container>
  </section>
);
PostsBoard.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
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
  queryFilter: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default PostsBoard;
