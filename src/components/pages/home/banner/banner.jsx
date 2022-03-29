import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Check from 'icons/banner-check.inline.svg';
import CNCFLogo from 'icons/logo-cncf.inline.svg';

const title = 'We are proud to be a CNCF incubation level project';

const Banner = ({ className }) => (
  <div className={classNames('mt-10 md:mt-20 lg:mt-32', className)}>
    <div className="flex flex-col items-center justify-between rounded-lg bg-gray-4 p-10 md:flex-row lg:p-16 lg:pr-24">
      <Check className="mb-4 h-8 w-8 md:mb-0 md:h-11 md:w-11" />
      <Heading
        className="mb-6 max-w-2xl text-center font-semibold leading-tight md:mb-0 md:mr-14"
        size="xs"
        tag="h2"
      >
        {title}
      </Heading>
      <CNCFLogo className="h-auto max-w-[200px] sm:max-w-[296px]" />
    </div>
  </div>
);

Banner.propTypes = {
  className: PropTypes.string,
};

Banner.defaultProps = {
  className: null,
};

export default Banner;
