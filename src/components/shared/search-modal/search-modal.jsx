import algoliasearch from 'algoliasearch/lite';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import ReactModal from 'react-modal';

import Link from 'components/shared/link';

import HitsInIndex from './hits-in-index';
import AlgoliaLogo from './images/algolia.inline.svg';
import ChevronIcon from './images/chevron.inline.svg';
import SearchInput from './search-input';

const SearchModal = ({ className, isOpen, closeModal, indices }) => {
  const [allResultsShown, setAllResultsShown] = useState(false);
  const [query, setQuery] = useState();
  const searchClient = useMemo(
    () => algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
    []
  );

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
        'relative top-1/2 left-1/2 h-full max-h-[560px] w-[95%] max-w-[600px] -translate-x-1/2 -translate-y-1/2 border-none bg-white pt-3 rounded-xl overflow-hidden flex flex-col items-center',
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
        <div className="overflow-y-scroll w-full h-full">
          {indices.map((index) => (
            <HitsInIndex allResultsShown={allResultsShown} index={index} key={index.name} />
          ))}
        </div>
      </InstantSearch>
      <div className="flex border-t w-full border-gray-3 bg-gray-4 p-3">
        {!allResultsShown && (
          <button
            className="mr-auto flex items-center text-xs font-bold uppercase leading-none tracking-wider text-primary-1"
            type="button"
            onClick={() => setAllResultsShown((prev) => !prev)}
          >
            <span>View all</span>
            <ChevronIcon className="ml-1 hidden sm:inline-block" />
          </button>
        )}
        <Link
          className="group inline-flex items-center space-x-2 xl:ml-auto"
          to="https://www.algolia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-xs leading-none text-gray-1 transition-colors duration-200 group-hover:text-black">
            Search By Algolia
          </span>
          <AlgoliaLogo className="shrink-0" />
        </Link>
      </div>
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
