import PropTypes from 'prop-types';
import React from 'react';

import CardItem from 'components/shared/card-item';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import ListWithIcon from 'components/shared/list-with-icon';

import ConceptsIcon from './images/concepts.inline.svg';
import IntroductionIcon from './images/introduction.inline.svg';
import NetworkingIcon from './images/networking.inline.svg';
import Podcasts from './podcasts';
import UserStories from './user-stories';

const title = 'Learn about Cilium & eBPF';
const description = 'Enterprise Distribution maintained by the creators of Cilium.';
const items = [
  {
    icon: IntroductionIcon,
    name: 'Introduction to Cilium',
    linkUrl: '/',
    linkText: 'Watch video',
  },
  {
    icon: ConceptsIcon,
    name: 'Concepts & Architectures',
    linkUrl: '/',
    linkText: 'Watch video',
  },
  {
    icon: NetworkingIcon,
    name: 'The Future of eBPF based Networking and Security',
    linkUrl: '/',
    linkText: 'Watch video',
  },
];

const featuredBlogs = {
  title: 'Featured Blogs',
  items: [
    { linkUrl: '/', linkText: 'What is Cilium?' },
    { linkUrl: '/', linkText: 'What is eBPF?' },
    { linkUrl: '/', linkText: 'eBPF - The Future of Networking & Security' },
    { linkUrl: '/', linkText: 'GKE Dataplane v2' },
  ],
};

const Learn = () => (
  <section className="mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <p className="mt-5 text-lg">{description}</p>
      <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 lg:mt-14">
        {items.map((item, index) => (
          <CardItem {...item} key={index} />
        ))}
      </div>
      <div className="grid grid-cols-1 mt-16 lg:mt-20 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-6 relative pb-[56.25%] order-1 lg:order-none h-0 overflow-hidden">
          <iframe
            width="592"
            height="333"
            src="https://www.youtube.com/embed/ELyib78vjRY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allowFullScreen
          />
        </div>
        <ListWithIcon {...featuredBlogs} className="lg:col-start-7 lg:col-end-13 xl:col-start-8" />
      </div>
      <div className="grid grid-cols-1 mt-16 lg:mt-20 lg:grid-cols-12 gap-x-8 gap-y-16">
        <Podcasts className="lg:col-span-6" />
        <UserStories className="lg:col-end-13 lg:col-start-7 xl:col-start-8" />
      </div>
    </Container>
  </section>
);

export default Learn;
