import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import decor1 from './images/decor-1.svg';
import decor2 from './images/decor-2.svg';

const title = 'Telling the Cilium Story';
const description =
  '<p>Creating an abstract, putting a presentation together, or writing a blog post doesn’t come naturally to everyone. If you are eager to tell your Cilium story and need help, we’re here for you.</p><p>Not a native speaker and/or not confident about your writing skills? No worries. Bring the story and we’ll help you tell it in an engaging way.</p>';
const buttonText = 'Send Story';
const buttonUrl = '/telling-story';

const CiliumStory = () => (
  <section className="mt-10 overflow-hidden pb-8 md:mt-20 lg:mt-28 lg:overflow-visible lg:pb-0 xl:mt-36">
    <Container className="grid grid-cols-12 items-center gap-y-10 lg:gap-y-0 lg:gap-x-8">
      <div className="col-span-full lg:col-span-6 lg:max-w-[519px]">
        <Heading tag="h2" className="text-black dark:text-white">
          {title}
        </Heading>
        <div
          className="mt-5 space-y-2.5 dark:text-gray-2 text-black"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Button className="mt-5" theme="primary-1" to={buttonUrl}>
          {buttonText}
        </Button>
      </div>
      <div className="relative  col-span-full justify-self-center lg:col-span-6 lg:justify-self-end">
        <img
          className="absolute bottom-[-8%] right-[-5.4%] w-[24.4%]"
          src={decor2}
          alt=""
          aria-hidden
        />
        <StaticImage
          className="rounded-xl"
          imgClassName="rounded-xl"
          src="./images/story-image.jpg"
          width={592}
          height={396}
          quality={95}
          loading="lazy"
          alt="Cilium community"
        />
        <img
          className="absolute top-[-8%] left-[-7%] w-[103%] max-w-none"
          src={decor1}
          alt=""
          aria-hidden
        />
      </div>
    </Container>
  </section>
);

export default CiliumStory;
