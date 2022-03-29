import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';

const text = 'Join eCHO livestream - eBPF & Cilium Office Hours<br/> - every Friday!';
const buttonText = 'Join Now';
const Banner = () => (
  <div className="bg-additional-4 bg-opacity-30 py-3">
    <Container className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-8 md:space-y-0">
      <span
        className="flat-breaks xs:flat-none sm:flat-breaks text-center font-bold"
        dangerouslySetInnerHTML={{ __html: text }}
      />
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
