import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import GuideSvg from './images/guide.inline.svg';
import InstallFestSvg from './images/installfest.inline.svg';

const title = 'Try Cilium';
const items = [
  {
    icon: GuideSvg,
    name: 'Getting Started Guide',
    text: 'Check out the Cilium documentation to quickly get started on a Kubernetes cluster of your choice.',
    buttonUrl: 'https://docs.cilium.io/en/stable/gettingstarted/k8s-install-default/',
    buttonText: 'Start Learn Cilium',
    buttonTarget: '_blank',
  },
  {
    icon: InstallFestSvg,
    name: 'Weekly InstallFest',
    text: 'Join us at our weekly InstallFest Meetup, learn and discuss how to setup and get started with Cilium.',
    buttonUrl: '/',
    buttonText: 'Coming soon',
  },
];

const TryCilium = () => (
  <section className="pt-16 pb-20 mt-20 lg:pt-24 lg:mt-28 lg:pb-28 bg-gray-4">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-14">
        {items.map(({ icon: Icon, name, text, buttonUrl, buttonText, buttonTarget }, index) => (
          <div className="flex flex-col bg-white border rounded-lg border-gray-3" key={index}>
            <Icon className="w-full h-auto" />
            <div className="flex flex-col items-center px-8 pt-6 pb-11 ">
              <Heading className="!leading-normal" size="sm" tag="h3">
                {name}
              </Heading>
              <p className="text-lg text-center mt-2.5">{text}</p>
              <Button className="mt-5" target={buttonTarget || ''} to={buttonUrl}>
                {buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default TryCilium;
