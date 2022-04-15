import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import GithubIcon from 'icons/github-dark.inline.svg';
import SlackIcon from 'icons/slack-dark.inline.svg';
import TwitterIcon from 'icons/twitter-dark.inline.svg';

const title = 'Community';
const items = [
  {
    icon: SlackIcon,
    logoName: 'Slack',
    title: 'Slack',
    description:
      'For live conversation and quick questions, join the Cilium Slack workspace. Don’t forget to say hi!',
    linkText: 'Join Slack workspace',
    url: 'https://cilium.herokuapp.com/',
    target: '_blank',
  },
  {
    icon: TwitterIcon,
    logoName: 'Twitter',
    title: 'Twitter',
    description: 'Don’t forget to follow Cilium on Twitter for the latest news and announcements.',
    linkText: 'Follow Cilium on Twitter',
    url: 'https://twitter.com/ciliumproject',
    target: '_blank',
  },
  {
    icon: GithubIcon,
    logoName: 'GitHub',
    title: 'GitHub',
    description: 'Cilium uses GitHub tags to maintain a list of asked questions.',
    linkText: 'Join Github',
    url: 'https://github.com/cilium/cilium',
    target: '_blank',
  },
];

const Community = () => (
  <section className="overflow-hidden bg-white py-8 sm:overflow-visible md:py-10 lg:py-14">
    <Container>
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <div className="mt-7 flex flex-col justify-between space-y-5 md:mt-10 md:flex-row md:space-y-0 md:space-x-4 lg:mt-14 xl:space-x-8">
        {items.map(({ icon: Icon, logoName, title, description, linkText, url, target }, index) => (
          <Link
            to={url}
            target={target}
            rel={target ? 'noopener noreferrer' : null}
            className="flex basis-1/3 items-center justify-between rounded-lg bg-white p-6 shadow-card md:flex-col md:items-stretch xl:p-8"
            key={index}
            type="text"
            theme="black"
          >
            <div>
              <Icon
                className="inline-block h-12 w-12 md:h-16 md:w-16"
                aria-label={`${logoName} logo`}
              />
              <span className="ml-2.5 hidden text-lg font-bold xs:inline-block md:ml-0 md:mt-5 md:block md:text-xl lg:text-2xl">
                {title}
              </span>
            </div>
            <span className="mb-6 hidden text-sm font-normal md:mt-2.5 md:block lg:text-base">
              {description}
            </span>
            <div className="border-t-0 text-right text-xs uppercase text-primary-1 hover:text-gray-1 md:mt-auto md:border-t md:border-gray-4 md:pt-6 md:text-left lg:text-sm lg:leading-none">
              {linkText}
            </div>
          </Link>
        ))}
      </div>
    </Container>
  </section>
);

export default Community;
