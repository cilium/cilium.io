import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import ExternalLinkIcon from 'icons/external-link.inline.svg';

import CiliumLogo from './images/cilium-logo.inline.svg';

const coverStyles = {
  base: 'shrink-0',
  lg: 'sm:max-w-[512px]',
  md: 'min-h-[168px] sm:max-h-[168px] sm:max-w-[320px]',
  sm: 'min-h-[107px] sm:max-h-[107px] sm:max-w-[198px]',
};

const titleStyles = {
  lg: 'text-2xl lg:text-3xl font-semibold',
  md: 'md:text-lg font-bold',
  sm: 'md:text-lg font-bold',
};

const BlogCover = ({ ogImage, title, coverUrl, coverClassNames }) => {
  let content = null;
  if (ogImage) {
    content = (
      <GatsbyImage
        className={coverClassNames}
        imgClassName="rounded-lg"
        image={getImage(ogImage)}
        objectFit="contain"
        alt={title}
      />
    );
  } else if (coverUrl) {
    content = (
      <img
        className={classNames('rounded-lg object-contain', coverClassNames)}
        src={coverUrl}
        alt={title}
      />
    );
  } else if (!ogImage && !coverUrl) {
    content = (
      <div
        className={classNames(
          'flex justify-center items-center bg-gray-4 rounded-lg',
          coverClassNames
        )}
      >
        <CiliumLogo />
      </div>
    );
  }
  return content;
};

const BlogPostCard = ({
  path,
  ogImage,
  ogImageUrl,
  date,
  title,
  ogSummary: summary,
  categories,
  externalUrl,
  size,
  className,
  isLandscapeView,
}) => {
  const url = externalUrl !== '' ? externalUrl : null;
  const coverUrl = ogImageUrl !== '' ? ogImageUrl : null;
  const coverClassNames = classNames(
    coverStyles.base,
    coverStyles[size],
    isLandscapeView && 'self-center'
  );
  return (
    <Link
      to={url || path}
      className={classNames(
        'flex p-6 transition-all duration-200 border rounded-lg md:p-8 border-gray-3 group hover:border-transparent hover:shadow-tertiary',
        isLandscapeView
          ? 'flex-col space-y-7 sm:space-y-0 sm:flex-row sm:space-x-7'
          : 'flex-col space-y-7',
        size === 'lg' && 'lg:p-10',
        className
      )}
      target={url ? '_blank' : ''}
      rel={url ? 'noopener noreferrer' : ''}
    >
      <BlogCover
        ogImage={ogImage}
        title={title}
        coverUrl={coverUrl}
        coverClassNames={coverClassNames}
      />
      <article className="flex flex-col grow">
        <span className="text-sm font-medium leading-none text-gray-1">{date}</span>
        <h3
          className={classNames(
            'mt-3 leading-normal transition-colors duration-200 md:leading-normal lg:leading-normal line-clamp-3 group-hover:text-primary-1',
            titleStyles[size]
          )}
        >
          {title}
        </h3>
        {!isLandscapeView && (
          <>
            <p
              className={classNames(
                'mt-2 mb-4 line-clamp-5 leading-relaxed',
                size === 'lg' && 'md:text-lg'
              )}
            >
              {summary}
            </p>
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
          </>
        )}
      </article>
    </Link>
  );
};

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
  size: PropTypes.oneOf(Object.keys(titleStyles)),
  className: PropTypes.string,
  isLandscapeView: PropTypes.bool,
};

BlogPostCard.defaultProps = {
  ogImage: null,
  path: null,
  ogImageUrl: null,
  externalUrl: null,
  ogSummary: null,
  categories: null,
  size: Object.keys(titleStyles)[1],
  className: null,
  isLandscapeView: false,
};

export default BlogPostCard;
