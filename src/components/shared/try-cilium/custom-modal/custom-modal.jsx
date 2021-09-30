import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import CloseIcon from 'icons/close.inline.svg';

const customStyles = {
  overlay: {
    zIndex: 6,
    backgroundColor: 'rgba(196, 196, 196, 0.7)',
  },

  content: {
    top: '50%',
    right: 'auto',
    bottom: 'auto',
    left: '50%',
    minWidth: '90%',
    padding: '0',
    border: 'none',
    borderRadius: '8px',
    transform: 'translate(-50%, -50%)',
  },
};

const CustomModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      isOpen={isModalOpen}
      style={customStyles}
      closeTimeoutMS={300}
      ariaHideApp={false}
      shouldCloseOnOverlayClick
      onRequestClose={handleCloseModal}
    >
      <div className="relative flex flex-col items-center p-10 text-center border rounded-lg lg:p-16 border-gray-4">
        <Heading tag="h3" size="sm">
          Choose Timezone
        </Heading>
        <p className="max-w-md mt-2.5">
          Select the appropriate timezone for registration.Then you will be directed to Calendly
        </p>
        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 sm:flex-row">
          <Button
            to="https://calendly.com/cilium-events/cilium-installfest-emea"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Europe
          </Button>
          <Button
            to="https://calendly.com/cilium-events/cilium-installfest-na"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Americas
          </Button>
        </div>
        <button className="absolute top-7 right-7 p-0.5" type="button" onClick={handleCloseModal}>
          <span className="sr-only">Close modal</span>
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>
    </Modal>
  );
};

CustomModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default CustomModal;
