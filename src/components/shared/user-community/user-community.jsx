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
import AscendLogo from 'icons/logo-ascend.inline.svg';
import AWSLogo from 'icons/logo-aws.inline.svg';
import CengnLogo from 'icons/logo-cengn.inline.svg';
import CosmonicLogo from 'icons/logo-cosmonic.inline.svg';
import DigitalOceanLogo from 'icons/logo-digital-ocean.inline.svg';
import GitlabLogo from 'icons/logo-gitlab.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';
import MasmovilLogo from 'icons/logo-masmovil.inline.svg';
import PalarkLogo from 'icons/logo-palark.inline.svg';
import SandPLogo from 'icons/logo-s&p.inline.svg';
import SeznamCZLogo from 'icons/logo-seznam.inline.svg';
import SkyLogo from 'icons/logo-sky.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';
import UswitchLogo from 'icons/logo-uswitch.inline.svg';
import VshnLogo from 'icons/logo-vshn.inline.svg';
import WildLifeLogo from 'icons/logo-wild-life.inline.svg';
import Placeholder from 'icons/placeholder.inline.svg';

import Button from '../button';

import AccuKnoxLogo from './images/accuknox.inline.svg';
import AcossLogo from './images/acoss.inline.svg';
import ArangoDbLogo from './images/arangodb.inline.svg';
import AyedoLogo from './images/ayedo.inline.svg';
import AzureLogo from './images/azure.inline.svg';
import BloombergLogo from './images/bloomberg.inline.svg';
import BytedanceLogo from './images/bytedance.inline.svg';
import CanonicalLogo from './images/canonical.inline.svg';
import CistecLogo from './images/cistec.inline.svg';
import CivoLogo from './images/civo.inline.svg';
import ClickHouseLogo from './images/clickhouse.inline.svg';
import CogniteLogo from './images/cognite.inline.svg';
import CybozuLogo from './images/cybozu.inline.svg';
import DaimlerTruckLogo from './images/daimlertruck.inline.svg';
import DbraincloudLogo from './images/dbraincloud.inline.svg';
import DbschenkerLogo from './images/dbschenker.inline.svg';
import DeezerLogo from './images/deezer.inline.svg';
import Ect888Logo from './images/ect888.inline.svg';
import EdgelessSystemsLogo from './images/edgeless-systems.inline.svg';
import EficodeLogo from './images/eficode.inline.svg';
import ElasticPathLogo from './images/elasticpath.inline.svg';
import F5Logo from './images/f5.inline.svg';
import FinleapLogo from './images/finleap.inline.svg';
import Form3Logo from './images/form3.inline.svg';
import FRSCALogo from './images/frsca.inline.svg';
import GiantSwarmLogo from './images/giant-swarm.inline.svg';
import HetznerLogo from './images/hetzner.inline.svg';
import IlionxLogo from './images/ilionx.inline.svg';
import ImmerokLogo from './images/immerok.inline.svg';
import InfomaniakLogo from './images/infomaniak.inline.svg';
import InnoqLogo from './images/innoq.inline.svg';
import IsovalentLogo from './images/isovalent.inline.svg';
import JumoLogo from './images/jumo.inline.svg';
import JyskLogo from './images/jysk-tech.inline.svg';
import KiloLogo from './images/kilo.inline.svg';
import KryptosLogo from './images/kryptos.inline.svg';
import KubehetznerLogo from './images/kube-hetzner.inline.svg';
import KubeOvnLogo from './images/kube-ovn.inline.svg';
import KubermaticLogo from './images/kubermatic.inline.svg';
import KubesphereLogo from './images/kubesphere.inline.svg';
import LiquidReplyLogo from './images/liquid-reply.inline.svg';
import MagicLeapLogo from './images/magic-leap.inline.svg';
import MelenionLogo from './images/melenion.inline.svg';
import MeltwaterLogo from './images/meltwater.inline.svg';
import MobilabLogo from './images/mobilab.inline.svg';
import MuxLogo from './images/mux.inline.svg';
import MyFitnessPalLogo from './images/myfitnesspal.inline.svg';
import NexxiotLogo from './images/nexxiot.inline.svg';
import NineLogo from './images/nine.inline.svg';
import NorthflankLogo from './images/northflank.inline.svg';
import NYTLogo from './images/nyt.inline.svg';
import OverstockLogo from './images/overstock.inline.svg';
import PalantirLogo from './images/palantir.inline.svg';
import ParseableLogo from './images/parseable.inline.svg';
import PlaidLogo from './images/plaid.inline.svg';
import PlanetscaleLogo from './images/planetscale.inline.svg';
import PlusserverLogo from './images/plusserver.inline.svg';
import PolarSignalsLogo from './images/polarsignals.inline.svg';
import PolverioLogo from './images/polverio.inline.svg';
import PostfinanceLogo from './images/postfinance.inline.svg';
import ProtonLogo from './images/proton.inline.svg';
import RadioFranceLogo from './images/radiofrance.inline.svg';
import RafayLogo from './images/rafay.inline.svg';
import RapyutaRoboticsLogo from './images/rapyuta-robotics.inline.svg';
import RobinhoodLogo from './images/robinhood.inline.svg';
import SantaLogo from './images/santa.inline.svg';
import SapLogo from './images/sap.inline.svg';
import SapianLogo from './images/sapian.inline.svg';
import ScalewayLogo from './images/scaleway.inline.svg';
import SchubergPhilisLogo from './images/schuberg-philis.inline.svg';
import SianalyticsLogo from './images/sianalytics.inline.svg';
import SimpleLogo from './images/simple.inline.svg';
import SinglestoreLogo from './images/singlestore.inline.svg';
import SkybetLogo from './images/skybet.inline.svg';
import SmileLogo from './images/smile.inline.svg';
import SnappLogo from './images/snapp.inline.svg';
import SoloLogo from './images/solo.inline.svg';
import SpherityLogo from './images/spherity.inline.svg';
import SportradarLogo from './images/sportradar.inline.svg';
import SproutfiLogo from './images/sproutfi.inline.svg';
import SuperorbitalLogo from './images/superorbital.inline.svg';
import TSILogo from './images/t-systems.inline.svg';
import TailorBrandsLogo from './images/tailor-brands.inline.svg';
import TestifysecLogo from './images/testifysec.inline.svg';
import TietoevryLogo from './images/tietoevry.inline.svg';
import TrendyolLogo from './images/trendyol.inline.svg';
import TwilioLogo from './images/twilio.inline.svg';
import UngleichLogo from './images/ungleich.inline.svg';
import UnitedCloudLogo from './images/unitedcloud.inline.svg';
import UtmostLogo from './images/utmost.inline.svg';
import VkcloudLogo from './images/vkcloud.inline.svg';
import ViasatLogo from './images/viasat.inline.svg';
import Ws02Logo from './images/wso2.inline.svg';
import YahooLogo from './images/yahoo.inline.svg';

const icons = {
  santa: SantaLogo,
  jysk: JyskLogo,
  vkcloud: VkcloudLogo,
  sianalytics: SianalyticsLogo,
  ilionx: IlionxLogo,
  cybozu: CybozuLogo,
  viasat: ViasatLogo,
  ws02: Ws02Logo,
  singlestore: SinglestoreLogo,
  deezer: DeezerLogo,
  parseable: ParseableLogo,
  plusserver: PlusserverLogo,
  dbraincloud: DbraincloudLogo,
  dbschenker: DbschenkerLogo,
  twilio: TwilioLogo,
  testifysec: TestifysecLogo,
  trendyol: TrendyolLogo,
  eficode: EficodeLogo,
  tietoevry: TietoevryLogo,
  unitedcloud: UnitedCloudLogo,
  kubehetzner: KubehetznerLogo,
  cistec: CistecLogo,
  proton: ProtonLogo,
  clickhouse: ClickHouseLogo,
  daimlertruck: DaimlerTruckLogo,
  polarsignals: PolarSignalsLogo,
  polverio: PolverioLogo,
  kilo: KiloLogo,
  nine: NineLogo,
  robinhood: RobinhoodLogo,
  azure: AzureLogo,
  bloomberg: BloombergLogo,
  ascend: AscendLogo,
  palark: PalarkLogo,
  isovalent: IsovalentLogo,
  spherity: SpherityLogo,
  schubergPhilis: SchubergPhilisLogo,
  plaid: PlaidLogo,
  superorbital: SuperorbitalLogo,
  sproutfi: SproutfiLogo,
  solo: SoloLogo,
  melenion: MelenionLogo,
  overstock: OverstockLogo,
  acoss: AcossLogo,
  google: GoogleLogo,
  bytedance: BytedanceLogo,
  elasticpath: ElasticPathLogo,
  adobe: AdobeLogo,
  aws: AWSLogo,
  f5: F5Logo,
  kryptos: KryptosLogo,
  innoq: InnoqLogo,
  arangodb: ArangoDbLogo,
  ect888: Ect888Logo,
  accuknox: AccuKnoxLogo,
  capitalOne: CapitalOneLogo,
  alibabaCloud: AlibabaCloudLogo,
  cengn: CengnLogo,
  digitalOcean: DigitalOceanLogo,
  gitlab: GitlabLogo,
  masmovil: MasmovilLogo,
  trip: TripLogo,
  sandp: SandPLogo,
  seznam: SeznamCZLogo,
  wildLife: WildLifeLogo,
  bell: BellLogo,
  rafay: RafayLogo,
  frsca: FRSCALogo,
  kubeOvn: KubeOvnLogo,
  sky: SkyLogo,
  skybet: SkybetLogo,
  planetscale: PlanetscaleLogo,
  homeRetailer: Placeholder,
  datadog: DatadogLogo,
  cosmonic: CosmonicLogo,
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
  mobilab: MobilabLogo,
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
  edgelessSystems: EdgelessSystemsLogo,
  giantSwarm: GiantSwarmLogo,
  immerok: ImmerokLogo,
  magicLeap: MagicLeapLogo,
  sapian: SapianLogo,
  ungleich: UngleichLogo,
  vshn: VshnLogo,
  hetzner: HetznerLogo,
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
  id,
}) => (
  <section className={classNames(className, themeClassNames[theme].wrapper)} id={id}>
    <Container className="flex flex-col">
      {title && (
        <Link
          className={classNames(
            isTitleCentered && 'mb-6 self-center text-center md:mb-10 lg:mb-16'
          )}
          to={`#${id}`}
        >
          <Heading tag="h3">{title}</Heading>
        </Link>
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
                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-gray-3 pt-4 leading-none">
                  {links.map(({ linkUrl, linkText, linkTarget }, index) => (
                    <Link
                      className="relative after:absolute after:top-1/2 after:-right-2.5 after:inline-block after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full after:bg-gray-5 last:after:hidden"
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
  id: PropTypes.string,
};

UserCommunity.defaultProps = {
  className: null,
  title: null,
  isTitleCentered: false,
  theme: 'white',
  buttonText: null,
  buttonUrl: null,
  buttonTarget: null,
  id: null,
};

export default UserCommunity;
