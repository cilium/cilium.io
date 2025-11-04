import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import ExternalLinkIcon from 'icons/external-link.inline.svg';

import TypeLabel from '../type-label';

const FeaturedStory = ({
  className,
  title,
  date,
  ogImage,
  ogImageUrl,
  ogSummary: summary,
  path,
  categories,
  type,
  externalUrl,
  place,
}) => {
  const url = externalUrl !== '' && externalUrl;
  const coverUrl = ogImageUrl !== '' && ogImageUrl;
  return (
    <div className={className}>
      <Link
        className="group flex flex-1 flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-10 lg:items-start xl:space-x-14"
        to={url || path}
        target={url ? '_blank' : ''}
        rel={url ? 'noopener noreferrer' : ''}
      >
        <div className="flex flex-1 items-center rounded-2xl border border-gray-3 transition duration-200 group-hover:border-transparent group-hover:shadow-tertiary md:max-w-[592px] xl:flex-none">
          {ogImage && (
            <GatsbyImage
              imgClassName="rounded-2xl"
              image={getImage(ogImage)}
              alt={title}
              loading="eager"
            />
          )}
          {coverUrl && (
            <img
              className="rounded-2xl object-contain"
              src={coverUrl}
              alt={title}
              loading="eager"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-x-0 gap-y-2 lg:flex-row lg:gap-x-5 lg:gap-y-0 ">
            <time className="whitespace-nowrap font-medium leading-none text-gray-1">{date}</time>
            {place && (
              <span className="relative whitespace-nowrap font-medium leading-none text-gray-1 before:absolute before:top-1/2 before:-left-3 before:hidden before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-1 lg:before:inline-block">
                {place}
              </span>
            )}
          </div>
          <Heading
            className="mt-4 transition-colors duration-200 line-clamp-3 text-black dark:text-white group-hover:text-primary-1"
            tag="h3"
            size="md"
          >
            {title}
          </Heading>
          <p className="my-5 line-clamp-4 md:text-lg md:leading-relaxed dark:text-gray-2 text-black">
            {summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-x-2 gap-y-2">
            {categories?.map((category) => (
              <span
                className="inline-flex h-8 items-center rounded bg-additional-4 bg-opacity-70 p-2.5 text-xs font-bold uppercase leading-none tracking-wider text-primary-1"
                key={category}
              >
                {category}
              </span>
            ))}
            {type && <TypeLabel type={type} />}
            {!type && url && (
              <div className="inline-flex h-8 items-center rounded bg-additional-4 bg-opacity-70 p-2.5 text-xs font-bold uppercase leading-none tracking-wider text-primary-1">
                <span>External</span>
                <ExternalLinkIcon className="ml-1" />
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

FeaturedStory.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  ogSummary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }),
  categories: PropTypes.arrayOf(PropTypes.string),
  ogImageUrl: PropTypes.string,
  path: PropTypes.string,
  externalUrl: PropTypes.string,
  place: PropTypes.string,
  type: PropTypes.oneOf(['Meetup', 'Webinar', 'Conference']),
};

FeaturedStory.defaultProps = {
  className: null,
  path: null,
  ogImage: null,
  ogImageUrl: null,
  externalUrl: null,
  categories: null,
  place: null,
  type: null,
};

export default FeaturedStory;
