/* eslint-disable react/prop-types */

const SearchResult = ({ indices, className }) => (
    <div className={className}>
      <div className="max-h-[50vh] overflow-y-scroll sm:max-h-[70vh]">
        {indices.map((index) => (
          <HitsInIndex allResultsShown={allResultsShown} index={index} key={index.name} />
        ))}
      </div>
    </div>
  );
export default SearchResult;
