import classNames from 'classnames';
import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

export default connectSearchBox(({ refine, currentRefinement, className, onFocus, hasFocus }) => (
  <form className={className}>
    <input
      className={classNames(
        'border appearance-none w-full leading-none text-base border-gray-2 py-2.5 pl-9 pr-0 rounded max-h-9 focus-visible:outline-none bg-search-icon bg-no-repeat bg-[center_left_0.625rem] transition-[width,colors]',
        hasFocus
          ? 'sm:w-full pr-2.5 sm:placeholder:text-gray-2'
          : 'sm:w-9 sm:placeholder:text-transparent cursor-pointer',
        hasFocus && currentRefinement && 'rounded-b-none'
      )}
      aria-label="Search"
      type="text"
      value={currentRefinement}
      placeholder="Search"
      onChange={(e) => refine(e.target.value)}
      onFocus={onFocus}
    />
  </form>
));
