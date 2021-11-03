import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import GithubLogo from 'icons/github.inline.svg';

import Link from '../link';

const GithubStars = ({ className }) => {
  const data = useStaticQuery(graphql`
    query githubQuery {
      github {
        url
        count
      }
    }
  `);

  const { url, count } = data.github;
  return (
    <div className={className}>
      <Link
        type="text"
        theme="black-primary"
        className="flex items-center h-8 text-sm font-bold border rounded border-gray-3"
        to={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center px-2 xs:px-3 border-r h-full border-gray-3 space-x-1.5">
          <GithubLogo className="w-5 h-5" />
          <span>GitHub Stars</span>
        </div>
        <div className="px-2 text-black xs:px-3">
          <span>{`${(count / 1000).toFixed(1)}k`}</span>
        </div>
      </Link>
    </div>
  );
};

export default GithubStars;

GithubStars.propTypes = {
  className: PropTypes.string,
};

GithubStars.defaultProps = {
  className: null,
};
