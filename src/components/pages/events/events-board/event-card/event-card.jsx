import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import TypeLabel from 'components/shared/type-label';
import useElementRect from 'utils/use-element-rect';

import CiliumLogo from './images/cilium-logo.inline.svg';

const coverStyles = {
  base: 'shrink-0',
  lg: 'sm:max-w-[512px]',
  md: 'min-h-[168px] sm:max-h-[168px] max-w-full',
  sm: 'min-h-[107px] sm:max-h-[107px] sm:max-w-[198px]',
};

const titleStyles = {
  lg: 'text-2xl lg:text-3xl font-semibold',
  md: 'md:text-lg font-bold',
  sm: 'md:text-lg font-bold',
};

const EventCover = ({ ogImage, title, coverClassNames }) => {
  const [rect, placeholder] = useElementRect();
  const { width = 0 } = rect ?? {};
  const placeholderHeight = width / 2;

  let content = null;
  if (ogImage) {
    content = (
      <GatsbyImage
        className={coverClassNames}
        imgClassName="self-center rounded-lg"
        image={getImage(ogImage)}
        objectFit="contain"
        alt={title}
        loading="lazy"
      />
    );
  }

  content = (
    <div
      className={classNames(
        'flex w-full items-center justify-center rounded-lg bg-gray-4',
        coverClassNames
      )}
      ref={placeholder}
      style={{ height: placeholderHeight }}
    >
      <CiliumLogo aria-label="Cilium logo" />
    </div>
  );

  return content;
};

const BlogPostCard = ({
  ogImage,
  date,
  title,
  ogSummary: summary,
  type,
  externalUrl,
  size,
  className,
  isLandscapeView,
}) => {
  const coverClassNames = classNames(
    coverStyles.base,
    coverStyles[size],
    isLandscapeView && 'self-center'
  );
  return (
    <Link
      to={externalUrl}
      className={classNames(
        'group flex rounded-lg border border-gray-3 p-5 transition-all duration-200 hover:border-transparent hover:shadow-tertiary',
        isLandscapeView
          ? 'flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-7'
          : 'flex-col space-y-7',
        size === 'lg' && 'lg:p-8',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <EventCover ogImage={ogImage} title={title} coverClassNames={coverClassNames} />
      <article className="flex grow flex-col">
        <span className="text-sm font-medium leading-none text-gray-1">{date}</span>
        <h3
          className={classNames(
            'mt-3 leading-normal transition-colors duration-200 line-clamp-3 group-hover:text-primary-1 md:leading-normal lg:leading-normal',
            titleStyles[size]
          )}
        >
          {title}
        </h3>
        {!isLandscapeView && (
          <>
            <p
              className={classNames(
                'mt-2 mb-4 leading-relaxed line-clamp-5',
                size === 'lg' && 'md:text-lg'
              )}
            >
              {summary}
            </p>
            <TypeLabel type={type} className="mt-auto" />
          </>
        )}
      </article>
    </Link>
  );
};

BlogPostCard.propTypes = {
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }),
  externalUrl: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ogSummary: PropTypes.string,
  type: PropTypes.oneOf(['Meetup', 'Webinar', 'Conference']).isRequired,
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
