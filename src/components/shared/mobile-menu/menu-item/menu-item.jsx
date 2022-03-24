import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Link from 'components/shared/link';

import ChevronIcon from '../images/chevron.inline.svg';
import Submenu from '../submenu';

const MenuItem = ({ name, href, target, childItems }) => {
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
          className="whitespace-nowrap font-bold leading-none transition-colors duration-200 hover:cursor-pointer hover:text-primary-1 xl:text-base"
        >
          <span>{name}</span>
        </Tag>
        {childItems && <ChevronIcon className="mr-2.5 h-auto w-3.5" />}
      </div>
      {childItems && <Submenu childItems={childItems} isOpen={isSubmenuOpen} />}
    </li>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  childItems: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      href: PropTypes.string,
      target: PropTypes.string,
      icon: PropTypes.func.isRequired,
    })
  ),
};

MenuItem.defaultProps = {
  href: null,
  target: null,
  childItems: null,
};

export default MenuItem;
