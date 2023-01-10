import classNames from 'classnames';
import { m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
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

const MobileMenu = ({ navigation, isOpen, handleOverlay, isBlogPage }) => {
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
    <LazyMotion features={domAnimation}>
      {isOpen && (
        <m.div
          className="fixed inset-x-0 bottom-0 top-60 bg-black bg-opacity-50"
          initial="from"
          animate={controls}
          variants={overlayVariants}
          transition={{ duration: ANIMATION_DURATION }}
          aria-hidden
          onClick={handleOverlay}
        />
      )}

      <m.nav
        className={classNames(
          'safe-paddings py-safe absolute inset-x-0 top-20 flex w-full flex-col border-t border-gray-3 bg-white shadow-lg xl:hidden',
          isBlogPage
            ? 'max-h-[calc(100vh-12.5rem)] sm:max-h-[calc(100vh-11rem)] md:max-h-[calc(100vh-9rem)]'
            : 'max-h-[calc(100vh-5rem)]'
        )}
        initial="from"
        animate={controls}
        variants={menuVariants}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <ul className="flex h-full flex-grow flex-col divide-y divide-gray-3 overflow-x-hidden overflow-y-scroll px-4 md:px-6 lg:px-10">
          {navigation.map((item, index) => (
            <MenuItem {...item} key={index} />
          ))}
        </ul>
        <div
          className={classNames(
            'mt-auto flex flex-col items-center space-y-3 border-t border-gray-3 bg-gray-4 px-4 py-[33px]',
            'xs:flex-row xs:items-stretch xs:justify-center xs:space-y-0 xs:space-x-4'
          )}
        >
          <GithubStars className="bg-white" />
          <Button
            className="inline-flex items-center bg-white leading-none"
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
          icon: PropTypes.func.isRequired,
        })
      ),
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleOverlay: PropTypes.func.isRequired,
  isBlogPage: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isBlogPage: null,
};

export default MobileMenu;
