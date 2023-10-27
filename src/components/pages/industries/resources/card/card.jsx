import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import ArrowIcon from 'icons/arrow.inline.svg';

const Card = ({
  title,
  description,
  buttonText,
  buttonLink,
  buttonTarget,
  imageSrc,
  imageAlt,
  className,
}) => (
  <article
    className={classNames('flex flex-col rounded-xl bg-white px-6 py-8 shadow-primary', className)}
  >
    <img
      src={imageSrc}
      alt={imageAlt}
      className="max-h-[180px] w-full rounded"
      loading="lazy"
      width={272}
      height={164}
    />
    <Heading className="mt-5 leading-tight" tag="h3" size="xs">
      {title}
    </Heading>
    <p className="mt-2.5 w-full pb-6" dangerouslySetInnerHTML={{ __html: description }} />
    <Link
      to={buttonLink}
      target={buttonTarget}
      type="text"
      theme="primary"
      rel="noopener noreferrer"
      className="mt-auto flex gap-2 border-t border-gray-3 pt-6"
    >
      <span>{buttonText}</span>
      <ArrowIcon />
    </Link>
  </article>
);

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
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
