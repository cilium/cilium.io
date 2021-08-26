import React from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import FileIcon from 'icons/file.inline.svg';
import GithubIcon from 'icons/github.inline.svg';
import SlackIcon from 'icons/slack.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';

const items = [
  { icon: FileIcon, title: 'Getting started guide' },
  { icon: SlackIcon, title: 'Join our Slack channel' },
  { icon: TwitterIcon, title: 'Follow us on Twitter' },
  { icon: GithubIcon, title: 'Contribute on GitHub' },
];

const Community = () => (
  <section className="h-20 py-6 mt-20 md:mt-28 lg:mt-36">
    <Container className="grid items-center grid-cols-1 justify-items-center lg:justify-items-stretch sm:grid-cols-2 gap-y-4 lg:flex lg:justify-between">
      {items.map(({ icon: Icon, title }, index) => (
        <Link to="/" className="flex items-center space-x-4" key={index}>
          <Icon />
          <span className="font-bold leading-none">{title}</span>
        </Link>
      ))}
    </Container>
  </section>
);

export default Community;
