import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { LinkedinShareButton, TwitterShareButton } from 'react-share';

import LinkedinIcon from 'icons/linkedin.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';

const SocialShare = ({ className, postUrl, title, summary, tags }) => (
  <div
    className={classNames(
      className,
      'md:sticky flex md:flex-col self-start mt-10 space-x-4 md:space-x-0 md:mt-[calc(100vh/3)] md:space-y-4 top-40'
    )}
  >
    <TwitterShareButton url={postUrl} title={title} via="ciliumproject" hashtags={tags}>
      <div className="flex items-center justify-center w-12 h-12 border rounded-full lg:w-14 lg:h-14 border-gray-3">
        <TwitterIcon />
      </div>
    </TwitterShareButton>
    <LinkedinShareButton url={postUrl} title={title} summary={summary}>
      <div className="flex items-center justify-center w-12 h-12 border rounded-full lg:w-14 lg:h-14 border-gray-3">
        <LinkedinIcon />
      </div>
    </LinkedinShareButton>
  </div>
);

SocialShare.propTypes = {
  postUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

SocialShare.defaultProps = {
  className: null,
  tags: null,
};

export default SocialShare;
