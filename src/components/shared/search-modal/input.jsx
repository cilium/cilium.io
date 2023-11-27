import classNames from 'classnames';
import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

export default connectSearchBox(({ refine, currentRefinement, className }) => (
  <form className={classNames('border-b border-gray-5 pb-2', className)}>
    <label className="sr-only" id="search-label" htmlFor="search-input">
      Search Input
    </label>
    <input
      className="max-h-10 w-full appearance-none bg-search-icon bg-[center_left_0.5rem] bg-no-repeat py-2 pl-8 leading-none transition-[width,colors] focus-visible:outline-none sm:max-h-8 sm:text-sm pr-3 placeholder:text-gray-2"
      aria-label="Search"
      type="search"
      value={currentRefinement}
      placeholder="Search"
      id="search-input"
      autoComplete="off"
      onChange={(e) => refine(e.target.value)}
    />
  </form>
));
