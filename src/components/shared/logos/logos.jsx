import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import AdobeLogo from 'icons/logo-adobe.inline.svg';
import AlibabaCloudLogo from 'icons/logo-alibaba-cloud.inline.svg';
import AWSLogo from 'icons/logo-aws.inline.svg';
import CengnLogo from 'icons/logo-cengn.inline.svg';
import DigitalOceanLogo from 'icons/logo-digital-ocean.inline.svg';
import GitlabLogo from 'icons/logo-gitlab.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';
import MasmovilLogo from 'icons/logo-masmovil.inline.svg';
import PalantirLogo from 'icons/logo-palantir.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';
import WildLifeLogo from 'icons/logo-wild-life.inline.svg';

import Container from '../container';

import PostFinanceLogo from './images/logo-post-finance.inline.svg';
import UtmostLogo from './images/logo-utmost.inline.svg';
import YahooLogo from './images/logo-yahoo.inline.svg';

const logos = [
  UtmostLogo,
  AdobeLogo,
  TripLogo,
  GitlabLogo,
  PostFinanceLogo,
  WildLifeLogo,
  AWSLogo,
  DigitalOceanLogo,
  CengnLogo,
  YahooLogo,
  GoogleLogo,
  MasmovilLogo,
  AlibabaCloudLogo,
];

const Logos = ({ className }) => (
  <section className={classNames(className, 'space-y-8')}>
    <Container>
      <div className="grid flex-wrap grid-cols-2 justify-items-center xs:flex gap-y-5 xs:justify-center xl:justify-between gap-x-6 md:gap-x-12 lg:gap-x-20">
        {logos.map((logo, index) => {
          const Logo = logo;
          return <Logo className="max-w-[132px] xs:max-w-max w-auto h-10" key={index} />;
        })}
      </div>
    </Container>
  </section>
);

Logos.propTypes = {
  className: PropTypes.string,
};

Logos.defaultProps = {
  className: null,
};

export default Logos;
