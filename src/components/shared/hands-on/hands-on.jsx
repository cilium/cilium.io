import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import CardItem from 'components/shared/card-item';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import svgIllustration2 from 'images/documentation.svg';
import svgIllustration1 from 'images/weekly-introduction.svg';

const title = 'Get Hands-On With Cilium';

const HandsOn = () => {
  const { imageIllustration1, imageIllustration2 } = useStaticQuery(graphql`
    query {
      imageIllustration1: file(relativePath: { eq: "pages/get-started/hands-on/bee.png" }) {
        childImageSharp {
          gatsbyImageData(width: 92, quality: 95)
        }
      }

      imageIllustration2: file(relativePath: { eq: "pages/get-started/hands-on/bee1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 92, quality: 95)
        }
      }
    }
  `);

  const items = [
    {
      imageData: {
        width: 384,
        height: 224,
        imageSrc: svgIllustration1,
        gatsbyImage: imageIllustration1,
        gatsbyImageWidth: 92,
      },
      name: 'Interactive Cilium<br/>Introduction and Live Q&A',
      text: 'With a Cilium and eBPF expert',
      buttons: [
        {
          url: 'https://calendly.com/cilium-events/cilium-introduction',
          title: 'Book your seat',
          isPopup: true,
          theme: 'outline-gray-dark',
        },
      ],
    },

    {
      svgData: {
        width: 384,
        height: 224,
        imageSrc: svgIllustration2,
      },
      name: 'Documentation & Tutorials',
      text: 'Quickly get started with Cilium. Read the documentation or use our interactive tutorial in a live environment.',
      buttons: [
        {
          url: 'https://docs.cilium.io/en/stable/',
          title: 'Documentation',
          target: '_blank',
          theme: 'outline-gray-dark',
        },
        {
          url: '/enterprise#trainings',
          title: 'Tutorials',
          theme: 'outline-gray-dark',
        },
      ],
    },

    {
      imageData: {
        width: 384,
        height: 224,
        imageSrc: svgIllustration1,
        gatsbyImage: imageIllustration2,
        gatsbyImageWidth: 92,
      },
      name: 'Interactive Labs',
      text: 'Deep dive into Cilium and its features with labs provided by companies within the Cilium ecosystem',
      buttons: [
        {
          url: '/labs',
          title: 'Check out the labs',
          theme: 'outline-gray-dark',
        },
      ],
    },
  ];

  return (
    <section className="mt-10 md:mt-20 lg:mt-32">
      <Container>
        <Heading className="text-center" tag="h2">
          {title}
        </Heading>
        <ul className="grid mt-6 gap-y-8 md:mt-10 md:grid-cols-2 md:gap-x-8 lg:mt-14">
          {items.map((item, index) => (
            <CardItem {...item} key={index} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HandsOn;
