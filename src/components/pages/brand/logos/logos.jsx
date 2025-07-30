import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import { ciliumLogos, hubbleLogos, tetragonLogos } from './data/logos';
import LogosRow from './logos-row';

const logos = {
  cilium: ciliumLogos,
  hubble: hubbleLogos,
  tetragon: tetragonLogos,
};

const Logos = ({ title, description, downloadLink, brand = 'cilium', titleSize = 'md' }) => (
  <section className="mt-16 md:mt-24 lg:mt-32">
    <Container>
      <header className="flex flex-col items-start justify-between pb-10 border-b gap-y-5 border-gray-3 dark:border-gray-1 lg:flex-row">
        <div className="flex flex-col gap-y-3">
          <Heading tag="h2" size={titleSize} className="text-black dark:text-white">
            {title}
          </Heading>
          <p
            className="max-w-full sm:max-w-[520px] [&>br]:hidden sm:[&>br]:block dark:text-gray-2 text-black"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <Button
          className="w-full !rounded-md border-2 dark:border-gray-1 text-black dark:text-white !px-7 sm:w-auto lg:h-[50px] lg:self-end"
          theme="outline-gray"
          to={downloadLink}
          download
          asDefaultLink
        >
          Download Logo ZIP
        </Button>
      </header>
      <LogosRow className="mt-10" title="Light background" logos={logos[brand].light} />
      <LogosRow className="mt-12" title="Dark background" logos={logos[brand].dark} isDark />
    </Container>
  </section>
);

Logos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  downloadLink: PropTypes.string.isRequired,
  titleSize: PropTypes.oneOf(['md', 'lg']),
  brand: PropTypes.oneOf(['cilium', 'hubble', 'tetragon']).isRequired,
};

Logos.defaultProps = {
  titleSize: 'md',
};

export default Logos;
