import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import labIcon from 'images/lab.svg';
import githubIcon from 'images/social/github.svg';
import linkedinIcon from 'images/social/linkedin.svg';
import slackIcon from 'images/social/slack.svg';
import xIcon from 'images/social/x.svg';
import youtubeIcon from 'images/social/youtube.svg';

const title = 'Community';
const items = [
  {
    icon: slackIcon,
    title: 'Join our Slack channel',
    titleWidth: 'xl:w-32',
    url: 'https://slack.cilium.io',
    target: '_blank',
  },
  {
    icon: githubIcon,
    title: 'Contribute on GitHub',
    titleWidth: 'xl:w-24',
    url: 'https://github.com/cilium/cilium',
    target: '_blank',
  },
  {
    icon: xIcon,
    title: 'Follow us on X',
    titleWidth: 'xl:w-20',
    url: 'https://x.com/ciliumproject',
    target: '_blank',
  },
  {
    icon: youtubeIcon,
    title: 'Watch Echo Livestream',
    url: 'https://www.youtube.com/channel/UCJFUxkVQTBJh3LD1wYBWvuQ',
    target: '_blank',
  },
  {
    icon: linkedinIcon,
    title: 'Follow us on LinkedIn',
    titleWidth: 'xl:w-24',
    url: 'https://www.linkedin.com/company/cilium/',
    target: '_blank',
  },
  {
    icon: labIcon,
    title: 'Explore Cilium Labs',
    titleWidth: 'xl:w-32',
    url: '/labs/categories/getting-started/',
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
      'overflow-hidden py-10 sm:overflow-visible md:py-20 lg:pt-28 lg:pb-32',
      className,
      themeClassNames[theme].wrapper
    )}
  >
    <Container>
      <Heading className={classNames(isTitleCentered && 'text-center')} tag="h2">
        {title}
      </Heading>
      <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 md:gap-5 lg:mt-14 lg:grid-cols-3 lg:mb-1.5 xl:grid-cols-6 xl:gap-8">
        {items.map(({ icon, title, url, target, titleWidth }, index) => (
          <li key={index}>
            <Link
              to={url}
              target={target}
              className={classNames(
                'flex items-center rounded-lg p-6 md:flex-col md:pb-8 md:pt-7 lg:pt-9 lg:pb-11 xl:p-7',
                themeClassNames[theme].card
              )}
              type="text"
              theme="black"
            >
              <img
                className="shrink-0 h-9 w-9 md:h-11 md:w-11"
                src={icon}
                alt=""
                width="36"
                height="36"
                loading="lazy"
              />
              <span
                className={classNames(
                  'ml-4 text-center font-bold leading-snug truncate md:m-0 md:mt-[18px] md:text-lg md:leading-snug lg:whitespace-normal xl:mt-3.5 xl:text-base xl:leading-tight',
                  titleWidth
                )}
              >
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
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
