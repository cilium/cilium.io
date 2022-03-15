import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ChevronIcon from '../images/chevron.inline.svg';

const Item = ({ question, answer, faqId, isDefaultOpen }) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const handleButtonClick = () => setIsOpen((currentState) => !currentState);
  return (
    <div className="py-5 first:pt-0 last:pb-0 relative after:absolute after:h-px after:left-0 sm:after:left-14 after:right-0 after:bottom-0 last:after:hidden after:bg-gray-3">
      <dt>
        <button
          className="group text-lg sm:text-xl text-left leading-normal sm:leading-normal font-semibold sm:space-x-5 flex items-center hover:text-primary-1 sm:hover:text-inherit duration-200 transition-colors"
          type="button"
          aria-expanded={isOpen}
          aria-controls={faqId}
          onClick={handleButtonClick}
        >
          <span
            className={classNames(
              'border-2 relative rounded-full shrink-0 w-6 h-6 duration-200 transition-[background,border,transform,color] hidden',
              'group-hover:border-hover-1 group-hover:bg-hover-1 group-hover:text-white',
              'sm:w-9 sm:h-9 sm:block',
              isOpen
                ? '-rotate-90 border-primary-1 bg-primary-1 text-white'
                : 'rotate-0 border-gray-3 group-hover:text-primary-1'
            )}
          >
            <ChevronIcon className="w-2.5 sm:w-4 h-auto absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2" />
          </span>
          <span>{question}</span>
        </button>
      </dt>

      <dd
        className={classNames(
          'sm:pl-14 prose sm:prose-lg prose-hr:my-5 sm:prose-hr:my-5 leading-relaxed lg:leading-relaxed max-w-none overflow-hidden duration-300 transition-[opacity,height,margin-top,visibility]',
          isOpen ? 'opacity-100 mt-2.5 h-auto visible' : 'opacity-0 mt-0 h-0 invisible'
        )}
        id={faqId}
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  );
};

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
