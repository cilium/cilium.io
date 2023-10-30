import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import { ciliumLogos, hubbleLogos } from './data/logos';
import LogosRow from './logos-row';

const Logos = ({ title, description, downloadLink, brand = 'cilium', titleSize = 'md' }) => (
  <section className="mt-16 md:mt-24 lg:mt-32">
    <Container>
      <header className="flex flex-col items-start justify-between gap-y-5 border-b border-gray-3 pb-10 lg:flex-row">
        <div className="flex flex-col gap-y-3">
          <Heading tag="h2" size={titleSize}>
            {title}
          </Heading>
          <p
            className="max-w-full sm:max-w-[520px] [&>br]:hidden sm:[&>br]:block"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <Button
          className="w-full !rounded-md border-2 !px-7 sm:w-auto lg:h-[50px] lg:self-end"
          theme="outline-gray"
          to={downloadLink}
          download
          asDefaultLink
        >
          Download Logo ZIP
        </Button>
      </header>
      <LogosRow
        className="mt-10"
        title="Light background"
        logos={brand === 'cilium' ? ciliumLogos.light : hubbleLogos.light}
      />
      <LogosRow
        className="mt-12"
        title="Dark background"
        logos={brand === 'cilium' ? ciliumLogos.dark : hubbleLogos.dark}
        isDark
      />
    </Container>
  </section>
);

Logos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  downloadLink: PropTypes.string.isRequired,
  titleSize: PropTypes.oneOf(['md', 'lg']),
  brand: PropTypes.oneOf(['cilium', 'hubble']).isRequired,
};

export default Logos;
