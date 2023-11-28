import algoliasearch from 'algoliasearch/lite';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState, useMemo, useEffect } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import ReactModal from 'react-modal';

import SearchIcon from 'images/search.inline.svg';

import Footer from './footer';
import HitsInIndex from './hits-in-index';
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

  const CloseModal = (e) => {
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
        <SearchIcon className="h-5 w-5" />
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
        onRequestClose={CloseModal}
      >
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <SearchInput className="flex w-full" />
          <div className="overflow-y-scroll w-full h-full flex flex-col items-center">
            {query ? (
              indices.map((index) => (
                <HitsInIndex allResultsShown={allResultsShown} index={index} key={index.name} />
              ))
            ) : (
              <span className="text-lg leading-none text-black mt-16">
                Try searching for something
              </span>
            )}
          </div>
        </InstantSearch>
        <Footer
          allResultsShown={allResultsShown}
          setAllResultsShown={setAllResultsShown}
          query={query}
        />
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
