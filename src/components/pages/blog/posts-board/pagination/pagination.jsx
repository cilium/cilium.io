import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import ArrowIcon from 'icons/arrow.inline.svg';
import filterToSlug from 'utils/filter-to-slug';

const Pagination = ({ currentPage, numPages, currentItem, type }) => {
  const currentPath = filterToSlug(currentItem, type);
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? currentPath : currentPath + (currentPage - 1).toString();
  const nextPage = currentPath + (currentPage + 1).toString();
  return (
    numPages > 1 && (
      <div className="mt-10 flex border-t border-gray-3 pt-8">
        {!isFirst && (
          <Link
            className="mr-auto flex items-center space-x-2.5 text-sm font-bold uppercase leading-none tracking-wider text-primary-1 transition-colors duration-200 hover:text-gray-1"
            to={prevPage}
          >
            <ArrowIcon className="rotate-180" />
            <span>Previous</span>
          </Link>
        )}
        {!isLast && (
          <Link
            className="ml-auto flex items-center space-x-2.5  text-sm font-bold uppercase leading-none tracking-wider text-primary-1 transition-colors duration-200 hover:text-gray-1"
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
  currentItem: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['events', 'blog']).isRequired,
};

export default Pagination;
