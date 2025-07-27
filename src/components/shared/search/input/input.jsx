import classNames from 'classnames';
import React, { useEffect } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

import useDebounce from 'hooks/use-debounce';

export default connectSearchBox(
  ({ currentRefinement, refine, searchQuery, setSearchQuery, className, ...rest }) => {
    const debouncedValue = useDebounce(searchQuery, 500);

    useEffect(() => {
      if (debouncedValue.length) {
        refine(debouncedValue);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    return (
      <form className={classNames('border-b border-gray-5 pb-2 flex w-full', className)}>
        <label className="sr-only" id="search-label" htmlFor="search-input">
          Search Input
        </label>
        <input
          className="max-h-10 w-full appearance-none bg-search-icon bg-[center_left_1.5rem] bg-no-repeat py-2 pl-14 leading-none transition-[width,colors] focus-visible:outline-none sm:max-h-8 text-16 pr-6 placeholder:text-gray-2 dark:bg-[#dfe5ed]"
          aria-label="Search"
          type="search"
          value={searchQuery}
          placeholder="Search"
          id="search-input"
          autoComplete="off"
          onChange={(e) => setSearchQuery(e.target.value)}
          {...rest}
        />
      </form>
    );
  }
);
