import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import Arrow from 'icons/arrow.inline.svg';
import BellLogo from 'icons/bell.inline.svg';
import CapitalOneLogo from 'icons/capitalone.inline.svg';
import DatadogLogo from 'icons/datadog.inline.svg';
import SkyLogo from 'icons/sky.inline.svg';

const title = 'User stories';
const items = [
  { url: 'https://www.youtube.com/watch?v=6mTVuZUHLBg', target: '_blank', logo: DatadogLogo },
  { url: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w', target: '_blank', logo: CapitalOneLogo },
  { url: 'https://www.youtube.com/watch?v=fNtG0iHYne4', target: '_blank', logo: BellLogo },
  { url: 'https://www.youtube.com/watch?v=u-4naOMfs_w', target: '_blank', logo: SkyLogo },
  { url: 'https://www.youtube.com/watch?v=6mTVuZUHLBg', target: '_blank', logo: DatadogLogo },
  { url: 'https://www.youtube.com/watch?v=fNtG0iHYne4', target: '_blank', logo: BellLogo },
  { url: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w', target: '_blank', logo: CapitalOneLogo },
  { url: 'https://www.youtube.com/watch?v=u-4naOMfs_w', target: '_blank', logo: SkyLogo },
];
const UserStories = ({ className }) => (
  <div className={className}>
    <Heading tag="h3" theme="gray">
      {title}
    </Heading>
    <div className="mt-6 mt:mt-9 grid auto-rows-[80px] md:auto-rows-[110px] lg:auto-rows-[168px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      {items.map(({ url, target, logo: Logo }, index) => (
        <Link
          className="relative flex items-center justify-center border rounded-lg bg-gray-4 border-gray-3 hover:border-gray-5"
          theme="primary"
          type="text"
          key={index}
          target={target || ''}
          to={url}
        >
          <Logo className="w-auto h-2/5 sm:h-auto" />
          <Arrow className="absolute hidden w-5 h-auto md:flex bottom-4 right-3" />
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
