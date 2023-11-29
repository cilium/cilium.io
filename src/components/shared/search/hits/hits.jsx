import React from 'react';
import {
  Index,
  connectHits,
  connectStateResults,
  Highlight,
  Snippet,
} from 'react-instantsearch-dom';

import Link from 'components/shared/link';

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

const Hits = connectHits(({ hits }) =>
  hits?.length ? (
    <ul className="px-6 divide-y divide-gray-3">
      {hits.map((hit) => (
        <li className="py-3 first:pt-1.5" key={hit.objectID}>
          <Link to={hit.path || hit.externalUrl}>
            <h4 className="text-sm font-medium highlight-text">
              <Highlight attribute="title" hit={hit} tagName="mark" />
            </h4>
            <Snippet
              className="highlight-text mt-1.5 block text-xs leading-relaxed text-gray-1"
              attribute="excerpt"
              hit={hit}
              tagName="mark"
            />
          </Link>
        </li>
      ))}
    </ul>
  ) : null
);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits />
  </Index>
);

export default HitsInIndex;
