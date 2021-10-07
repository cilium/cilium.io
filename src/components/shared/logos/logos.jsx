import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import AdobeLogo from 'icons/logo-adobe.inline.svg';
import AWSLogo from 'icons/logo-aws.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';

import Container from '../container';
import Heading from '../heading';

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

const logos = [
  PalantirLogo,
  AdobeLogo,
  TripLogo,
  AlibabaCloudLogo,
  PostFinanceLogo,
  DigitalOceanLogo,
  AWSLogo,
  UtmostLogo,
  WildLifeLogo,
  CengnLogo,
  YahooLogo,
  GoogleLogo,
  MasmovilLogo,
  GitlabLogo,
];

const Logos = ({ className, title }) => (
  <section className={classNames(className, 'space-y-8')}>
    <Container>
      {title && (
        <Heading className="mb-6 md:mb-8 lg:mb-11" tag="h3" theme="gray">
          {title}
        </Heading>
      )}
      <div className="grid flex-wrap grid-cols-2 justify-items-center sm:flex gap-y-5 lg:gap-y-8 xl:justify-between gap-x-6 md:gap-x-12 lg:gap-x-20">
        {logos.map((logo, index) => {
          const Logo = logo;
          return <Logo className="w-auto h-10" key={index} />;
        })}
      </div>
    </Container>
  </section>
);

Logos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

Logos.defaultProps = {
  className: null,
  title: null,
};

export default Logos;
