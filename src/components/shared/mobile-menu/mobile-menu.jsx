import classNames from 'classnames';
import { m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import useToggleTheme from 'hooks/use-toggle-theme';
import SlackIcon from 'icons/slack.inline.svg';

import Button from '../button';
import GithubStars from '../github-stars';

import MenuItem from './menu-item';

const ANIMATION_DURATION = 0.2;

const menuVariants = {
  from: {
    opacity: 0,
    translateY: -20,
    pointerEvents: 'none',
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 40,
    opacity: 1,
    translateY: 0,
    pointerEvents: 'auto',
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

const MobileMenu = ({ navigation, isOpen, handleOverlay, handleCloseClick }) => {
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

  const toggleTheme = useToggleTheme();

  return (
    <LazyMotion features={domAnimation}>
      {isOpen && (
        <m.div
          className="fixed inset-x-0 bottom-0 bg-black bg-opacity-50 top-60"
          initial="from"
          animate={controls}
          variants={overlayVariants}
          transition={{ duration: ANIMATION_DURATION }}
          aria-hidden
          onClick={handleOverlay}
        />
      )}

      <m.nav
        className="safe-paddings py-safe absolute max-h-[calc(100vh-5rem)] inset-x-0 top-20 flex w-full flex-col border-t border-gray-3 dark:border-gray-1 bg-white dark:bg-gray-900 shadow-lg xl:hidden"
        initial="from"
        animate={controls}
        variants={menuVariants}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <ul className="flex flex-col flex-grow h-full px-4 overflow-x-hidden divide-y divide-gray-3 dark:divide-gray-1 md:px-6 lg:px-10">
          {navigation.map((item, index) => (
            <MenuItem {...item} key={index} handleCloseClick={handleCloseClick} />
          ))}
        </ul>
        <div
          className={classNames(
            'mt-auto flex flex-col items-center space-y-3 border-t border-gray-3 dark:border-gray-1 bg-gray-4 dark:bg-[#0f1d3e] px-4 py-[33px]',
            'xs:flex-row xs:items-stretch xs:justify-center xs:space-y-0 xs:space-x-4'
          )}
        >
          <GithubStars className="bg-white dark:bg-gray-800" />
          <Button
            className="inline-flex items-center leading-none bg-white dark:bg-gray-800"
            to="https://slack.cilium.io"
            target="_blank"
            rel="noopener noreferrer"
            theme="outline-gray"
            size="xs"
          >
            <SlackIcon className="w-4 h-4" />
            <span className="ml-1.5 block dark:text-gray-2 text-black">Join Slack</span>
          </Button>

          <Button
            className="inline-flex items-center leading-none bg-white dark:bg-gray-800"
            theme="outline-gray"
            size="xs"
            onClick={toggleTheme}
          >
            <span className="ml-1.5 block dark:text-gray-2 text-black">Change Theme</span>
          </Button>
        </div>
      </m.nav>
    </LazyMotion>
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
          icon: PropTypes.func,
        })
      ),
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleOverlay: PropTypes.func.isRequired,
  handleCloseClick: PropTypes.func.isRequired,
};

export default MobileMenu;
