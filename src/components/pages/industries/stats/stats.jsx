import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Link from 'components/shared/link/link';
import ArrowIcon from 'icons/arrow.inline.svg';
import ClickHouseLogo from 'icons/logo-clickhouse.inline.svg';
import PostFinanceLogo from 'icons/logo-postfinance.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';

const logos = {
  clickHouse: ClickHouseLogo,
  trip: TripLogo,
  postFinance: PostFinanceLogo,
};

const Stats = ({ logo, description, CTAtext, url, stats, className }) => {
  const Logo = logos[logo];

  return (
    <Container className={className}>
      <div className="rounded-xl bg-white px-6 py-8 shadow-primary">
        <div className="grid grid-cols-12 gap-4 divide-y divide-gray-3 md:gap-6 lg:gap-8 lg:divide-x lg:divide-y-0">
          <div className="col-span-12 flex flex-col items-start justify-start gap-4 divide-y divide-gray-3 md:flex-row md:items-center md:justify-between md:gap-6 md:divide-x md:divide-y-0 lg:col-span-8 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={classNames(
                  'flex h-full w-full flex-1 flex-col items-center justify-center gap-y-2 text-left md:w-auto',
                  index !== 0 ? 'pt-6 md:pl-8 md:pt-0' : ''
                )}
              >
                <span className="text-md w-full font-bold lg:text-xl">{stat.heading}</span>
                <span className="text-md w-full text-left">{stat.subHeading}</span>
              </div>
            ))}
          </div>
          <div className="col-span-12 flex h-full flex-col items-start justify-start pt-6 md:pt-8 lg:col-span-4 lg:pl-8 lg:pt-0">
            <span className="shrink-0 text-left">
              <Logo className="h-20 w-32" />
            </span>
            <p className="w-full max-w-none text-sm">{description}</p>
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

Stats.defaultProps = {
  className: {},
};

Stats.propTypes = {
  logo: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  CTAtext: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      subHeading: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Stats;
