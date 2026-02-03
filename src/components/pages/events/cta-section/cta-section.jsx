import React from 'react';

import EventsSubscribe from 'components/pages/events/events-subscribe';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'Get Hands-On With Cilium';

const form = {
  title: 'Industry insights you won’t delete.<br/>Delivered to your inbox weekly.',
  description: 'Subscribe to bi-weekly eCHO News',
};

const CtaSection = () => (
  <section className="pt-10 pb-16 text-center border-b border-gray-3 md:pt-14 md:pb-20 lg:pt-16 lg:pb-28">
    <Container>
      <Heading tag="h2" className="pb-8 text-gray-900 dark:text-white lg:pb-12">
        {title}
      </Heading>
      <div className="grid grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-6 xl:gap-x-8">
        <EventsSubscribe {...form} className="col-span-full lg:col-span-2" />
      </div>
    </Container>
  </section>
);

export default CtaSection;
