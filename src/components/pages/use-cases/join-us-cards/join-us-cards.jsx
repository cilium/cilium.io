import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Card from './card';

const items = [
  {
    icon: 'slack',
    title: 'Join the Cilium Slack',
    description:
      'Cilium is an open source project that anyone in the community can use, improve, and enjoy. We&apos;d love you to join us on Slack! Find out what&apos;s happening and get involved.',
    buttonText: 'Join the Slack',
    buttonLink: 'https://slack.cilium.io',
    buttonTarget: '_blank',
  },
  {
    icon: 'documentation',
    title: 'Read the Documentation',
    description:
      'Cilium has extensive documentation that covers its features and use cases. The docs also features tutorials for common user stories.',
    buttonText: 'Read the Docs',
    buttonLink: 'https://docs.cilium.io/en/stable/',
    buttonTarget: '_blank',
  },
  {
    icon: 'help',
    title: 'Get Help',
    description:
      'Get help with Cilium through Slack, Github, training, support, and FAQs. The community can also help you tell or promote your story around Cilium.',
    buttonText: 'Get Help',
    buttonLink: '/get-help/',
  },
  {
    icon: 'lab',
    title: 'Try a Lab',
    description:
      'Deep dive into Cilium and its features with labs provided by companies within the Cilium ecosystem',
    buttonText: 'Try a Lab',
    buttonLink: 'https://cilium.io/labs/categories/getting-started/',
    buttonTarget: '_blank',
  },
];

const JoinUsCard = ({ className }) => (
  <section className="bg-gray-4">
    <Container
      className={classNames('flex flex-col items-center pb-16 md:pb-20 lg:pb-28', className)}
      size="lg"
    >
      <Heading
        className="mb-8 max-w-full text-center leading-tight md:mb-10 lg:mb-14 lg:max-w-[70%] lg:leading-tight xl:leading-tight"
        tag="h2"
        size="md"
      >
        Want to Learn More?
      </Heading>
      <ul className="grid gap-8 grid-cols-1 max-w-[1420px] mx-auto md:grid-cols-2 md:gap-8 2xl:grid-cols-4">
        {items.map((item, index) => (
          <li key={item.title + index}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

JoinUsCard.propTypes = {
  className: PropTypes.string,
};

JoinUsCard.defaultProps = {
  className: null,
};

export default JoinUsCard;
