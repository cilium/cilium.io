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
  <section className="mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <p className="mt-5">{description}</p>
      <div className="grid grid-cols-3 gap-x-8 mt-14">
        {items.map((item, index) => (
          <CardItem {...item} key={index} />
        ))}
      </div>
      <div className="grid grid-cols-12 mt-20 gap-x-8">
        <div className="col-span-6">
          <iframe
            width="592"
            height="333"
            src="https://www.youtube.com/embed/ELyib78vjRY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="rounded-lg"
            allowFullScreen
          />
        </div>
        <ListWithIcon {...featuredBlogs} className="col-start-8 col-end-13" />
      </div>
      <div className="grid grid-cols-12 mt-20 gap-x-8">
        <Podcasts className="col-span-6" />
        <UserStories className="col-start-8 col-end-13" />
      </div>
    </Container>
  </section>
);

export default Learn;
