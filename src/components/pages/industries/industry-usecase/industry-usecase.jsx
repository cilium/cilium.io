import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Link from 'components/shared/link/link';

const IndustryUseCases = ({ heading, usecases }) => (
  <Container>
    <h2 className="text-center text-[36px] font-bold lg:my-20">{heading}</h2>
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
      {usecases.map(({ icon: Icon, description, title, url }, index) => (
        <div
          style={{ boxShadow: '0px 1px 8px 0px rgba(20, 26, 31, 0.20)' }}
          className="rounded-xl bg-white p-[28px] lg:flex lg:w-[384px] lg:flex-col lg:justify-between"
          key={index}
        >
          <div>
            <Icon />
          </div>
          <h3 className="text-xl font-bold lg:mt-6">{title}</h3>
          <p className="lg:my-8 lg:h-[120px]">{description}</p>

          <div className=" pt-9 ">
            <Link to={url} className="font-bold uppercase text-[#0073E5]">
              <span className="flex items-center gap-2 ">
                <span>Learn more</span>

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
            </Link>
          </div>
        </div>
      ))}
    </div>
  </Container>
);

IndustryUseCases.propTypes = {
  heading: PropTypes.string.isRequired,
  usecases: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default IndustryUseCases;
