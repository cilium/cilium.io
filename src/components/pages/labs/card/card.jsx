import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Link from 'components/shared/link';
import useElementRect from 'hooks/use-element-rect';
import placeholderIllustration from 'images/placeholder.svg';

const Cover = ({ ogImage, title }) => {
  const [rect, placeholder] = useElementRect();
  const { width = 0 } = rect ?? {};
  const placeholderHeight = width / 2.1;

  return ogImage ? (
    <GatsbyImage
      imgClassName="self-center h-full max-h-[261px] sm:max-h-[221px] lg:max-h-[180px]"
      image={getImage(ogImage)}
      objectFit="cover"
      alt={title}
      loading="lazy"
    />
  ) : (
    <div
      className="flex w-full items-center justify-center bg-gray-4"
      ref={placeholder}
      style={{ height: placeholderHeight }}
    >
      <img className="h-full w-full py-2.5" src={placeholderIllustration} alt="" aria-hidden />
    </div>
  );
};

const Card = ({
  titleTag: Tag,
  title,
  ogSummary: summary,
  externalUrl,
  place,
  categories,
  ogImage,
  from,
  className,
}) => {
  const items = [...categories];

  if (place) items.push(place);
  if (from) items.push(`From <strong>${from}</strong>`);

  return (
    <Link
      to={externalUrl}
      className={classNames(
        'group flex flex-col overflow-hidden rounded-lg border-2 border-gray-6 dark:border-gray-7 transition-all duration-200 hover:border-transparent hover:shadow-tertiary dark:hover:border-gray-7 dark:hover:shadow-darksecondary',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Cover ogImage={ogImage} title={title} />
      <article className="flex grow flex-col p-5 text-left md:p-7 xl:p-8">
        {items.length && (
          <div className="mb-3 flex flex-wrap items-center justify-start text-sm font-medium leading-none text-gray-1">
            {items.map((item, index) => (
              <Fragment key={index}>
                <span
                  className="mr-1.5 text-sm font-normal leading-none"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
                {index < items.length - 1 && (
                  <span className="mr-1.5 h-1 w-1 rounded-full bg-gray-3" />
                )}
              </Fragment>
            ))}
          </div>
        )}
        <Tag className="line-clamp-3 text-xl font-bold leading-snug transition-colors duration-200 group-hover:text-primary-1 md:text-22 text-black dark:text-white">
          {title}
        </Tag>
        <p className="line-clamp-4 mt-2 text-base leading-normal text-black/60 dark:text-gray-2">
          {summary}
        </p>
      </article>
    </Link>
  );
};

Cover.propTypes = {
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }),
  title: PropTypes.string,
};

Cover.defaultProps = {
  ogImage: null,
  title: null,
};

Card.propTypes = {
  titleTag: PropTypes.string,
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }),
  externalUrl: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  place: PropTypes.string,
  title: PropTypes.string.isRequired,
  from: PropTypes.string,
  ogSummary: PropTypes.string,
  className: PropTypes.string,
};

Card.defaultProps = {
  titleTag: 'h3',
  ogImage: null,
  ogSummary: null,
  place: null,
  from: null,
  className: null,
};

export default Card;
