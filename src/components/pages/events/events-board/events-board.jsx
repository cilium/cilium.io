import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment, useState, useEffect, useRef } from 'react';

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
  const [activeFilters, setActiveFilters] = useState(initialFilters);
  const [wrapperOffsetTop, setWrapperOffsetTop] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const historyState = window.history.state;

      if (historyState?.filters) {
        setActiveFilters(historyState?.filters);
      }

      if (historyState?.scrollY) {
        window.scrollTo(0, historyState?.scrollY);
      }

      window.history.replaceState({ ...historyState, filters: null, scrollY: null }, '');
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateOffsetTop = () => {
        if (wrapperRef.current) {
          setWrapperOffsetTop(wrapperRef.current.offsetTop);
        }
      };

      updateOffsetTop();

      window.addEventListener('resize', updateOffsetTop);
      return () => window.removeEventListener('resize', updateOffsetTop);
    }
  }, []);

  const handleFilters = (filter, newValues) => {
    const updatedFilters = { ...activeFilters, [filter.label]: newValues };
    setActiveFilters(updatedFilters);
    if (currentPage > 1) {
      navigate(EVENTS_BASE_PATH, { state: { filters: updatedFilters, scrollY: window.scrollY } });
    }
  };

  const filteredEvents = useFilteredEvents(events, activeFilters);
  const currentEvents = filteredEvents.slice(skip, skip + limit);
  const pageCount = Math.min(totalPageCount, Math.ceil(filteredEvents.length / EVENT_PER_PAGE));

  return (
    <section className="pt-8 md:pt-14" ref={wrapperRef}>
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
            className="mt-12 md:mt-16"
            currentPageIndex={currentPage - 1}
            pageCount={pageCount}
            pageURL={EVENTS_BASE_PATH}
            optionsToSave={{
              filters: activeFilters,
              scrollY: wrapperOffsetTop,
            }}
          />
        )}
      </Container>
    </section>
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
