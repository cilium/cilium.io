import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import GithubIcon from './images/github.inline.svg';
import SlackIcon from './images/slack.inline.svg';
import SupportIcon from './images/support.inline.svg';

const icons = {
  github: GithubIcon,
  support: SupportIcon,
  slack: SlackIcon,
};

const Cards = ({ items }) => (
  <div className="bg-gray-4 pt-12 pb-28">
    <Container className="grid grid-cols-12 gap-y-8 lg:gap-x-6 xl:gap-x-8">
      {items.map(({ iconName, title, description, buttonText, buttonUrl, buttonTarget }, index) => {
        const Icon = icons[iconName];
        return (
          <div
            className="flex flex-col md:flex-row lg:flex-col col-span-full lg:col-span-4 space-y-4 md:space-y-0 md:space-x-5 lg:space-x-0 lg:space-y-5 bg-white rounded-xl shadow-card p-8"
            key={index}
          >
            <Icon className="shrink-0" />
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
                rel={buttonTarget ? 'noopener noreferrer' : ''}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        );
      })}
    </Container>
  </div>
);

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      buttonUrl: PropTypes.string.isRequired,
      buttonTarget: PropTypes.string,
    })
  ).isRequired,
};

export default Cards;
