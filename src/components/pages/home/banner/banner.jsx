import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Check from 'icons/banner-check.inline.svg';
import CNCFLogo from 'icons/logo-cncf.inline.svg';

const title = 'We are proud to be a CNCF incubation level project';

const Banner = ({ className }) => (
  <div className={classNames('mt-10 md:mt-20 lg:mt-32', className)}>
    <div className="flex flex-col items-center justify-between p-10 rounded-lg md:flex-row lg:p-16 lg:pr-24 bg-gray-4">
      <Check className="mb-4 md:mb-0 w-8 h-8 md:w-11 md:h-11" />
      <Heading
        className="mb-6 leading-tight font-semibold text-center md:mb-0 md:mr-14 max-w-2xl"
        size="xs"
        tag="h2"
      >
        {title}
      </Heading>
      <CNCFLogo className="max-w-[296px] h-auto" />
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
