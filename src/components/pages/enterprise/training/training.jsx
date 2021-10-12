import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'Training';
const description =
  'The following partners offer Cilium related training in accordance with the  training partner requirements of the Cilium project.';
const items = [
  {
    author: 'by Isovalent',
    title: 'Getting started with Cilium',
    buttonUrl: '',
    buttonText: 'Coming soon',
  },
];
const Training = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <p
        className="md:text-lg with-link-primary max-w-[592px] mt-5"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="grid grid-cols-1 max-w-[1008px] mt-8 md:mt-10 lg:mt-14 gap-y-8">
        {items.map(({ author, title, buttonUrl, buttonText }, index) => (
          <div
            className="flex flex-col items-start p-6 pt-4 space-y-3 border rounded-lg sm:space-y-0 md:px-8 md:py-6 sm:items-center sm:space-x-8 sm:justify-between sm:flex-row border-gray-3"
            key={index}
          >
            <div>
              <span className="text-sm font-medium leading-none md:text-base md:leading-none text-gray-1">
                {author}
              </span>
              <h3 className="mt-1.5 text-xl font-bold leading-snug lg:leading-snug lg:text-2xl">
                {title}
              </h3>
            </div>
            <Button to={buttonUrl} disabled={!buttonUrl}>
              {buttonText}
            </Button>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Training;
