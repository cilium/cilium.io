import algoliasearch from 'algoliasearch/lite';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import ReactModal from 'react-modal';

import SearchInput from './search-input';

const SearchModal = ({ className, isOpen, closeModal, indices }) => {
  const [query, setQuery] = useState();
  const searchClient = useMemo(
    () => algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
    []
  );

  const shouldShowResult = !!query?.length;

  return (
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
        'relative top-1/2 left-1/2 h-full max-h-[560px] w-[95%] max-w-[600px] -translate-x-1/2 -translate-y-1/2 border-none bg-white px-5 py-3 rounded-xl',
        className
      )}
      closeTimeoutMS={200}
      shouldCloseOnOverlayClick
      onRequestClose={closeModal}
    >
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchInput className="flex w-full" />
      </InstantSearch>
    </ReactModal>
  );
};

SearchModal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

SearchModal.defaultProps = {
  className: null,
};

export default SearchModal;
