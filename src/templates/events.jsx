/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import EventsBoard from 'components/pages/events/events-board';
import EventsSubscribe from 'components/pages/events/events-subscribe';
import FeaturedEvent from 'components/pages/events/featured-event';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';

const EventsPage = (props) => {
  const {
    pageContext: { featuredEvent, postEvents, totalCount, types, regions },
    location: { pathname },
  } = props;

  return (
    <MainLayout>
      <FeaturedEvent featuredStory={featuredEvent} />
      {/* <EventsBoard
        types={types}
        events={postEvents}
        currentType={currentType}
        currentPage={currentPage}
        numPages={numPages}
        isTypePage={isTypePage}
      /> */}
      <EventsSubscribe />
    </MainLayout>
  );
};

export default EventsPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
