import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import BellLogo from 'icons/bell.inline.svg';
import CapitalOneLogo from 'icons/capitalone.inline.svg';
import DatadogLogo from 'icons/datadog.inline.svg';
import AdobeLogo from 'icons/logo-adobe.inline.svg';
import AlibabaCloudLogo from 'icons/logo-alibaba-cloud.inline.svg';
import AWSLogo from 'icons/logo-aws.inline.svg';
import CengnLogo from 'icons/logo-cengn.inline.svg';
import DigitalOceanLogo from 'icons/logo-digital-ocean.inline.svg';
import GitlabLogo from 'icons/logo-gitlab.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';
import MasmovilLogo from 'icons/logo-masmovil.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';
import WildLifeLogo from 'icons/logo-wild-life.inline.svg';
import SkyLogo from 'icons/sky.inline.svg';

import CanonicalLogo from './images/canonical.inline.svg';
import CivoLogo from './images/civo.inline.svg';
import Form3Logo from './images/form3.inline.svg';
import KubesphereLogo from './images/kubesphere.inline.svg';
import MeltwaterLogo from './images/meltwater.inline.svg';
import PalantirLogo from './images/palantir.inline.svg';
import PostfinanceLogo from './images/postfinance.inline.svg';
import ScalewayLogo from './images/scaleway.inline.svg';
import SportradarLogo from './images/sportradar.inline.svg';
import UtmostLogo from './images/utmost.inline.svg';
import YahooLogo from './images/yahoo.inline.svg';

const icons = {
  google: GoogleLogo,
  adobe: AdobeLogo,
  aws: AWSLogo,
  capitalOne: CapitalOneLogo,
  alibabaCloud: AlibabaCloudLogo,
  cengn: CengnLogo,
  digitalOcean: DigitalOceanLogo,
  gitlab: GitlabLogo,
  masmovil: MasmovilLogo,
  trip: TripLogo,
  wildLife: WildLifeLogo,
  bell: BellLogo,
  sky: SkyLogo,
  datadog: DatadogLogo,
  canonical: CanonicalLogo,
  civo: CivoLogo,
  form3: Form3Logo,
  kubesphere: KubesphereLogo,
  meltwater: MeltwaterLogo,
  palantir: PalantirLogo,
  postfinance: PostfinanceLogo,
  scaleway: ScalewayLogo,
  sportradar: SportradarLogo,
  utmost: UtmostLogo,
  yahoo: YahooLogo,
};

const themeClassNames = {
  white: {
    wrapper: 'bg-white',
    card: 'bg-gray-4 border-gray-3 border',
  },
  gray: {
    wrapper: 'bg-gray-4',
    card: 'bg-white shadow-card',
  },
};

const UserCommunity = ({ className, title, items, isTitleCentered, titleTheme, theme }) => (
  <section className={classNames(className, themeClassNames[theme].wrapper)}>
    <Container>
      {title && (
        <Heading
          className={classNames(
            isTitleCentered && 'text-center mb-6',
            titleTheme === 'gray' ? ' lg:mb-8' : 'md:mb-10 lg:mb-14'
          )}
          tag="h3"
          theme={titleTheme}
        >
          {title}
        </Heading>
      )}
      <div
        className={classNames(
          'grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-4 xl:gap-8 auto-rows-fr'
        )}
      >
        {items.map(({ iconName, text, links }, index) => {
          const Icon = icons[iconName];
          return (
            <div
              className={classNames(
                'flex flex-col h-full p-6 rounded-lg xl:p-8',
                themeClassNames[theme].card
              )}
              key={index}
            >
              <Icon className="h-12" />
              <p
                className={classNames('mt-5', links && 'mb-4')}
                dangerouslySetInnerHTML={{ __html: text }}
              />
              {links && (
                <div className="pt-4 mt-auto space-x-6 leading-none border-t border-gray-3">
                  {links.map(({ linkUrl, linkText, linkTarget }, index) => (
                    <Link
                      className="relative first:before:hidden before:inline-block before:w-1 before:h-1 before:absolute before:rounded-full before:bg-gray-5 before:top-1/2 before:-translate-y-1/2 before:-left-3.5"
                      key={index}
                      type="text"
                      theme="primary"
                      to={linkUrl}
                      target={linkTarget || ''}
                    >
                      {linkText}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);

UserCommunity.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  isTitleCentered: PropTypes.bool,
  titleTheme: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          linkTarget: PropTypes.string,
          linkUrl: PropTypes.string.isRequired,
          linkText: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
};

UserCommunity.defaultProps = {
  className: null,
  title: null,
  titleTheme: null,
  isTitleCentered: false,
  theme: 'white',
};

export default UserCommunity;
