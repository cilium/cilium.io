import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import CardSvg from './images/card.inline.svg';

const title = 'Featured talks';

const videoUrls = [
  { thumbnail: 'card1', url: 'https://youtu.be/vNuEx0wB_-4' },
  { thumbnail: 'card2', url: 'https://youtu.be/fNtG0iHYne4' },
  { thumbnail: 'card3', url: 'https://youtu.be/u-4naOMfs_w' },
  { thumbnail: 'card4', url: 'https://youtu.be/slBAYUDABDA' },
];

const FeaturedTalks = ({ className }) => {
  const { card1, card2, card3, card4 } = useStaticQuery(graphql`
    query {
      card1: file(relativePath: { eq: "pages/home/featured-talks/card-1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 228)
        }
      }
      card2: file(relativePath: { eq: "pages/home/featured-talks/card-2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 228)
        }
      }
      card3: file(relativePath: { eq: "pages/home/featured-talks/card-3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 228)
        }
      }
      card4: file(relativePath: { eq: "pages/home/featured-talks/card-4.png" }) {
        childImageSharp {
          gatsbyImageData(width: 228)
        }
      }
    }
  `);
  const placeholders = { card1, card2, card3, card4 };
  return (
    <div className={className}>
      <Heading tag="h3" theme="gray">
        {title}
      </Heading>
      <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 xs:grid-cols-2">
        {videoUrls.map(({ thumbnail, url }, index) => {
          const card = placeholders[thumbnail];
          return (
            <Link key={index} to={url} target="_blank" rel="noopener noreferrer">
              <GatsbyImage
                className="w-full h-auto rounded-lg rounded-image"
                image={getImage(card)}
                alt=""
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

FeaturedTalks.propTypes = {
  className: PropTypes.string,
};

FeaturedTalks.defaultProps = {
  className: null,
};

export default FeaturedTalks;
