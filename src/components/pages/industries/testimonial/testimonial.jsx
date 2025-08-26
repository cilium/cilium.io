import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Link from 'components/shared/link/link';
import ArrowIcon from 'icons/arrow.inline.svg';
import EccoLogo from 'icons/ecco.inline.svg';
import KakaoLogo from 'icons/kakao.inline.svg';
import AlibabaCloudLogo from 'icons/logo-alibaba-cloud.inline.svg';
import AscendLogo from 'icons/logo-ascend.inline.svg';
import AzureLogo from 'icons/logo-azure.inline.svg';
import BellLogo from 'icons/logo-bell.inline.svg';
import BloombergLogo from 'icons/logo-bloomberg.inline.svg';
import CiliumLogo from 'icons/logo-cilium.inline.svg';
import DatadogLogo from 'icons/logo-datadog.inline.svg';
import DbSchenkerLogo from 'icons/logo-dbschenker.inline.svg';
import EficodeLogo from 'icons/logo-efficode.inline.svg';
import GDataLogo from 'icons/logo-gdata.inline.svg';
import GoogleCloudLogo from 'icons/logo-googlecloud.inline.svg';
import HetznerLogo from 'icons/logo-hetzner.inline.svg';
import IlionxLogo from 'icons/logo-ilionx.inline.svg';
import KubeEdgeLogo from 'icons/logo-kubeedge.inline.svg';
import MeltwaterLogo from 'icons/logo-meltwater.inline.svg';
import NewYorkTimesLogo from 'icons/logo-newyork.inline.svg';
import PalarkLogo from 'icons/logo-palark.inline.svg';
import RabobankLogo from 'icons/logo-rabobank.inline.svg';
import RocheLogo from 'icons/logo-roche.inline.svg';
import SeznamLogo from 'icons/logo-seznam.inline.svg';
import TrendyolLogo from 'icons/logo-trendyol.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';
import UtmostLogo from 'icons/logo-utmost.inline.svg';
import QuoteIcon from 'icons/quote.inline.svg';
import SicrediLogo from 'icons/sicredi.inline.svg';
import Wso2Logo from 'icons/wso2.inline.svg';

const logos = {
  bell: BellLogo,
  datadog: DatadogLogo,
  ascend: AscendLogo,
  cilium: CiliumLogo,
  seznam: SeznamLogo,
  sicredi: SicrediLogo,
  newYorkTimes: NewYorkTimesLogo,
  bloomberg: BloombergLogo,
  dbSchenker: DbSchenkerLogo,
  trendyol: TrendyolLogo,
  eficode: EficodeLogo,
  palark: PalarkLogo,
  azure: AzureLogo,
  googleCloud: GoogleCloudLogo,
  hetzner: HetznerLogo,
  ilionx: IlionxLogo,
  kakao: KakaoLogo,
  kubeedge: KubeEdgeLogo,
  rabobank: RabobankLogo,
  roche: RocheLogo,
  meltwater: MeltwaterLogo,
  ecco: EccoLogo,
  wso2: Wso2Logo,
  utmost: UtmostLogo,
  alibaba: AlibabaCloudLogo,
  trip: TripLogo,
  gdata: GDataLogo,
};

const AdopterTestimonial = ({
  description,
  quotedText,
  withPerson,
  CTAtext,
  name,
  role,
  logo,
  url,
  className,
}) => {
  const Logo = logos[logo];

  return (
    <Container className={className}>
      <div className="rounded-xl bg-white dark:bg-gray-2 px-6 py-8 shadow-primary">
        <div className="grid grid-cols-12 gap-4 divide-y divide-gray-3 dark:divide-gray-600 md:gap-6 lg:gap-8 lg:divide-x lg:divide-y-0">
          <figure className="col-span-12 flex flex-col items-center justify-between gap-y-6 text-center lg:col-span-8">
            <QuoteIcon className="inline-block w-4 lg:w-4" />
            <blockquote className="flex-1 text-lg">
              {Array.isArray(quotedText)
                ? quotedText.map((text, index) => (
                    <p key={index} className={index > 0 ? 'mt-4' : undefined}>
                      {text}
                    </p>
                  ))
                : quotedText}
            </blockquote>
            {withPerson && (
              <figcaption>
                <span className="text-sm font-bold">{name}</span> —{' '}
                <span className="text-sm text-gray-1 dark:text-[#485163]">{role}</span>
              </figcaption>
            )}
          </figure>
          <div className="col-span-12 flex h-full flex-col items-start justify-start pt-6 md:pt-8 lg:col-span-4 lg:pl-8 lg:pt-0">
            <span className="shrink-0 text-left">
              <Logo className="w-32" />
            </span>
            <p className="mt-4 w-full max-w-none text-sm">{description}</p>
            <Link
              to={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-sm font-semibold uppercase text-primary-1 hover:text-gray-1"
            >
              <span className="flex items-center gap-2">
                {CTAtext}
                <ArrowIcon className="ml-1 shrink-0" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

AdopterTestimonial.propTypes = {
  description: PropTypes.string.isRequired,
  quotedText: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    .isRequired,
  CTAtext: PropTypes.string,
  withPerson: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  logo: PropTypes.string,
  role: PropTypes.string,
  url: PropTypes.string.isRequired,
};

AdopterTestimonial.defaultProps = {
  CTAtext: 'Learn More',
  withPerson: true,
  name: null,
  logo: null,
  role: null,
  className: null,
};

export default AdopterTestimonial;
