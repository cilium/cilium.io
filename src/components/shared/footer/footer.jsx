import React from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import FileIcon from 'icons/file.inline.svg';
import GithubIcon from 'icons/github.inline.svg';
import SlackIcon from 'icons/slack.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';

const items = [
  {
    icon: FileIcon,
    title: 'Getting started guide',
    url: 'http://cilium.readthedocs.io/en/stable/gettingstarted/',
    target: '_blank',
  },
  {
    icon: SlackIcon,
    title: 'Join our Slack channel',
    url: 'https://cilium.herokuapp.com/',
    target: '_blank',
  },
  {
    icon: TwitterIcon,
    title: 'Follow us on Twitter',
    url: 'https://twitter.com/ciliumproject',
    target: '_blank',
  },
  {
    icon: GithubIcon,
    title: 'Contribute on GitHub',
    url: 'https://github.com/cilium/cilium',
    target: '_blank',
  },
];

const Footer = () => (
  <footer className="py-6 mt-20 lg:mt-28">
    <Container className="grid items-center grid-cols-1 justify-items-center lg:justify-items-stretch sm:grid-cols-2 gap-y-4 lg:flex lg:justify-between">
      {items.map(({ icon: Icon, title, url, target }, index) => (
        <Link
          type="text"
          theme="black"
          to={url}
          target={target || ''}
          className="flex items-center space-x-4"
          key={index}
        >
          <Icon />
          <span className="text-base font-bold leading-none">{title}</span>
        </Link>
      ))}
    </Container>
  </footer>
);

export default Footer;
