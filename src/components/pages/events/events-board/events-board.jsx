import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Container from 'components/shared/container';
import Filters from 'components/shared/filters';

import EventList from './event-list';

const EventsBoard = ({ types, events, currentType, currentPage, numPages }) => {
  const scrollTo = () => {
    const element = document.getElementById('filters');
    const offset = -50;
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y });
  };

  useEffect(() => {
    if (currentPage > 1) {
      scrollTo();
    }
  }, [currentPage]);

  return (
    <Container>
      <Filters id="filters" filters={types} currentFilter={currentType} type="event" />
      <EventList events={events} />
    </Container>
  );
};

EventsBoard.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
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
      }),
    })
  ).isRequired,
  currentType: PropTypes.oneOf(['*', 'Webinar', 'Meetup', 'Conference']).isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default EventsBoard;
