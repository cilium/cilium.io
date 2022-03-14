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
  <section className="bg-gray-4 pt-12 pb-28">
    <Container className="grid grid-cols-12 lg:gap-x-8">
      {items.map(({ iconName, title, description, buttonText, buttonUrl }, index) => {
        const Icon = icons[iconName];
        return (
          <div className="flex flex-col col-span-4 bg-white rounded-xl shadow-card p-8" key={index}>
            <Icon />
            <Heading className="mt-5" size="xs" tag="h3">
              {title}
            </Heading>
            <p className="mt-3.5 mb-7">{description}</p>
            <Button className="mt-auto self-start" theme="primary-1" to={buttonUrl}>
              {buttonText}
            </Button>
          </div>
        );
      })}
    </Container>
  </section>
);

Cards.propTypes = {};

Cards.defaultProps = {};

export default Cards;
