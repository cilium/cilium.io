import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import ArrowIcon from 'icons/arrow.inline.svg';

const TopBanner = ({ text, url }) => {
  if (!text || !url) {
    return null;
  }

  return (
    <Link
      className="top-banner flex gap-3.5 w-full justify-center items-center px-5 py-3.5 leading-normal bg-[#FFF5D6] dark:bg-[#262111] text-black dark:text-[#b5a166] dark:hover:text-[#FCD34D] border-b border-[#FFE391] dark:border-[#40381d] overflow-hidden transition-none"
      theme="black-primary"
      type="text"
      to={url}
    >
      <span className="truncate !font-normal">{text}</span>
      <span className="hidden sm:block border-l border-current pl-3.5 text-15 font-semibold tracking-tight whitespace-nowrap">
        Learn more
      </span>
      <ArrowIcon className="-ml-1.5 text-center shrink-0" />
    </Link>
  );
};

TopBanner.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default TopBanner;
