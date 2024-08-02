import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link/link';
import SubscribeForm from 'components/shared/subscribe-form';

import backgroundSvg from './images/background.svg';
import RSSIcon from './images/rss.inline.svg';

const title = 'Subscribe to bi-weekly eCHO News';
const description =
  'eCHO news is your bi-weekly wrap up of all things eBPF and Cilium. If you want to keep up on the latest in cloud native networking, observability, and security this is your source';

const Hero = () => (
  <section className="relative bg-gray-4 pt-10 md:pt-20">
    <img
      className="absolute left-1/2 bottom-0 -translate-x-1/2"
      src={backgroundSvg}
      alt=""
      aria-hidden
    />
    <Container className="text-center">
      <Heading tag="h1" size="lg">
        {title}
      </Heading>
      <p className="mx-auto mt-5 max-w-2xl lg:max-w-[820px]">{description}</p>
      <SubscribeForm
        className="mt-10 max-w-[614px] md:mt-12 lg:mt-16"
        divClassName="min-h-[160px] xs:min-h-[110px]"
      />
      <Link className="mx-auto flex w-fit items-center gap-x-1.5" to="/newsletter/rss.xml">
        <RSSIcon className="h-3.5 w-3.5 shrink-0 text-primary-1" />
        <span className="pb-0.5 text-base hover:text-primary-1">Subscribe to RSS feed</span>
      </Link>
    </Container>
  </section>
);

export default Hero;
