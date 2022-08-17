import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import fullLogo from './images/full-logo.svg';
import icon from './images/icon.svg';
import LogoDark1 from './images/logo-dark-1.inline.svg';
import LogoDark2 from './images/logo-dark-2.inline.svg';
import LogoDark3 from './images/logo-dark-3.inline.svg';
import LogoDark4 from './images/logo-dark-4.inline.svg';
import LogoLight1 from './images/logo-light-1.inline.svg';
import LogoLight2 from './images/logo-light-2.inline.svg';
import LogoLight3 from './images/logo-light-3.inline.svg';
import LogoLight4 from './images/logo-light-4.inline.svg';

const logos = {
  light1: LogoLight1,
  light2: LogoLight2,
  light3: LogoLight3,
  light4: LogoLight4,
  dark1: LogoDark1,
  dark2: LogoDark2,
  dark3: LogoDark3,
  dark4: LogoDark4,
};

const logosDark = [
  { logoName: 'dark1' },
  { logoName: 'dark2' },
  { logoName: 'dark3' },
  { logoName: 'dark4' },
];

const logosLight = [
  { logoName: 'light1' },
  { logoName: 'light2' },
  { logoName: 'light3' },
  { logoName: 'light4' },
];

const Logos = () => (
  <section className="relative bg-white pt-16 md:pt-24 lg:pt-28">
    <Container>
      <div className="flex flex-col items-start space-y-10 border-b border-gray-3 pb-10 lg:flex-row lg:justify-between lg:space-y-0">
        <div className="flex flex-col space-y-2.5">
          <Heading tag="h2" size="md">
            Cilium Logo
          </Heading>
          <p className="flat-breaks lg:flat-none xl:flat-breaks">
            Our logo is in the shape of a honeycomb to represent the Cilium hive. <br /> Please use
            use it correctly and help us grow community.
          </p>
        </div>
        <a
          download="cilium-logos.zip"
          href="/data/cilium-logos.zip"
          className="inline-flex w-full justify-center whitespace-nowrap rounded border-2 border-black py-3 px-5 text-base font-bold !leading-none outline-none transition-colors duration-200 hover:border-gray-1 hover:text-gray-1 focus-visible:ring focus-visible:ring-primary-2 focus-visible:ring-offset-2 disabled:cursor-auto disabled:bg-opacity-40 md:w-auto lg:self-end lg:py-4 lg:px-7 lg:text-lg"
        >
          Download Logo ZIP
        </a>
      </div>
      <div className="mt-10">
        <Heading tag="h3" theme="gray" size="3xs">
          Light background
        </Heading>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {logosLight.map(({ logoName }, index) => {
            const Logo = logos[logoName];
            return (
              <div
                className="flex items-center justify-center rounded-xl bg-gray-4 px-11 py-9"
                key={index}
              >
                <Logo className="shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-12">
        <Heading tag="h3" theme="gray" size="3xs">
          Dark background
        </Heading>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {logosDark.map(({ logoName }, index) => {
            const Logo = logos[logoName];
            return (
              <div
                className="flex items-center justify-center rounded-xl bg-gray-7 px-11 py-9"
                key={index}
              >
                <Logo className="shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center md:mt-20 lg:mt-28 lg:flex-row lg:space-x-36 xl:mt-48">
        <div className="flex flex-col space-y-2.5">
          <Heading tag="h2" size="lg">
            Full logo
          </Heading>
          <p className="text-lg leading-relaxed lg:max-w-[488px]">
            Our logo is the combination of a simple wordmark and the icon. When using the logo with
            other logos and graphic elements, please, observe the clean space around the logo to
            maximize visual effectiveness.
          </p>
        </div>
        <img src={fullLogo} alt="Cilium logo" width={592} height={406} />
      </div>
      <div className="mt-10 flex flex-col items-center md:mt-16 lg:mt-24 lg:flex-row lg:space-x-36 xl:mt-32">
        <img className="order-2 lg:order-1" src={icon} alt="Cilium icon" width={592} height={406} />
        <div className="order-1 flex flex-col space-y-2.5 lg:order-2">
          <Heading tag="h2" size="lg">
            Cilium icon
          </Heading>
          <p className="text-lg leading-relaxed lg:max-w-[488px]">
            Our icon is our identifying mark that doesn&apos;t contain the name. The icon should
            only be used in cases where it is required (traditionally constrained to a perfect
            square or circle). In all other cases, use the logo.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default Logos;
