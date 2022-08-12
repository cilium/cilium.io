import React from 'react';

import Button from 'components/shared/button';
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
      <div className="flex flex-col justify-between space-y-10 border-b border-gray-3 pb-10 lg:flex-row lg:space-y-0">
        <div className="flex flex-col space-y-2.5">
          <Heading tag="h2" size="md">
            Cilium Logo
          </Heading>
          <p className="flat-breaks lg:flat-none xl:flat-breaks">
            Logo is a crucial part of our brand and one of our most valuable assets. <br /> We must
            ensure its proper usage.
          </p>
        </div>
        <Button to="/" className="!px-7 lg:self-end" theme="outline">
          Download Logo ZIP
        </Button>
      </div>
      <div className="mt-10">
        <Heading tag="h3" theme="gray" size="3xs">
          Light background
        </Heading>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
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
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
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
            Icon is an identifying mark or symbol that doesn&apos;t contain the business name, like
            a drawing or image that represents the business. Icon should only be used in cases where
            a company icon or avatar is required (traditionally constrained to a perfect square or
            circle). In all other cases, use the logo.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default Logos;
