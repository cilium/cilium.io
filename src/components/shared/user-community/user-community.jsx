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

import Button from '../button';

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

const UserCommunity = ({
  className,
  title,
  items,
  isTitleCentered,
  titleTheme,
  theme,
  buttonText,
  buttonUrl,
}) => (
  <section className={classNames(className, themeClassNames[theme].wrapper)}>
    <Container className="flex flex-col">
      {title && (
        <Heading
          className={classNames(
            isTitleCentered && 'mb-6 text-center',
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
          'grid auto-rows-fr gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-4 xl:gap-8'
        )}
      >
        {items.map(({ iconName, text, links }, index) => {
          const Icon = icons[iconName];
          return (
            <div
              className={classNames(
                'flex h-full flex-col rounded-lg p-6 xl:p-8',
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
                <div className="mt-auto space-x-6 border-t border-gray-3 pt-4 leading-none">
                  {links.map(({ linkUrl, linkText, linkTarget }, index) => (
                    <Link
                      className="relative before:absolute before:top-1/2 before:-left-3.5 before:inline-block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-5 first:before:hidden"
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
      {buttonText && buttonUrl && (
        <Button
          className="mx-auto mt-6 w-full xs:w-auto md:mt-10 lg:mt-14"
          theme="primary-1"
          to={buttonUrl}
        >
          {buttonText}
        </Button>
      )}
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
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
};

UserCommunity.defaultProps = {
  className: null,
  title: null,
  titleTheme: null,
  isTitleCentered: false,
  theme: 'white',
  buttonText: null,
  buttonUrl: null,
};

export default UserCommunity;
