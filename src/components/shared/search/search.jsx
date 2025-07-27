import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
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


const Search = ({ buttonClassName, indices }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchClient, searchQuery, setSearchQuery, onSearchStateChange } = useAlgoliaSearch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setSearchQuery('');
    setIsOpen(false);
  };

  const isDarkMode = useDarkMode();

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
            zIndex: '30',
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
            {searchQuery?.length ? (
              indices.map((index) => <Hits index={index} key={index.name} />)
            ) : (
              <span className="mt-16 text-lg leading-none text-black">
                Try searching for something
              </span>
            )}
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
