import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import ciliumDark1 from './images/cilium-dark-1.svg';
import ciliumDark2 from './images/cilium-dark-2.svg';
import ciliumDark3 from './images/cilium-dark-3.svg';
import ciliumDark4 from './images/cilium-dark-4.svg';
import ciliumLight1 from './images/cilium-light-1.svg';
import ciliumLight2 from './images/cilium-light-2.svg';
import ciliumLight3 from './images/cilium-light-3.svg';
import ciliumLight4 from './images/cilium-light-4.svg';
import hubbleDark1 from './images/hubble-dark-1.svg';
import hubbleDark2 from './images/hubble-dark-2.svg';
import hubbleDark3 from './images/hubble-dark-3.svg';
import hubbleDark4 from './images/hubble-dark-4.svg';
import hubbleLight1 from './images/hubble-light-1.svg';
import hubbleLight2 from './images/hubble-light-2.svg';
import hubbleLight3 from './images/hubble-light-3.svg';
import hubbleLight4 from './images/hubble-light-4.svg';
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
        logos={
          brand === 'cilium'
            ? [ciliumLight1, ciliumLight2, ciliumLight3, ciliumLight4]
            : [hubbleLight1, hubbleLight2, hubbleLight3, hubbleLight4]
        }
      />
      <LogosRow
        className="mt-12"
        title="Dark background"
        logos={
          brand === 'cilium'
            ? [ciliumDark1, ciliumDark2, ciliumDark3, ciliumDark4]
            : [hubbleDark1, hubbleDark2, hubbleDark3, hubbleDark4]
        }
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
