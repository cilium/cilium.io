import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import Arrow from 'icons/arrow.inline.svg';

import BellLogo from './images/bell.inline.svg';
import CapitalOneLogo from './images/capitalone.inline.svg';
import DatadogLogo from './images/datadog.inline.svg';
import SkyLogo from './images/sky.inline.svg';

const title = 'User stories';
const items = [
  { url: 'https://www.youtube.com/watch?v=6mTVuZUHLBg', target: '_blank', logo: DatadogLogo },
  { url: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w', target: '_blank', logo: CapitalOneLogo },
  { url: '/', logo: BellLogo },
  { url: 'https://www.youtube.com/watch?v=u-4naOMfs_w', target: '_blank', logo: SkyLogo },
];
const UserStories = ({ className }) => (
  <div className={className}>
    <Heading tag="h3" theme="gray">
      {title}
    </Heading>
    <div className="mt-8 lg:mt-10 grid auto-rows-[140px] grid-cols-1 xs:grid-cols-2 gap-8">
      {items.map(({ url, target, logo: Logo }, index) => (
        <Link
          className="relative flex items-center justify-center border rounded-lg border-gray-3"
          key={index}
          target={target || ''}
          to={url}
        >
          <Logo />
          <Arrow className="absolute bottom-2.5 w-5 h-auto right-2.5 text-primary-1" />
        </Link>
      ))}
    </div>
  </div>
);

UserStories.propTypes = {
  className: PropTypes.string,
};

UserStories.defaultProps = {
  className: null,
};

export default UserStories;
