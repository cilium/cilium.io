import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import SlackIcon from 'icons/slack.inline.svg';
import Logo from 'images/logo.inline.svg';
import algoliaQueries from 'utils/algoria-queries';

import Container from '../container';
import GithubStars from '../github-stars';
import Link from '../link';
import SearchBox from '../search-box';

import Burger from './burger';
import MenuItem from './menu-item';

const searchIndices = [
  { name: algoliaQueries[0].indexName, title: 'Blog Posts', hitComp: 'postPageHit' },
];

const themeClassNames = {
  white: 'bg-white',
  gray: 'bg-gray-4',
};

const Header = ({ showSearchBox, isMobileMenuOpen, onBurgerClick, navigation, theme }) => (
  <>
    <header
      className={classNames(
        'py-5 transition-[background] duration-200',
        themeClassNames[theme],
        isMobileMenuOpen && themeClassNames.white
      )}
    >
      <Container size="lg">
        <nav
          className="relative flex w-full items-center justify-between space-x-6 sm:h-10"
          aria-label="Global"
        >
          <div className="flex w-full shrink-0 items-center justify-between lg:w-auto">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <div className="flex items-center">
                <Link to="/">
                  <span className="sr-only">Cilium</span>
                  <Logo />
                </Link>
                <GithubStars className="ml-4 hidden bg-white lg:inline-block xl:ml-8" />
                <Button
                  className="ml-4 hidden items-center bg-white leading-none lg:inline-flex"
                  to="https://cilium.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  theme="outline-gray"
                  size="xs"
                >
                  <SlackIcon className="h-4 w-4" />
                  <span className="hidden xl:ml-1.5 xl:block">Join Slack</span>
                </Button>
              </div>
              <div className="-mr-2 flex items-center lg:hidden">
                {showSearchBox && (
                  <SearchBox className="mr-4 hidden sm:flex" indices={searchIndices} />
                )}
                <Burger
                  className="absolute right-0 top-1/2 block -translate-y-1/2 lg:hidden"
                  isToggled={isMobileMenuOpen}
                  onClick={onBurgerClick}
                />
              </div>
            </div>
          </div>
          <div className="hidden w-full space-x-5 lg:flex lg:items-center lg:justify-end xl:space-x-7">
            {showSearchBox && <SearchBox indices={searchIndices} />}
            <ul className="flex items-center lg:space-x-6 xl:space-x-8 2xl:space-x-11">
              {navigation.map((item, index) => (
                <MenuItem {...item} key={index} />
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
    {showSearchBox && <SearchBox className="mx-4 flex sm:hidden" indices={searchIndices} />}
  </>
);

Header.propTypes = {
  showSearchBox: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
  isMobileMenuOpen: PropTypes.bool.isRequired,
  onBurgerClick: PropTypes.func.isRequired,
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
};

Header.defaultProps = {
  showSearchBox: false,
  theme: 'white',
};
export default Header;
