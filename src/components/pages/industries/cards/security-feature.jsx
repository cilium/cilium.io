import React from 'react';

import Container from 'components/shared/container/container';

const cyberContent = [
  {
    title: 'Monitor Process Execution',
    text: 'Observe the complete lifecycle of every process on your machine with Kubernetes context awareness',
  },
  {
    title: 'Monitor Process Execution',
    text: 'Observe the complete lifecycle of every process on your machine with Kubernetes context awareness',
  },
  {
    title: 'Monitor Process Execution',
    text: 'Observe the complete lifecycle of every process on your machine with Kubernetes context awareness',
  },
];

// eslint-disable-next-line import/prefer-default-export
export const SecurityFeatureCard = () => (
  <div>
    <Container>
      <div className="flex flex-col gap-10 lg:flex lg:flex-row">
        {cyberContent.map((content, index) => (
          <div key={index} className="rounded bg-white dark:bg-gray-2 px-10 py-8 shadow-lg">
            <div className="mx-auto mb-4 h-14 w-14 bg-[#D6F5D6]" />
            <h3 className="py-5 font-bold">{content.title}</h3>
            <p className="pb-6">{content.text}</p>
          </div>
        ))}
      </div>
    </Container>
  </div>
);
