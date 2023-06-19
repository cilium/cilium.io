import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';

import Container from 'components/shared/container';
import useFilteredEvents from 'hooks/use-filtered-events';
import { EVENT_PER_PAGE } from 'utils/events';

import CardWithCta from './card-with-cta';
import EmptyState from './empty-state';
import EventCard from './event-card';
import Filters from './filters';
import Pagination from './pagination';

const cardWithCtaIndex = 4;

const EventsBoard = ({ eventFilters, events, totalCount, initialFilters }) => {
  const [eventPositionStart, setEventPositionStart] = useState(0);
  const [activeFilters, setActiveFilters] = useState(initialFilters);

  const handleFilters = (filter, newValues) => {
    setActiveFilters((prev) => ({ ...prev, [filter.label]: newValues }));
    setEventPositionStart(0);
  };

  const eventPositionEnd = eventPositionStart + EVENT_PER_PAGE;
  const filteredEvents = useFilteredEvents(events, activeFilters);
  const currentEvents = filteredEvents.slice(eventPositionStart, eventPositionEnd);
  const pageCount = Math.ceil(filteredEvents.length / EVENT_PER_PAGE);

  return (
    <Container>
      <Filters
        eventFilters={eventFilters}
        activeFilters={activeFilters}
        handleFilters={handleFilters}
      />
      {currentEvents.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:gap-7 lg:mt-11 lg:grid-cols-3 xl:gap-8">
          {currentEvents.map((event, index) => (
            <Fragment key={index}>
              <EventCard {...event} />
              {index === cardWithCtaIndex && <CardWithCta />}
            </Fragment>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
      {pageCount > 1 && (
        <Pagination
          totalCount={totalCount}
          pageCount={pageCount}
          callback={setEventPositionStart}
        />
      )}
    </Container>
  );
};

EventsBoard.propTypes = {
  eventFilters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  initialFilters: PropTypes.shape({
    type: PropTypes.arrayOf(PropTypes.string),
    region: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
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
