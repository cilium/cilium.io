import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import AlgoliaLogo from './images/algolia.inline.svg';
import ChevronIcon from './images/chevron.inline.svg';

const Footer = ({ allResultsShown, setAllResultsShown, query }) => (
  <div className="flex border-t w-full border-gray-3 bg-gray-4 p-3">
    {!allResultsShown && query && (
      <button
        aria-label="View all results"
        className="mr-auto flex items-center text-xs font-bold uppercase leading-none tracking-wider text-primary-1"
        type="button"
        onClick={() => setAllResultsShown((prev) => !prev)}
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
);

Footer.propTypes = {
  allResultsShown: PropTypes.bool.isRequired,
  setAllResultsShown: PropTypes.func.isRequired,
  query: PropTypes.string,
};

Footer.defaultProps = {
  query: null,
};

export default Footer;
