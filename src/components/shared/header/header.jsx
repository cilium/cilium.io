import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Button from 'components/shared/button';
import SlackIcon from 'icons/slack.inline.svg';
import Logo from 'images/logo.inline.svg';
import algoliaQueries from 'utils/algoria-queries';

import Container from '../container';
import GithubStars from '../github-stars';
import Link from '../link';
import SearchBox from '../search-box';

const searchIndices = [
  { name: algoliaQueries[0].indexName, title: 'Blog Posts', hitComp: 'postPageHit' },
];

const navigation = [
  { name: 'Enterprise', href: '/enterprise' },
  { name: 'Learn', href: '/learn' },
  { name: 'Blog', href: '/blog' },
  { name: 'Documentation', href: 'https://docs.cilium.io/en/stable/' },
];

const themeClassNames = {
  white: 'bg-white',
  gray: 'bg-gray-4',
};

const Header = ({ showSearchBox, theme }) => (
  <>
    <div className={classNames('py-5', themeClassNames[theme])}>
      <Popover>
        {({ open }) => (
          <>
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
                      <GithubStars className="ml-4 hidden lg:inline-block xl:ml-8" />
                      <Button
                        className="ml-4 hidden items-center leading-none lg:inline-flex"
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
                      <Popover.Button className="focus-visible:ring-outline inline-flex items-center justify-center rounded-md p-1.5 text-black hover:bg-gray-100 hover:text-gray-1 focus:outline-none focus-visible:ring-2">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-7 w-7" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden w-full space-x-5 lg:flex lg:items-center lg:justify-end xl:space-x-7">
                  {showSearchBox && <SearchBox indices={searchIndices} />}
                  <ul className="flex items-center lg:space-x-6 xl:space-x-8 2xl:space-x-11">
                    {navigation.map((item) => (
                      <li>
                        <Link
                          type="text"
                          theme="black"
                          key={item.name}
                          to={item.href}
                          target={item.target || ''}
                          className="text-sm font-bold leading-none xl:text-base"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </Container>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                className="absolute inset-x-0 top-0 z-20 origin-top-right transform transition lg:hidden"
                // click outside logic is broken, it will be fixed in the next release https://github.com/tailwindlabs/headlessui/issues/283
                tabIndex={-1}
                focus
                static
              >
                <div className="overflow-hidden bg-white">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <span className="sr-only">Cilium</span>
                      <Logo />
                    </div>
                    <div className="-mr-3">
                      <Popover.Button className="focus-visible:ring-outline inline-flex items-center justify-center rounded-md bg-white p-1.5 text-black hover:bg-gray-100 hover:text-gray-1 focus:outline-none focus-visible:ring-2">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-7 w-7" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-11 flex flex-col items-center justify-center px-2 pb-11">
                    <ul className="flex flex-col justify-center space-y-9">
                      {navigation.map((item) => (
                        <li className="text-center">
                          <Link
                            key={item.name}
                            to={item.href}
                            target={item.target}
                            theme="black"
                            type="text"
                            className="rounded-md text-center text-base font-bold leading-none"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-9 inline-flex items-center leading-none"
                      to="https://cilium.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      theme="outline-gray"
                      size="xs"
                    >
                      <SlackIcon className="mr-1.5 h-4 w-4" />
                      <span>Join Slack</span>
                    </Button>
                    <GithubStars className="mt-9" />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
            <Popover.Button
              className={classNames(
                'fixed inset-0 z-10 bg-black bg-opacity-50 transition-colors duration-200',
                open ? 'visible h-full w-full opacity-100' : 'invisible opacity-0'
              )}
            />
          </>
        )}
      </Popover>
    </div>
    {showSearchBox && <SearchBox className="mx-4 flex sm:hidden" indices={searchIndices} />}
  </>
);

Header.propTypes = {
  showSearchBox: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
};

Header.defaultProps = {
  showSearchBox: false,
  theme: 'white',
};
export default Header;
