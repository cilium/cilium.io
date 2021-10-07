import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Heading from 'components/shared/heading';
import ChevronIcon from 'icons/chevron.inline.svg';

const Item = ({ icon: Icon, title, description }) => (
  <Popover className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className={classNames(
            'flex items-center p-6 border rounded-lg border-gray-3 w-full h-full duration-200 transition',
            open && 'rounded-b-none shadow-primary border-transparent'
          )}
        >
          <Icon className="flex-shrink-0 w-16 h-auto lg:w-max" />
          <Heading className="mx-4 text-left md:mx-6 lg:mx-8" size="xs" tag="h3">
            {title}
          </Heading>
          <ChevronIcon className="flex-shrink-0 w-auto h-4 ml-auto rotate-90 lg:h-6" />
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
          <Popover.Panel className="absolute z-10 w-full px-6 shadow-secondary -translate-x-1/2 text-left bg-white rounded-b-lg left-1/2 top-[98%]">
            <div
              className="py-6 border-t border-gray-3"
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
