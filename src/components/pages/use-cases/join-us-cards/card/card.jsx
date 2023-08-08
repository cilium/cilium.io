import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import DocumentationIcon from './images/documentation.inline.svg';
import HelpIcon from './images/help.inline.svg';
import SlackIcon from './images/slack-with-back.inline.svg';

const iconList = {
  documentation: DocumentationIcon,
  help: HelpIcon,
  slack: SlackIcon,
};

const Card = ({ icon, title, description, buttonText, buttonLink, buttonTarget, className }) => {
  const Icon = iconList[icon];

  return (
    <article
      className={classNames(
        'flex flex-col rounded-[10px] bg-white px-6 py-8 shadow-primary',
        className
      )}
    >
      <Icon className="h-10 w-10  lg:h-16 lg:w-16" />
      <Heading className="mt-5 leading-tight" tag="h4" size="xs">
        {title}
      </Heading>
      <p className="mt-2.5 w-full pb-6" dangerouslySetInnerHTML={{ __html: description }} />
      <Link
        to={buttonLink}
        target={buttonTarget}
        type="text"
        theme="primary"
        rel="noopener noreferrer"
        className="mt-auto border-t border-gray-3 pt-6"
      >
        {buttonText}
      </Link>
    </article>
  );
};

Card.propTypes = {
  icon: PropTypes.oneOf(['slack', 'documentation', 'help']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  buttonTarget: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: null,
};

export default Card;
