import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import useDarkMode from 'hooks/use-dark-mode';
import Check from 'icons/banner-check.inline.svg';
import CNCFLogo from 'icons/logo-cncf.inline.svg';
import CNCFWhiteLogo from 'icons/white-logo-cncf.inline.svg';

import Container from '../container';

const title = 'We are proud to be a CNCF Graduation level project';

const CNCFBanner = ({ className }) => {
  const isDarkMode = useDarkMode();

  return (
    <section
      className={classNames('pt-10 md:pt-20 py-10 lg:pt-32 bg-white dark:bg-[#0f1d3e]', className)}
    >
      <Container>
        <div className="flex flex-col items-center justify-between bg-gray-4 dark:bg-gray-900 p-10 rounded-lg md:flex-row lg:p-16 lg:pr-24 overflow-hidden">
          <div className="flex flex-col items-center md:flex-row">
            <Check className="w-8 h-8 mb-4 md:mb-0 md:mr-4 md:h-11 md:w-11 lg:mr-6" />
            <Heading
              className="max-w-2xl mb-6 font-semibold leading-tight dark:text-gray-2 text-black text-center md:mb-0 md:mr-14 md:text-left"
              size="xs"
              tag="h2"
            >
              {title}
            </Heading>
          </div>

          <div className="flex-shrink-0">
            {isDarkMode ? (
              <CNCFWhiteLogo className="h-auto max-w-[200px] sm:max-w-[296px]" />
            ) : (
              <CNCFLogo className="h-auto max-w-[200px] sm:max-w-[296px]" />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

CNCFBanner.propTypes = {
  className: PropTypes.string,
};

CNCFBanner.defaultProps = {
  className: null,
};

export default CNCFBanner;
