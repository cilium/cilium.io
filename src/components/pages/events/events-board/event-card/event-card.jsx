import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import TypeLabel from 'components/shared/type-label';
import useElementRect from 'hooks/use-element-rect';

import PlaceIcon from './images/place.inline.svg';
import placeholderIllustration from './images/placeholder.svg';
import TimeIcon from './images/time.inline.svg';

const EventCover = ({ ogImage, title }) => {
  const [rect, placeholder] = useElementRect();
  const { width = 0 } = rect ?? {};
  const placeholderHeight = width / 2.1;

  return ogImage ? (
    <GatsbyImage
      imgClassName="self-center rounded-t-lg"
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

const EventCard = ({
  ogImage,
  date,
  title,
  ogSummary: summary,
  type,
  externalUrl,
  place,
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
    <EventCover ogImage={ogImage} title={title} />
    <article className="flex grow flex-col p-5 md:p-7 xl:p-8">
      <div className="flex flex-wrap gap-2.5 gap-x-3 text-sm font-medium leading-none text-gray-1">
        <div className="inline-flex items-center gap-x-1.5">
          <TimeIcon className="w-3 shrink-0 text-gray-1" />
          <time className="text-sm font-normal leading-none" dateTime={date}>
            {date}
          </time>
        </div>
        <div className="flex items-center gap-x-1.5">
          <PlaceIcon className="w-3 shrink-0 text-gray-1" />
          <span className="text-sm font-normal leading-none">{place}</span>
        </div>
      </div>
      <h3 className="mt-3 text-xl font-bold leading-snug transition-colors duration-200 line-clamp-3 group-hover:text-primary-1 md:text-22">
        {title}
      </h3>
      <p className="mt-2 mb-4 text-base leading-normal text-black/60 line-clamp-5">{summary}</p>
      <TypeLabel type={type} className="mt-auto" />
    </article>
  </Link>
);

EventCover.propTypes = {
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }),
  title: PropTypes.string.isRequired,
};

EventCover.defaultProps = {
  ogImage: null,
};

EventCard.propTypes = {
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
  place: PropTypes.string.isRequired,
  className: PropTypes.string,
};

EventCard.defaultProps = {
  ogImage: null,
  externalUrl: null,
  ogSummary: null,
  className: null,
};

export default EventCard;
