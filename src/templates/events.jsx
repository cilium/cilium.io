/* eslint-disable react/prop-types */
import React from 'react';

import EventList from 'components/pages/events/event-list';
import Hero from 'components/pages/events/hero';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';

const EventsPage = ({ pageContext: { featuredEvents, postEvents, totalCount } }) => (
  <MainLayout>
    <Hero items={featuredEvents} />
    <EventList allEvents={postEvents} totalCount={totalCount} />
  </MainLayout>
);

export default EventsPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
