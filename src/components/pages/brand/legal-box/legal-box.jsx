import React from 'react';

import Container from 'components/shared/container';

const LegalBox = () => (
  <section className="py-12 md:py-16 lg:py-20">
    <Container>
      <p className="with-link-primary text-sm leading-normal tracking-normal text-gray-1">
        By using CNCF brand materials you agree to the
        <a href="https://www.linuxfoundation.org/terms/" target="_blank" rel="noreferrer">
          {' '}
          Linux Foundation Terms of Use
        </a>
        , the{' '}
        <a href="https://www.linuxfoundation.org/trademark-usage/" target="_blank" rel="noreferrer">
          Trademark Usage Guidelines
        </a>
        , these CNCF branding guidelines, and all{' '}
        <a href="https://www.cncf.io/brand-guidelines/#legal" target="_blank" rel="noreferrer">
          CNCF rules and policies
        </a>{' '}
        as may be updated from time to time. You also acknowledge that CNCF is the sole owner of
        CNCF trademarks, promise not to interfere with CNCFs rights in them, and acknowledge that
        goodwill derived from their use accrues only to CNCF. CNCF may rev'ew use of the branding
        materials at any time and reserves the right to terminate or modify any use.
      </p>
    </Container>
  </section>
);

export default LegalBox;
