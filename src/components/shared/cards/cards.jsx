import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Link from '../link';

import ConductIcon from './images/conduct.inline.svg';
import DevstatsIcon from './images/devstats.inline.svg';
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
  conduct: ConductIcon,
  devstats: DevstatsIcon,
};

const themeClassNames = {
  white: 'bg-white',
  gray: 'bg-gray-4',
};

const Cards = ({ className, title, items, buttonType, theme }) => {
  const isTypeLink = buttonType === 'link';
  const Tag = isTypeLink ? Link : Button;
  const buttonTheme = isTypeLink ? 'primary' : 'primary-1';

  return (
    <div className={classNames(className, themeClassNames[theme])}>
      <Container>
        {title && (
          <Heading className="text-center mb-6 md:mb-10 lg:mb-14" tag="h2">
            {title}
          </Heading>
        )}
        <ul className="grid grid-cols-12 gap-y-8 lg:gap-x-6 xl:gap-x-8">
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
                    <div
                      className={classNames(
                        'mt-3.5 with-link-primary-light',
                        buttonText && buttonUrl && 'mb-5 lg:mb-7'
                      )}
                      dangerouslySetInnerHTML={{ __html: description }}
                    />

                    {buttonText && buttonUrl && (
                      <Tag
                        className={classNames(
                          'mt-auto',
                          isTypeLink ? 'pt-6 border-t border-gray-3' : 'self-start'
                        )}
                        theme={buttonTheme}
                        type={isTypeLink && 'text'}
                        to={buttonUrl}
                        target={buttonTarget || null}
                        rel={buttonTarget ? 'noopener noreferrer' : null}
                      >
                        {buttonText}
                      </Tag>
                    )}
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </Container>
    </div>
  );
};

Cards.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
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
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
};

Cards.defaultProps = {
  className: null,
  title: null,
  buttonType: 'button',
  theme: 'white',
};

export default Cards;
