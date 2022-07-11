import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const ANIMATION_DURATION = 0.2;

const submenuVariants = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  visible: { opacity: 1, height: 'auto', marginTop: '24px' },
};

const Submenu = ({ isOpen, childItems }) => (
  <motion.ul
    className="space-y-[18px] overflow-hidden"
    initial="hidden"
    animate={isOpen ? 'visible' : 'hidden'}
    variants={submenuVariants}
    transition={{ duration: ANIMATION_DURATION }}
  >
    {childItems.map(({ name, href, target, icon: Icon }, index) => (
      <li className="flex" key={index}>
        <Link
          className="inline-flex w-full items-center space-x-2.5 font-medium leading-none hover:text-primary-1"
          to={href}
          target={target || null}
          rel={target ? 'noopener noreferrer' : null}
        >
          <Icon className="shrink-0" />
          <span className="flex-grow">{name}</span>
        </Link>
      </li>
    ))}
  </motion.ul>
);

Submenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  childItems: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      href: PropTypes.string,
      target: PropTypes.string,
      icon: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Submenu;
