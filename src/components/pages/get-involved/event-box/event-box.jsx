import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import decor1 from './images/decor-1.svg';
import decor2 from './images/decor-2.svg';

const title = 'Event in a Box';
const description =
  'All you need for a successful Cilium talk. Are you passionate about Cilium and want to share your experience with the broader community? We want to help you tell your story! Whether writing a blog post, creating a YouTube or Twitch video, or speaking at a conference, we will help you deliver your Cilium story to a broad audience.';
const links = [
  {
    text: 'Cilium intro slides',
    url: '/',
    description: 'As start Cilium & eBPF Introduction CNCF Bratislava',
  },
  { text: 'Request swag for attendees', url: '/' },
  { text: 'Reach out on Slack with questions', url: '/' },
];
const EventBox = () => (
  <section className="mt-10 md:mt-20 lg:mt-28 xl:mt-40">
    <Container className="grid grid-cols-12 gap-x-8">
      <div className="col-span-7 pl-8">
        <div className="relative w-[592px]">
          <img
            className="absolute top-[-8%] right-[-6%] w-[24.5%]"
            src={decor2}
            alt=""
            aria-hidden
          />
          <StaticImage
            className="rounded-xl"
            imgClassName="rounded-xl"
            src="./images/event-image.jpg"
            width={592}
            height={396}
            quality={95}
            loading="lazy"
          />
          <img
            className="absolute top-0 max-w-none left-[-6.5%] w-[105%]"
            src={decor1}
            alt=""
            aria-hidden
          />
        </div>
      </div>
      <div className="col-start-8 col-end-13">
        <Heading tag="h2">{title}</Heading>
        <p className="mt-5">{description}</p>
        <ul className="mt-6 pt-6 border-t border-gray-3 space-y-4">
          {links.map(({ text, url, description }, index) => (
            <li className="leading-none" key={index}>
              <Link theme="primary" type="text" to={url}>
                {text}
              </Link>
              {description && <span className="text-sm inline-block mt-2.5">{description}</span>}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
);

export default EventBox;
