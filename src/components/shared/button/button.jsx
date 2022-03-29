import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const commonClassNames =
  'inline-flex font-bold justify-center !leading-none whitespace-nowrap rounded transition-colors duration-200 disabled:bg-opacity-40 disabled:cursor-auto focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-2 outline-none';
const themeClassNames = {
  'primary-1':
    'text-white bg-primary-1 hover:bg-hover-1 disabled:hover:bg-primary-1 disabled:hover:bg-opacity-40 border-primary-1',
  'primary-2': 'text-white bg-primary-2 hover:bg-hover-1 disabled:hover:bg-primary-2',
  outline: 'border-2 border-black hover:text-gray-1 hover:border-gray-1',
  'outline-gray': 'border border-gray-3 hover:text-primary-1',
  'outline-gray-dark': 'border-2 border-gray-5 hover:text-primary-1',
};
const sizeClassNames = {
  xs: 'text-sm py-[7px] px-3',
  sm: 'text-base py-2.5 px-3.5 h-10',
  md: 'text-base py-3 px-5 lg:py-4 lg:px-6 lg:text-lg',
};

const loaderStyles = 'bg-loader bg-center bg-no-repeat text-transparent';

const Button = ({
  className: additionalClassName,
  to,
  size,
  theme,
  children,
  disabled,
  loading,
  ...otherProps
}) => {
  const className = classNames(
    commonClassNames,
    sizeClassNames[size],
    themeClassNames[theme],
    loading && loaderStyles,
    additionalClassName
  );
  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} disabled={disabled} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizeClassNames)),
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  className: null,
  to: null,
  size: 'md',
  theme: 'primary-2',
  disabled: false,
  loading: false,
};

export default Button;
