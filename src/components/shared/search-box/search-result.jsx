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
    <div className="px-3 py-2.5 text-xs font-medium">
      <span className="text-gray-2">
        {hitCount || 'No'} result{hitCount !== 1 || hitCount === 0 ? `s` : ``} for
      </span>{' '}
      &quot;{query}&quot;
    </div>
  );
});

const PageHit = ({ hit }) => (
  <div>
    <Link to={hit.path || hit.externalUrl}>
      <h4 className="highlight-text text-sm font-medium">
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet
      className="highlight-text mt-1.5 block text-xs leading-relaxed text-gray-1"
      attribute="excerpt"
      hit={hit}
      tagName="mark"
    />
  </div>
);

const Hits = connectHits(({ hits, showAll }) =>
  hits?.length ? (
    <ul className="divide-y divide-gray-3 px-3">
      {hits.slice(0, showAll ? hits.length : 5).map((hit) => (
        <li className="py-2.5 first:pt-1.5" key={hit.objectID}>
          <PageHit hit={hit} />
        </li>
      ))}
    </ul>
  ) : null
);

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
      <div className="max-h-[50vh] overflow-y-scroll sm:max-h-[70vh]">
        {indices.map((index) => (
          <HitsInIndex allResultsShown={allResultsShown} index={index} key={index.name} />
        ))}
      </div>
      <div className="flex rounded-b border-t border-gray-3 bg-gray-4 p-3">
        {!allResultsShown && (
          <button
            className="mr-auto flex items-center text-xs font-bold uppercase leading-none tracking-wider text-primary-1"
            type="button"
            onClick={() => setAllResultsShown(!allResultsShown)}
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
    </div>
  );
};
export default SearchResult;
