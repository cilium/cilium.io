import { Disclosure, Transition } from '@headlessui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import ChevronIcon from '../images/chevron.inline.svg';

const Item = ({ question, answer, faqId, isDefaultOpen }) => (
  <Disclosure
    as="div"
    defaultOpen={isDefaultOpen}
    className="py-5 first:pt-0 last:pb-0 relative after:absolute after:h-px after:left-[38px] sm:after:left-14 after:right-0 after:bottom-0 last:after:hidden after:bg-gray-3"
  >
    {({ open }) => (
      <>
        <dt>
          <Disclosure.Button
            className="text-lg sm:text-xl text-left leading-normal font-semibold space-x-3.5 sm:space-x-5 flex items-center"
            type="button"
            aria-expanded="false"
            aria-controls={faqId}
          >
            <div
              className={classNames(
                'flex border-2 rounded-full shrink-0 w-6 h-6 sm:w-9 sm:h-9 justify-center items-center duration-200 transition-[background,border,transform,color] hover:border-hover-1 hover:bg-hover-1 hover:text-white',
                open
                  ? '-rotate-90 border-primary-1 bg-primary-1 text-white'
                  : 'rotate-0 border-gray-3 hover:text-primary-1'
              )}
            >
              <ChevronIcon className="w-2.5 sm:w-4 h-auto" />
            </div>
            <div>{question}</div>
          </Disclosure.Button>
        </dt>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel
            as="dd"
            className="mt-2.5 pl-[38px] sm:pl-14 prose sm:prose-lg prose-hr:my-5 sm:prose-hr:my-5 leading-relaxed lg:leading-relaxed max-w-none"
            id={faqId}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </Transition>
      </>
    )}
  </Disclosure>
);
Item.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  faqId: PropTypes.string.isRequired,
  isDefaultOpen: PropTypes.bool,
};

Item.defaultProps = {
  isDefaultOpen: false,
};

export default Item;
