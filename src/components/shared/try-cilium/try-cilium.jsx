import React from 'react';

import CardItem from 'components/shared/card-item';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import GuideSvg from 'icons/guide.inline.svg';
import InstallFestSvg from 'icons/installfest.inline.svg';

const title = 'Get Hands-On With Cilium';
const items = [
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
    name: 'Do it yourself Tutorials',
    text: 'Check out the Cilium documentation to quickly get started on a Kubernetes cluster of your choice.',
    buttons: [
      {
        buttonUrl: 'https://docs.cilium.io/en/stable/',
        buttonText: 'Learn more',
        buttonTarget: '_blank',
      },
    ],
  },
];

const TryCilium = () => (
  <section className="py-10 mt-12 md:pt-16 md:pb-20 md:mt-20 lg:pt-24 lg:mt-28 lg:pb-28 bg-gray-4">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 gap-4 mt-6 md:gap-6 lg:gap-8 md:mt-10 md:grid-cols-2 lg:mt-14">
        {items.map((item, index) => (
          <CardItem {...item} key={index} />
        ))}
      </div>
    </Container>
  </section>
);

export default TryCilium;
