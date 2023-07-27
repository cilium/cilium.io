import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const Card = ({ title, description, buttonText, buttonLink, buttonTarget, className }) => (
  <section
    className={classNames(
      'flex flex-col rounded-[10px] bg-white px-6 py-8 shadow-primary',
      className
    )}
  >
    <Heading className="text-center leading-tight" tag="h4" size="xs">
      {title}
    </Heading>
    <p className="mt-4 mb-6 w-full" dangerouslySetInnerHTML={{ __html: description }} />
    <Link
      to={buttonLink}
      target={buttonTarget}
      rel="noopener noreferrer"
      className="mx-auto mt-auto"
    >
      <button
        type="button"
        className="rounded-lg bg-primary-1 py-2 px-6 text-center font-bold text-white"
      >
        {buttonText}
      </button>
    </Link>
  </section>
);

Card.propTypes = {
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
