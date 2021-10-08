import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import illustration from 'images/hero-illustration.svg';

const title =
  'eBPF-based <span>Networking</span>, <span>Observability</span>, and <span>Security</span>';
const description =
  'Cilium is an open source software for providing, securing and observing network connectivity between container workloads - cloud native, and fueled by the revolutionary Kernel technology eBPF.';
const linkText = 'Learn more';
const linkUrl = '/learn';

const Hero = () => (
  <section className="pt-5 md:pt-16 lg:pt-32">
    <Container className="grid grid-cols-12 md:gap-x-8">
      <div className="col-span-full lg:-mr-8 lg:col-span-6 2xl:col-span-7 2xl:mr-0">
        <Heading
          className="max-w-2xl highlight-words"
          tag="h1"
          size="lg"
          fontWeight="normal"
          asHTML
        >
          {title}
        </Heading>
        <div
          className="mt-4 md:mt-5 space-y-5 md:text-lg with-link-primary lg:max-w-[490px] xl:max-w-[592px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Link className="mt-4 md:mt-5" type="arrow" theme="primary" to={linkUrl}>
          {linkText}
        </Link>
      </div>
      <div className="relative flex justify-center col-span-full lg:col-span-6 2xl:col-span-5 2xl:-ml-8">
        <img
          className="w-full mt-4 lg:-right-10 xl:right-auto xl:left-0 lg:max-w-max lg:absolute top-0 xl:-top-16 md:mt-10 lg:mt-0 lg:w-[580px] xl:w-max"
          src={illustration}
          alt=""
        />
      </div>
    </Container>
  </section>
);

export default Hero;
