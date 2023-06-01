import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import SubscribeForm from 'components/shared/subscribe-form';

import leftIllustration from './images/subscribe-background-left.svg';
import rightIllustration from './images/subscribe-background-right.svg';

const title = 'Subscribe to the eCHO News';

const EventsSubscribe = () => (
  <section className="border-b border-gray-3 pt-10 pb-16 text-center md:pt-14 md:pb-20 lg:pt-16 lg:pb-28">
    <Container>
      <div className="relative min-h-[280px] w-full rounded-lg bg-additional-2">
        <img
          className="absolute left-0 top-1/2 hidden h-[280px] w-auto -translate-y-1/2 md:block"
          src={leftIllustration}
          alt=""
          aria-hidden
        />
        <img
          className="absolute right-0 top-1/2 hidden h-[280px] w-auto -translate-y-1/2 md:block"
          src={rightIllustration}
          alt=""
          aria-hidden
        />
        <div className="relative h-full w-full px-6 pt-12">
          <Heading tag="h2">{title}</Heading>
          <SubscribeForm className="mt-8 max-w-[656px]" />
        </div>
      </div>
    </Container>
  </section>
);
export default EventsSubscribe;
