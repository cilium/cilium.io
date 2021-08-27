import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import GuideSvg from './images/guide.inline.svg';
import InstallFestSvg from './images/installfest.inline.svg';

const title = 'Try Cilium';
const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';
const items = [
  {
    icon: GuideSvg,
    name: 'Getting Started Guide',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    buttonUrl: '/',
    buttonText: 'Start Learn Cilium',
  },
  {
    icon: InstallFestSvg,
    name: 'Weekly InstallFest',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    buttonUrl: '/',
    buttonText: 'Check Calendly',
  },
];

const TryCilium = () => (
  <section className="pt-24 pb-28 bg-gray-3">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <p className="mt-5 text-lg">{description}</p>
      <div className="grid grid-cols-2 gap-8 mt-14">
        {items.map(({ icon: Icon, name, text, buttonUrl, buttonText }, index) => (
          <div
            className="flex flex-col items-center px-8 pt-12 bg-white border rounded-lg pb-11 border-gray-2"
            key={index}
          >
            <Icon />
            <Heading className="mt-16" size="sm" tag="h3">
              {name}
            </Heading>
            <p className="text-lg text-center mt-2.5">{text}</p>
            <Button className="mt-5" to={buttonUrl}>
              {buttonText}
            </Button>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default TryCilium;
