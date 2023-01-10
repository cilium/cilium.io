import classNames from 'classnames';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ChevronIcon from '../images/chevron.inline.svg';

const ANIMATION_DURATION = 0.3;

const variantsAnimation = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  visible: { opacity: 1, height: 'auto', marginTop: '10px' },
};

const Item = ({ question, answer, faqId, isDefaultOpen }) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const handleButtonClick = () => setIsOpen((currentState) => !currentState);
  return (
    <div className="relative py-5 after:absolute after:left-[38px] after:right-0 after:bottom-0 after:h-px after:bg-gray-3 first:pt-0 last:pb-0 last:after:hidden sm:after:left-14">
      <dt aria-expanded={isOpen} aria-controls={faqId}>
        <button
          className="group flex items-center space-x-3.5 text-left text-lg font-semibold leading-normal sm:space-x-5 sm:text-xl sm:leading-normal"
          type="button"
          onClick={handleButtonClick}
        >
          <div
            className={classNames(
              'relative h-6 w-6 shrink-0 rounded-full border-2 transition-[background,border,transform,color] duration-200 group-hover:border-hover-1 group-hover:bg-hover-1 group-hover:text-white sm:h-9 sm:w-9',
              isOpen
                ? '-rotate-90 border-primary-1 bg-primary-1 text-white'
                : 'rotate-0 border-gray-3 group-hover:text-primary-1'
            )}
          >
            <ChevronIcon className="absolute top-1/2 left-1/2 h-auto w-2.5 -translate-x-1/2 -translate-y-1/2 sm:w-4" />
          </div>
          <p>{question}</p>
        </button>
      </dt>
      <LazyMotion features={domAnimation}>
        <m.dd
          className="prose max-w-none overflow-hidden pl-[38px] leading-relaxed prose-hr:my-5 sm:prose-lg sm:pl-14 sm:prose-hr:my-5 lg:leading-relaxed"
          id={faqId}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          variants={variantsAnimation}
          transition={{ duration: ANIMATION_DURATION }}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </LazyMotion>
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
