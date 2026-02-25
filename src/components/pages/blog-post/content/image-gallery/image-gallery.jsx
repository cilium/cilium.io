import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './image-gallery.css';

/** Normalize image src from import/require (string, or module with .default, .publicURL, etc.) */
function getImageSrc(src) {
  if (typeof src === 'string') return src;
  if (!src || typeof src !== 'object') return '';
  const url = src.default ?? src.publicURL ?? src?.images?.fallback?.src ?? src.src;
  return typeof url === 'string' ? url : '';
}

const ImageGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images?.length) return null;

  return (
    <div className="image-gallery max-w-[720px] mx-auto my-6">
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        spaceBetween={8}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="image-gallery-main relative mb-3"
        navigation
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {images.map(({ src, alt }, index) => {
          const imageSrc = getImageSrc(src);
          return (
            <SwiperSlide key={index}>
              <div className="relative w-full min-h-[160px] bg-gray-100 rounded-lg overflow-hidden">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={alt || ''}
                    className="w-full h-auto block max-w-full object-contain"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <div className="flex items-center justify-center min-h-[160px] text-gray-2 text-sm">
                    {alt || 'Image'}
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {images[activeIndex]?.alt && (
        <p className="text-center text-sm font-medium text-gray-2 mt-1 mb-2">
          {images[activeIndex].alt}
        </p>
      )}
      {/* Thumbnails strip */}
      <Swiper
        modules={[Thumbs]}
        spaceBetween={8}
        slidesPerView="auto"
        className="image-gallery-thumbs mt-1"
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
      >
        {images.map(({ src, alt }, index) => {
          const imageSrc = getImageSrc(src);
          return (
            <SwiperSlide key={index} className="!w-20 flex-shrink-0 cursor-pointer">
              <div className="block w-full rounded border-2 border-transparent hover:border-primary-1 focus-within:border-primary-1 overflow-hidden image-gallery-thumb aspect-square min-h-[64px]">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt=""
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full min-h-[64px] bg-gray-200 flex items-center justify-center text-gray-2 text-xs" />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default ImageGallery;
