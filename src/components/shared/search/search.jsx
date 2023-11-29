import algoliasearch from 'algoliasearch/lite';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState, useMemo, useEffect } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import ReactModal from 'react-modal';

import Link from 'components/shared/link';
import SearchIcon from 'images/search.inline.svg';

import Hits from './hits';
import AlgoliaLogo from './images/algolia.inline.svg';
import ChevronIcon from './images/chevron.inline.svg';
import SearchInput from './input';

const Search = ({ buttonClassName, indices }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [allResultsShown, setAllResultsShown] = useState(false);
  const [query, setQuery] = useState(null);
  const searchClient = useMemo(
    () => algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
    []
  );

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setQuery(null);
    setIsOpen(false);
  };

  useEffect(() => {
    setAllResultsShown(false);
  }, [query]);

  return (
    <>
      <button
        className={classnames('h-7 w-7 p-1 flex items-center justify-center', buttonClassName)}
        type="button"
        onClick={openModal}
      >
        <SearchIcon className="w-5 h-5" />
      </button>
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
        className="relative top-1/2 left-1/2 h-full max-h-[560px] w-[95%] max-w-[600px] -translate-x-1/2 -translate-y-1/2 border-none bg-white pt-3 rounded-xl overflow-hidden flex flex-col items-center"
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
          <div className="flex flex-col items-center w-full h-full overflow-y-scroll">
            {query ? (
              indices.map((index) => (
                <Hits allResultsShown={allResultsShown} index={index} key={index.name} />
              ))
            ) : (
              <span className="mt-16 text-lg leading-none text-black">
                Try searching for something
              </span>
            )}
          </div>
        </InstantSearch>
        <div className="flex w-full px-6 py-3 border-t border-gray-3 bg-gray-4">
          {!allResultsShown && query && (
            <button
              aria-label="View all results"
              className="flex items-center mr-auto text-xs font-bold leading-none tracking-wider uppercase text-primary-1"
              type="button"
              onClick={() => setAllResultsShown((prev) => !prev)}
            >
              <span>View all</span>
              <ChevronIcon className="hidden ml-1 sm:inline-block" />
            </button>
          )}
          <Link
            className="inline-flex items-center ml-auto space-x-2 group"
            to="https://www.algolia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-xs leading-none transition-colors duration-200 text-gray-1 group-hover:text-black">
              Search By Algolia
            </span>
            <AlgoliaLogo className="shrink-0" />
          </Link>
        </div>
      </ReactModal>
    </>
  );
};

Search.propTypes = {
  buttonClassName: PropTypes.string,
  indices: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Search.defaultProps = {
  buttonClassName: null,
};

export default Search;
