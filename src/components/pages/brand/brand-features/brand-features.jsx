import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import fullLogo from './images/full-logo.svg';
import icon from './images/icon.svg';

const title = 'Cilium brand';
const description =
  'Cilium serves as our primary project. Logo is a crucial part of our brand and one of our most valuable assets. We must ensure its proper usage.';

const items = [
  {
    title: 'Primary logo',
    icon: fullLogo,
    description:
      'Our logo is the combination of a simple wordmark and the icon. When using the logo with other logos and graphic elements, please, observe the clean space around the logo to maximize visual effectiveness.',
  },
  {
    title: 'Cilium icon',
    icon,
    description:
      'An icon is a distinct symbol or image that represents the business, used exclusively when a company icon or avatar is needed (typically within a perfect square or circle). In all other instances, use the logo.',
  },
];

const BrandFeatures = () => (
  <section className="mt-16 md:mt-24 lg:mt-32">
    <Container>
      <Heading className="text-center" tag="h2" size="lg">
        {title}
      </Heading>
      <p className="mx-auto mt-4 max-w-[632px] text-center text-base leading-relaxed lg:text-lg">
        {description}
      </p>
      <ul className="gap-grid mt-8 grid grid-cols-12 gap-y-6 lg:mt-12">
        {items.map(({ title, description, icon }, index) => (
          <li
            className="col-span-full rounded-xl p-5 pt-2 shadow-[0px_1px_8px_0px_rgba(20,26,31,0.20)] md:col-span-6 lg:px-8 lg:pt-3 lg:pb-8"
            key={index}
          >
            <img
              className="w-full"
              src={icon}
              alt={title}
              width={528}
              height={261}
              loading="lazy"
            />
            <h3 className="mt-3 text-xl font-bold leading-snug lg:text-2xl">{title}</h3>
            <p className="mt-2.5 text-base lg:text-lg lg:leading-relaxed">{description}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default BrandFeatures;
