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
import NewYorkTimesLogo from 'icons/logo-newyork.inline.svg';
import PalarkLogo from 'icons/logo-palark.inline.svg';
import SeznamLogo from 'icons/logo-seznam.inline.svg';
import TrendyolLogo from 'icons/logo-trendyol.inline.svg';

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 29"
              fill="none"
              className="inline-block w-4 lg:w-4"
            >
              <path
                d="M7.63703 14.0635H1.75564C1.85596 6.75107 3.00967 5.54537 6.60873 2.88343C7.02256 2.57026 7.1605 1.9126 6.90969 1.38021C6.67143 0.863483 6.1322 0.69124 5.71837 1.00441C1.47975 4.1361 0 6.04644 0 15.1439V23.5839C0 26.2615 1.7431 28.4223 3.87495 28.4223H7.63703C9.84412 28.4223 11.512 26.3397 11.512 23.5839V18.8863C11.512 16.1461 9.84412 14.0635 7.63703 14.0635Z"
                fill="#A7B1BE"
              />
              <path
                d="M21.2038 14.0635H15.3224C15.4227 6.75107 16.5764 5.54537 20.1755 2.88343C20.5893 2.57026 20.7272 1.9126 20.4764 1.38021C20.2256 0.863483 19.6989 0.69124 19.2726 1.00441C15.034 4.1361 13.5542 6.04644 13.5542 15.1596V23.5995C13.5542 26.2771 15.2973 28.438 17.4291 28.438H21.1912C23.3983 28.438 25.0662 26.3554 25.0662 23.5995V18.902C25.0787 16.1461 23.4109 14.0635 21.2038 14.0635Z"
                fill="#A7B1BE"
              />
            </svg>
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
