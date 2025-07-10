import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { LinkedinShareButton } from 'react-share';

import Button from 'components/shared/button';
import BlueskyIcon from 'icons/bluesky.inline.svg';
import LinkedinIcon from 'icons/linkedin.inline.svg';

const SocialShare = ({ className, postUrl, title, summary, tags }) => (
  <div
    className={classNames(
      className,
      'flex md:flex-col self-start mt-10 space-x-4 md:space-x-0 md:mt-[calc(100vh/3)] md:space-y-4'
    )}
  >
    <LinkedinShareButton url={postUrl} title={title} summary={summary}>
      <div className="flex items-center justify-center w-12 h-12 transition-colors duration-200 bg-white border rounded-full lg:w-14 lg:h-14 border-gray-3 hover:bg-gray-4">
        <LinkedinIcon />
      </div>
    </LinkedinShareButton>

    <Button
      to="https://bsky.app/profile/your-profile"
      className="group flex items-center justify-center w-12 h-12 text-[#0085FF] hover:text-gray-600 transition-colors duration-200 bg-white border rounded-full lg:w-14 lg:h-14 border-gray-3 hover:bg-gray-4"
      target="_blank"
      rel="noopener noreferrer"
      asDefaultLink
    >
      <BlueskyIcon className="w-6 h-6" />
    </Button>
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
