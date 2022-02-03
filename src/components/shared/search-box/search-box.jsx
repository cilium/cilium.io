import algoliasearch from 'algoliasearch/lite';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState, useMemo } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';

import useClickOutside from 'utils/use-click-outside';

import SearchInput from './search-input';
import SearchResult from './search-result';

const SearchBox = ({ indices, className }) => {
  const rootRef = useRef(null);
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = useMemo(
    () => algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
    []
  );

  useClickOutside(rootRef, () => setFocus(false));
  const shouldShowResult = !!query?.length && hasFocus;
  return (
    <div
      className={classNames('relative sm:w-[340px] lg:w-full sm:max-w-[340px] grow', className)}
      ref={rootRef}
    >
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchInput
          className="w-full flex justify-end"
          hasFocus={hasFocus}
          onFocus={() => setFocus(true)}
        />
        <SearchResult
          indices={indices}
          className={classNames(
            'absolute top-full inset-x-0 z-50 w-full transition-[opacity,visibility] duration-200 bg-white border border-t-0 border-gray-2 shadow-tertiary rounded-b',
            shouldShowResult
              ? 'visible opacity-100 pointer-events-auto'
              : 'invisible opacity-0 pointer-events-none'
          )}
        />
      </InstantSearch>
    </div>
  );
};

SearchBox.propTypes = {
  indices: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      hitComp: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

SearchBox.defaultProps = {
  className: null,
};

export default SearchBox;
