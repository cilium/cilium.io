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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={classNames('relative w-full', className)}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          enabled: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
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
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={child.key || index}>{child}</SwiperSlide>
        ))}
      </Swiper>
      <div ref={prevRef}>
        <Arrow type="prev" />
      </div>
      <div ref={nextRef}>
        <Arrow type="next" />
      </div>
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
