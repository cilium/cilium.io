import PropTypes from 'prop-types';
import React, { useState, useLayoutEffect, useEffect } from 'react';

import useWindowSize from 'hooks/use-window-size';
import GithubLogo from 'icons/github.inline.svg';

import Link from '../link';

const FALLBACK_COUNT = 9000;
const MOBILE_WIDTH = 414;

const fetchGithubStartsCount = async (cb) => {
  try {
    const res = await fetch('https://api.github.com/repos/cilium/cilium').then((res) => res.json());
    cb(res.stargazers_count);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Unable to fetch git stars');
  }
};

const GithubStars = ({ className }) => {
  const { width } = useWindowSize();
  const [buttonText, setButtonText] = useState('GitHub Stars');
  const [count, setCount] = useState(FALLBACK_COUNT);

  useLayoutEffect(() => {
    fetchGithubStartsCount(setCount);
  }, []);

  useEffect(() => {
    if (width < MOBILE_WIDTH) {
      setButtonText('GitHub');
    } else {
      setButtonText('GitHub Stars');
    }
  }, [width]);

  return (
    <div className={className}>
      <Link
        type="text"
        theme="black-primary"
        className="flex items-center h-8 text-sm font-bold border rounded border-gray-3"
        to="https://github.com/loadimpact/k6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center px-2 xs:px-3 border-r h-full border-gray-3 space-x-1.5">
          <GithubLogo className="w-5 h-5" />
          <span>{buttonText}</span>
        </div>
        <div className="px-2 text-black xs:px-3">
          <span>{`${(count / 1000).toFixed(1)}k`}</span>
        </div>
      </Link>
    </div>
  );
};

GithubStars.propTypes = {
  className: PropTypes.string,
};

GithubStars.defaultProps = {
  className: null,
};

export default GithubStars;
