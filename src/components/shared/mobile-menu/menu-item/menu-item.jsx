import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Link from 'components/shared/link';

import Submenu from '../submenu';

const MenuItem = ({ name, href, target, childItems, handleCloseClick }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  const Tag = href ? Link : 'div';
  return (
    <li className="w-full py-[22px]">
      <div
        className="flex w-full items-center justify-between"
        role="button"
        tabIndex={0}
        onClick={toggleSubmenu}
        onKeyDown={toggleSubmenu}
      >
        <Tag
          to={href}
          target={target || null}
          rel={target ? 'noopener noreferrer' : null}
          className="w-full whitespace-nowrap font-bold leading-none transition-colors duration-200 hover:cursor-pointer hover:text-primary-1 xl:text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white "
        >
          <span>{name}</span>
        </Tag>
        {childItems && (
          <div className="relative h-1.5 w-[12.5px]">
            <span
              className={classNames(
                'absolute top-0.5 right-0 h-0.5 w-2 bg-black dark:bg-gray-300 transition-transform duration-200 ',
                isSubmenuOpen ? 'rotate-45' : '-rotate-45'
              )}
            />
            <span
              className={classNames(
                'absolute top-0.5 left-0 h-0.5 w-2 bg-black dark:bg-gray-300  transition-transform duration-200',
                isSubmenuOpen ? '-rotate-45' : 'rotate-45'
              )}
            />
          </div>
        )}
      </div>
      {childItems && (
        <Submenu
          childItems={childItems}
          isOpen={isSubmenuOpen}
          handleCloseClick={handleCloseClick}
        />
      )}
    </li>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  handleCloseClick: PropTypes.func.isRequired,
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
  childItems: null,
};

export default MenuItem;
