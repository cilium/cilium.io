import PropTypes from 'prop-types';
import React, { useEffect, useState, useMemo } from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Pagination from 'components/shared/pagination';
import Tabs from 'components/shared/tabs';
import useAllPostsSearch from 'hooks/use-all-posts-search';
import SearchIcon from 'images/search.inline.svg';

import BlogPostsList from './blog-posts-list';

const PostsBoard = ({ categories, posts, currentCategory, basePath, currentPage, numPages }) => {
  const blockTitle = currentCategory === '*' ? 'All posts' : currentCategory;
  const [searchQuery, setSearchQuery] = useState('');

  const allPosts = useAllPostsSearch();

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts;
    }

    const query = searchQuery.toLowerCase();

    return allPosts.filter((post) => {
      const title = post.frontmatter?.title?.toLowerCase() || '';
      return title.includes(query);
    });
  }, [posts, allPosts, searchQuery]);

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
        <div className="mt-6 relative max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search post titles..."
            value={searchQuery}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setSearchQuery('')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <Tabs
          id="categories"
          items={categories}
          activeLabel={currentCategory}
          className="mt-6 md:mt-10 lg:mt-14"
        />

        {filteredPosts.length > 0 ? (
          <BlogPostsList posts={filteredPosts} />
        ) : searchQuery ? (
          <div className="mt-8 text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              No posts found with titles matching "{searchQuery}"
            </div>
            <button
              className="mt-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              onClick={() => setSearchQuery('')}
            >
              Clear search
            </button>
          </div>
        ) : (
          <BlogPostsList posts={filteredPosts} />
        )}
        {numPages > 1 && !searchQuery && (
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
