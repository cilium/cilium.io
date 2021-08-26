import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const commonClassNames = 'font-bold';

const sizeClassNames = {
  lg: 'text-4xl lg:text-5xl',
  md: 'text-3xl lg:text-4xl',
};

const Heading = ({ className: additionalClassName, tag: Tag, size, asHTML, children }) => {
  const className = classNames(commonClassNames, sizeClassNames[size], additionalClassName);

  if (asHTML) {
    return <Tag className={className} dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <Tag className={className}>{children}</Tag>;
};

Heading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizeClassNames)),
  asHTML: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  className: null,
  asHTML: false,
  size: 'md',
};

export default Heading;
