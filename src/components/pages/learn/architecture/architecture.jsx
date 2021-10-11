import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

const title = 'Architecture';
const description =
  'Cilium consists of an agent running on all cluster nodes and servers in your environment.  It provides networking, security, and observability to the workloads running on that node. Workloads can be containerized or running natively on the system.';

const Architecture = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "pages/learn/architecture/image.png" }) {
        childImageSharp {
          gatsbyImageData(width: 696)
        }
      }
    }
  `);
  return (
    <section className="mt-10 md:mt-20 lg:mt-28">
      <Container className="grid grid-cols-12 gap-y-6 gap-x-8">
        <div className="col-span-full lg:col-span-5">
          <Heading tag="h2">{title}</Heading>
          <p className="mt-5 md:text-lg">{description}</p>
        </div>
        <div className="mx-auto col-span-full lg:col-span-7">
          <GatsbyImage image={getImage(image)} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Architecture;
