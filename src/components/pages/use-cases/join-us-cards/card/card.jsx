import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import labIcon from 'images/lab.svg';

import documentationIcon from './images/documentation.svg';
import helpIcon from './images/help.svg';
import slackIcon from './images/slack-with-back.svg';

const iconList = {
  documentation: documentationIcon,
  help: helpIcon,
  slack: slackIcon,
  lab: labIcon,
};

const Card = ({ icon, title, description, buttonText, buttonLink, buttonTarget, className }) => (
  <article
    className={classNames('flex h-full flex-col rounded-xl bg-white p-8 shadow-primary', className)}
  >
    <img
      className="h-10 w-10 lg:h-16 lg:w-16"
      src={iconList[icon]}
      alt=""
      width="40"
      height="40"
      loading="lazy"
    />
    <Heading className="mt-6 leading-tight" tag="h4" size="2xs">
      {title}
    </Heading>
    <p className="mt-4 w-full pb-12" dangerouslySetInnerHTML={{ __html: description }} />
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
