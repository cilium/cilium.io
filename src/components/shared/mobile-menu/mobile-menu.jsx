import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import SlackIcon from 'icons/slack.inline.svg';

import Button from '../button';
import GithubStars from '../github-stars';

import MenuItem from './menu-item';

const ANIMATION_DURATION = 0.2;

const menuVariants = {
  from: {
    opacity: 0,
    translateY: -20,
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 40,
    opacity: 1,
    translateY: 0,
  },
};

const overlayVariants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

const MobileMenu = ({ navigation, isOpen, handleOverlay }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start('to');
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      controls.start('from');
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen, controls]);

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-x-0 top-20 bottom-0 bg-black bg-opacity-50"
          initial="from"
          animate={controls}
          variants={overlayVariants}
          transition={{ duration: ANIMATION_DURATION }}
          aria-hidden
          onClick={handleOverlay}
        />
      )}

      <motion.nav
        className="safe-paddings py-safe fixed inset-x-0 top-20 flex w-full flex-col border-t border-gray-3 bg-white shadow-lg lg:hidden"
        initial="from"
        animate={controls}
        variants={menuVariants}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <ul className="flex flex-grow flex-col divide-y divide-gray-3 px-4 md:px-6">
          {navigation.map((item, index) => (
            <MenuItem {...item} key={index} />
          ))}
        </ul>
        <div
          className={classNames(
            'flex flex-col items-center space-y-3 border-t border-gray-3 bg-gray-4 px-4 py-[33px]',
            'xs:flex-row xs:items-stretch xs:justify-center xs:space-y-0'
          )}
        >
          <GithubStars className="ml-4 bg-white" />
          <Button
            className="ml-4 inline-flex items-center bg-white leading-none"
            to="https://cilium.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            theme="outline-gray"
            size="xs"
          >
            <SlackIcon className="h-4 w-4" />
            <span className="ml-1.5 block">Join Slack</span>
          </Button>
        </div>
      </motion.nav>
    </>
  );
};

MobileMenu.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.exact({
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
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleOverlay: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {};

export default MobileMenu;
