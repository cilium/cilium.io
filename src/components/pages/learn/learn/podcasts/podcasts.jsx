import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import PlayIcon from 'icons/play.inline.svg';

const title = 'Podcasts';
const items = [
  {
    name: 'Programmable Linux Networking with Dan Wendlant and Thomas Graf',
    type: 'Software Engineering Daily',
    url: '/',
  },
  {
    name: 'Supercharge your Kubernetes clusters with Cilium',
    type: 'Form3.tech Podcast',
    url: '/',
  },
  {
    name: 'Cilium, with Thomas Graf',
    type: 'Kubernetes Podcast from Google',
    url: '/',
  },
  {
    name: 'Kubernetes Networking and Security, and Building Business on Open Source with Isovalent Founder, Thomas Graf',
    type: 'Discoposse Podcast',
    url: '/',
  },
];
const Podcasts = ({ className }) => (
  <div className={className}>
    <Heading tag="h3" theme="gray">
      {title}
    </Heading>
    <div className="mt-3.5">
      {items.map(({ name, type, url }, index) => (
        <div className="py-4 border-b lg:py-6 last:pb-0 border-gray-3 last:border-none" key={index}>
          <Link className="flex space-x-4" theme="black-primary" type="text" to={url}>
            <PlayIcon className="flex-shrink-0" />
            <div className="flex flex-col lg:pt-1.5">
              <span className="text-lg font-medium lg:text-xl ">{name}</span>
              <span className="mt-2 text-sm font-medium leading-none text-gray-1">{type}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

Podcasts.propTypes = {
  className: PropTypes.string,
};

Podcasts.defaultProps = {
  className: null,
};

export default Podcasts;
