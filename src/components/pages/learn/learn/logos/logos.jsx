import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import AdobeLogo from 'icons/logo-adobe.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';

import AlibabaCloudLogo from './images/logo-alibaba-cloud.inline.svg';
import CengnLogo from './images/logo-cengn.inline.svg';
import DigitalOceanLogo from './images/logo-digital-ocean.inline.svg';
import GitlabLogo from './images/logo-gitlab.inline.svg';
import MasmovilLogo from './images/logo-masmovil.inline.svg';
import PalantirLogo from './images/logo-palantir.inline.svg';
import PostFinanceLogo from './images/logo-post-finance.inline.svg';
import TripLogo from './images/logo-trip.inline.svg';
import UtmostLogo from './images/logo-utmost.inline.svg';
import WildLifeLogo from './images/logo-wild-life.inline.svg';
import YahooLogo from './images/logo-yahoo.inline.svg';

const logos1 = [
  PalantirLogo,
  AdobeLogo,
  TripLogo,
  AlibabaCloudLogo,
  PostFinanceLogo,
  DigitalOceanLogo,
  UtmostLogo,
  WildLifeLogo,
  CengnLogo,
  YahooLogo,
  GoogleLogo,
  MasmovilLogo,
  GitlabLogo,
];

const Logos = ({ className }) => (
  <div className={classNames(className, 'space-y-8')}>
    <div className="flex flex-wrap justify-center gap-y-6 lg:gap-y-8 xl:justify-between gap-x-12 lg:gap-x-20">
      {logos1.map((logo, index) => {
        const Logo = logo;
        return <Logo className="w-auto h-10" key={index} />;
      })}
    </div>
  </div>
);

Logos.propTypes = {
  className: PropTypes.string,
};

Logos.defaultProps = {
  className: null,
};

export default Logos;
