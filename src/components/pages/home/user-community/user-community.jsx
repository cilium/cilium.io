import PropTypes from 'prop-types';
import React from 'react';
import { Navigation, Pagination, A11y, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/grid';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import CapitalOneLogo from 'icons/capitalone.inline.svg';
import Chevron from 'icons/chevron.inline.svg';
import DataDogLogo from 'icons/datadog.inline.svg';
import AdobeLogo from 'icons/logo-adobe.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';

const title = 'User Community';
const items = [
  {
    icon: GoogleLogo,
    text: 'Google chooses Cilium for Google Kubernetes Engine (GKE) networking',
    linkText: 'Blog',
    linkUrl: '/',
  },
  {
    icon: AdobeLogo,
    text: 'What Makes a Good Multi-tenant Kubernetes Solution',
    linkText: 'Watch video',
    linkUrl: '/',
  },
  {
    icon: CapitalOneLogo,
    text: 'Building a Secure and Maintainable PaaS',
    linkText: 'Watch video',
    linkUrl: '/',
  },
  {
    icon: DataDogLogo,
    text: 'How Datadog uses Cilium',
    linkText: 'Watch video',
    linkUrl: '/',
  },
  {
    icon: GoogleLogo,
    text: 'Google chooses Cilium for Google Kubernetes Engine (GKE) networking',
    linkText: 'Blog',
    linkUrl: '/',
  },
  {
    icon: AdobeLogo,
    text: 'What Makes a Good Multi-tenant Kubernetes Solution',
    linkText: 'Watch video',
    linkUrl: '/',
  },
  {
    icon: CapitalOneLogo,
    text: 'Building a Secure and Maintainable PaaS',
    linkText: 'Watch video',
    linkUrl: '/',
  },
  {
    icon: DataDogLogo,
    text: 'How Datadog uses Cilium',
    linkText: 'Watch video',
    linkUrl: '/',
  },
];

const UserCommunity = ({ className }) => (
  <section className={className}>
    <Heading tag="h3" theme="gray">
      {title}
    </Heading>
    <div className="relative mt-6 lg:mt-10">
      <button
        className="absolute -translate-x-1/2 hidden xl:flex xl:-left-6 2xl:-left-11 top-[calc(50%-3rem)]"
        id="button-previous"
        type="button"
        aria-label="Previous slide"
      >
        <Chevron className="w-3 h-auto rotate-180 2xl:w-4" />
      </button>
      <button
        className="absolute -translate-x-1/2 hidden xl:flex xl:-right-9 2xl:-right-14 top-[calc(50%-3rem)]"
        id="button-next"
        type="button"
        aria-label="Next slide"
      >
        <Chevron className="w-3 h-auto 2xl:w-4" />
      </button>
      <Swiper
        className="!pb-7 lg:!pb-11 swiper"
        modules={[Navigation, Pagination, A11y, Grid]}
        navigation={{
          prevEl: '#button-previous',
          nextEl: '#button-next',
        }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={16}
        grid={{
          rows: 2,
          fill: 'row',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 32,
          },
          1280: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
      >
        {items.map(({ icon: Icon, text, linkText, linkUrl }, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col h-full p-8 border rounded-lg bg-gray-4 border-gray-3">
              <Icon />
              <p className="my-5">{text}</p>
              <Link className="mt-auto" type="text" theme="primary" to={linkUrl}>
                {linkText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

UserCommunity.propTypes = {
  className: PropTypes.string,
};

UserCommunity.defaultProps = {
  className: null,
};

export default UserCommunity;
