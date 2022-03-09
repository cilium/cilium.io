import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import EventsModal from 'components/shared/events-modal';

const CardButton = ({ buttonUrl, buttonText, buttonTarget, isPopup, calendarId, size }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      {isPopup ? (
        <Button size={size} id={calendarId} onClick={openModal}>
          {buttonText}
        </Button>
      ) : (
        <Button to={buttonUrl} size={size} target={buttonTarget || ''}>
          {buttonText}
        </Button>
      )}
      <EventsModal calendarId={calendarId} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

CardButton.propTypes = {
  size: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string,
  buttonTarget: PropTypes.string,
  isPopup: PropTypes.bool,
  calendarId: PropTypes.string,
};

CardButton.defaultProps = {
  buttonUrl: null,
  buttonTarget: null,
  isPopup: false,
  calendarId: null,
};

export default CardButton;
