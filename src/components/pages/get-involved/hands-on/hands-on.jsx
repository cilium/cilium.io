import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import CardItem from 'components/shared/card-item';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import svgIllustration1 from './images/illustration1.svg';
import svgIllustration2 from './images/illustration2.svg';

const title = 'Get Hands-On With Cilium';

const HandsOn = () => {
  const { imageIllustration1, imageIllustration2 } = useStaticQuery(graphql`
    query {
      imageIllustration1: file(relativePath: { eq: "pages/get-involved/hands-on/thomasgraf.png" }) {
        childImageSharp {
          gatsbyImageData(width: 112, quality: 95)
        }
      }
      imageIllustration2: file(
        relativePath: { eq: "pages/get-involved/hands-on/thomasgraf-lizrice.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 200, quality: 95)
        }
      }
    }
  `);
  const items = [
    {
      imageData: {
        width: 592,
        height: 256,
        imageSrc: svgIllustration1,
        gatsbyImage: imageIllustration1,
        gatsbyImageWidth: 112,
      },
      name: 'Weekly Interactive Cilium<br/>Introduction and Live Q&A',
      text: 'With Thomas Graf, Cilium Co-Creator',
      buttons: [
        {
          title: 'Book a Seat',
          url: 'https://calendly.com/cilium-events/cilium-introduction',
          theme: 'primary-1',
          isPopup: true,
        },
      ],
    },
    {
      imageData: {
        width: 592,
        height: 256,
        imageSrc: svgIllustration2,
        gatsbyImage: imageIllustration2,
        gatsbyImageWidth: 192,
      },
      name: 'Monthly Community InstallFest',
      text: 'Join us at our monthly InstallFest and learn how to setup and get started with Cilium.',
      buttons: [
        {
          title: 'Join Europe',
          url: 'https://calendly.com/cilium-events/cilim-installfest-emea',
          theme: 'outline-gray-dark',
          iconName: 'eu',
          isPopup: true,
        },
        {
          title: 'Join America',
          url: 'https://calendly.com/cilium-events/cilium-installfest-na',
          theme: 'outline-gray-dark',
          iconName: 'usa',
          isPopup: true,
        },
      ],
    },
  ];
  return (
    <section className="mt-16 md:mt-20 lg:mt-32">
      <Container>
        <Heading className="xs:text-center" tag="h2">
          {title}
        </Heading>
        <ul className="mt-6 grid gap-y-8 md:mt-10 md:grid-cols-2 md:gap-x-8 lg:mt-14">
          {items.map((item, index) => (
            <CardItem {...item} key={index} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HandsOn;
