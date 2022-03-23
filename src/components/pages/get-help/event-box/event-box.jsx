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
  <section className="mt-16 md:mt-20 lg:mt-28 xl:mt-40">
    <Container className="flex flex-col-reverse items-center lg:grid lg:grid-cols-12 lg:gap-x-8">
      <div className="mt-10 lg:col-span-7 lg:mt-0 lg:justify-self-center xl:justify-self-stretch xl:pl-8">
        <div className="relative mx-auto max-w-[90%] lg:mx-0 lg:max-w-[520px] xl:max-w-[592px]">
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
            alt=""
          />
          <img
            className="absolute top-0 left-[-6.5%] w-[105%] max-w-none"
            src={decor1}
            alt=""
            aria-hidden
          />
        </div>
      </div>
      <div className="lg:col-start-8 lg:col-end-13">
        <Heading tag="h2">{title}</Heading>
        <p className="mt-5">{description}</p>
        <ul className="mt-4 space-y-4 border-t border-gray-3 pt-4 lg:mt-6 lg:pt-6">
          {links.map(({ text, url, description }, index) => (
            <li className="leading-none" key={index}>
              <Link theme="primary" type="text" to={url}>
                {text}
              </Link>
              {description && <span className="mt-2.5 block text-sm">{description}</span>}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
);

export default EventBox;
