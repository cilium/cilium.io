import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Heading from 'components/shared/heading';
import ChevronIcon from 'icons/chevron.inline.svg';

const Item = ({ icon: Icon, title, description }) => (
  <Popover as="li" className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className={classNames(
            'flex h-full w-full items-center rounded-lg border border-gray-3 p-4 transition duration-200 xl:p-5 xl:pl-6',
            open && 'rounded-b-none border-transparent shadow-primary'
          )}
        >
          <Icon className="h-auto w-16 shrink-0 xl:w-max" />
          <Heading className="mx-4 text-left" size="3xs" tag="h3">
            {title}
          </Heading>
          <ChevronIcon className="ml-auto h-4 w-auto shrink-0 rotate-90" />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 top-[98%] z-10 w-full -translate-x-1/2 rounded-b-lg bg-white px-6 text-left shadow-secondary">
            <div
              className="border-t border-gray-3 py-6"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

Item.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;
