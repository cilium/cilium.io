import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Check from 'icons/banner-check.inline.svg';
import CNCFLogo from 'icons/logo-cncf.inline.svg';

import Container from '../container';

const title = 'We are proud to be a CNCF Graduation level project';

const CNCFBanner = ({ className }) => (
  <section className={classNames('mt-10 md:mt-20 lg:mt-32', className)}>
    <Container>
      <div className="flex flex-col items-center justify-between p-10 rounded-lg bg-gray-4 md:flex-row lg:p-16 lg:pr-24">
        <div className="flex flex-col items-center md:flex-row">
          <Check className="w-8 h-8 mb-4 md:mb-0 md:mr-4 md:h-11 md:w-11 lg:mr-6" />
          <Heading
            className="max-w-2xl mb-6 font-semibold leading-tight text-center md:mb-0 md:mr-14 md:text-left"
            size="xs"
            tag="h2"
          >
            {title}
          </Heading>
        </div>

        <CNCFLogo className="h-auto max-w-[200px] sm:max-w-[296px]" />
      </div>
    </Container>
  </section>
);

CNCFBanner.propTypes = {
  className: PropTypes.string,
};

CNCFBanner.defaultProps = {
  className: null,
};

export default CNCFBanner;
