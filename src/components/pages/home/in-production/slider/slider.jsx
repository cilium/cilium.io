import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ChevronIcon from './images/chevron.inline.svg';

const Arrow = ({ type, className, onClick, disabled }) => {
  const isNext = type === 'next';

  return (
    <button
      className={classNames(
        'group absolute top-1/2 h-8 w-8 shrink-0 border -translate-y-1/2 items-center transition-colors duration-300 outline-none justify-center overflow-hidden rounded-full z-10',
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
  const [prevEl, setPrevEl] = React.useState(null);
  const [nextEl, setNextEl] = React.useState(null);

  // Swiper breakpoints are mobile-first (min-width)
  // React-slick was:
  // Default (Desktop): 3 slides
  // < 1024: 2 slides
  // < 768: 1 slide, dots

  // Mapping to Swiper min-width:
  // 0px: slides: 1, dots: true
  // 768px: slides: 2, dots: false
  // 1024px: slides: 3, dots: false

  return (
    <div className={classNames('relative w-full', className)}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0} // slick-slider had no explicit spaceBetween, let's assume 0 or handle via CSS if needed. Slick usually does not add margin unless specified.
        slidesPerView={1}
        pagination={{
          clickable: true,
          enabled: true,
        }}
        navigation={{
          prevEl,
          nextEl,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            pagination: { enabled: false },
          },
          1024: {
            slidesPerView: 3,
            pagination: { enabled: false },
          },
        }}
        className="!flex w-full justify-between"
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="absolute top-1/2 w-full -translate-y-1/2 pointer-events-none">
          {/* We render arrows here but control Swiper via refs. 
              The pointers-events-none on wrapper ensures we don't block clicks on slides, 
              but we need pointer-events-auto on buttons. 
          */}
          <div ref={(node) => setPrevEl(node)}>
            <Arrow type="prev" className="pointer-events-auto" />
          </div>
          <div ref={(node) => setNextEl(node)}>
            <Arrow type="next" className="pointer-events-auto" />
          </div>
        </div>
      </Swiper>

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
