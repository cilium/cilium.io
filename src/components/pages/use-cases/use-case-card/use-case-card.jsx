import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import quotes from './images/quotes.svg';

const UseCaseCard = ({ heading, testimonials }) => (
  <section className="bg-gray-4">
    <Container className="flex flex-col items-center py-10 md:py-20 lg:py-28">
      <Heading
        className="mb-12 max-w-full text-center leading-tight lg:mb-14 lg:max-w-[70%] lg:leading-tight xl:leading-tight"
        tag="h2"
        size="md"
      >
        {heading}
      </Heading>
      <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {testimonials.map(
          ({ logo: Logo, url, CTAtext, description, title, quote, person }, index) => (
            <li
              className="relative flex flex-col rounded-xl bg-white p-8 shadow-primary"
              key={title + index}
            >
              <Logo className="mb-5 h-8 lg:mb-7 lg:h-12" />
              <Heading className="mb-2.5" tag="h3" size="xs">
                {title}
              </Heading>
              {quote ? (
                <>
                  <p className="italic">{description}</p>
                  {person && <p className="mt-5 mb-6 font-semibold">{person}</p>}
                  <img
                    className="absolute right-8 top-7 hidden h-auto w-32 sm:block lg:top-12"
                    src={quotes}
                    width={248}
                    height={180}
                    alt="Quote Icon"
                    loading="lazy"
                    aria-hidden
                  />
                </>
              ) : (
                <p className="mb-6 leading-normal">{description}</p>
              )}
              {url && (
                <Link
                  to={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="text"
                  theme="primary"
                  className="mt-auto border-t border-gray-3 pt-6"
                >
                  {CTAtext}
                </Link>
              )}
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
