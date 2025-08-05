import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Search from 'components/shared/search';
import useDarkMode from 'hooks/use-dark-mode';
import useToggleTheme from 'hooks/use-toggle-theme';
import SlackIcon from 'icons/slack.inline.svg';
import DarkLogo from 'images/logo.inline.svg';
import LightLogo from 'images/white-logo.inline.svg';
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

const Header = ({ withSearch, isMobileMenuOpen, handleCloseClick, navigation, handleOverlay }) => {
  const isDarkMode = useDarkMode();
  const toggleTheme = useToggleTheme();

  const navigationWithoutTheme = navigation.filter((item) => !item.isThemeToggle);
  const themeToggleItem = navigation.find((item) => item.isThemeToggle);

  return (
    <div className="relative z-20">
      <header
        className={classNames(
          'py-5 bg-gray-4 dark:bg-gray-900 ',
          isMobileMenuOpen && 'bg-white dark:bg-gray-900'
        )}
      >
        <Container size="lg">
          <nav
            className="relative flex items-center justify-between w-full space-x-6 sm:h-10"
            aria-label="Global"
          >
            <div className="flex w-full shrink-0 items-center justify-between [@media(min-width:1210px)]:w-auto">
              <div className="flex items-center">
                <Link to="/">
                  <span className="sr-only">Cilium</span>
                  {isDarkMode ? <LightLogo /> : <DarkLogo />}
                </Link>
                <div className="hidden items-center [@media(min-width:1210px)]:inline-flex">
                  <GithubStars
                    className={classNames(
                      'ml-4 bg-white dark:bg-gray-800 lg:ml-8',
                      withSearch ? 'hidden xl:inline-flex' : 'inline-flex'
                    )}
                  />
                  <Button
                    className={classNames(
                      'ml-4 items-center bg-white dark:bg-gray-800 leading-none',
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
                        'hidden lg:ml-1.5 dark:text-gray-2 text-black',
                        withSearch ? '2xl:block' : '2xl:block'
                      )}
                    >
                      Join Slack
                    </span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center [@media(min-width:1210px)]:hidden space-x-3">
                {withSearch && !isMobileMenuOpen && <Search indices={searchIndices} />}

                {/* Theme toggle button for mobile */}
                {themeToggleItem && (
                  <button
                    type="button"
                    className="flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
                    aria-label="Toggle theme"
                    onClick={toggleTheme}
                  >
                    <themeToggleItem.name className="h-5 w-5" />
                  </button>
                )}

                <Burger isToggled={isMobileMenuOpen} onClick={handleCloseClick} />
              </div>
            </div>
            <div className="hidden w-full space-x-5 lg:items-center lg:justify-end lg:space-x-7 [@media(min-width:1210px)]:flex">
              {withSearch && (
                <Search
                  buttonClassName="rounded h-8 w-8 border border-gray-2 dark:border-gray-600 p-[7px]"
                  indices={searchIndices}
                />
              )}
              <ul className="flex items-center lg:space-x-6 2xl:space-x-11">
                {navigation.map((item, index) => {
                  if (item.isThemeToggle) {
                    const ThemeIcon = item.name;
                    return (
                      <li key={index}>
                        <button
                          type="button"
                          className="flex items-center -ml-2 justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 theme-toggle"
                          aria-label="Toggle theme"
                          onClick={toggleTheme}
                        >
                          <ThemeIcon className="h-5 w-5" />
                        </button>
                      </li>
                    );
                  }

                  return <MenuItem {...item} key={index} />;
                })}
              </ul>
            </div>
          </nav>
        </Container>
      </header>
      <MobileMenu
        navigation={navigationWithoutTheme}
        isOpen={isMobileMenuOpen}
        handleOverlay={handleOverlay}
        handleCloseClick={handleCloseClick}
      />
    </div>
  );
};

Header.propTypes = {
  handleOverlay: PropTypes.func.isRequired,
  withSearch: PropTypes.bool,
  isMobileMenuOpen: PropTypes.bool.isRequired,
  handleCloseClick: PropTypes.func.isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.exact({
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
      onClick: PropTypes.func,
    })
  ).isRequired,
};

Header.defaultProps = {
  withSearch: false,
};

export default Header;
