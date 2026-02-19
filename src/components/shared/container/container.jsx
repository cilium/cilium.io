import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const commonClassNames = 'relative mx-auto px-4 md:px-6 lg:px-10 xl:px-0';

const sizeClassNames = {
  xs: 'max-w-[800px]',
  sm: 'max-w-[1008px]',
  md: 'max-w-[1216px]',
  lg: 'max-w-[1472px] xl:px-3 2xl:px-0',
};

const Container = ({ className: additionalClassName, size, children, tag: Tag, ...otherProps }) => {
  const className = classNames(commonClassNames, sizeClassNames[size], additionalClassName);
  return (
    <Tag className={className} {...otherProps}>
      {children}
    </Tag>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizeClassNames)),
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: null,
  tag: 'div',
  size: 'md',
};

export default Container;
