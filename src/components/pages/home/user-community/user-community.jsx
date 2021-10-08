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
    <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 lg:gap-8 lg:mt-10">
      {items.map(({ icon: Icon, text, linkText, linkUrl }, index) => (
        <div
          className="flex flex-col h-full p-6 border rounded-lg md:p-8 bg-gray-4 border-gray-3"
          key={index}
        >
          <Icon />
          <p className="my-5">{text}</p>
          <Link className="mt-auto" type="text" theme="primary" to={linkUrl}>
            {linkText}
          </Link>
        </div>
      ))}
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
