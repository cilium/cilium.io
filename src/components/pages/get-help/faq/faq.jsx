import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Item from './item';

const title = 'FAQ';
const items = [
  {
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    question: 'eBPF and Cilium Office Hours - Highlights from Season 1',
    answer: 'eBPF and Cilium Office Hours - Highlights from Season 1',
  },
  {
    question:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<hr/>Cilium uses GitHub Tags to maintain a list of questions asked by users. We suggest checking to see if your question is already answered.',
  },
];

const Faq = () => (
  <section className="mt-10 md:mt-20 lg:mt-28 xl:mt-40">
    <Container size="xs">
      <Heading className="text-center" size="lg" tag="h2">
        {title}
      </Heading>
      <dl className="mt-6 md:mt-10 lg:mt-14">
        {items.map((item, index) => {
          const faqId = `faq${index + 1}`;
          return <Item {...item} faqId={faqId} key={index} isDefaultOpen={index === 0} />;
        })}
      </dl>
    </Container>
  </section>
);

export default Faq;
