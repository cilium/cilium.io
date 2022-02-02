/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Index,
  connectHits,
  connectStateResults,
  Highlight,
  Snippet,
} from 'react-instantsearch-dom';

import Link from '../link';

import AlgoliaLogo from './images/algolia.inline.svg';
import ChevronIcon from './images/chevron.inline.svg';

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
    <ul className="divide-y divide-gray-3 px-3">
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

const SearchResult = ({ indices, className }) => {
  const [allResultsShown, setAllResultsShown] = useState(false);
  return (
    <div className={className}>
      <div className="overflow-y-scroll max-h-[50vh] sm:max-h-[70vh]">
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
  );
};
export default SearchResult;
