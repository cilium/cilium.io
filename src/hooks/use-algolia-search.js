import algoliasearch from 'algoliasearch/lite';
import { useMemo, useState } from 'react';

const useAlgoliaSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const algoliaClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );

  const searchClient = useMemo(
    () => ({
      ...algoliaClient,
      search(requests) {
        if (requests.every(({ params }) => !params.query || params.query.length === 0)) {
          return Promise.resolve({
            results: requests.map(() => ({
              hits: [],
              nbHits: 0,
              nbPages: 0,
              page: 0,
              processingTimeMS: 0,
              hitsPerPage: 0,
              exhaustiveNbHits: false,
              query: '',
              params: '',
            })),
          });
        }

        return algoliaClient.search(requests);
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onSearchStateChange = (nextSearchState) => {
    setSearchQuery(nextSearchState.query);
  };

  return {
    searchClient,
    searchQuery,
    setSearchQuery,
    onSearchStateChange,
  };
};

export default useAlgoliaSearch;
