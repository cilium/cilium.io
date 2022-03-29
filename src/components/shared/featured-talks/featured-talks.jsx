import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
    text: 'eBPF Summit 2021, Thomas Graf, Co-Founder & CTO, Isovalent, Chair GB eBPF Foundation',
  },
  {
    thumbnail: 'card2',
    url: 'https://youtu.be/u-4naOMfs_w',
    title: 'eBPF & Cilium at Sky',
    text: 'Sebastian Duff, Anthony Comtois, Joseph Samuel, Sky',
  },
  {
    thumbnail: 'card3',
    url: 'https://youtu.be/80OYrzS1dCA?t=437',
    title: 'Introduction to Cilium with Liz Rice &  Thomas Graf',
    text: 'eCHO Stream, Liz Rice, Chief Open Source Officer, Isovalent, Thomas Graf, Co-Creator Cilium',
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
    <section className="mt-10 md:mt-20 lg:mt-32">
      <Container>
        <Heading tag="h2" className="text-center">
          {title}
        </Heading>
        <div className="mt-6 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-6 lg:mt-14 lg:gap-8">
          {videoUrls.map(({ thumbnail, url, title, text }, index) => {
            const card = placeholders[thumbnail];
            return (
              <div key={index}>
                <Link className="" to={url} target="_blank" rel="noopener noreferrer">
                  <GatsbyImage
                    className="h-auto w-full rounded-lg border border-gray-3"
                    imgClassName="rounded-lg"
                    image={getImage(card)}
                    alt={title}
                  />
                </Link>
                <Heading className="mt-3 !text-xl md:mt-5" tag="h3" size="xs">
                  {title}
                </Heading>
                <p className="md:mt-2">{text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedTalks;
