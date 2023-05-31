import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Container from 'components/shared/container';
import Filters from 'components/shared/filters';
import Heading from 'components/shared/heading';

const EventsBoard = ({ types, events, currentType, currentPage, numPages }) => {
  const blockTitle = currentType === '*' ? 'All events' : currentType;

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
    <section className="mt-10 md:mt-20 lg:mt-28">
      <Container>
        <Heading tag="h2">{blockTitle}</Heading>
        <Filters id="filters" filters={types} currentFilter={currentType} type="event" />
      </Container>
    </section>
  );
};

EventsBoard.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string,
        ogImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.shape(),
          }),
        }),
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ogSummary: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
      }),
    })
  ).isRequired,
  currentType: PropTypes.oneOf(['*', 'Webinar', 'Meetup', 'Conference']).isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default EventsBoard;
