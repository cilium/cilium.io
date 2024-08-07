import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import ChevronIcon from './images/chevron.inline.svg';

const Arrow = (props) => {
  const isNext = props.type === 'next';
  const isDisabled = props?.className?.includes('slick-disabled');

  return (
    <button
      className={classNames(
        'group absolute top-1/2 h-8 w-8 shrink-0 border -translate-y-1/2 items-center transition-colors duration-300 outline-none justify-center overflow-hidden rounded-full',
        'bg-gray-4 border-gray-1/60 text-gray-2',
        'sm:flex hidden',
        isNext ? '-right-9' : '-left-9 scale-x-[-1]',
        isDisabled ? 'opacity-40' : 'hover:bg-gray-2 hover:border-gray-2 hover:text-gray-4'
      )}
      type="button"
      aria-label={`${isNext ? 'Next' : 'Previous'} slide`}
      disabled={isDisabled}
      onClick={props.onClick}
    >
      <ChevronIcon className="w-2.5 shrink-0" />
    </button>
  );
};

Arrow.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Arrow.defaultProps = {
  className: '',
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <SlickSlider
      className={classNames('slick-slider !flex w-full justify-between', className)}
      {...settings}
    >
      {children}
    </SlickSlider>
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
