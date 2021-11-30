import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import ExternalLinkIcon from 'icons/external-link.inline.svg';

const FeaturedStory = ({
  className,
  title,
  date,
  ogImage,
  ogImageUrl,
  ogSummary: summary,
  path,
  categories,
  externalUrl,
}) => {
  const url = externalUrl !== '' && externalUrl;
  const coverUrl = ogImageUrl !== '' && ogImageUrl;
  return (
    <div className={className}>
      <Link
        className="flex flex-col items-center flex-1 space-y-6 group lg:items-start md:space-y-0 md:flex-row md:space-x-10 xl:space-x-14"
        to={url || path}
        target={url ? '_blank' : ''}
        rel={url ? 'noopener noreferrer' : ''}
      >
        <div className="flex items-center flex-1 border border-gray-3 transition rounded-2xl group-hover:shadow-tertiary group-hover:border-transparent md:max-w-[592px] xl:flex-none">
          {ogImage && <GatsbyImage imgClassName="rounded-2xl" image={getImage(ogImage)} alt="" />}
          {coverUrl && <img className="object-contain rounded-2xl" src={coverUrl} alt={title} />}
        </div>
        <div className="flex flex-col flex-1">
          <span className="font-medium leading-none text-gray-1">{date}</span>
          <Heading className="mt-4 line-clamp-3 group-hover:text-primary-1" tag="h3" size="md">
            {title}
          </Heading>
          <p className="my-5 md:text-lg md:leading-relaxed line-clamp-4">{summary}</p>
          <div className="flex flex-wrap mt-auto gap-x-2 gap-y-2">
            {categories?.map((category) => (
              <span
                className="inline-flex items-center h-8 text-primary-1 font-bold bg-additional-4 bg-opacity-70 rounded p-2.5 tracking-wider uppercase text-xs leading-none"
                key={category}
              >
                {category}
              </span>
            ))}
            {url && (
              <div className="inline-flex items-center h-8 text-primary-1 font-bold bg-additional-4 bg-opacity-70 rounded p-2.5 tracking-wider uppercase text-xs leading-none">
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
};

FeaturedStory.defaultProps = {
  className: null,
  path: null,
  ogImage: null,
  ogImageUrl: null,
  externalUrl: null,
  categories: null,
};

export default FeaturedStory;
