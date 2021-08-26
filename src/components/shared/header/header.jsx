import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import GitHubButton from 'react-github-btn';

import Logo from 'images/logo.inline.svg';

import Button from '../button';
import Container from '../container';
import Link from '../link';

const navigation = [
  { name: 'Blog', href: '#' },
  { name: 'Slack', href: '#' },
  { name: 'Documentation', href: '#' },
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
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="flex items-center space-x-8">
                      <Link to="/">
                        <span className="sr-only">Workflow</span>
                        <Logo />
                      </Link>
                      <div className="mt-1">
                        <GitHubButton
                          href="https://github.com/cilium/cilium"
                          data-size="large"
                          data-color-scheme="light"
                          data-show-count
                        >
                          Github Stars
                        </GitHubButton>
                      </div>
                    </div>
                    <div className="flex items-center -mr-2 md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-11 md:items-center">
                  <span className="inline-flex rounded-md shadow">
                    <Button size="sm" to="#">
                      Enterprise
                    </Button>
                  </span>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-bold leading-none text-black hover:text-gray-900"
                    >
                      {item.name}
                    </a>
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
                className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
                focus
                static
              >
                <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
