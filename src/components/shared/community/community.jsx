import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import GithubIcon from 'icons/github.inline.svg';
import SlackIcon from 'icons/slack.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';
import YoutubeIcon from 'icons/youtube.inline.svg';

const title = 'Community';
const items = [
  {
    icon: SlackIcon,
    title: 'Join our Slack channel',
    url: 'https://cilium.herokuapp.com/',
    target: '_blank',
  },
  {
    icon: GithubIcon,
    title: 'Contribute on GitHub',
    url: 'https://github.com/cilium/cilium',
    target: '_blank',
  },
  {
    icon: TwitterIcon,
    title: 'Follow us on Twitter',
    url: 'https://twitter.com/ciliumproject',
    target: '_blank',
  },
  {
    icon: YoutubeIcon,
    title: 'Watch Echo Livestream',
    url: 'https://www.youtube.com/channel/UCJFUxkVQTBJh3LD1wYBWvuQ',
    target: '_blank',
  },
];

const Community = () => (
  <section className="my-10 md:my-20 lg:my-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 mt-7 md:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:mt-14">
        {items.map(({ icon: Icon, title, url, target }, index) => (
          <Link
            to={url}
            target={target}
            className="flex items-center p-6 border rounded-lg md:pb-8 md:flex-col md:px-7 lg:pb-10 md:pt-7 border-gray-3"
            key={index}
            type="text"
            theme="black"
          >
            <Icon className="w-9 h-9 md:w-10 md:h-10" />
            <span className="ml-4 font-semibold text-center md:m-0 md:text-lg md:mt-5 xl:leading-none">
              {title}
            </span>
          </Link>
        ))}
      </div>
    </Container>
  </section>
);

export default Community;
