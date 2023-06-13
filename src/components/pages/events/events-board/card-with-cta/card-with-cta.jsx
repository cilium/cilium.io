import React from 'react';

import Button from 'components/shared/button/button';

import illustration from './images/illustration.png';

const CardWithCta = () => (
  <div className="flex flex-col items-center rounded-lg bg-additional-5 pb-8 transition-all duration-200 hover:shadow-tertiary md:pb-0">
    <img className="h-auto w-full" src={illustration} alt="" aria-hidden />
    <h3 className="px-4 text-center text-22 font-bold leading-snug md:px-10">
      Join eCHO livestream - eBPF & Cilium Office Hours- every Friday!
    </h3>
    <Button
      className="mt-6"
      to="https://www.youtube.com/channel/UCJFUxkVQTBJh3LD1wYBWvuQ"
      theme="primary-1"
      target="_blank"
    >
      Join Now
    </Button>
  </div>
);

export default CardWithCta;
