import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import BlogPostsList from './blog-posts-list';
import Categories from './categories';
import Pagination from './pagination';

const blockTitle = 'All posts';

// helper function that performs filter-to-slug transformation
const filterToSlug = (filter) =>
  filter === '*' ? '/blog/' : `/blog/${filter.toLowerCase().replace(/\s/g, '-')}/`;

const handleCategoryClick = (event, category) => {
  event.preventDefault();
  const href = filterToSlug(category);
  navigate(href, {
    state: { preventScroll: true },
  });
};

const PostsBoard = ({ categories, posts, queryFilter, currentPage, numPages }) => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{blockTitle}</Heading>
      <Categories
        handleClick={handleCategoryClick}
        categories={categories}
        currentCategory={queryFilter}
      />
      <BlogPostsList posts={posts} handleClick={handleCategoryClick} />
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
