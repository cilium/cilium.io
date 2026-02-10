import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import ReactModal from 'react-modal';

import Link from 'components/shared/link';
import useAlgoliaSearch from 'hooks/use-algolia-search';
import useDarkMode from 'hooks/use-dark-mode';
import LightSearchIcon from 'images/light-search.inline.svg';
import SearchIcon from 'images/search.inline.svg';

import Hits from './hits';
import AlgoliaLogo from './images/algolia.inline.svg';
import SearchInput from './input';
import LoadingSpinner from './loadingSpinner';

const Search = ({ buttonClassName, indices }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);

  const { searchClient, searchQuery, setSearchQuery, onSearchStateChange } = useAlgoliaSearch();

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (searchQuery?.length > 0) {
      setIsLoading(true);

      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 800);
    } else {
      setIsLoading(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchQuery]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setSearchQuery('');
    setIsLoading(false);
    setIsOpen(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const { isDarkMode } = useDarkMode();

  const renderContent = () => {
    if (!searchQuery?.length) {
      return (
        <span className="mt-16 text-lg leading-none text-black">Try searching for something</span>
      );
    }

    if (isLoading) {
      return <LoadingSpinner />;
    }

    return indices.map((index) => <Hits index={index} key={index.name} />);
  };

  return (
    <>
      <button
        className={classnames('h-7 w-7 p-1 flex items-center justify-center', buttonClassName)}
        type="button"
        onClick={openModal}
      >
        <div className="w-5 h-5">{isDarkMode ? <LightSearchIcon /> : <SearchIcon />}</div>
      </button>
      <ReactModal
        style={{
          overlay: {
            backgroundColor: 'rgba(25, 25, 40, 0.6)',
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0px)',
            zIndex: '50',
          },
        }}
        isOpen={isOpen}
        ariaHideApp={false}
        bodyOpenClassName="overflow-hidden touch-none"
        className="relative top-1/2 left-1/2 h-[95%] max-h-[560px] w-[95%] max-w-[600px] -translate-x-1/2 -translate-y-1/2 border-none bg-white dark:bg-[#dfe5ed] pt-3 rounded-xl overflow-hidden flex flex-col items-center"
        closeTimeoutMS={200}
        shouldCloseOnOverlayClick
        onRequestClose={closeModal}
      >
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={onSearchStateChange}
        >
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="flex flex-col items-center w-full h-full overflow-y-auto">
            {renderContent()}
          </div>
        </InstantSearch>
        <div className="flex items-center justify-center w-full px-6 py-3 border-t border-gray-3 bg-gray-4 dark:border-gray-3">
          <Link
            className="inline-flex items-center space-x-2 group"
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
