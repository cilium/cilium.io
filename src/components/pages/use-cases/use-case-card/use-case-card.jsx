import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import quotes from './images/quotes.svg';

const UseCaseCard = ({ heading, testimonials }) => (
  <section className="bg-gray-4 dark:bg-gray-900">
    <Container className="flex flex-col items-center pt-10 pb-12 md:py-20 lg:py-28">
      <Heading
        className="mb-12 max-w-full text-center leading-tight lg:mb-14 lg:max-w-[70%] lg:leading-tight xl:leading-tight dark:text-white text-black"
        tag="h2"
        size="md"
      >
        {heading}
      </Heading>
      <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {testimonials.map(({ logo: Logo, CTAs, description, title, quote, person }, index) => (
          <li
            className="relative flex flex-col p-8 rounded-xl shadow-primary bg-white dark:bg-gray-2"
            key={title + index}
          >
            <Logo className="h-12 mb-5 lg:mb-7" />
            <Heading className="mb-2.5" tag="h3" size="xs">
              {title}
            </Heading>
            {quote ? (
              <>
                <p className="italic">{description}</p>
                {person && <p className="mt-5 mb-6 font-semibold">{person}</p>}
                <img
                  className="absolute hidden w-32 h-auto right-8 top-7 sm:block lg:top-12"
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
            {CTAs && (
              <div className="flex flex-col gap-4 pt-6 mt-auto border-t md:flex-row border-gray-3 dark:border-gray-600">
                {CTAs.map(({ CTAtext, url }, ctaIndex) => (
                  <Link
                    key={ctaIndex}
                    to={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="text"
                    theme="primary"
                  >
                    {CTAtext}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
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
      CTAs: PropTypes.arrayOf(
        PropTypes.shape({
          CTAtext: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
      description: PropTypes.string.isRequired,
      quote: PropTypes.bool,
      person: PropTypes.string,
    })
  ).isRequired,
};

export default UseCaseCard;
