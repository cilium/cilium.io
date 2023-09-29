import classNames from 'classnames';
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
      <div className="mt-12 grid grid-cols-12 md:mt-16">
        <div className="col-span-1 flex items-center justify-start">
          {!isFirst && (
            <Link
              className="flex items-center space-x-1 text-sm font-medium leading-none tracking-wide text-primary-1 transition-colors duration-200 hover:text-gray-1"
              to={prevPage}
            >
              <ArrowIcon className="h-2 w-4 rotate-180" />
              <span>Previous</span>
            </Link>
          )}
        </div>
        <div className="col-span-10 flex flex-row items-center justify-center space-x-4">
          {Array.from({ length: numPages }).map((_, index) => (
            <Link
              className={classNames(
                'hidden h-9 w-9 items-center justify-center rounded-full bg-gray-94 text-sm font-medium uppercase leading-none text-black transition-colors duration-200 hover:bg-additional-4 md:flex',
                currentPage === index + 1 ? '!bg-primary-1 !text-white' : ''
              )}
              to={index === 0 ? currentPath : `${currentPath}${index + 1}`}
              key={index}
            >
              <span>{index + 1}</span>
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex items-center justify-end">
          {!isLast && (
            <Link
              className="flex items-center space-x-1 text-sm font-medium leading-none tracking-wide text-primary-1 transition-colors duration-200 hover:text-gray-1"
              to={nextPage}
            >
              <span>Next</span>
              <ArrowIcon className="h-2 w-4" />
            </Link>
          )}
        </div>
      </div>
    )
  );
};

Pagination.propTypes = {
  currentItem: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['labs']).isRequired,
};

export default Pagination;
