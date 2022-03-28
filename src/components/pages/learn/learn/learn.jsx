import React from 'react';

import CardItem from 'components/shared/card-item';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import IntroductionIcon from './images/introduction.svg';
import NetworkPerformanceIcon from './images/network-performance.svg';
import NetworkingIcon from './images/networking.svg';

const title = 'Learn about Cilium & eBPF';
const items = [
  {
    svgData: {
      imageSrc: IntroductionIcon,
      width: 384,
      height: 224,
    },

    name: '10min Introduction to Cilium',
    text: `Liz Rice and Thomas Graf answer the most popular questions about the Сillium, its creation and the problems it solves`,
    buttons: [
      {
        url: 'https://www.youtube.com/watch?v=80OYrzS1dCA&t=405s',
        target: '_blank',
        title: 'Watch video',
        theme: 'primary-1',
      },
    ],
  },
  {
    svgData: {
      imageSrc: NetworkingIcon,
      width: 384,
      height: 224,
    },
    name: 'The Future of eBPF based Networking and Security',
    text: 'eBPF Summit 2020, Thomas Graf, Cilium Co-Creator, CTO & Co-Founder Isovalent',
    buttons: [
      {
        url: 'https://www.youtube.com/watch?v=vNuEx0wB_-4',
        target: '_blank',
        title: 'Watch video',
        theme: 'outline-gray-dark',
      },
      {
        url: '/blog/2020/11/10/ebpf-future-of-networking/',
        title: 'Read blog',
        theme: 'outline-gray-dark',
      },
    ],
  },
  {
    svgData: {
      imageSrc: NetworkPerformanceIcon,
      width: 384,
      height: 224,
    },
    name: 'Understanding Cilium Network Performance',
    text: 'Explore the performance characteristics of Cilium based on extensive benchmarks',
    buttons: [
      {
        url: '/blog/2021/05/11/cni-benchmark',
        title: 'Read blog',
        theme: 'outline-gray-dark',
      },
    ],
  },
];

const Learn = () => (
  <section className="mt-10 md:mt-20 lg:mt-32">
    <Container>
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <div className="grid grid-cols-1 gap-4 mt-6 md:gap-6 lg:gap-8 md:mt-10 lg:grid-cols-3 lg:mt-14">
        {items.map((item, index) => (
          <CardItem size="sm" {...item} key={index} />
        ))}
      </div>
    </Container>
  </section>
);

export default Learn;
