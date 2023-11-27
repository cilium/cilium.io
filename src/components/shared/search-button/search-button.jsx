import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import SearchIcon from 'images/search.inline.svg';

const SearchButton = ({ className, onClick }) => (
  <button
    className={classNames('h-7 w-7 p-1 flex items-center justify-center', className)}
    type="button"
    onClick={onClick}
  >
    <SearchIcon className="h-5 w-5" />
  </button>
);

SearchButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

SearchButton.defaultProps = {
  className: null,
};

export default SearchButton;
