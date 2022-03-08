import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactModal from 'react-modal';

import Button from 'components/shared/button';
import useFetchAddEvent from 'hooks/use-fetch-addevent';
import ArrowIcon from 'icons/arrow.inline.svg';
import CloseIcon from 'icons/close.inline.svg';

import EventIframe from './event-iframe';
import EventsBoard from './events-board';

const TOKEN_API = 'api1639396054e34I6Szjrxsa2b59EoPH142410';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 25, 40, 0.6)',
    zIndex: '10',
  },
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

EventsModal.propTypes = {
  calendarId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default EventsModal;
