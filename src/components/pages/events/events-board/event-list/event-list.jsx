import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import CardWithCta from '../../card-with-cta';
import EventCard from '../event-card';

const EventList = ({ events }) => (
  <div className="mt-6 grid gap-6 sm:grid-cols-2 md:gap-7 lg:mt-11 lg:grid-cols-3 xl:gap-8">
    {events.map(({ frontmatter }, index) => (
      <Fragment key={index}>
        <EventCard {...frontmatter} />
        {index === 4 && <CardWithCta />}
      </Fragment>
    ))}
  </div>
);

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({}),
      frontmatter: PropTypes.shape({}),
    })
  ).isRequired,
};

export default EventList;
