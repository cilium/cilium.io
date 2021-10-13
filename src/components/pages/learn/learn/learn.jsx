import React from 'react';

import CardItem from 'components/shared/card-item';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import ConceptsIcon from './images/concepts.inline.svg';
import IntroductionIcon from './images/introduction.inline.svg';
import NetworkingIcon from './images/networking.inline.svg';

const title = 'Learn about Cilium & eBPF';
const items = [
  {
    icon: IntroductionIcon,
    name: '10min Introduction to Cilium',
    text: `<p>Liz Rice and Thomas Graf:</p><ul><li>What is Cilium?</li><li>Why did we create Cilium?</li><li>What problems does Cilium solve for you?</li></ul>`,
    links: [
      {
        linkUrl: 'https://www.youtube.com/watch?v=80OYrzS1dCA&t=405s',
        linkTarget: '_blank',
        linkText: 'Watch video',
      },
    ],
  },
  {
    icon: ConceptsIcon,
    name: 'Weekly Interactive Cilium Introduction and Live Q&A',
    text: 'with Thomas Graf, Cilium Co-Creator',
    links: [
      {
        isCalendlyPopUp: true,
        linkTarget: '_blank',
        linkUrl: 'https://calendly.com/cilium-events/cilium-introduction',
        linkText: 'Book your Seat',
      },
    ],
  },
  {
    icon: NetworkingIcon,
    name: 'The Future of eBPF based Networking and Security',
    text: 'eBPF Summit 2020, Thomas Graf, Cilium Co-Creator, CTO & Co-Founder Isovalent',
    links: [
      {
        linkUrl: 'https://www.youtube.com/watch?v=vNuEx0wB_-4',
        linkTarget: '_blank',
        linkText: 'Watch video',
      },
      {
        linkUrl: 'https://cilium.io/blog/2020/11/10/ebpf-future-of-networking/',
        linkText: 'Read blog',
      },
    ],
  },
];

const Learn = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 gap-4 mt-6 md:gap-6 lg:gap-8 md:mt-10 lg:grid-cols-3 lg:mt-14">
        {items.map((item, index) => (
          <CardItem {...item} key={index} />
        ))}
      </div>
    </Container>
  </section>
);

export default Learn;
