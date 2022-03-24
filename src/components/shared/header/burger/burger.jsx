import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Burger = ({ className: additionalClassName, onClick, isToggled }) => (
  <div className={additionalClassName}>
    <button
      className={classNames('group relative -mr-1 h-6 w-7 p-1')}
      type="button"
      onClick={onClick}
    >
      <span
        className={classNames(
          'absolute top-1 left-1 block h-0.5 w-5 rounded-sm bg-black transition-all duration-300 ease-in-out group-hover:bg-gray-1',
          isToggled ? 'invisible w-0 opacity-0' : 'visible opacity-100'
        )}
      />
      <span
        className={classNames(
          'absolute left-1 block h-0.5 rounded-sm bg-black transition-all duration-300 ease-in-out group-hover:bg-gray-1',
          isToggled ? 'top-2.5 w-5 rotate-45' : 'top-2.5 w-3.5 rotate-0'
        )}
      />
      <span
        className={classNames(
          'absolute left-1 block h-0.5 rounded-sm bg-black transition-all duration-300 ease-in-out group-hover:bg-gray-1',
          isToggled ? 'top-2.5 w-5 -rotate-45' : 'top-4 w-5 rotate-0'
        )}
      />
    </button>
  </div>
);

Burger.propTypes = {
  className: PropTypes.string,
  isToggled: PropTypes.bool,
  onClick: PropTypes.func,
};

Burger.defaultProps = {
  className: null,
  isToggled: false,
  onClick: null,
};

export default Burger;
