import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import ArrowIcon from 'icons/arrow.inline.svg';

const commonClassNames = 'font-bold leading-none group';

const themeClassNames = {
  text: {
    common: 'transition-colors duration-200',
    black: 'text-black hover:text-gray-1 dark:hover:text-blue-400',
    'black-primary': 'text-black hover:text-primary-1 dark:hover:text-blue-400',
    primary: 'uppercase text-primary-1 text-sm hover:text-gray-1 tracking-wider',
    'primary-normal-case': 'text-primary-1 text-sm hover:text-gray-1 tracking-wider',
  },
  arrow: {
    common: 'inline-flex items-start text-sm tracking-wider uppercase',
    primary: 'text-primary-1 hover:text-gray-1',
  },
};

const Link = ({ className: additionalClassName, to, type, theme, children, ...otherProps }) => {
  const className = classNames(
    type && theme && commonClassNames,
    themeClassNames[type]?.common,
    themeClassNames[type]?.[theme],
    additionalClassName
  );

  const smoothScroll = (e, to) => {
    e.preventDefault();
    const section = document.querySelector(to);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = type === 'arrow' ? <span>{children}</span> : children;
  const arrow = type === 'arrow' && <ArrowIcon className="ml-2.5 text-center" />;

  if (to.startsWith('/#')) {
    return (
      <a className={className} href={to} {...otherProps}>
        {content}
        {arrow}
      </a>
    );
  }

  if (to.startsWith('/')) {
    return (
      <GatsbyLink className={className} to={to} {...otherProps}>
        {content}
        {arrow}
      </GatsbyLink>
    );
  }

  if (to.startsWith('#')) {
    return (
      <a
        className={className}
        href={to}
        onClick={(e) => {
          smoothScroll(e, to);
        }}
        {...otherProps}
      >
        {content}
        {arrow}
      </a>
    );
  }

  return (
    <a className={className} href={to} {...otherProps}>
      {content}
      {arrow}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  smooth: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(themeClassNames)),
  theme: PropTypes.oneOf(
    [
      ...new Set([...Object.keys(themeClassNames.text), ...Object.keys(themeClassNames.arrow)]),
    ].filter((themeName) => themeName !== 'common')
  ),
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: null,
  type: null,
  theme: null,
  smooth: 'smooth',
};

export default Link;
