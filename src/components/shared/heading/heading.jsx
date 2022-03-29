import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const sizeClassNames = {
  lg: 'text-4xl lg:text-5xl',
  md: 'text-3xl lg:text-4xl',
  sm: 'text-2xl lg:text-3xl font-semibold',
  xs: 'text-xl lg:text-2xl',
  '2xs': 'text-lg lg:text-xl',
  '3xs': 'text-base',
};

const fontWeightClassName = {
  common: 'font-bold',
  normal: 'font-normal',
};

const themeClassNames = {
  gray: '!text-base lg:text-base uppercase text-gray-1 leading-none lg:leading-none font-semibold tracking-wide',
};

const Heading = ({
  className: additionalClassName,
  tag: Tag,
  size,
  theme,
  asHTML,
  children,
  fontWeight,
}) => {
  const className = classNames(
    fontWeightClassName[fontWeight],
    sizeClassNames[size],
    themeClassNames[theme],
    additionalClassName
  );

  if (asHTML) {
    return <Tag className={className} dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <Tag className={className}>{children}</Tag>;
};

Heading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizeClassNames)),
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeightClassName)),
  asHTML: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  className: null,
  asHTML: false,
  size: 'md',
  fontWeight: 'common',
  theme: null,
};

export default Heading;
