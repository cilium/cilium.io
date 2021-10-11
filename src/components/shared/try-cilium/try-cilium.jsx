import classNames from 'classnames';
import React from 'react';
import { PopupButton } from 'react-calendly';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import GuideSvg from './images/guide.inline.svg';
import InstallFestSvg from './images/installfest.inline.svg';

const title = 'Get Hands-On With Cilium';
const items = [
  {
    icon: GuideSvg,
    name: 'Do it yourself Tutorials',
    text: 'Check out the Cilium documentation to quickly get started on a Kubernetes cluster of your choice.',
    buttons: [
      {
        buttonUrl: 'https://docs.cilium.io/en/v1.10/',
        buttonText: 'Learn more',
        buttonTarget: '_blank',
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
];

const TryCilium = () => (
  <section className="py-10 mt-12 md:pt-16 md:pb-20 md:mt-20 lg:pt-24 lg:mt-28 lg:pb-28 bg-gray-4">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 gap-4 mt-6 md:gap-6 lg:gap-8 md:mt-10 md:grid-cols-2 lg:mt-14">
        {items.map(({ icon: Icon, name, text, buttons }, index) => {
          const has2Buttons = buttons.length === 2;
          return (
            <div className="flex flex-col bg-white border rounded-lg border-gray-3" key={index}>
              <Icon className="w-full h-auto" />
              <div className="flex flex-col items-center flex-grow p-6 pb-8 md:px-8 md:pt-6 md:pb-11">
                <Heading className="!leading-normal text-center" size="sm" tag="h3">
                  {name}
                </Heading>
                <p className="md:text-lg text-center mt-2.5 mb-5">{text}</p>
                <div
                  className={classNames(
                    'mt-auto',
                    has2Buttons && 'grid xs:grid-cols-2 gap-3 lg:gap-x-5'
                  )}
                >
                  {has2Buttons
                    ? buttons.map(({ buttonUrl, buttonText }, index) => (
                        <Button key={index}>
                          <PopupButton
                            url={buttonUrl}
                            styles={{ fontWeight: 700 }}
                            text={buttonText}
                          />
                        </Button>
                      ))
                    : buttons.map(({ buttonText, buttonUrl, buttonTarget }, index) => (
                        <Button key={index} to={buttonUrl} target={buttonTarget || ''}>
                          {buttonText}
                        </Button>
                      ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);

export default TryCilium;
