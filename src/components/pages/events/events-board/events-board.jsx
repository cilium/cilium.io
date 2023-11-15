import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment, useState, useEffect } from 'react';

import Container from 'components/shared/container';
import Pagination from 'components/shared/pagination';
import useFilteredEvents from 'hooks/use-filtered-events';
import { EVENT_PER_PAGE } from 'utils/events';
import { EVENTS_BASE_PATH } from 'utils/routes';

import CardWithCta from './card-with-cta';
import EmptyState from './empty-state';
import EventCard from './event-card';
import Filters from './filters';

const cardWithCtaIndex = 4;

const EventsBoard = ({
  eventFilters,
  events,
  totalPageCount,
  currentPage,
  initialFilters,
  skip,
  limit,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage - 1);
  const [activeFilters, setActiveFilters] = useState(initialFilters);

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem('navigationData'));
    if (savedFilters) {
      setActiveFilters(savedFilters);
      localStorage.removeItem('navigationData');
    }
  }, [activeFilters]);

  const handleFilters = (filter, newValues) => {
    const updatedFilters = { ...activeFilters, [filter.label]: newValues };
    setActiveFilters(updatedFilters);
    setCurrentPageIndex(0);
    localStorage.setItem('navigationData', JSON.stringify(updatedFilters));
    navigate(EVENTS_BASE_PATH);
  };

  const filteredEvents = useFilteredEvents(events, activeFilters);
  const currentEvents = filteredEvents.slice(skip, skip + limit);
  const pageCount = Math.min(totalPageCount, Math.ceil(filteredEvents.length / EVENT_PER_PAGE));

  return (
    <Container id="events-board">
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
          className="mt-12 md:mt-16"
          currentPageIndex={currentPageIndex}
          pageCount={pageCount}
          pageURL={EVENTS_BASE_PATH}
          optionsToSave={activeFilters}
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
  currentPage: PropTypes.number.isRequired,
  totalPageCount: PropTypes.number.isRequired,
  skip: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default EventsBoard;
