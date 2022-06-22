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
import IkeaLogo from 'icons/logo-ikea.inline.svg';
import MasmovilLogo from 'icons/logo-masmovil.inline.svg';
import SkyLogo from 'icons/logo-sky.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';
import UswitchLogo from 'icons/logo-uswitch.inline.svg';
import WildLifeLogo from 'icons/logo-wild-life.inline.svg';

import Button from '../button';

import AccuKnoxLogo from './images/accuknox.inline.svg';
import AcossLogo from './images/acoss.inline.svg';
import ArangoDbLogo from './images/arangodb.inline.svg';
import AyedoLogo from './images/ayedo.inline.svg';
import CanonicalLogo from './images/canonical.inline.svg';
import CivoLogo from './images/civo.inline.svg';
import CogniteLogo from './images/cognite.inline.svg';
import FinleapLogo from './images/finleap.inline.svg';
import Form3Logo from './images/form3.inline.svg';
import InfomaniakLogo from './images/infomaniak.inline.svg';
import JumoLogo from './images/jumo.inline.svg';
import KubermaticLogo from './images/kubermatic.inline.svg';
import KubesphereLogo from './images/kubesphere.inline.svg';
import LiquidReplyLogo from './images/liquid-reply.inline.svg';
import MeltwaterLogo from './images/meltwater.inline.svg';
import MuxLogo from './images/mux.inline.svg';
import MyFitnessPalLogo from './images/myfitnesspal.inline.svg';
import NexxiotLogo from './images/nexxiot.inline.svg';
import NorthflankLogo from './images/northflank.inline.svg';
import NYTLogo from './images/nyt.inline.svg';
import PalantirLogo from './images/palantir.inline.svg';
import PostfinanceLogo from './images/postfinance.inline.svg';
import RadioFranceLogo from './images/radiofrance.inline.svg';
import RapyutaRoboticsLogo from './images/rapyuta-robotics.inline.svg';
import SapLogo from './images/sap.inline.svg';
import ScalewayLogo from './images/scaleway.inline.svg';
import SimpleLogo from './images/simple.inline.svg';
import SmileLogo from './images/smile.inline.svg';
import SnappLogo from './images/snapp.inline.svg';
import SportradarLogo from './images/sportradar.inline.svg';
import TSILogo from './images/t-systems.inline.svg';
import TailorBrandsLogo from './images/tailor-brands.inline.svg';
import UtmostLogo from './images/utmost.inline.svg';
import YahooLogo from './images/yahoo.inline.svg';

const icons = {
  acoss: AcossLogo,
  google: GoogleLogo,
  adobe: AdobeLogo,
  aws: AWSLogo,
  arangodb: ArangoDbLogo,
  accuknox: AccuKnoxLogo,
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
  ikea: IkeaLogo,
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
  uswitch: UswitchLogo,
  utmost: UtmostLogo,
  yahoo: YahooLogo,
  ayedo: AyedoLogo,
  cognite: CogniteLogo,
  finleap: FinleapLogo,
  infomaniak: InfomaniakLogo,
  jumo: JumoLogo,
  kubermatic: KubermaticLogo,
  liquidReply: LiquidReplyLogo,
  myFitnessPal: MyFitnessPalLogo,
  mux: MuxLogo,
  theNewYorkTimes: NYTLogo,
  nexxiot: NexxiotLogo,
  northflank: NorthflankLogo,
  radioFrance: RadioFranceLogo,
  rapyutaRobotics: RapyutaRoboticsLogo,
  sap: SapLogo,
  simple: SimpleLogo,
  smileDirectClub: SmileLogo,
  snapp: SnappLogo,
  tsi: TSILogo,
  tailorBrands: TailorBrandsLogo,
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
  theme,
  buttonText,
  buttonUrl,
  buttonTarget,
}) => (
  <section className={classNames(className, themeClassNames[theme].wrapper)}>
    <Container className="flex flex-col">
      {title && (
        <Heading
          className={classNames(isTitleCentered && 'mb-6 text-center md:mb-10 lg:mb-16')}
          tag="h3"
        >
          {title}
        </Heading>
      )}
      <div
        className={classNames(
          'grid gap-4 sm:grid-cols-2 md:gap-6 lg:auto-rows-fr lg:grid-cols-4 lg:gap-4 xl:gap-8'
        )}
      >
        {items.map(({ iconName, text, links }, index) => {
          const Icon = icons[iconName];
          return (
            <div
              className={classNames(
                'flex flex-col rounded-lg p-6 xl:p-8',
                themeClassNames[theme].card
              )}
              key={index}
            >
              <Icon className="h-12" aria-label={`${iconName} logo`} />
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
                      target={linkTarget || null}
                      rel={linkTarget ? 'noopener noreferrer' : null}
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
          target={buttonTarget || null}
          rel={buttonTarget ? 'noopener noreferrer' : null}
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
  buttonTarget: PropTypes.string,
};

UserCommunity.defaultProps = {
  className: null,
  title: null,
  isTitleCentered: false,
  theme: 'white',
  buttonText: null,
  buttonUrl: null,
  buttonTarget: null,
};

export default UserCommunity;
