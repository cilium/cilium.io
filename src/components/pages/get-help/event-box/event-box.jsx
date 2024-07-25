import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import decor1 from './images/decor-1.svg';
import decor2 from './images/decor-2.svg';

const title = 'Event in a Box';
const description =
  'All you need for a successful Cilium talk. Are you passionate about Cilium and want to share your experience with the broader community? We want to help you tell your story! Whether writing a blog post, creating a YouTube or Twitch video, or speaking at a conference, we will help you deliver your Cilium story to a broad audience.';
const buttonText = 'Request Event Help';
const buttonUrl = '/telling-story';
const links = [
  // {
  //   text: 'Cilium intro slides',
  //   url: '/',
  //   description: 'As start Cilium & eBPF Introduction CNCF Bratislava',
  // },
  {
    text: 'Request swag for attendees',
    url: '/telling-story',
  },
  {
    text: 'Reach out on Slack with questions',
    url: 'https://slack.cilium.io',
    target: '_blank',
  },
];
const EventBox = () => (
  <section className="mt-10 overflow-hidden pb-8 md:mt-20 lg:mt-28 lg:overflow-visible lg:pb-0 xl:mt-48">
    <Container className="grid grid-cols-12 lg:gap-x-8">
      <div className="order-1 col-span-full mt-10 justify-self-center lg:order-none lg:col-span-6 lg:mt-0 lg:justify-self-start">
        <div className="relative xl:max-w-[592px]">
          <img
            className="absolute bottom-[-8%] left-[-5.3%] w-[24.5%]"
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
            className="absolute top-[-7.6%] left-[2%] w-[106%] max-w-none"
            src={decor1}
            alt=""
            aria-hidden
          />
        </div>
      </div>
      <div className="col-span-full lg:col-span-6 lg:pl-8 xl:col-start-8 xl:col-end-13 xl:pl-0">
        <Heading tag="h2">{title}</Heading>
        <p className="mt-5">{description}</p>
        <Button className="mt-5" theme="primary-1" to={buttonUrl}>
          {buttonText}
        </Button>
        <ul className="mt-5 space-y-4 lg:mt-7">
          {links.map(({ text, url, target, description }, index) => (
            <li className="leading-none" key={index}>
              <Link
                theme="primary"
                type="text"
                to={url}
                target={target || null}
                rel={target ? 'noopener noreferrer' : null}
              >
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
