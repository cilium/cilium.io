import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import GitHubButton from 'react-github-btn';

import Logo from 'images/logo.inline.svg';

import Button from '../button';
import Container from '../container';
import Link from '../link';

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Slack', target: '_blank', href: 'https://cilium.herokuapp.com/' },
  { name: 'Documentation', href: 'https://docs.cilium.io/' },
];

export default function Example() {
  return (
    <div className="relative py-5">
      <Popover>
        {({ open }) => (
          <>
            <Container size="lg">
              <nav
                className="relative flex items-center justify-end w-full sm:h-10"
                aria-label="Global"
              >
                <div className="flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0">
                  <div className="flex items-center justify-between w-full lg:w-auto">
                    <div className="flex items-center space-x-4 md:space-x-8">
                      <Link to="/">
                        <span className="sr-only">Workflow</span>
                        <Logo />
                      </Link>
                      <div className="mt-1.5">
                        <GitHubButton
                          href="https://github.com/cilium/cilium"
                          data-size="large"
                          data-color-scheme="light"
                          data-show-count
                        >
                          GitHub Stars
                        </GitHubButton>
                      </div>
                    </div>
                    <div className="flex items-center -mr-2 lg:hidden">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex lg:space-x-11 lg:items-center">
                  <span className="inline-flex rounded-md">
                    <Button size="sm" to="/enterprise">
                      Enterprise
                    </Button>
                  </span>
                  {navigation.map((item) => (
                    <Link
                      type="text"
                      theme="black"
                      key={item.name}
                      to={item.href}
                      target={item.target || ''}
                      className="text-base font-bold leading-none"
                    >
                      {item.name}
                    </Link>
                  ))}
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
                className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform lg:hidden"
                focus
                static
              >
                <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <Logo className="w-auto h-8" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        target={item.target}
                        theme="black"
                        type="text"
                        className="block px-3 py-2 text-base font-medium rounded-md"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Button className="flex justify-center w-full" to="/enterprise">
                    Enterprise
                  </Button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
