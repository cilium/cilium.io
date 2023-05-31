import classNames from 'classnames';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import { blogFilterToSlug, eventFilterToSlug } from 'utils/filter-to-slug';

const Filters = ({ id, filters, currentFilter, type }) => {
  const handleFilterClick = useCallback(
    (filter) => (event) => {
      event.preventDefault();
      let href = '';
      if (type === 'blog') {
        href = blogFilterToSlug(filter);
      }
      if (type === 'event') {
        href = eventFilterToSlug(filter);
      }
      navigate(href, {
        state: { preventScroll: true },
      });
    },
    [type]
  );

  return (
    <div
      id={id}
      className="no-scrollbar -mx-4 mt-6 flex gap-x-3.5 overflow-x-auto px-4 md:-mx-6 md:mt-10 md:px-6 lg:-mx-10 lg:mt-14 lg:gap-x-5 lg:px-10 xl:mx-0 xl:flex-wrap xl:overflow-visible xl:px-0"
    >
      {filters.map((filter) => {
        const isActiveElement = currentFilter === filter;
        const isFilterAll = filter === '*';
        return (
          <button
            className={classNames(
              'whitespace-nowrap rounded border-2 border-transparent py-2 font-medium leading-none transition-colors duration-200 hover:border-primary-1 hover:text-primary-1',
              isActiveElement ? ' border-primary-1 bg-primary-1 text-white hover:text-white' : '',
              isFilterAll ? 'px-4 md:px-6 lg:px-10' : 'px-3'
            )}
            type="button"
            key={filter}
            onClick={handleFilterClick(filter)}
          >
            {isFilterAll ? 'All' : filter}
          </button>
        );
      })}
    </div>
  );
};
Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentFilter: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['event', 'blog']).isRequired,
  id: PropTypes.string.isRequired,
};

export default Filters;
