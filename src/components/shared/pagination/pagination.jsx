import classNames from 'classnames';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';
import useWindowSize from 'react-use/lib/useWindowSize';

import Arrow from './images/arrow.inline.svg';

const pageLinkAndBreakLinkClassName =
  'flex h-9 w-9 items-center justify-center rounded-full bg-gray-94 text-15 font-medium uppercase leading-none text-black transition-colors duration-200 hover:bg-additional-4 ';
const previousAndNextLinkClassName =
  'flex items-center text-15 gap-x-1 text-primary-1 tracking-tight font-semibold transition-colors hover:text-gray-1';

const Pagination = ({ className, currentPageIndex, pageCount, pageURL }) => {
  const handlePageChange = ({ selected }) => {
    const navigatePath = selected === 0 ? pageURL : pageURL + (selected + 1);
    navigate(navigatePath);
  };

  const { width } = useWindowSize();

  const isMobileWidth = width < 600;

  return (
    <nav className={classNames('safe-paddings', className)}>
      <ReactPaginate
        breakLabel="..."
        containerClassName="flex justify-center items-center sm:gap-x-4 [&>li]:leading-none gap-x-3"
        pageLinkClassName={pageLinkAndBreakLinkClassName}
        breakLinkClassName={pageLinkAndBreakLinkClassName}
        activeLinkClassName="!bg-primary-1 !text-white pointer-events-none"
        previousClassName="mr-auto"
        nextClassName="ml-auto"
        previousLinkClassName={previousAndNextLinkClassName}
        nextLinkClassName={previousAndNextLinkClassName}
        disabledClassName="opacity-0 invisible"
        previousLabel={
          <>
            <Arrow className="w-4 shrink-0 rotate-180" />
            <span className="hidden md:inline">Previous</span>
          </>
        }
        nextLabel={
          <>
            <span className="hidden md:inline">Next</span>
            <Arrow className="w-4 shrink-0" />
          </>
        }
        forcePage={currentPageIndex}
        pageCount={pageCount}
        pageRangeDisplayed={isMobileWidth ? 1 : 3}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
      />
    </nav>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  currentPageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageURL: PropTypes.string.isRequired,
};

Pagination.defaultProps = {
  className: null,
};

export default Pagination;
