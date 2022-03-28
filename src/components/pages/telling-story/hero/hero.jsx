import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Form from './form';
import decor1 from './images/decor-1.svg';
import decor2 from './images/decor-2.svg';

const title = 'Telling the Cilium Story';
const descriptionParagraphFirst =
  'Creating an abstract, putting a presentation together, or writing a blog post doesn’t come naturally to everyone. If you are eager to tell your Cilium story and need help, we’re here for you.';
const descriptionParagraphSecond =
  ' Not a native speaker and/or not confident about your writing skills? No worries. Bring the story and we’ll help you tell it in an engaging way.';

const Hero = () => (
  <section className="bg-gray-4 py-10 lg:pt-16 pb-44 overflow-x-hidden">
    <Container className="grid grid-cols-12 gap-y-14 sm:gap-y-20 md:gap-y-24 lg:gap-y-0 lg:gap-x-8 lg:items-stretch">
      <div className="col-span-full lg:col-span-5 xl:col-span-4 lg:pt-10">
        <Heading size="lg" tag="h1">
          {title}
        </Heading>

        <p className="mt-5 text-md">{descriptionParagraphFirst}</p>
        <p className="mt-2.5 text-md">{descriptionParagraphSecond}</p>
      </div>

      <div className="relative col-span-full lg:col-span-7 xl:col-span-8">
        <img
          className="absolute -top-9 -right-9"
          src={decor1}
          width={190}
          height={190}
          alt=""
          aria-hidden
        />
        <img
          className="absolute -bottom-12 -left-16"
          width={180}
          height={156}
          src={decor2}
          alt=""
          aria-hidden
        />
        <Form formClassName="relative rounded-xl bg-white w-full shadow-card p-4 md:p-8" />
      </div>
    </Container>
  </section>
);

export default Hero;
