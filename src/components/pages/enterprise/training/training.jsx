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
    <Container className="flex flex-col space-y-6 md:space-y-10 xl:flex-row  xl:items-center xl:space-y-0 xl:space-x-28">
      <div className="xl:max-w-[384px]">
        <Heading tag="h2">{title}</Heading>
        <p
          className="with-link-primary mt-5 text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="flex-grow bg-grid bg-cover bg-center bg-no-repeat pt-9 pb-11 sm:bg-contain md:pb-16 lg:pb-20">
        <div className="relative mx-auto flex max-w-[384px] flex-col rounded-xl bg-white px-8 pb-8 pt-11 text-center shadow-card">
          <IsovalentLogo className="h-10 w-auto" />
          <Heading className="mt-10" size="2xs" tag="h3">
            {isovalent.title}
          </Heading>
          <p className="mt-2.5">{isovalent.description}</p>
          <Button className="mt-7 self-center" theme="primary-1" disabled>
            {isovalent.buttonText}
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default Training;
