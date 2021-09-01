import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'Training';
const description = `The following partners offer Cilium related training in accordance with the <a href="#">training partner</a> requirements of the Cilium project.`;
const items = [
  {
    author: 'by Isovalent',
    title: 'Getting started with Cilium',
    buttonUrl: '/',
    buttonText: 'Learn more',
  },
  {
    author: 'by Cloud Native',
    title: 'Securing Kubernetes with Network Policies',
    buttonUrl: '/',
    buttonText: 'Learn more',
  },
  {
    author: 'by Amazon',
    title: 'Security & Network Obsrvability for Kubernetes',
    buttonUrl: '/',
    buttonText: 'Learn more',
  },
];
const Training = () => (
  <section className="mt-20 lg:mt-28">
    <Container size="sm">
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <p
        className="text-lg text-center with-link-primary max-w-[670px] mx-auto mt-5"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="grid grid-cols-1 mt-10 lg:mt-14 gap-y-8">
        {items.map(({ author, title, buttonUrl, buttonText }, index) => (
          <div
            className="flex flex-col items-start px-8 py-5 space-y-8 border rounded-lg sm:space-y-0 sm:items-center sm:space-x-8 sm:justify-between sm:flex-row border-gray-3"
            key={index}
          >
            <div>
              <span className="leading-none text-gray-1">{author}</span>
              <h3 className="mt-2 text-xl font-bold lg:text-2xl">{title}</h3>
            </div>
            <Button to={buttonUrl}>{buttonText}</Button>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Training;
