import React from 'react';

import Container from 'components/shared/container/container';

const Stats = ({ logo, description, CTAtext, url, stats }) => {
  const gridStyle = {
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: '1fr',
  };
  const gridFirstChild = {
    gridArea: '1 / 1 / 2 / 2',
  };
  const gridSecondChild = {
    gridArea: '1 / 2 / 2 / 3',
  };
  const gridThirdChild = {
    gridArea: '1 / 3 / 2 / 4',
  };
  const gridFourthChild = {
    gridArea: '1 / 4 / 2 / 5',
  };
  const gridLastChild = {
    gridArea: '1 / 5 / 2 / 6',
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
            {logo}
            <p className="mt-[36.4px] mb-[18px] text-center lg:w-[285px]  lg:text-left">
              Post Finance one of Switzerland's leading financial institutions uses Cilium for Cloud
              Native Networking
            </p>

            {/* Link with a link tag here */}
            <a href={url} className="font-bold uppercase text-[#0073E5]">
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
            className="mt-5 flex flex-col gap-8 self-center lg:mt-0   lg:grid lg:w-[876px] lg:gap-4"
            style={gridStyle}
          >
            <div
              style={gridFirstChild}
              className="flex items-center justify-center lg:h-[200px]  lg:border-l lg:border-[#E0E5EB]"
            >
              <div className="flex flex-col items-center text-center lg:gap-8">
                <h1 className="text-[32px] font-bold">17</h1>
                <h3 className="text-[20px] font-bold">Clusters</h3>
              </div>
            </div>
            <div
              style={gridSecondChild}
              className="flex items-center justify-center lg:h-[200px]  lg:border-l lg:border-[#E0E5EB]"
            >
              <div className="flex flex-col items-center text-center lg:gap-8">
                <h1 className="text-[32px] font-bold">7 - 75</h1>
                <h3 className="text-[20px] font-bold">Nodes</h3>
              </div>
            </div>
            <div
              style={gridThirdChild}
              className="flex items-center justify-center lg:h-[200px]  lg:border-l lg:border-[#E0E5EB]"
            >
              <div className="flex flex-col items-center text-center lg:gap-8">
                <h1 className="text-[32px] font-bold">x12k</h1>
                <h3 className="text-[20px] font-bold">Faster Pod startup</h3>
              </div>
            </div>
            <div
              style={gridFourthChild}
              className="flex items-center justify-center lg:h-[200px]  lg:border-l lg:border-[#E0E5EB]"
            >
              <div className="flex flex-col items-center text-center lg:gap-8">
                <h1 className="text-[32px] font-bold">2.4M</h1>
                <h3 className="text-[20px] font-bold">Users</h3>
              </div>
            </div>
            <div
              style={gridLastChild}
              className="flex items-center justify-center lg:h-[200px]  lg:border-l lg:border-[#E0E5EB]"
            >
              <div className="flex flex-col items-center text-center lg:gap-8">
                <h1 className="text-[32px] font-bold">1000s</h1>
                <h3 className="text-[20px] font-bold">Containers</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stats;
