import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import ArrowIcon from 'icons/arrow.inline.svg';

const UseCaseCard = ({ heading, testimonials }) => (
  <Container className="flex flex-col items-center py-10 md:py-20 lg:py-28 lg:pb-[138px]">
    <Heading
      className="mb-8 max-w-full text-center leading-tight lg:mb-12 lg:max-w-[70%] lg:leading-tight xl:leading-tight"
      tag="h2"
      size="md"
    >
      {heading}
    </Heading>
    <ul className="flex flex-col gap-y-8 md:gap-y-10">
      {testimonials.map(({ logo, url, CTAtext, description, title, quote, person }, index) => {
        const Logo = logo;
        return (
          <li
            className="flex flex-col gap-0 rounded-lg px-6 py-8 shadow-primary sm:items-center md:flex-row md:gap-4 md:px-12"
            key={title + index}
          >
            <div className="basis-2/4 items-center justify-around gap-8 md:flex">
              <div className="flex flex-col items-center gap-6">
                <Logo />
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-semibold text-primary-1"
                >
                  {CTAtext}
                  <ArrowIcon />
                </a>
              </div>
              <div className="my-8 h-[1px] w-full bg-[#6B91C7] md:h-[140px] md:w-[1px]" />
            </div>

            <div className="w-full">
              <Heading className="mb-5" tag="h3" size="2xs">
                {title}
              </Heading>
              {quote ? (
                <q>
                  <p>{description}</p>
                </q>
              ) : (
                <p className="leading-normal">{description}</p>
              )}
              {person && <p>{person}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  </Container>
);

UseCaseCard.defaultProps = {};

UseCaseCard.propTypes = {
  heading: PropTypes.string.isRequired,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      CTAtext: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      quote: PropTypes.bool,
      person: PropTypes.string,
    })
  ).isRequired,
};

export default UseCaseCard;
