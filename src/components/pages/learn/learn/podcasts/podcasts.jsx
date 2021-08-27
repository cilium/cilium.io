import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
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
    <div className="mt-4">
      {items.map(({ name, type, url }, index) => (
        <div className="py-6 border-b border-gray-3 last:border-none" key={index}>
          <Link className="flex space-x-4" to={url}>
            <PlayIcon className="flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-xl font-medium">{name}</span>
              <span className="mt-2 text-sm font-medium leading-none text-gray-5">{type}</span>
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
