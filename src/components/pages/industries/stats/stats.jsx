import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import ArrowIcon from 'icons/arrow.inline.svg';

const Stats = ({ logo: Logo, description, CTAtext, url, stats, className }) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
    gridTemplateRows: '1fr',
  };

  const gridArea = [
    '1 / 1 / 2 / 2',
    '1 / 2 / 2 / 3',
    '1 / 3 / 2 / 4',
    '1 / 4 / 2 / 5',
    '1 / 5 / 2 / 6',
  ];

  return (
    <Container className={className}>
      <div className="rounded-xl bg-white p-6 shadow-primary">
        <div className=" lg:flex lg:items-center lg:gap-[29px]">
          <div className="m-auto text-center lg:text-left">
            <Logo className="h-20 w-32" />
            <p className="pb-3 text-center lg:w-[285px] lg:text-left lg:text-sm">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm font-bold uppercase text-primary-1 hover:text-gray-1 lg:inline-block"
            >
              <span className="flex items-center gap-2">
                <span>{CTAtext}</span>
                <span>
                  <ArrowIcon className="ml-1 hidden shrink-0 xs:inline-block" />
                </span>
              </span>
            </a>
          </div>
          <div
            className="mt-5 flex flex-row flex-wrap gap-8 self-center lg:mt-0  lg:grid lg:w-[876px] lg:gap-4"
            style={gridStyle}
          >
            {stats.map((stat, index) => {
              const gridChild = { gridArea: gridArea[index] };
              return (
                <div
                  key={index}
                  style={gridChild}
                  className="flex basis-1/3 items-center justify-center lg:h-[150px]  lg:border-l lg:border-[#E0E5EB]"
                >
                  <div className="flex flex-col items-center text-center lg:gap-8">
                    <span className="text-md mx-auto font-bold lg:text-xl">{stat.heading}</span>
                    <span className="text-md mx-auto p-1 text-left">{stat.subHeading}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold uppercase text-[#0073E5] lg:hidden"
          >
            <span className="flex items-center gap-2">
              <span>{CTAtext}</span>
              <span>
                <ArrowIcon className="ml-1 hidden shrink-0 xs:inline-block" />
              </span>
            </span>
          </a>
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
