import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';

const text = 'Join eCHO livestream - eBPF & Cilium Office Hours - every Friday!';
const buttonText = 'Join Now';
const Banner = () => (
  <div className="py-3 bg-additional-4 bg-opacity-30">
    <Container className="flex items-center justify-center space-x-8">
      <span className="font-bold">{text}</span>
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
