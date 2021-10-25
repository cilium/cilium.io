import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import ArrowIcon from 'icons/arrow.inline.svg';
import blogFilterToSlug from 'utils/blog-filter-to-slug';

const handlePaginationClick = (event, page) => {
  event.preventDefault();
  navigate(page, {
    state: { preventScroll: true },
  });
};
const Pagination = ({ currentPage, numPages, queryFilter, type }) => {
  const currentPath = blogFilterToSlug(queryFilter, type);
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? currentPath : currentPath + (currentPage - 1).toString();
  const nextPage = currentPath + (currentPage + 1).toString();
  return (
    numPages > 1 && (
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
    )
  );
};

Pagination.propTypes = {
  queryFilter: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Pagination;
