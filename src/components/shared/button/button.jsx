import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const commonClassNames =
  'inline-flex font-bold text-white bg-primary-1 !leading-none whitespace-nowrap rounded outline-none transition-colors duration-200 hover:bg-hover-1';

const sizeClassNames = {
  sm: 'text-base py-2.5 px-3.5',
  md: 'text-base py-3 px-5 lg:py-4 lg:px-6 lg:text-lg',
};

const Button = ({ className: additionalClassName, to, size, children, ...otherProps }) => {
  const className = classNames(commonClassNames, sizeClassNames[size], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizeClassNames)),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
  size: 'md',
};

export default Button;
