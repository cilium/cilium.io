import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import GithubIcon from 'icons/github.inline.svg';
import LinkedinIcon from 'icons/linkedin-square.inline.svg';
import SlackIcon from 'icons/slack.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';
import YoutubeIcon from 'icons/youtube.inline.svg';

const title = 'Community';
const items = [
  {
    icon: SlackIcon,
    logoName: 'Slack',
    title: 'Join our Slack channel',
    url: 'https://slack.cilium.io',
    target: '_blank',
  },
  {
    icon: GithubIcon,
    logoName: 'GitHub',
    title: 'Contribute on GitHub',
    url: 'https://github.com/cilium/cilium',
    target: '_blank',
  },
  {
    icon: TwitterIcon,
    logoName: 'Twitter',
    title: 'Follow us on X',
    titleWidth: 'lg:w-24',
    url: 'https://x.com/ciliumproject',
    target: '_blank',
  },
  {
    icon: YoutubeIcon,
    logoName: 'YouTube',
    title: 'Watch Echo Livestream',
    url: 'https://www.youtube.com/channel/UCJFUxkVQTBJh3LD1wYBWvuQ',
    target: '_blank',
  },
  {
    icon: LinkedinIcon,
    logoName: 'LinkedIn',
    title: 'Network with us on LinkedIn',
    titleWidth: 'lg:w-40',
    url: 'https://www.linkedin.com/company/cilium/',
    target: '_blank',
  },
];

const themeClassNames = {
  white: {
    wrapper: 'bg-white',
    card: 'bg-transparent border-gray-3 border',
  },
  gray: {
    wrapper: 'bg-gray-4',
    card: 'bg-white shadow-card',
  },
};

const Community = ({ className, theme, isTitleCentered }) => (
  <section
    className={classNames(
      'overflow-hidden py-10 sm:overflow-visible md:py-20 lg:py-28',
      className,
      themeClassNames[theme].wrapper
    )}
  >
    <Container>
      <Heading className={classNames(isTitleCentered && 'text-center')} tag="h2">
        {title}
      </Heading>
      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 md:gap-5 lg:mt-14 lg:grid-cols-5">
        {items.map(({ icon: Icon, logoName, title, url, target, titleWidth }, index) => (
          <Link
            to={url}
            target={target}
            className={classNames(
              'flex items-center rounded-lg  p-6 md:flex-col md:px-7 md:pb-8 md:pt-7 lg:pb-10',
              themeClassNames[theme].card
            )}
            key={index}
            type="text"
            theme="black"
          >
            <Icon className="shrink-0 h-9 w-9 md:h-11 md:w-11" aria-label={`${logoName} logo`} />
            <span
              className={classNames(
                'ml-4 text-center font-semibold leading-snug truncate md:m-0 md:mt-[18px] md:text-lg md:leading-snug lg:whitespace-normal xl:leading-tight',
                titleWidth
              )}
            >
              {title}
            </span>
          </Link>
        ))}
      </div>
    </Container>
  </section>
);

Community.propTypes = {
  className: PropTypes.string,
  isTitleCentered: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
};

Community.defaultProps = {
  className: null,
  isTitleCentered: false,
  theme: 'white',
};

export default Community;
