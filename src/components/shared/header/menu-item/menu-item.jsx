import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import ChevronIcon from './images/chevron.inline.svg';

const MenuItem = ({ name, href, target, childItems, isThemeToggle }) => {
  const Tag = href ? Link : 'div';

  if (isThemeToggle) {
    return null;
  }

  return (
    <li className="group relative">
      <Tag
        to={href}
        target={target || null}
        rel={target ? 'noopener noreferrer' : null}
        className="inline-flex items-center whitespace-nowrap text-sm font-bold leading-none transition-colors duration-200 hover:cursor-pointer dark:text-gray-2 text-black hover:text-primary-1 dark:hover:text-gray-4 xl:text-base"
      >
        <span>{name}</span>
        {childItems && <ChevronIcon className="ml-1.5 shrink-0" />}
      </Tag>
      {childItems && (
        <div className="invisible absolute bottom-0 -left-5 z-10 translate-y-full pt-4 opacity-0 transition-all duration-200 hover:visible hover:opacity-100 group-hover:visible group-hover:opacity-100">
          <ul className="space-y-[18px] whitespace-nowrap rounded-xl bg-white p-5 shadow-input">
            {childItems.map(({ name, href, target, icon: Icon }) => (
              <li className="flex" key={name}>
                <Link
                  className="inline-flex items-center space-x-2.5 font-medium leading-none transition-colors duration-200 hover:text-primary-1"
                  to={href}
                  target={target || null}
                  rel={target ? 'noopener noreferrer' : null}
                >
                  {Icon && <Icon className="shrink-0" />}
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  isThemeToggle: PropTypes.bool,
  childItems: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      href: PropTypes.string,
      target: PropTypes.string,
      icon: PropTypes.func,
    })
  ),
};

MenuItem.defaultProps = {
  href: null,
  target: null,
  isThemeToggle: false,
  childItems: null,
};

export default MenuItem;
