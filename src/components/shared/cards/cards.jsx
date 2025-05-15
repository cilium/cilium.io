import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Link from '../link';

import BlueskyIcon from './images/bluesky.inline.svg';
import ConductIcon from './images/conduct.inline.svg';
import DevstatsIcon from './images/devstats.inline.svg';
import GithubIcon from './images/github.inline.svg';
import NewsletterIcon from './images/newsletter.inline.svg';
import SlackIcon from './images/slack.inline.svg';
import SupportIcon from './images/support.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';
import YoutubeIcon from './images/youtube.inline.svg';

const icons = {
  github: GithubIcon,
  slack: SlackIcon,
  support: SupportIcon,
  newsletter: NewsletterIcon,
  twitter: TwitterIcon,
  conduct: ConductIcon,
  devstats: DevstatsIcon,
  youtube: YoutubeIcon,
  bluesky: BlueskyIcon,
};

const themeClassNames = {
  white: 'bg-white',
  gray: 'bg-gray-4',
};

const Cards = ({ className, title, items, buttonType, theme, textSize, cardSize }) => {
  const isTypeLink = buttonType === 'link';
  const isSmSize = cardSize === 'sm';
  const Tag = isTypeLink ? Link : Button;
  const buttonTheme = isTypeLink ? 'primary' : 'primary-1';

  return (
    <div className={classNames(className, themeClassNames[theme])}>
      <Container>
        {title && (
          <Heading className="mb-6 xs:text-center md:mb-10 lg:mb-14" tag="h2">
            {title}
          </Heading>
        )}
        <ul className="grid grid-cols-12 gap-y-8 lg:gap-x-6 xl:gap-x-8">
          {items.map(
            ({ iconName, title, description, buttonText, buttonUrl, buttonTarget }, index) => {
              const Icon = icons[iconName];
              return (
                <li
                  className={classNames(
                    'col-span-full flex flex-col space-y-4 rounded-xl bg-white px-6 py-8 shadow-card md:flex-row md:space-y-0 md:space-x-5 lg:flex-col lg:space-x-0 lg:space-y-5 xl:px-8',
                    isSmSize ? 'lg:col-span-6 xl:col-span-3' : 'lg:col-span-4'
                  )}
                  key={index}
                >
                  <div className="flex grow flex-col">
                    <div className={classNames(isSmSize && 'flex items-center space-x-3')}>
                      {Icon && (
                        <Icon
                          className={classNames('shrink-0', isSmSize && 'h-8 w-8')}
                          aria-label={`${title} logo`}
                        />
                      )}

                      <Heading
                        size="xs"
                        tag="h3"
                        className={classNames(!isSmSize && 'mt-5 md:mt-4')}
                      >
                        {title}
                      </Heading>
                    </div>
                    <p
                      className={classNames(
                        'with-link-primary-medium mt-3',
                        textSize === 'lg' && 'md:text-lg',
                        buttonText && buttonUrl && !isTypeLink && 'mb-5 lg:mb-7',
                        buttonText && buttonUrl && isTypeLink && 'mb-4 lg:mb-6'
                      )}
                      dangerouslySetInnerHTML={{ __html: description }}
                    />

                    {buttonText && buttonUrl && (
                      <Tag
                        className={classNames(
                          'mt-auto',
                          isTypeLink ? 'border-t border-gray-3 pt-5 leading-snug' : 'self-start'
                        )}
                        theme={buttonTheme}
                        type={isTypeLink ? 'text' : null}
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
  textSize: PropTypes.oneOf(['md', 'lg']),
  cardSize: PropTypes.oneOf(['md', 'sm']),
  items: PropTypes.arrayOf(
    PropTypes.exact({
      iconName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonText: PropTypes.string,
      buttonUrl: PropTypes.string,
      buttonTarget: PropTypes.string,
    })
  ).isRequired,
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
};

Cards.defaultProps = {
  className: null,
  title: null,
  textSize: 'md',
  cardSize: 'md',
  buttonType: 'button',
  theme: 'white',
};

export default Cards;
