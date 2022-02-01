import algoliasearch from 'algoliasearch/lite';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState, useMemo } from 'react';
import {
  InstantSearch,
  Index,
  connectHits,
  connectStateResults,
  Highlight,
  Snippet,
} from 'react-instantsearch-dom';

import useClickOutside from 'utils/use-click-outside';

import Link from '../link';

import AlgoliaLogo from './images/algolia.inline.svg';
import ChevronIcon from './images/chevron.inline.svg';
import Input from './search-input';

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults?.nbHits;
  const query = searchResults?.query;
  return (
    <div className="text-xs leading-none font-medium px-3 py-2.5">
      <span className="text-gray-2">
        {hitCount || 'No'} result{hitCount !== 1 || hitCount === 0 ? `s` : ``} for
      </span>{' '}
      &quot;{query}&quot;
    </div>
  );
});
const PageHit = ({ hit }) =>
  hit.path && (
    <div>
      <Link to={hit.path}>
        <h4 className="font-medium text-sm highlight-text">
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <Snippet
        className="text-xs text-gray-1 mt-1.5 leading-relaxed block highlight-text"
        attribute="excerpt"
        hit={hit}
        tagName="mark"
      />
    </div>
  );

const Hits = connectHits(({ hits, showAll }) => {
  const filteredHits = hits?.length && hits.filter((hit) => hit.path !== null);
  return filteredHits ? (
    <ul className="divide-y divide-gray-2 px-3">
      {filteredHits.slice(0, showAll ? filteredHits.length : 5).map((hit) => (
        <li className="py-2.5 first:pt-1.5" key={hit.objectID}>
          <PageHit hit={hit} />
        </li>
      ))}
    </ul>
  ) : null;
});

const HitsInIndex = ({ index, allResultsShown }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits showAll={allResultsShown} />
  </Index>
);

const SearchBox = ({ indices, className }) => {
  const rootRef = useRef(null);
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const [allResultsShown, setAllResultsShown] = useState(false);
  const searchClient = useMemo(
    () => algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
    []
  );

  useClickOutside(rootRef, () => setFocus(false));
  const shouldShowResult = !!query?.length && hasFocus;
  return (
    <div className={classNames('relative w-full max-w-[340px] flex-grow', className)} ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <Input
          className="w-full flex justify-end"
          hasFocus={hasFocus}
          onFocus={() => setFocus(true)}
        />
        <div
          className={classNames(
            'absolute w-full  top-full inset-x-0 z-50 bg-white border border-t-0 border-gray-2 rounded-b',
            shouldShowResult ? 'block' : 'hidden'
          )}
        >
          <div className="overflow-y-scroll max-h-[70vh]">
            {indices.map((index) => (
              <HitsInIndex allResultsShown={allResultsShown} index={index} key={index.name} />
            ))}
          </div>
          <div className="bg-gray-4 p-3 flex rounded-b border-t border-gray-3">
            {!allResultsShown && (
              <button
                className="flex items-center mr-auto text-primary-1 uppercase  text-xs font-bold tracking-wider leading-none space-x-1"
                type="button"
                onClick={() => setAllResultsShown(!allResultsShown)}
              >
                <span>View all</span>
                <ChevronIcon />
              </button>
            )}
            <AlgoliaLogo className="ml-auto" />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

export default SearchBox;
