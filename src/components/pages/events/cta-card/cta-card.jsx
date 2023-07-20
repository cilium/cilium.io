import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import illustration from './images/cta-background.svg';

const CtaCard = ({ title, description, buttonText, buttonUrl, buttonTarget, className }) => (
  <section className={className}>
    <div className="relative h-full min-h-[280px] w-full rounded-lg bg-additional-light-green">
      <img
        className="absolute left-0 top-1/2 hidden h-full w-auto -translate-y-1/2 md:block"
        src={illustration}
        width={324}
        height={280}
        loading="lazy"
        alt=""
        aria-hidden
      />
      <img
        className="absolute right-0 top-1/2 hidden h-full w-auto -translate-y-1/2 rotate-180 md:block"
        src={illustration}
        loading="lazy"
        width={324}
        height={280}
        alt=""
        aria-hidden
      />
      <div className="relative h-full w-full px-6 pt-12 pb-6 xs:pb-0 lg:px-10 xl:px-12">
        <Heading className="!text-xl lg:text-22 xl:text-2xl" tag="h3" asHTML>
          {title}
        </Heading>
        <p className="mt-2.5 text-base leading-normal xl:text-lg">{description}</p>
        <Button
          className="mt-6 h-12 items-center !text-lg"
          theme="primary-1"
          type="submit"
          to={buttonUrl}
          target={buttonTarget}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  </section>
);

CtaCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  buttonTarget: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CtaCard.defaultProps = {
  className: null,
};

export default CtaCard;
