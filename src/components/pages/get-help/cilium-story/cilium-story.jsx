import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
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
const buttonUrl = '/';

const CiliumStory = () => (
  <section className="mt-16 md:mt-20 lg:mt-28 xl:mt-40">
    <Container className="flex flex-col items-center space-y-10 lg:flex-row lg:space-y-0 lg:space-x-20 xl:space-x-[108px]">
      <div className="lg:flex-1 xl:flex-initial">
        <Heading tag="h2">{title}</Heading>
        <div className="mt-5 space-y-2.5" dangerouslySetInnerHTML={{ __html: description }} />
        <Button className="mt-5" theme="primary-1" to={buttonUrl}>
          {buttonText}
        </Button>
      </div>
      <div className="relative mx-auto max-w-[90%] shrink-0 lg:mx-0 lg:max-w-none lg:flex-1 xl:flex-none">
        <img
          className="absolute bottom-[-8%] right-[-6%] w-[24.5%]"
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
          alt=""
        />
        <img
          className="absolute bottom-0 left-[-7%] w-[103%] max-w-none"
          src={decor1}
          alt=""
          aria-hidden
        />
      </div>
    </Container>
  </section>
);

export default CiliumStory;
