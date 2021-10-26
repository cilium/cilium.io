import classNames from 'classnames';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import blogFilterToSlug from 'utils/blog-filter-to-slug';

const handleCategoryClick = (event, category) => {
  event.preventDefault();
  const href = blogFilterToSlug(category);
  navigate(href, {
    state: { preventScroll: true },
  });
};
const Categories = ({ categories, currentCategory }) => (
  <div className="flex px-4 mt-6 -mx-4 overflow-x-auto gap-x-3.5 xl:flex-wrap xl:overflow-visible md:px-6 lg:px-10 xl:px-0 md:-mx-6 lg:-mx-10 xl:mx-0 no-scrollbar lg:gap-x-5 md:mt-10 lg:mt-14">
    {categories.map((category) => {
      const isActiveElement = currentCategory === category;
      const isCategoryAll = category === '*';
      return (
        <button
          className={classNames(
            'py-2 lg:py-2.5 font-medium whitespace-nowrap',
            isActiveElement ? ' text-white bg-primary-1 rounded' : '',
            isCategoryAll ? 'px-4 md:px-6 lg:px-10' : 'px-3'
          )}
          type="button"
          key={category}
          onClick={(event) => handleCategoryClick(event, category)}
        >
          {isCategoryAll ? 'All' : category}
        </button>
      );
    })}
  </div>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default Categories;
