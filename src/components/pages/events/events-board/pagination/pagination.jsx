import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';

import { EVENT_PER_PAGE } from 'utils/events';

import ChevronIcon from './images/chevron.inline.svg';

const pageLinkAndBreakLinkClassName =
  'flex justify-center items-center font-medium w-7 h-7 rounded-full text-black transition-colors hover:bg-additional-4 duration-200 mx-2.5';
const previousAndNextLinkClassName =
  'flex items-center space-x-2 transition-colors duration-200 font-semibold leading-none hover:text-additional-4';

const Pagination = ({ pageCount, totalCount, callback }) => {
  const handlePageChange = ({ selected }) => {
    const newOffSet = (selected * EVENT_PER_PAGE) % totalCount;
    callback(newOffSet);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 20);
  };

  return (
    <ReactPaginate
      containerClassName="container flex justify-center items-center pt-16 sm:pt-12 text-sm"
      pageLinkClassName={pageLinkAndBreakLinkClassName}
      breakLinkClassName={pageLinkAndBreakLinkClassName}
      activeLinkClassName="pointer-events-none bg-additional-4"
      previousClassName="mr-auto"
      nextClassName="ml-auto"
      previousLinkClassName={previousAndNextLinkClassName}
      nextLinkClassName={previousAndNextLinkClassName}
      disabledClassName="opacity-0 invisible"
      previousLabel={
        <div className="flex items-center gap-x-2">
          <ChevronIcon className="w-[5px] rotate-180" />
          <span className="">Previous</span>
        </div>
      }
      nextLabel={
        <div className="flex items-center gap-x-2">
          <span className="text-sm font-semibold leading-none">Next</span>
          <ChevronIcon className="w-[5px]" />
        </div>
      }
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      onPageChange={handlePageChange}
    />
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Pagination;
