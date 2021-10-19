import classNames from 'classnames';
import { navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import ArrowIcon from 'icons/arrow.inline.svg';

const blockTitle = 'All posts';

const categories = [
  'All',
  'Announcements',
  'Community',
  'Deep Dive',
  'eBPF',
  'Guide',
  'How-To',
  'Network Policies',
  'Releases',
  'User Blog',
];
// helper function that performs filter-to-slug transformation
const filterToSlug = (filter) =>
  filter === 'All' ? '/blog/' : `/blog/${filter.toLowerCase().replace(/\s/g, '-')}/`;

const PostsBoard = ({ posts, queryFilter, currentPage, numPages }) => {
  // adapt queryFilter in case of wild card (all posts)
  const currentCategory = queryFilter === '*' ? 'All' : queryFilter;

  const currentPath = filterToSlug(currentCategory);
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? currentPath : currentPath + (currentPage - 1).toString();
  const nextPage = currentPath + (currentPage + 1).toString();

  const handleCategoryClick = (event, category) => {
    event.preventDefault();
    const href = filterToSlug(category);
    navigate(href, {
      state: { preventScroll: true },
    });
  };

  const handlePaginationClick = (event, page) => {
    event.preventDefault();
    if (page === prevPage) {
      const href = prevPage;
      navigate(href, {
        state: { preventScroll: true },
      });
    } else {
      const href = nextPage;
      navigate(href, {
        state: { preventScroll: true },
      });
    }
  };

  return (
    <section className="mt-10 md:mt-20 lg:mt-28">
      <Container>
        <Heading tag="h2">{blockTitle}</Heading>
        <div className="overflow-x-auto">
          <div className="flex mt-6 space-x-4 md:space-x-6 lg:space-x-10 md:mt-10 lg:mt-14">
            {categories.map((category) => {
              const isActiveElement = currentCategory === category;
              return (
                <button
                  className={classNames(
                    'py-2 lg:py-2.5 font-medium whitespace-nowrap',
                    isActiveElement
                      ? 'px-4 md:px-6 lg:px-10 text-white bg-primary-1 rounded'
                      : 'px-0'
                  )}
                  type="button"
                  key={category}
                  onClick={(event) => handleCategoryClick(event, category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid gap-6 mt-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:mt-11">
          {posts.map(
            ({ frontmatter: { path, cover, date, title, summary, categories } }, index) => (
              <div className="flex flex-col p-6 border rounded-lg md:p-8 border-gray-3" key={index}>
                <Link to={path}>
                  <GatsbyImage className="md:min-h-[168px]" image={getImage(cover)} alt={title} />
                </Link>
                <div className="flex flex-col flex-grow mt-7">
                  <span className="text-sm font-medium leading-none text-gray-1">{date}</span>
                  <h3 className="mt-3 font-bold leading-normal line-clamp-3 md:text-lg">{title}</h3>
                  <p className="mt-2 mb-4 line-clamp-3">{summary}</p>
                  <div className="mt-auto space-x-2">
                    {categories?.map((category) => (
                      <button
                        className="text-primary-1 font-bold bg-additional-4 bg-opacity-70 rounded p-2.5 tracking-wider uppercase text-xs leading-none"
                        type="button"
                        key={category}
                        onClick={(event) => handleCategoryClick(event, category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex pt-8 mt-10 border-t border-gray-3">
          {!isFirst && (
            <button
              className="flex mr-auto text-sm space-x-2.5 text-primary-1 tracking-wider items-center uppercase leading-none font-bold transition-colors duration-200 hover:text-gray-1"
              type="button"
              onClick={(event) => handlePaginationClick(event, prevPage)}
            >
              <ArrowIcon className="rotate-180" />
              <span>Previous</span>
            </button>
          )}
          {!isLast && (
            <button
              className="flex text-sm ml-auto space-x-2.5  text-primary-1 tracking-wider items-center uppercase leading-none font-bold transition-colors duration-200 hover:text-gray-1"
              type="button"
              onClick={(event) => handlePaginationClick(event, nextPage)}
            >
              <span>Next</span>
              <ArrowIcon />
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};
PostsBoard.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        cover: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.shape(),
          }),
        }).isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
      }),
    })
  ).isRequired,
  queryFilter: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default PostsBoard;
