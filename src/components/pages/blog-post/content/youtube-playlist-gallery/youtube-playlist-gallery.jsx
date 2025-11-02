import PropTypes from 'prop-types';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './youtube-playlist-gallery.css';

const YoutubePlaylistGallery = ({ playlists }) => (
  <div className="youtube-gallery max-w-[1008px] mx-auto">
    {/* .my-slider has position:relative for pagination centering */}
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      pagination={{ clickable: true }}
      className="my-slider relative"
      navigation
    >
      {playlists.map(({ id, label }) => (
        <SwiperSlide key={id}>
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={`https://www.youtube.com/embed/videoseries?list=${id}`}
              title={label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              allowFullScreen
            />
          </div>
          {label && <p className="mt-2 text-center font-semibold">{label}</p>}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

YoutubePlaylistGallery.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ).isRequired,
};

export default YoutubePlaylistGallery;
