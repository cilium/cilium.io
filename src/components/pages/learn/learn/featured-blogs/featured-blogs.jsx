import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import StarIcon from 'icons/star.inline.svg';

const title = 'Featured Blogs';
const items = [
  { linkUrl: '/', linkText: 'What is Cilium?' },
  { linkUrl: '/', linkText: 'What is eBPF?' },
  { linkUrl: '/', linkText: 'eBPF - The Future of Networking & Security' },
  { linkUrl: '/', linkText: 'GKE Dataplane v2' },
];

const FeaturedBlogs = ({ className }) => (
  <div className={className}>
    <Heading tag="h3" theme="gray">
      {title}
    </Heading>
    <div className="mt-4">
      {items.map(({ linkUrl, linkText }, index) => (
        <div className="py-6 border-b border-gray-2 last:border-none" key={index}>
          <Link className="flex items-center space-x-4" to={linkUrl}>
            <StarIcon className="flex-shrink-0" />
            <span className="text-xl font-medium">{linkText}</span>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

FeaturedBlogs.propTypes = {
  className: PropTypes.string,
};

FeaturedBlogs.defaultProps = {
  className: null,
};

export default FeaturedBlogs;
