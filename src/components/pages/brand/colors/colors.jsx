import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import ColorMap from './color-map';

const Colors = ({ title, description, linkUrl = null, colors }) => (
  <section className="mt-16 md:mt-24 lg:mt-32">
    <Container>
      <header className="flex flex-col items-start justify-between gap-y-5 border-b border-gray-3 pb-10 lg:flex-row">
        <div className="flex flex-col gap-y-3">
          <Heading tag="h2" size="md" className="text-black dark:text-white">
            {title}
          </Heading>
          <p
            className="max-w-full sm:max-w-[520px] [&>br]:hidden sm:[&>br]:block dark:text-gray-2 text-black"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        {linkUrl && (
          <Button
            className="w-full !rounded-md !px-7 sm:w-auto lg:h-[50px] lg:self-end"
            to={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            theme="primary-1"
            asDefaultLink
          >
            Download Brand Guide
          </Button>
        )}
      </header>
      <ColorMap className="mt-10" title="Logo colors" colors={colors.logos} />
      {colors?.website?.length > 0 && (
        <ColorMap className="mt-12" title="Website colors" colors={colors.website} />
      )}
    </Container>
  </section>
);

Colors.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkUrl: PropTypes.string,
  colors: PropTypes.shape({
    logos: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string,
        hex: PropTypes.string,
        hsl: PropTypes.string,
        rgb: PropTypes.string,
        cmyk: PropTypes.string,
      })
    ).isRequired,
    website: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string,
        hex: PropTypes.string,
        hsl: PropTypes.string,
        rgb: PropTypes.string,
        cmyk: PropTypes.string,
      })
    ),
  }).isRequired,
};

Colors.defaultProps = {
  linkUrl: null,
};

export default Colors;
