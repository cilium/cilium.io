import classNames from 'classnames';
import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

export default connectSearchBox(({ refine, currentRefinement, className, onFocus, hasFocus }) => (
  <form className={className}>
    <label className="sr-only" id="search-label" htmlFor="search-input">
      Search Box
    </label>
    <input
      className={classNames(
        'max-h-9 w-full appearance-none rounded border border-gray-2 bg-search-icon bg-[center_left_0.625rem] bg-no-repeat py-2.5 pl-9 pr-0 text-base leading-none transition-[width,colors] focus-visible:outline-none',
        hasFocus
          ? 'pr-2.5 sm:w-full sm:placeholder:text-gray-2'
          : 'cursor-pointer sm:w-9 sm:placeholder:text-transparent',
        hasFocus && currentRefinement && 'rounded-b-none'
      )}
      aria-label="Search"
      type="search"
      value={currentRefinement}
      placeholder="Search"
      id="search-input"
      autoComplete="off"
      onChange={(e) => refine(e.target.value)}
      onFocus={onFocus}
    />
  </form>
));
