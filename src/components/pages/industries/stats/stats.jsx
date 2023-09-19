import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const Stats = ({ logo: Logo, description, CTAtext, url, stats }) => {
  const gridStyle = {
    gridTemplateColumns: 'repeat(5, 1fr)',
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
    <Container>
      <div
        style={{ boxShadow: '0px 1px 8px 0px rgba(20, 26, 31, 0.20)' }}
        className="rounded-xl  bg-white p-6 lg:h-[264px] lg:pl-[29px] lg:pr-[50px] lg:pt-[24px] lg:pb-[46px]"
      >
        <div className=" lg:flex lg:items-center lg:gap-[29px]">
          <div className="m-auto text-center lg:text-left">
            <Logo className="w-20" />
            <p className="text-center lg:w-[285px]  lg:text-left">{description}</p>

            <a href={url} className="hidden font-bold uppercase text-[#0073E5] lg:inline-block">
              <span className="flex items-center gap-2">
                <span>{CTAtext}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                  >
                    <path
                      d="M0.884277 6H17.5816M17.5816 6L12.3637 1M17.5816 6L12.3637 11"
                      stroke="#0073E6"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </div>
          <div
            className="mt-5 flex flex-row flex-wrap gap-8 self-center lg:mt-0   lg:grid lg:w-[876px] lg:gap-4"
            style={gridStyle}
          >
            {stats.map((stat, index) => {
              const gridChild = { gridArea: gridArea[index] };
              return (
                <div
                  key={index}
                  style={gridChild}
                  className="flex basis-1/3 items-center justify-center lg:h-[200px]  lg:border-l lg:border-[#E0E5EB]"
                >
                  <div className="flex flex-col items-center text-center lg:gap-8">
                    <h1 className="text-md font-bold">{stat.heading}</h1>
                    <h3 className="text-md ">{stat.subHeading}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <a href={url} className="inline-block font-bold uppercase text-[#0073E5] lg:hidden">
            <span className="flex items-center gap-2">
              <span>{CTAtext}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                >
                  <path
                    d="M0.884277 6H17.5816M17.5816 6L12.3637 1M17.5816 6L12.3637 11"
                    stroke="#0073E6"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </Container>
  );
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
};

export default Stats;
