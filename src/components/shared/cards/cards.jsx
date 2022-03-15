import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Link from '../link';

import GithubIcon from './images/github.inline.svg';
import NewsletterIcon from './images/newsletter.inline.svg';
import SlackIcon from './images/slack.inline.svg';
import SupportIcon from './images/support.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';

const icons = {
  github: GithubIcon,
  slack: SlackIcon,
  support: SupportIcon,
  newsletter: NewsletterIcon,
  twitter: TwitterIcon,
};

const Cards = ({ items, buttonType }) => {
  const isTypeLink = buttonType === 'link';
  const Tag = isTypeLink ? Link : Button;
  const theme = isTypeLink ? 'primary' : 'primary-1';

  return (
    <div className="bg-gray-4 pt-12 pb-28">
      <Container className="grid grid-cols-12 gap-y-8 lg:gap-x-6 xl:gap-x-8" tag="ul">
        {items.map(
          ({ iconName, title, description, buttonText, buttonUrl, buttonTarget }, index) => {
            const Icon = icons[iconName];
            return (
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

                  <Tag
                    className={classNames(
                      'mt-auto',
                      isTypeLink ? 'pt-6 border-t border-gray-3' : 'self-start'
                    )}
                    theme={theme}
                    type={isTypeLink && 'text'}
                    to={buttonUrl}
                    target={buttonTarget || null}
                    rel={buttonTarget ? 'noopener noreferrer' : null}
                  >
                    {buttonText}
                  </Tag>
                </div>
              </li>
            );
          }
        )}
      </Container>
    </div>
  );
};

Cards.propTypes = {
  buttonType: PropTypes.oneOf(['button', 'link']),
  items: PropTypes.arrayOf(
    PropTypes.exact({
      iconName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      buttonUrl: PropTypes.string.isRequired,
      buttonTarget: PropTypes.string,
    })
  ).isRequired,
};

Cards.defaultProps = {
  buttonType: 'button',
};

export default Cards;
