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
      imgClassName="self-center rounded-t-lg h-full max-h-[261px] sm:max-h-[221px] lg:max-h-[180px]"
      image={getImage(ogImage)}
      objectFit="cover"
      alt={title}
      loading="lazy"
    />
  ) : (
    <div
      className="flex w-full items-center justify-center rounded-t-lg bg-gray-4"
      ref={placeholder}
      style={{ height: placeholderHeight }}
    >
      <img className="h-full w-full py-2.5" src={placeholderIllustration} alt="" aria-hidden />
    </div>
  );
};

const Card = ({
  title,
  ogSummary: summary,
  externalUrl,
  place,
  categories,
  ogImage,
  className,
}) => (
  <Link
    to={externalUrl}
    className={classNames(
      'group flex flex-col rounded-lg border-2 border-gray-6 transition-all duration-200 hover:border-transparent hover:shadow-tertiary',
      className
    )}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Cover ogImage={ogImage} title={title} />
    <article className="flex grow flex-col p-5 text-left md:p-7 xl:p-8">
      <div className="flex flex-wrap items-center justify-start space-x-1.5 text-sm font-medium leading-none text-gray-1">
        {categories.map((item, index) => (
          <Fragment key={index}>
            <span className="text-sm font-normal leading-none">{item}</span>
            <span className="h-1 w-1 rounded-full bg-gray-3" />
          </Fragment>
        ))}
        <span className="text-sm font-normal leading-none">{place}</span>
      </div>
      <h3 className="mt-3 text-xl font-bold leading-snug transition-colors duration-200 line-clamp-3 group-hover:text-primary-1 md:text-22">
        {title}
      </h3>
      <p className="mt-2 text-base leading-normal text-black/60 line-clamp-4">{summary}</p>
    </article>
  </Link>
);

Cover.propTypes = {
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }),
  title: PropTypes.string.isRequired,
};

Cover.defaultProps = {
  ogImage: null,
};

Card.propTypes = {
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }),
  externalUrl: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  place: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ogSummary: PropTypes.string,
  className: PropTypes.string,
};

Card.defaultProps = {
  ogImage: null,
  ogSummary: null,
  className: null,
};

export default Card;
