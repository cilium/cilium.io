import clsx from 'clsx';
import ImageUniversal from 'components/shared//image-universal';
import DateAndPlace from 'components/shared/date-and-place';
import Label from 'components/shared/label';
import conferenceSvg from 'images/conference.svg';
import meetupSvg from 'images/meetup.svg';
import webinarSvg from 'images/webinar.svg';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link/link';

const Card = ({ type, title, description, ogImage, date, place, linkUrl, className }) => {
  const placeholderImages = {
    Meetup: meetupSvg,
    Conference: conferenceSvg,
    Webinar: webinarSvg,
  };

  const placeholder = placeholderImages[type];
  const imageUrl = ogImage?.publicURL;

  return (
    <div
      className={clsx(
        'border-gray-90 hover:drop-shadow-book flex h-full flex-col self-stretch rounded-lg border bg-white',
        className
      )}
    >
      <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
        {(ogImage || imageUrl) && (
          <ImageUniversal
            gatsbyClassName="rounded-t-lg h-[182px] lg:h-[15vw] md:h-[24vw] sm:h-auto sm:max-h-none bg-gray-98"
            gatsbyImgClassName="mix-blend-multiply"
            svgClassName="mix-blend-multiply rounded-t-lg h-[182px] w-full lg:h-[15vw] md:h-[24vw] sm:h-auto sm:max-h-none object-contain bg-gray-98"
            imageSrc={ogImage}
            imageUrl={imageUrl}
            width={733}
            height={383}
            alt={title}
          />
        )}

        {!ogImage && (
          <img
            className="bg-gray-98 h-[182px] w-full self-center rounded-t-lg object-contain sm:h-auto md:h-[24vw] lg:h-[15vw]"
            src={placeholder || placeholderImages.Events}
            alt={title}
            width={733}
            height={383}
            loading="lazy"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6 pt-5 xs:p-4">
        <Label type={type} />
        <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="mt-2.5 font-sans text-2xl font-semibold leading-tight line-clamp-2 sm:text-xl">
            {title}
          </h3>
        </Link>
        <div
          className="with-link-blue text-gray-40 mt-2 mb-5 text-base font-light leading-snug line-clamp-3 "
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <DateAndPlace
          className="border-gray-90 mt-auto border-t border-dashed pt-5"
          date={date}
          place={place}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.object,
    }),
    publicURL: PropTypes.string,
  }),
  date: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  description: null,
  ogImage: null,
  className: null,
};

export default Card;
