/* eslint-disable react/prop-types */
import React from 'react';

import CtaSection from 'components/pages/events/cta-section';
import EventsBoard from 'components/pages/events/events-board';
import FeaturedEvent from 'components/pages/events/featured-event';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';

const EventsPage = (props) => {
  const {
    pageContext: {
      featuredEvent,
      skip,
      limit,
      currentPage,
      postEvents,
      totalPageCount,
      eventFilters,
      initialFilters,
    },
  } = props;
  return (
    <MainLayout>
      <FeaturedEvent featuredStory={featuredEvent} />
      <EventsBoard
        events={postEvents}
        currentPage={currentPage}
        totalPageCount={totalPageCount}
        skip={skip}
        limit={limit}
        eventFilters={eventFilters}
        initialFilters={initialFilters}
      />
      <CtaSection />
    </MainLayout>
  );
};

export default EventsPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
