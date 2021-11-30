import React from 'react';

import CardItem from 'components/shared/card-item';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import GuideSvg from 'icons/guide.inline.svg';
import InstallFestSvg from 'icons/installfest.inline.svg';
import IntroSvg from 'icons/intro.inline.svg';

const title = 'Hands-On With Cilium';
const items = [
  {
    icon: IntroSvg,
    name: 'Weekly Interactive Cilium Introduction and Live Q&A',
    text: 'with Thomas Graf, Cilium Co-Creator',
    buttons: [
      {
        buttonUrl: 'https://calendly.com/cilium-events/cilium-introduction',
        buttonText: 'Book your seat',
        isPopup: true,
      },
    ],
  },
  {
    icon: InstallFestSvg,
    name: 'Weekly Community InstallFest',
    text: 'Join us at our weekly InstallFest and learn how to setup and get started with Cilium.',
    buttons: [
      {
        buttonUrl: 'https://calendly.com/cilium-events/cilim-installfest-emea',
        buttonText: 'Join Europe',
      },
      {
        buttonUrl: 'https://calendly.com/cilium-events/cilium-installfest-na',
        buttonText: 'Join Americas',
      },
    ],
  },
  {
    icon: GuideSvg,
    name: 'Documentation &<br> Tutorials',
    text: 'Quickly get started with Cilium. Read the documentation or use our interactive tutorial in a live environment.',
    buttons: [
      {
        buttonUrl: 'https://docs.cilium.io/en/stable/',
        buttonText: 'Documentation',
        buttonTarget: '_blank',
      },
      {
        buttonUrl: 'https://play.instruqt.com/isovalent/invite/j4maqox5r1h5',
        buttonText: 'Tutorial',
        buttonTarget: '_blank',
      },
    ],
  },
];

const TryCilium = () => (
  <section className="py-10 mt-12 md:pt-16 md:pb-20 md:mt-20 lg:pt-24 lg:mt-28 lg:pb-28 bg-gray-4">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 gap-4 mt-6 md:gap-6 xl:gap-8 md:mt-10 lg:grid-cols-3 lg:mt-14">
        {items.map((item, index) => (
          <CardItem size="sm" {...item} key={index} />
        ))}
      </div>
    </Container>
  </section>
);

export default TryCilium;
