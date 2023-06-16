import classNames from 'classnames';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import blogFilterToSlug from 'utils/blog-filter-to-slug';

const Categories = ({ id, categories, currentCategory }) => {
  const handleCategoryClick = useCallback(
    (category) => (event) => {
      event.preventDefault();
      const href = blogFilterToSlug(category);
      navigate(href, {
        state: { preventScroll: true },
      });
    },
    []
  );
  return (
    <div
      id={id}
      className="no-scrollbar -mx-4 mt-6 flex gap-x-3.5 overflow-x-auto px-4 md:-mx-6 md:mt-10 md:px-6 lg:-mx-10 lg:mt-14 lg:gap-x-5 lg:px-10 xl:mx-0 xl:flex-wrap xl:overflow-visible xl:px-0"
    >
      {categories.map((category) => {
        const isActiveElement = currentCategory === category;
        const isCategoryAll = category === '*';
        return (
          <button
            className={classNames(
              'whitespace-nowrap rounded border-2 border-transparent py-2 font-medium leading-none transition-colors duration-200 hover:border-primary-1 hover:text-primary-1',
              isActiveElement ? ' border-primary-1 bg-primary-1 text-white hover:text-white' : '',
              isCategoryAll ? 'px-4 md:px-6 lg:px-10' : 'px-3'
            )}
            type="button"
            key={category}
            onClick={handleCategoryClick(category)}
          >
            {isCategoryAll ? 'All' : category}
          </button>
        );
      })}
    </div>
  );
};
Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Categories;
