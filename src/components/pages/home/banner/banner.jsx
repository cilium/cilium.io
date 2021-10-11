import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';
import CNCFLogo from 'icons/logo-cncf.inline.svg';

const title = 'We are proud to be a CNCF incubation level project';

const Banner = () => (
  <section className="mt-10 md:mt-20 lg:mt-28 xl:mt-32">
    <Container>
      <div className="flex flex-col items-center justify-between p-10 rounded-lg md:flex-row lg:p-16 lg:pr-24 bg-additional-4 bg-opacity-30">
        <Heading
          className="max-w-md mb-6 text-center md:text-left md:mb-0 md:mr-14 lg:max-w-lg"
          tag="h2"
          size="md"
        >
          {title}
        </Heading>
        <CNCFLogo className="w-full h-auto sm:w-max" />
      </div>
    </Container>
  </section>
);

export default Banner;
