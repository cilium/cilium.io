import React from 'react';

import Heading from 'components/shared/heading';
import CNCFLogo from 'icons/logo-cncf.inline.svg';

const title = 'We are proud to be a CNCF incubation level project';

const Banner = () => (
  <div className="mt-6 md:mt-10 lg:mt-14">
    <div className="flex flex-col items-center justify-between p-10 rounded-lg md:flex-row lg:p-16 lg:pr-24 bg-additional-4 bg-opacity-30">
      <Heading
        className="max-w-md mb-6 text-2xl text-center lg:text-3xl xl:text-4xl md:text-left md:mb-0 md:mr-14 lg:max-w-lg"
        tag="h2"
      >
        {title}
      </Heading>
      <CNCFLogo className="w-full h-auto sm:w-max" />
    </div>
  </div>
);

export default Banner;
