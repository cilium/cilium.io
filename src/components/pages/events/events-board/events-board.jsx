import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Container from 'components/shared/container';
import Filters from 'components/shared/filters';
import Heading from 'components/shared/heading';

import EventList from './event-list';

const EventsBoard = ({ types, events, currentType, currentPage, numPages, isTypePage }) => {
  const scrollTo = () => {
    const element = document.getElementById('filters');
    if (element) {
      const offset = -50;
      const elementTop = element.getBoundingClientRect().top;
      const elementOffset = window.pageYOffset + elementTop + offset;
      window.scrollTo({
        top: elementOffset,
      });
    }
  };
  useEffect(() => {
    if (isTypePage || currentPage > 1) {
      scrollTo();
    }
  }, [isTypePage, currentPage]);

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
  isTypePage: PropTypes.bool.isRequired,
};

export default EventsBoard;
