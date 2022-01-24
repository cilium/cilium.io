import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import ExternalLinkIcon from 'icons/external-link.inline.svg';

import CiliumLogo from './images/cilium-logo.inline.svg';

function BlogPostCard({
  path,
  ogImage,
  ogImageUrl,
  date,
  title,
  ogSummary: summary,
  categories,
  externalUrl,
}) {
  const url = externalUrl !== '' ? externalUrl : null;
  const coverUrl = ogImageUrl !== '' ? ogImageUrl : null;

  return (
    <Link
      to={url || path}
      className="flex flex-col p-6 transition-all duration-200 border rounded-lg md:p-8 border-gray-3 group hover:border-transparent hover:shadow-tertiary"
      target={url ? '_blank' : ''}
      rel={url ? 'noopener noreferrer' : ''}
    >
      {ogImage && (
        <GatsbyImage
          className="min-h-[168px] max-h-[168px]"
          imgClassName="rounded-lg"
          image={getImage(ogImage)}
          objectFit="contain"
          alt={title}
        />
      )}
      {coverUrl && (
        <img
          className="min-h-[168px] max-h-[168px] rounded-lg object-contain"
          src={coverUrl}
          alt={title}
        />
      )}
      {!ogImage && !coverUrl && (
        <div className="h-[168px] flex justify-center items-center bg-gray-4 rounded-lg">
          <CiliumLogo />
        </div>
      )}

      <div className="flex flex-col grow mt-7">
        <span className="text-sm font-medium leading-none text-gray-1">{date}</span>
        <h3 className="mt-3 font-bold leading-normal transition-colors duration-200 line-clamp-3 group-hover:text-primary-1 md:text-lg">
          {title}
        </h3>
        <p className="mt-2 mb-4 line-clamp-5">{summary}</p>
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
  );
}

BlogPostCard.propTypes = {
  path: PropTypes.string,
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }),
  ogImageUrl: PropTypes.string,
  externalUrl: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ogSummary: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
};

BlogPostCard.defaultProps = {
  ogImage: null,
  path: null,
  ogImageUrl: null,
  externalUrl: null,
  ogSummary: null,
  categories: null,
};

export default BlogPostCard;
