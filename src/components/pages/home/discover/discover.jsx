import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button/button';
import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

const title = 'Discover Cilium';
const description =
  'Join us at our weekly InstallFest Meetup, learn and discuss how to setup and get started with Cilium.';
const buttonText = 'Discover Now';
const buttonUrl = '/learn';

const Discover = () => {
  const { illustration } = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "pages/home/discover/illustration.png" }) {
        childImageSharp {
          gatsbyImageData(width: 191)
        }
      }
    }
  `);
  return (
    <section className="mt-10 md:mt-20 lg:mt-28 xl:mt-32">
      <Container>
        <div className="flex flex-col sm:flex-row max-w-[976px] justify-between items-center space-y-8 sm:space-y-0 sm:space-x-10 sm:mr-8">
          <div>
            <Heading tag="h2" size="sm">
              {title}
            </Heading>
            <p className="mt-2.5 md:text-lg max-w-xl">{description}</p>
            <Button className="mt-6" to={buttonUrl}>
              {buttonText}
            </Button>
          </div>
          <GatsbyImage image={getImage(illustration)} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Discover;
