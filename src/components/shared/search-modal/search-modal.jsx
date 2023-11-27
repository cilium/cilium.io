import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

const SearchModal = ({ className, isOpen, closeModal }) => (
  <ReactModal
    style={{
      overlay: {
        backgroundColor: 'rgba(25, 25, 40, 0.6)',
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)',
        zIndex: '30',
      },
    }}
    isOpen={isOpen}
    ariaHideApp={false}
    bodyOpenClassName="overflow-hidden touch-none"
    className={classnames(
      'relative top-1/2 left-1/2 max-h-[95%] w-[95%] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded border-none bg-white p-0',
      className
    )}
    closeTimeoutMS={200}
    shouldCloseOnOverlayClick
    onRequestClose={closeModal}
  >
    <p>Search modal</p>
  </ReactModal>
);

SearchModal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

SearchModal.defaultProps = {
  className: null,
};

export default SearchModal;
