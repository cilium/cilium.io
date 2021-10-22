import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Categories = ({ categories, currentCategory, handleClick }) => (
  <div className="flex px-4 mt-6 -mx-4 overflow-x-auto gap-x-4 xl:flex-wrap xl:overflow-visible md:px-6 lg:px-10 xl:px-0 md:-mx-6 lg:-mx-10 xl:mx-0 no-scrollbar md:gap-x-6 lg:gap-x-10 md:mt-10 lg:mt-14">
    {categories.map((category) => {
      const isActiveElement = currentCategory === category;
      return (
        <button
          className={classNames(
            'py-2 lg:py-2.5 font-medium whitespace-nowrap',
            isActiveElement ? 'px-4 md:px-6 lg:px-10 text-white bg-primary-1 rounded' : 'px-0'
          )}
          type="button"
          key={category}
          onClick={(event) => handleClick(event, category)}
        >
          {category === '*' ? 'All' : category}
        </button>
      );
    })}
  </div>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
