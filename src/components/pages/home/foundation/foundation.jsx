import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'Founded by Isovalent. Built by the Community';
const buttonText = 'Visit Isovalent';
const buttonUrl = 'https://isovalent.com/';

const Foundation = () => {
  const { illustration } = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "pages/home/foundation/illustration.png" }) {
        childImageSharp {
          gatsbyImageData(width: 900, quality: 95, formats: [PNG])
        }
      }
    }
  `);
  return (
    <section className="bg-dark-blue py-16 mt-10 md:mt-20 lg:mt-28">
      <Container className="grid grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-8 items-center">
        <div className="col-span-full lg:col-span-5">
          <Heading className="text-white leading-normal lg:leading-normal" tag="h2" size="lg">
            {title}
          </Heading>
          <Button
            className="mt-8"
            to={buttonUrl}
            theme="primary-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </Button>
        </div>
        <div className="col-span-full justify-self-center lg:col-start-7 lg:col-end-13 lg:justify-self-start lg:max-w-[540px]">
          <GatsbyImage image={getImage(illustration)} alt={title} />
        </div>
      </Container>
    </section>
  );
};

export default Foundation;
