import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Search from 'components/shared/search';
import SlackIcon from 'icons/slack.inline.svg';
import Logo from 'images/logo.inline.svg';
import algoliaQueries from 'utils/algolia-queries';

import Container from '../container';
import GithubStars from '../github-stars';
import Link from '../link';
import MobileMenu from '../mobile-menu';

import Burger from './burger';
import MenuItem from './menu-item';

const searchIndices = [
  { name: algoliaQueries[0].indexName, title: 'Blog Posts', hitComp: 'postPageHit' },
];

const themeClassNames = {
  white: 'bg-white',
  gray: 'bg-gray-4',
};

const Header = ({
  withSearch,
  isMobileMenuOpen,
  handleCloseClick,
  navigation,
  theme,
  handleOverlay,
}) => (
  <div className="relative z-20">
    <header
      className={classNames(
        'py-5 transition-[background] duration-200',
        themeClassNames[theme],
        isMobileMenuOpen && themeClassNames.white
      )}
    >
      <Container size="lg">
        <nav
          className="relative flex items-center justify-between w-full space-x-6 sm:h-10"
          aria-label="Global"
        >
          <div className="flex w-full shrink-0 items-center justify-between [@media(min-width:1100px)]:w-auto">
            <div className="flex items-center">
              <Link to="/">
                <span className="sr-only">Cilium</span>
                <Logo />
              </Link>
              <div className="hidden items-center [@media(min-width:1100px)]:inline-flex">
                <GithubStars
                  className={classNames(
                    'ml-4 bg-white lg:ml-8',
                    withSearch ? 'hidden xl:inline-flex' : 'inline-flex'
                  )}
                />
                <Button
                  className={classNames(
                    'ml-4 items-center bg-white leading-none ',
                    withSearch ? 'hidden xl:inline-flex' : 'inline-flex'
                  )}
                  to="https://slack.cilium.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  theme="outline-gray"
                  size="xs"
                >
                  <SlackIcon className="w-4 h-4" />
                  <span
                    className={classNames(
                      'hidden lg:ml-1.5',
                      withSearch ? '2xl:block' : 'xl:block'
                    )}
                  >
                    Join Slack
                  </span>
                </Button>
              </div>
            </div>
            <div className="flex items-center [@media(min-width:1100px)]:hidden space-x-6">
              {withSearch && !isMobileMenuOpen && <Search indices={searchIndices} />}
              <Burger isToggled={isMobileMenuOpen} onClick={handleCloseClick} />
            </div>
          </div>
          <div className="hidden w-full space-x-5 lg:items-center lg:justify-end lg:space-x-7 [@media(min-width:1100px)]:flex">
            {withSearch && (
              <Search
                buttonClassName="rounded h-8 w-8 border border-gray-2 p-[7px]"
                indices={searchIndices}
              />
            )}
            <ul className="flex items-center lg:space-x-6 2xl:space-x-11">
              {navigation.map((item, index) => (
                <MenuItem {...item} key={index} />
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
    <MobileMenu
      navigation={navigation}
      isOpen={isMobileMenuOpen}
      handleOverlay={handleOverlay}
      handleCloseClick={handleCloseClick}
    />
  </div>
);

Header.propTypes = {
  handleOverlay: PropTypes.func.isRequired,
  withSearch: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
  isMobileMenuOpen: PropTypes.bool.isRequired,
  handleCloseClick: PropTypes.func.isRequired,
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
};

Header.defaultProps = {
  withSearch: false,
  theme: 'white',
};
export default Header;
