import classNames from 'classnames';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'Subscribe to the eCHO News';
const description =
  'Want to stay up to date with the latest from around the Cilium  and eBPF community?';

const Subscribe = () => (
  <section className="mt-10 bg-gray-4 py-10 text-center md:mt-20 md:py-14 lg:mt-32 lg:pt-20 lg:pb-24">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <p className="mt-2.5">{description}</p>
      <form className="relative mx-auto mt-10 flex max-w-[656px] flex-col space-y-3 xs:space-y-0">
        <input
          className={classNames(
            'remove-autocomplete-styles w-full rounded border py-3 pl-6 pr-6 leading-normal shadow-input transition-[border,box-shadow] duration-200 xs:rounded-xl xs:py-4 xs:pr-36 md:text-lg lg:py-[22px] lg:text-xl xl:pr-44',
            'hover:border-gray-2 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1 focus-visible:ring-offset-0'
          )}
          type="email"
          name="email"
          placeholder="Email address..."
        />
        <Button
          className="right-3 top-1/2 h-12 items-center !text-lg xs:absolute xs:h-auto xs:-translate-y-1/2"
          theme="primary-1"
        >
          Subscribe
        </Button>
      </form>
    </Container>
  </section>
);

export default Subscribe;
