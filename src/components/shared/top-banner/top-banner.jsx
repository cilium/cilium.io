import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import ArrowIcon from 'icons/arrow.inline.svg';

const TopBanner = ({ text, url }) => {
  if (!text || !url) {
    return null;
  }

  return (
    <section className="top-banner w-full">
      <Link
        className="group flex gap-3.5 w-full justify-center items-center px-5 py-3.5 leading-normal bg-[#FFF5D6] border-b border-[#FFE391] overflow-hidden"
        theme="black-primary"
        type="text"
        to={url}
      >
        <span className="truncate !font-normal">{text}</span>
        <span className="hidden sm:block border-l border-current pl-3.5 font-medium tracking-tight whitespace-nowrap">
          Learn more
        </span>
        <ArrowIcon className="-ml-1.5 text-center shrink-0" />
      </Link>
    </section>
  );
};

TopBanner.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default TopBanner;
