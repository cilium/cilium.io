/* eslint-disable react/prop-types */

import classNames from 'classnames';
import moment from 'moment-timezone';
import React, { Fragment, useState } from 'react';
import ReactModal from 'react-modal';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import useFetchAddEvent from 'hooks/use-fetch-addevent';
import ArrowIcon from 'icons/arrow.inline.svg';
import CloseIcon from 'icons/close.inline.svg';

import EventIframe from './event-iframe';

const TOKEN_API = 'api1639396054e34I6Szjrxsa2b59EoPH142410';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 25, 40, 0.6)',
    zIndex: '10',
  },
};

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

  const events = eventsData?.events;
  const { title, description } = calendar[0];
  return (
    <div className="flex flex-col">
      <Heading tag="h3" size="sm">
        {title}
      </Heading>

      <div className="flex mt-10 space-x-16">
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div className="flex shrink flex-col space-y-4">
          {events
            .sort((a, b) => (a.date_start_unix > b.date_start_unix ? 1 : -1))
            .map(({ timezone, date_start_unix, id, unique }) => {
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
const EventsModal = ({ calendarId, isOpen, closeModal }) => {
  const [calendarsData, setCalendarsData] = useState({});
  const [eventsData, setEventsData] = useState({});
  const [showEvent, setShowEvent] = useState(false);
  const [uniqueId, setUniqueId] = useState();
  useFetchAddEvent(
    `https://www.addevent.com/api/v1/me/calendars/list/?token=${TOKEN_API}`,
    setCalendarsData
  );

  useFetchAddEvent(
    `https://www.addevent.com/api/v1/me/calendars/events/list/?token=${TOKEN_API}&calendar_id=${calendarId}`,
    setEventsData
  );

  const filteredCalendar = calendarsData?.calendars?.filter(
    (calendar) => calendar.id === calendarId
  );

  const onClickBack = (e) => {
    e.preventDefault();
    setShowEvent(false);
  };

  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      ariaHideApp={false}
      htmlOpenClassName="overflow-hidden"
      className="relative top-1/2 left-1/2 max-h-[85%] w-[95%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded border-none bg-white p-0"
      shouldCloseOnOverlayClick
      onRequestClose={closeModal}
    >
      <div
        className={classNames(
          'relative flex flex-col pb-12 h-full min-h-[650px]',
          showEvent ? 'px-0 pt-4' : 'px-[60px] pt-12'
        )}
      >
        <button className="absolute top-8 right-8" type="button" onClick={closeModal}>
          <CloseIcon />
        </button>
        {showEvent ? (
          <>
            <EventIframe setShowEvent={setShowEvent} uniqueId={uniqueId} />
            <Button
              className="mt-auto ml-[60px] items-center self-start"
              theme="outline-gray"
              onClick={onClickBack}
            >
              <ArrowIcon className="mr-2 rotate-180" /> Back
            </Button>
          </>
        ) : (
          <EventsBoard
            setUniqueId={setUniqueId}
            calendar={filteredCalendar}
            eventsData={eventsData}
            setShowEvent={setShowEvent}
          />
        )}
      </div>
    </ReactModal>
  );
};

export default EventsModal;
