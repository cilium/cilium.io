import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SlickSlider from 'react-slick';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ChevronIcon from './images/chevron.inline.svg';

const Arrow = ({ type, className, onClick, disabled }) => {
  const isNext = type === 'next';

  return (
    <button
      className={classNames(
        'group absolute top-1/2 h-8 w-8 shrink-0 border -translate-y-1/2 items-center transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary-1 justify-center overflow-hidden rounded-full',
        'bg-gray-4 border-gray-1/60 text-gray-2',
        'md:flex hidden',
        isNext ? '-right-9' : '-left-9 scale-x-[-1]',
        disabled
          ? 'opacity-40 cursor-default'
          : 'hover:bg-gray-2 hover:border-gray-2 hover:text-gray-4 cursor-pointer',
        className
      )}
      type="button"
      aria-label={`${isNext ? 'Next' : 'Previous'} slide`}
      disabled={disabled}
      onClick={onClick}
    >
      <ChevronIcon className="w-2.5 shrink-0" />
    </button>
  );
};

Arrow.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Arrow.defaultProps = {
  className: '',
  onClick: null,
  disabled: false,
};

const Slider = ({ children, className }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

      {/* 
         Note: Swiper Pagination defaults to bullet classes that might need styling 
         to match previous slick-dots. Assuming default swiper styles are acceptable 
         or global css handles it. The original code imported slick-theme.css. 
         We imported 'swiper/css/pagination'.
      */}
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Slider.defaultProps = {
  className: '',
};

export default Slider;
