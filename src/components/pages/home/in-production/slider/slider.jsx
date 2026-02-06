import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ChevronIcon from './images/chevron.inline.svg';

const Arrow = ({ type, onClick, disabled }) => {
  const isNext = type === 'next';

  return (
    <button
      className={classNames(
        'group absolute top-1/2 h-8 w-8 shrink-0 border -translate-y-1/2 items-center transition-colors duration-300 outline-none justify-center overflow-hidden rounded-full z-10',
        'bg-gray-4 border-gray-1/60 text-gray-2',
        'md:flex hidden',
        isNext ? '-right-9' : '-left-9 scale-x-[-1]',
        disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-2 hover:border-gray-2 hover:text-gray-4 cursor-pointer'
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
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Arrow.defaultProps = {
  disabled: false,
};

const Slider = ({ children, className }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Convert children to array if needed
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, [childrenArray.length]);

  return (
    <div className={classNames('relative w-full', className)}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          clickable: true,
          enabled: false, // Disabled by default, enabled on mobile via breakpoints
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            pagination: {
              enabled: true,
            },
          },
          1024: {
            slidesPerView: 2,
            pagination: {
              enabled: false,
            },
          },
          1280: {
            slidesPerView: 3,
            pagination: {
              enabled: false,
            },
          },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="swiper-slider w-full"
      >
        {childrenArray.map((child, index) => (
          <SwiperSlide key={index} className="!flex">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={navigationPrevRef}>
        <Arrow
          type="prev"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
        />
      </div>
      <div ref={navigationNextRef}>
        <Arrow
          type="next"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
        />
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
