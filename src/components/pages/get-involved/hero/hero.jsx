import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import SvgAndGatsbyImage from 'components/shared/svg-and-gatsby-image';

import svgIllustration from './images/illustration.svg';

const title = 'Join the Cilium community';
const description =
  "Cilium is an open source project that anyone in the community can use, improve, and enjoy. We'd love you to join us! Here's a few ways to find out what's happening and get involved.";

const Hero = () => {
  const { heroImage } = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "pages/get-involved/hero/hero-image.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1040, quality: 95)
        }
      }
    }
  `);

  const imageData = {
    width: 590,
    height: 444,
    imageSrc: svgIllustration,
    gatsbyImage: heroImage,
    gatsbyImageWidth: 519,
    gatsbyImageHeight: 391,
    gatsbyImageX: 40,
    gatsbyImageY: 23,
    loading: 'eager',
  };

  return (
    <section className="bg-gray-4 pb-0 pt-5 lg:py-10">
      <Container className="grid grid-cols-12 items-center gap-y-10 lg:gap-y-0 lg:gap-x-8">
        <div className="col-span-full lg:col-span-5">
          <Heading tag="h1" size="lg">
            {title}
          </Heading>
          <p className="mt-5 text-lg">{description}</p>
        </div>
        <div className="col-span-full  justify-self-center lg:col-span-7">
          <SvgAndGatsbyImage {...imageData} />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
