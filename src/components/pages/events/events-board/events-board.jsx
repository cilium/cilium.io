import PropTypes from 'prop-types';
import React, { Fragment, useState, useCallback, useMemo, useEffect } from 'react';

import Container from 'components/shared/container';
import useFilteredEvents from 'hooks/use-filtered-events';
import { EVENT_PER_PAGE } from 'utils/events';

import CardWithCta from './card-with-cta';
import EventCard from './event-card';
import Filters from './filters';
// import Pagination from './pagination';

const EventsBoard = ({ eventFilters, events, totalCount, initialFilters }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [activeFilters, setActiveFilters] = useState(initialFilters);

  // TODO: Delete this
  console.log(activeFilters);

  const handleFilters = useCallback(
    (filter, newValues) => {
      const newFilters = {
        ...activeFilters,
        [filter.label]: newValues,
      };
      setActiveFilters(newFilters);
    },
    [activeFilters]
  );

  const memoizedFilterDropdowns = useMemo(
    () => (
      <Filters
        eventFilters={eventFilters}
        activeFilters={activeFilters}
        handleFilters={handleFilters}
      />
    ),
    [eventFilters, activeFilters, handleFilters]
  );

  const endOffset = itemOffset + EVENT_PER_PAGE;
  const filteredEvents = useFilteredEvents(events, activeFilters, itemOffset, endOffset);
  const currentEvents = filteredEvents.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredEvents.length / EVENT_PER_PAGE);

  return (
    <Container>
      {memoizedFilterDropdowns}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:gap-7 lg:mt-11 lg:grid-cols-3 xl:gap-8">
        {currentEvents.map((event, index) => (
          <Fragment key={index}>
            <EventCard {...event} />
            {index === 4 && <CardWithCta />}
          </Fragment>
        ))}
      </div>
    </Container>
  );
};

EventsBoard.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  regions: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalCount: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      ogImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.shape(),
        }),
      }),
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      ogSummary: PropTypes.string,
      place: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['Webinar', 'Meetup', 'Conference']).isRequired,
    })
  ).isRequired,
};

export default EventsBoard;
