import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

import AdobeLogo from './images/adobe.inline.svg';
import AlibabaCloudLogo from './images/alibaba.inline.svg';
import ArangodbLogo from './images/arango.inline.svg';
import AscendLogo from './images/ascend.inline.svg';
import AWSLogo from './images/aws.inline.svg';
import AyedoLogo from './images/ayedo.inline.svg';
import AzureLogo from './images/azure.inline.svg';
import BackMarketLogo from './images/backmarket.inline.svg';
import BellLogo from './images/bell.inline.svg';
import BloombergLogo from './images/bloomberg.inline.svg';
import ByteDanceLogo from './images/bytedance.inline.svg';
import CanonicalLogo from './images/canonical.inline.svg';
import CapitalOneLogo from './images/capitalone.inline.svg';
import CengnLogo from './images/cengn.inline.svg';
import CistecLogo from './images/cistec.inline.svg';
import CivoLogo from './images/civo.inline.svg';
import ClickHouseLogo from './images/clickhouse.inline.svg';
import CosmonicLogo from './images/cosmonic.inline.svg';
import DatadogLogo from './images/datadog.inline.svg';
import DbSchenkerLogo from './images/dbschenker.inline.svg';
import DigitaloceanLogo from './images/digitalocean.inline.svg';
import EgdelessLogo from './images/edgeless.inline.svg';
import EficodeLogo from './images/eficode.inline.svg';
import ElasticPathLogo from './images/elasticpath.inline.svg';
import EquinixLogo from './images/equinix.inline.svg';
import Et888Logo from './images/et888.inline.svg';
import F5Logo from './images/f5.inline.svg';
import Form3Logo from './images/form3.inline.svg';
import FRSCALogo from './images/frsca.inline.svg';
import GdataLogo from './images/gdata.inline.svg';
import Gitlab from './images/gitlab.inline.svg';
import GooglecloudLogo from './images/google.inline.svg';
import HetznerLogo from './images/hetzner.inline.svg';
import InfomaniakLogo from './images/infomaniak.inline.svg';
import InnoqLogo from './images/innoq.inline.svg';
import JumoLogo from './images/jumo.inline.svg';
import KryptosLogo from './images/kryptos.inline.svg';
import LiquidReplyLogo from './images/liquid.inline.svg';
import MasmovilLogo from './images/masmovil.inline.svg';
import MobilabLogo from './images/mobilab.inline.svg';
import NewYorkTimesLogo from './images/newyork.inline.svg';
import NineNavigatorsLogo from './images/nine.inline.svg';
import OpenshiftLogo from './images/openshift.inline.svg';
import OpenStackLogo from './images/openstack.inline.svg';
import OverstockLogo from './images/overstock.inline.svg';
import PalantirLogo from './images/palantir.inline.svg';
import PalarkLogo from './images/palark.inline.svg';
import PlanetscaleLogo from './images/planetscale.inline.svg';
import PlusserverLogo from './images/plusserver.inline.svg';
import PostFinanceLogo from './images/postfinance.inline.svg';
import ProtonLogo from './images/proton.inline.svg';
import QwistLogo from './images/qwist.inline.svg';
import RadiofranceLogo from './images/radiofrance.inline.svg';
import RobinhoodLogo from './images/robinhood.inline.svg';
import ScalewayLogo from './images/scaleway.inline.svg';
import SchubergLogo from './images/schuberg.inline.svg';
import SeznamLogo from './images/seznam.inline.svg';
import SkyBetLogo from './images/skybet.inline.svg';
import SovereignCloud from './images/sovereign.inline.svg';
import SportRadarLogo from './images/sportradar.inline.svg';
import SuperOrbitalLogo from './images/superorbital.inline.svg';
import TailorBrandsLogo from './images/tailorbrands.inline.svg';
import TelenorLogo from './images/telenor.inline.svg';
import TencentCloudLogo from './images/tencentcloud.inline.svg';
import TestifyLogo from './images/testify.inline.svg';
import TietoevryLogo from './images/tietoevry.inline.svg';
import TrendyolLogo from './images/trendyol.inline.svg';
import TripLogo from './images/trip.inline.svg';
import TsystemsLogo from './images/tsystems.inline.svg';
import USwitchLogo from './images/uswitch.inline.svg';
import WildLifeLogo from './images/wildlife.inline.svg';
import YahooLogo from './images/yahoo.inline.svg';

const logos = {
  adobe: AdobeLogo,
  alibaba: AlibabaCloudLogo,
  arrango: ArangodbLogo,
  ascend: AscendLogo,
  aws: AWSLogo,
  ayedo: AyedoLogo,
  azure: AzureLogo,
  backmarket: BackMarketLogo,
  bell: BellLogo,
  bloomberg: BloombergLogo,
  bytedance: ByteDanceLogo,
  capitalone: CapitalOneLogo,
  canonical: CanonicalLogo,
  cengn: CengnLogo,
  cistec: CistecLogo,
  civo: CivoLogo,
  clickhouse: ClickHouseLogo,
  cosmonic: CosmonicLogo,
  datadog: DatadogLogo,
  dbschenker: DbSchenkerLogo,
  digitalocean: DigitaloceanLogo,
  egdeless: EgdelessLogo,
  eficode: EficodeLogo,
  elasticpath: ElasticPathLogo,
  equinix: EquinixLogo,
  et888: Et888Logo,
  f5: F5Logo,
  form3: Form3Logo,
  frsca: FRSCALogo,
  gdata: GdataLogo,
  gitlab: Gitlab,
  google: GooglecloudLogo,
  hetzner: HetznerLogo,
  infomaniak: InfomaniakLogo,
  innoq: InnoqLogo,
  jumo: JumoLogo,
  kryptos: KryptosLogo,
  liquid: LiquidReplyLogo,
  masmovil: MasmovilLogo,
  mobilab: MobilabLogo,
  newyorktimes: NewYorkTimesLogo,
  nine: NineNavigatorsLogo,
  openshift: OpenshiftLogo,
  openstack: OpenStackLogo,
  overstock: OverstockLogo,
  palantir: PalantirLogo,
  palark: PalarkLogo,
  planetscale: PlanetscaleLogo,
  plusserver: PlusserverLogo,
  postfinance: PostFinanceLogo,
  proton: ProtonLogo,
  qwist: QwistLogo,
  radiofrance: RadiofranceLogo,
  robinhood: RobinhoodLogo,
  scaleway: ScalewayLogo,
  schuberg: SchubergLogo,
  seznam: SeznamLogo,
  skybet: SkyBetLogo,
  sovereigncloud: SovereignCloud,
  sportradar: SportRadarLogo,
  superorbital: SuperOrbitalLogo,
  tailorbrands: TailorBrandsLogo,
  telenor: TelenorLogo,
  tencent: TencentCloudLogo,
  testify: TestifyLogo,
  tietoevry: TietoevryLogo,
  trendyol: TrendyolLogo,
  trip: TripLogo,
  uswitch: USwitchLogo,
  wildlife: WildLifeLogo,
  yahoo: YahooLogo,
  tsystems: TsystemsLogo,
};

const AdoptersLogo = ({ items, className }) => (
  <Container>
    <div
      className={classNames(
        'mx-auto grid grid-cols-2 place-content-center place-items-center content-center gap-4 text-center md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8',
        className
      )}
    >
      {items.map((logo, index) => {
        const Logo = logos[logo];
        return (
          <Logo
            className="h-40px  max-w-[180px] text-gray-1"
            style={{ height: '40px' }}
            key={index}
          />
        );
      })}
    </div>
  </Container>
);

AdoptersLogo.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

AdoptersLogo.defaultProps = {
  className: null,
};

export default AdoptersLogo;
