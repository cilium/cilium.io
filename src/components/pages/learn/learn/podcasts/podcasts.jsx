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
    target: '_blank',
    url: 'https://softwareengineeringdaily.com/2021/02/02/cilium-programmable-linux-networking-with-dan-wendlant-and-thomas-graf/',
  },
  {
    name: 'Supercharge your Kubernetes clusters with Cilium',
    type: 'Form3.tech Podcast',
    target: '_blank',
    url: 'https://techpodcast.form3.tech/episodes/ep-16-tech-supercharge-your-kubernetes-clusters-with-cilium',
  },
  {
    name: 'Cilium, with Thomas Graf',
    type: 'Kubernetes Podcast from Google',
    target: '_blank',
    url: 'https://kubernetespodcast.com/episode/133-cilium/',
  },
  {
    name: 'Kubernetes Networking and Security, and Building Business on Open Source with Isovalent Founder, Thomas Graf',
    type: 'Discoposse Podcast',
    target: '_blank',
    url: 'https://discopossepodcast.com/ep-153-kubernetes-networking-and-security-and-building-business-on-open-source-with-isovalent-founder-thomas-graf/',
  },
];
const Podcasts = ({ className }) => (
  <div className={className}>
    <Heading tag="h3" theme="gray">
      {title}
    </Heading>
    <div className="mt-3.5">
      {items.map(({ name, type, target, url }, index) => (
        <div
          className="py-3 border-b md:py-4 lg:py-6 last:pb-0 border-gray-3 last:border-none"
          key={index}
        >
          <Link
            className="flex space-x-4"
            theme="black-primary"
            type="text"
            target={target || ''}
            to={url}
          >
            <PlayIcon className="flex-shrink-0" />
            <div className="flex flex-col lg:pt-1.5">
              <span className="text-lg font-medium leading-relaxed lg:text-xl ">{name}</span>
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
