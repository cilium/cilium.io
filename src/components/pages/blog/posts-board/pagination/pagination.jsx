import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import ArrowIcon from 'icons/arrow.inline.svg';
import blogFilterToSlug from 'utils/blog-filter-to-slug';

const Pagination = ({ currentPage, numPages, currentCategory }) => {
  const currentPath = blogFilterToSlug(currentCategory);
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? currentPath : currentPath + (currentPage - 1).toString();
  const nextPage = currentPath + (currentPage + 1).toString();
  return (
    numPages > 1 && (
      <div className="flex pt-8 mt-10 border-t border-gray-3">
        {!isFirst && (
          <Link
            className="flex mr-auto text-sm space-x-2.5 text-primary-1 tracking-wider items-center uppercase leading-none font-bold transition-colors duration-200 hover:text-gray-1"
            to={prevPage}
          >
            <ArrowIcon className="rotate-180" />
            <span>Previous</span>
          </Link>
        )}
        {!isLast && (
          <Link
            className="flex text-sm ml-auto space-x-2.5  text-primary-1 tracking-wider items-center uppercase leading-none font-bold transition-colors duration-200 hover:text-gray-1"
            to={nextPage}
          >
            <span>Next</span>
            <ArrowIcon />
          </Link>
        )}
      </div>
    )
  );
};

Pagination.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default Pagination;
