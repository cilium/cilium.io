import classNames from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';
import { PopupButton } from 'react-calendly';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import SvgAndGatsbyImage from 'components/shared/svg-and-gatsby-image';

import svgIllustration1 from './images/illustration1.svg';
import svgIllustration2 from './images/illustration2.svg';

const title = 'Get Hands-On With Cilium';

const buttonThemesClassNames = {
  primary:
    'text-white bg-primary-1 hover:bg-hover-1 disabled:opacity-25 disabled:hover:bg-primary-1  focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-2 outline-none',
  'outline-gray': 'border-2 border-gray-3 hover:text-primary-1',
};

const buttonIconClassNames = {
  base: 'relative !pl-11 lg:!pl-14 after:absolute after:w-[22px] after:h-[22px] after:left-3.5 lg:after:left-6 after:top-1/2 after:-translate-y-1/2',
  eu: 'after:bg-eu',
  usa: 'after:bg-usa',
};

const HandsOn = () => {
  const { imageIllustration1, imageIllustration2 } = useStaticQuery(graphql`
    query {
      imageIllustration1: file(relativePath: { eq: "pages/get-involved/hands-on/thomasgraf.png" }) {
        childImageSharp {
          gatsbyImageData(width: 224, quality: 95)
        }
      }
      imageIllustration2: file(
        relativePath: { eq: "pages/get-involved/hands-on/thomasgraf-lizrice.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 95)
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
        gatsbyImageHeight: 112,
        gatsbyImageX: 240,
        gatsbyImageY: 72,
      },
      title: 'Weekly Interactive Cilium<br/>Introduction and Live Q&A',
      description: 'With Thomas Graf, Cilium Co-Creator',
      buttons: [
        {
          title: 'Book a Seat',
          url: 'https://calendly.com/cilium-events/cilium-introduction',
          theme: 'primary',
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
        gatsbyImageHeight: 100,
        gatsbyImageX: 201,
        gatsbyImageY: 78,
      },
      title: 'Monthly Community InstallFest',
      description:
        'Join us at our monthly InstallFest and learn how to setup and get started with Cilium.',
      buttons: [
        {
          title: 'Join Europe',
          url: 'https://calendly.com/cilium-events/cilim-installfest-emea',
          theme: 'outline-gray',
          iconName: 'eu',
          isPopup: true,
        },
        {
          title: 'Join America',
          url: 'https://calendly.com/cilium-events/cilium-installfest-na',
          theme: 'outline-gray',
          iconName: 'usa',
          isPopup: true,
        },
      ],
    },
  ];
  return (
    <section className="mt-10 md:mt-20 lg:mt-28 xl:mt-40">
      <Container>
        <Heading className="xs:text-center" tag="h2">
          {title}
        </Heading>
        <ul className="mt-6 grid gap-y-8 md:mt-10 md:grid-cols-2 md:gap-x-8 lg:mt-14">
          {items.map(({ imageData, title, description, buttons }, index) => (
            <li className="flex flex-col rounded-xl shadow-card" key={index}>
              <SvgAndGatsbyImage className="self-center" {...imageData} />
              <div className="flex grow flex-col px-8 pt-4 pb-8 text-center">
                <Heading size="xs" tag="h3" asHTML>
                  {title}
                </Heading>
                <p className="mt-2.5 mb-5 md:text-lg lg:mb-7">{description}</p>
                <div className="mt-auto flex flex-col items-center justify-center space-y-3 xs:flex-row xs:space-y-0 xs:space-x-3 md:flex-col md:space-x-0 md:space-y-4 lg:flex-row lg:space-y-0 lg:space-x-5">
                  {buttons.map(({ title, url, theme, iconName, isPopup }, index) => (
                    <Fragment key={index}>
                      {isPopup ? (
                        <PopupButton
                          url={url}
                          className={classNames(
                            'inline-flex cursor-pointer justify-center whitespace-nowrap rounded py-2.5 px-3.5 text-base font-bold !leading-none transition-colors duration-200 disabled:cursor-auto md:py-3 md:px-5 lg:py-4 lg:px-6 lg:text-lg',
                            buttonThemesClassNames[theme],
                            iconName && buttonIconClassNames.base,
                            iconName && buttonIconClassNames[iconName]
                          )}
                          text={title}
                        />
                      ) : (
                        <Button className="border-2" to={url} theme={theme}>
                          {title}
                        </Button>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HandsOn;
