import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import ArrowIcon from 'icons/arrow.inline.svg';

import quotes from './images/quotes.svg';

const UseCaseCard = ({ heading, testimonials }) => (
  <section className="bg-gray-4">
    <Container className="flex flex-col items-center py-10 md:py-20 lg:py-28">
      <Heading
        className="mb-8 max-w-full text-center leading-tight lg:mb-12 lg:max-w-[70%] lg:leading-tight xl:leading-tight"
        tag="h2"
        size="md"
      >
        {heading}
      </Heading>
      <ul className="flex flex-col gap-y-8 md:gap-y-10">
        {testimonials.map(
          ({ logo: Logo, url, CTAtext, description, title, quote, person }, index) => (
            <li
              className="flex flex-col gap-0 rounded-lg bg-white px-6 py-8 shadow-primary sm:items-center md:flex-row md:gap-4 md:px-12"
              key={title + index}
            >
              <div className="basis-2/4 items-center justify-around gap-8 md:flex">
                <div className="flex flex-col items-center gap-6">
                  <Logo />
                  {url && (
                    <Link
                      to={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-semibold text-primary-1"
                    >
                      {CTAtext}
                      <ArrowIcon />
                    </Link>
                  )}
                </div>
                <div className="my-8 h-[1px] w-full bg-[#6B91C7] md:h-[140px] md:w-[1px]" />
              </div>

              <div className="relative w-full">
                <Heading className="mb-5" tag="h3" size="2xs">
                  {title}
                </Heading>
                {quote ? (
                  <>
                    <p className="italic">{description}</p>
                    <img
                      className="absolute -right-3 top-7 hidden h-auto w-32 sm:block lg:-top-2"
                      src={quotes}
                      width={248}
                      height={180}
                      alt="Quote Icon"
                      loading="lazy"
                      aria-hidden
                    />
                  </>
                ) : (
                  <p className="leading-normal">{description}</p>
                )}
                {person && <p className="mt-5 font-semibold">{person}</p>}
              </div>
            </li>
          )
        )}
      </ul>
    </Container>
  </section>
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
