import React from 'react';

import CtaCard from 'components/pages/events/cta-card';
import EventsSubscribe from 'components/pages/events/events-subscribe';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'Get Hands-On With Cilium';

const cta = {
  title: 'Weekly Interactive Cilium<br/>Introduction and Live Q&A',
  description: 'With a Cilium and eBPF expert',
  buttonText: 'Book a seat',
  buttonUrl: 'https://calendly.com/cilium-events/cilium-introduction',
  buttonTarget: '_blank',
};

const form = {
  title: 'Industry insights you won’t delete.<br/>Delivered to your inbox weekly.',
  description: 'Subscribe to bi-weekly eCHO News',
};

const CtaSection = () => (
  <section className="border-b border-gray-3 pt-10 pb-16 text-center md:pt-14 md:pb-20 lg:pt-16 lg:pb-28">
    <Container>
      <Heading tag="h2" className="pb-8 lg:pb-12">
        {title}
      </Heading>
      <div className="grid grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-6 xl:gap-x-8">
        <EventsSubscribe {...form} className="col-span-full lg:col-span-1" />
        <CtaCard {...cta} className="col-span-full lg:col-span-1" />
      </div>
    </Container>
  </section>
);

export default CtaSection;
