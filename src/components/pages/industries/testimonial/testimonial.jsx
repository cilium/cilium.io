import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Link from 'components/shared/link/link';
import ArrowIcon from 'icons/arrow.inline.svg';
import AscendLogo from 'icons/logo-ascend.inline.svg';
import AzureLogo from 'icons/logo-azure.inline.svg';
import BellLogo from 'icons/logo-bell.inline.svg';
import BloombergLogo from 'icons/logo-bloomberg.inline.svg';
import CiliumLogo from 'icons/logo-cilium.inline.svg';
import DatadogLogo from 'icons/logo-datadog.inline.svg';
import DbSchenkerLogo from 'icons/logo-dbschenker.inline.svg';
import EficodeLogo from 'icons/logo-efficode.inline.svg';
import GoogleCloudLogo from 'icons/logo-googlecloud.inline.svg';
import HetznerLogo from 'icons/logo-hetzner.inline.svg';
import KubeEdgeLogo from 'icons/logo-kubeedge.inline.svg';
import MeltwaterLogo from 'icons/logo-meltwater.inline.svg';
import NewYorkTimesLogo from 'icons/logo-newyork.inline.svg';
import PalarkLogo from 'icons/logo-palark.inline.svg';
import RocheLogo from 'icons/logo-roche.inline.svg';
import SeznamLogo from 'icons/logo-seznam.inline.svg';
import TrendyolLogo from 'icons/logo-trendyol.inline.svg';
import QuoteIcon from 'icons/quote.inline.svg';

const logos = {
  bell: BellLogo,
  datadog: DatadogLogo,
  ascend: AscendLogo,
  cilium: CiliumLogo,
  seznam: SeznamLogo,
  newYorkTimes: NewYorkTimesLogo,
  bloomberg: BloombergLogo,
  dbSchenker: DbSchenkerLogo,
  trendyol: TrendyolLogo,
  eficode: EficodeLogo,
  palark: PalarkLogo,
  azure: AzureLogo,
  googleCloud: GoogleCloudLogo,
  hetzner: HetznerLogo,
  kubeedge: KubeEdgeLogo,
  roche: RocheLogo,
  meltwater: MeltwaterLogo,
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
      <div className="rounded-xl bg-white px-6 py-8 shadow-primary">
        <div className="grid grid-cols-12 gap-4 divide-y divide-gray-3 md:gap-6 lg:gap-8 lg:divide-x lg:divide-y-0">
          <figure className="col-span-12 flex flex-col items-center justify-between gap-y-6 text-center lg:col-span-8">
            <QuoteIcon className="inline-block w-4 lg:w-4" />
            <blockquote className="flex-1 text-lg">{quotedText}</blockquote>
            {withPerson && (
              <figcaption>
                <span className="text-sm font-bold">{name}</span> —{' '}
                <span className="text-sm text-gray-1">{role}</span>
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
  quotedText: PropTypes.string.isRequired,
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
