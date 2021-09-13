import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/a11y';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import CapitalOneLogo from 'icons/capitalone.inline.svg';
import Chevron from 'icons/chevron.inline.svg';
import DataDogLogo from 'icons/datadog.inline.svg';
import AdobeLogo from 'icons/logo-adobe.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';

SwiperCore.use([Navigation, Pagination, A11y]);

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
];

const UserCommunity = () => (
  <section className="mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="relative">
        <button
          className="absolute -translate-x-1/2  hidden 2xl:flex 2xl:-left-20 top-[calc(50%-3rem)]"
          id="button-previous"
          type="button"
          aria-label="Previous slide"
        >
          <Chevron className="rotate-180" />
        </button>
        <button
          className="absolute -translate-x-1/2 hidden 2xl:flex 2xl:-right-24 top-[calc(50%-3rem)]"
          id="button-next"
          type="button"
          aria-label="Next slide"
        >
          <Chevron />
        </button>
        <Swiper
          className="mt-10 lg:mt-14 !pb-16 swiper"
          modules={[Navigation, Pagination, A11y]}
          navigation={{
            prevEl: '#button-previous',
            nextEl: '#button-next',
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={32}
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          loop
          watchSlidesProgress
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
    </Container>
  </section>
);

export default UserCommunity;
