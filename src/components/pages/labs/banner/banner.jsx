import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const Banner = () => (
  <div className="mt-10 flex w-full flex-col items-center justify-center space-y-6 rounded-xl bg-white dark:bg-gray-2 px-10 py-14 md:mt-16 lg:mt-24 lg:flex-row lg:space-x-8 lg:space-y-0 lg:px-4 xl:mt-32 xl:space-x-20 shadow-primary">
    <Heading tag="h2" size="sm">
      Want to add your lab to the list? Submit a PR here
    </Heading>
    <Button
      to="https://github.com/cilium/cilium.io/blob/main/CONTRIBUTING.md#listing-labs"
      theme="primary-1"
      target="_blank"
    >
      Submit a PR
    </Button>
  </div>
);

export default Banner;
