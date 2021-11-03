import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';

const text = 'Join eCHO livestream - eBPF & Cilium Office Hours - every Friday!';
const buttonText = 'Join Now';
const Banner = () => (
  <div className="py-3 bg-additional-4 bg-opacity-30">
    <Container className="flex flex-col items-center justify-center space-y-2 md:space-x-8 md:space-y-0 md:flex-row">
      <span className="font-bold text-center">{text}</span>
      <Button
        theme="outline"
        size="sm"
        to="https://github.com/isovalent/echo"
        rel="noopner noreferrer"
        target="_blank"
      >
        {buttonText}
      </Button>
    </Container>
  </div>
);

export default Banner;
