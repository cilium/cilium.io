import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const title = 'Featured talks';

const videoUrls = [
  {
    thumbnail: 'card1',
    url: 'https://youtu.be/vNuEx0wB_-4',
    title: 'The State & Future of eBPF',
    text: 'Thomas Graf, Isovalent',
  },
  {
    thumbnail: 'card2',
    url: 'https://youtu.be/u-4naOMfs_w',
    title: 'eBPF & Cilium at Sky',
    text: 'Sebastian Duff, Anthony Comtois, Joseph Samuel',
  },
  {
    thumbnail: 'card3',
    url: 'https://youtu.be/80OYrzS1dCA?t=437',
    title: 'eCHO Liz Rice &  Thomas Graf',
    text: 'Introduction to Cilium',
  },
];

const FeaturedTalks = () => {
  const { card1, card2, card3, card4 } = useStaticQuery(graphql`
    query {
      card1: file(relativePath: { eq: "pages/home/featured-talks/card-1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 608)
        }
      }
      card2: file(relativePath: { eq: "pages/home/featured-talks/card-2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 608)
        }
      }
      card3: file(relativePath: { eq: "pages/home/featured-talks/card-3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 608)
        }
      }
    }
  `);
  const placeholders = { card1, card2, card3, card4 };
  return (
    <section className="mt-10 md:mt-20 lg:mt-28">
      <Container>
        <Heading tag="h2">{title}</Heading>
        <div className="grid grid-cols-1 gap-4 mt-6 md:mt-10 md:gap-6 lg:gap-8 lg:mt-14 md:grid-cols-3">
          {videoUrls.map(({ thumbnail, url, title, text }, index) => {
            const card = placeholders[thumbnail];
            return (
              <div key={index}>
                <Link className="" to={url} target="_blank" rel="noopener noreferrer">
                  <GatsbyImage
                    className="w-full h-auto border rounded-lg border-gray-3"
                    imgClassName="rounded-lg"
                    image={getImage(card)}
                    alt={title}
                  />
                </Link>
                <Heading className="mt-4 md:mt-6" tag="h3" size="xs">
                  {title}
                </Heading>
                <p className="md:mt-1.5 lg:text-lg">{text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

FeaturedTalks.propTypes = {
  className: PropTypes.string,
};

FeaturedTalks.defaultProps = {
  className: null,
};

export default FeaturedTalks;
