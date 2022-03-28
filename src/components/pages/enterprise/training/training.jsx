import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import IsovalentLogo from 'icons/logo-isovalent.inline.svg';

const title = 'Training';
const description =
  'The following partners offer Cilium related training in accordance with the training partner requirements of the Cilium project.';

const isovalent = {
  title: 'Getting started with Cilium',
  description:
    'Quickly get started with Cilium. Read the documentation or use our interactive tutorial in a live environment.',
  buttonText: 'Coming soon',
};
const Training = () => (
  <section className="py-10 md:py-20 lg:py-28">
    <Container className="flex space-y-10 xl:space-y-0 xl:space-x-28  xl:items-center flex-col xl:flex-row">
      <div className="xl:max-w-[384px]">
        <Heading tag="h2">{title}</Heading>
        <p
          className="md:text-lg with-link-primary mt-5"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="flex-grow pt-9 pb-20 bg-grid bg-cover sm:bg-contain bg-center bg-no-repeat">
        <div className="max-w-[384px] relative mx-auto z-10 flex flex-col text-center px-8 pb-8 pt-11 shadow-card bg-white rounded-xl">
          <IsovalentLogo className="h-10 w-auto" />
          <Heading className="mt-10" size="2xs" tag="h3">
            {isovalent.title}
          </Heading>
          <p className="mt-2.5">{isovalent.description}</p>
          <Button className="self-center mt-7" theme="primary-1" disabled>
            {isovalent.buttonText}
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default Training;
