import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

function getLocalTime(date_start_unix, timezone) {
  const date = `${new Date(date_start_unix * 1000)
    .toISOString()
    .replace('T', ' ')
    .replace('.000Z', '')}`;

  const eventTime = moment.tz(date, timezone);
  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTime = eventTime.tz(localTimezone).format();

  return localTime;
}

const EventsBoard = ({ calendar, eventsData, setShowEvent, setUniqueId }) => {
  const onClick = (e, unique) => {
    e.preventDefault();
    setUniqueId(unique);
    setShowEvent(true);
  };

  const events = eventsData?.events
    .slice(0, 5)
    .sort((a, b) => (a.date_start_unix > b.date_start_unix ? 1 : -1));

  const { title, description } = calendar[0];

  return (
    <div className="flex flex-col">
      <Heading tag="h3" size="sm">
        {title}
      </Heading>

      <div className="flex mt-10 space-x-16">
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div className="flex shrink flex-col space-y-4">
          {events.map(({ timezone, date_start_unix, id, unique }) => {
            const localTime = getLocalTime(date_start_unix, timezone);
            const formatDate = `${new Date(localTime).toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'long',
              day: 'numeric',
            })} - ${new Date(localTime).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}`;

            const shouldShowEvent = new Date(localTime) >= new Date();

            return (
              <Fragment key={id}>
                {shouldShowEvent && (
                  <Button
                    theme="outline"
                    size="md"
                    type="button"
                    onClick={(e) => onClick(e, unique)}
                  >
                    {formatDate}
                  </Button>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

EventsBoard.propTypes = {
  calendar: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  eventsData: PropTypes.shape({
    events: PropTypes.arrayOf(
      PropTypes.shape({
        timeZone: PropTypes.string.isRequired,
        date_start_unix: PropTypes.number,
        id: PropTypes.string.isRequired,
        unique: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
  setShowEvent: PropTypes.func.isRequired,
  setUniqueId: PropTypes.func.isRequired,
};

export default EventsBoard;
