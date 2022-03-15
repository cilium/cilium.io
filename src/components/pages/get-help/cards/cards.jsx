import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import GithubIcon from './images/github.inline.svg';
import SlackIcon from './images/slack.inline.svg';
import SupportIcon from './images/support.inline.svg';

const items = [
  {
    icon: GithubIcon,
    title: 'Slack',
    description:
      'For live conversation and quick questions, join the Cilium Slack workspace. Don’t forget to say hi!',
    buttonText: 'Join Slack',
    buttonUrl: 'https://cilium.herokuapp.com/',
    buttonTarget: '_blank',
  },
  {
    icon: SupportIcon,
    title: 'Training and Support',
    description: 'Please check the Enterprise page.',
    buttonText: 'Check it Now',
    buttonUrl: '/enterprise',
  },
  {
    icon: SlackIcon,
    title: 'GitHub',
    description:
      'Cilium uses GitHub tags to maintain a list of asked questions. So you can check if your question is answered.',
    buttonText: 'Join GitHub',
    buttonUrl: 'https://github.com/cilium/cilium',
    buttonTarget: '_blank',
  },
];

const Cards = () => (
  <div className="bg-gray-4 pt-12 pb-28">
    <Container className="grid grid-cols-12 gap-y-8 lg:gap-x-6 xl:gap-x-8" tag="ul">
      {items.map(
        ({ icon: Icon, title, description, buttonText, buttonUrl, buttonTarget }, index) => (
          <li
            className="flex flex-col md:flex-row lg:flex-col col-span-full lg:col-span-4 space-y-4 md:space-y-0 md:space-x-5 lg:space-x-0 lg:space-y-5 bg-white rounded-xl shadow-card p-8"
            key={index}
          >
            {Icon && <Icon className="shrink-0" />}
            <div className="grow flex flex-col">
              <Heading size="xs" tag="h3">
                {title}
              </Heading>
              <p className="mt-3.5 mb-5 lg:mb-7 text-lg">{description}</p>
              <Button
                className="mt-auto self-start"
                theme="primary-1"
                to={buttonUrl}
                target={buttonTarget || null}
                rel={buttonTarget ? 'noopener noreferrer' : null}
              >
                {buttonText}
              </Button>
            </div>
          </li>
        )
      )}
    </Container>
  </div>
);

export default Cards;
