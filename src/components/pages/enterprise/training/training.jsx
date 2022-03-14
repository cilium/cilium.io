import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import IsovalentLogo from 'icons/logo-isovalent.inline.svg';

const title = 'Training';
const description =
  'The following partners offer Cilium related training in accordance with the  training partner requirements of the Cilium project.';
const items = [
  {
    logo: IsovalentLogo,
    title: 'Getting started with Cilium',
    buttonUrl: '',
    buttonText: 'Coming soon',
  },
];
const Training = () => (
  <section className="my-10 md:my-20 lg:my-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <p
        className="md:text-lg with-link-primary max-w-[592px] mt-5"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="grid grid-cols-1 max-w-[1008px] mt-8 md:mt-10 lg:mt-14 gap-y-8">
        {items.map(({ logo: Logo, title, buttonUrl, buttonText }, index) => (
          <div
            className="flex flex-col items-start p-6 pt-4 border rounded-lg md:px-8 md:py-6 sm:justify-between border-gray-3"
            key={index}
          >
            <Logo />
            <div className="flex flex-col items-start justify-between w-full pt-6 mt-6 space-y-4 border-t sm:space-y-0 sm:flex-row sm:space-x-10 border-gray-3">
              <h3 className="mt-1.5 text-xl font-bold leading-snug lg:leading-snug lg:text-2xl">
                {title}
              </h3>
              <Button to={buttonUrl} disabled={!buttonUrl}>
                {buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Training;
