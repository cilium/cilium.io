import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const AdopterTestimonial = ({
  description,
  quotedText,
  withPerson,
  name,
  role,
  logo: Logo,
  url,
}) => (
  <Container className="">
    <div
      className="rounded-xl bg-white px-8 py-6"
      style={{ boxShadow: '0px 1px 8px 0px rgba(20, 26, 31, 0.20)' }}
    >
      <div className="lg:flex">
        <div className="lg:flex lg:items-center lg:gap-6">
          <div className="lg:flex lg:flex-col lg:justify-between lg:gap-4">
            <span>
              <Logo className="w-32 lg:w-32" />
            </span>
            <p className=" w-full max-w-none ">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden font-bold uppercase text-[#0073E5] lg:inline-block"
            >
              <span className="flex items-center gap-2">
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
            </a>
          </div>
          <div className="h-[1px] w-full bg-[#A7B1BE] lg:block lg:h-[180px] lg:w-[1px]" />
        </div>
        <div className="mx-auto text-center lg:flex lg:flex-col lg:items-center lg:justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 29"
            fill="none"
            className="inline-block w-4 lg:w-4 "
          >
            <path
              d="M7.63703 14.0635H1.75564C1.85596 6.75107 3.00967 5.54537 6.60873 2.88343C7.02256 2.57026 7.1605 1.9126 6.90969 1.38021C6.67143 0.863483 6.1322 0.69124 5.71837 1.00441C1.47975 4.1361 0 6.04644 0 15.1439V23.5839C0 26.2615 1.7431 28.4223 3.87495 28.4223H7.63703C9.84412 28.4223 11.512 26.3397 11.512 23.5839V18.8863C11.512 16.1461 9.84412 14.0635 7.63703 14.0635Z"
              fill="#6C7993"
            />
            <path
              d="M21.2038 14.0635H15.3224C15.4227 6.75107 16.5764 5.54537 20.1755 2.88343C20.5893 2.57026 20.7272 1.9126 20.4764 1.38021C20.2256 0.863483 19.6989 0.69124 19.2726 1.00441C15.034 4.1361 13.5542 6.04644 13.5542 15.1596V23.5995C13.5542 26.2771 15.2973 28.438 17.4291 28.438H21.1912C23.3983 28.438 25.0662 26.3554 25.0662 23.5995V18.902C25.0787 16.1461 23.4109 14.0635 21.2038 14.0635Z"
              fill="#6C7993"
            />
          </svg>
          <p>{quotedText}</p>
          {withPerson && (
            <p>
              <span className="font-bold">{name}</span>,{' '}
              <span className="text-[#6C7993]">{role}</span>
            </p>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold uppercase text-[#0073E5] lg:hidden"
          >
            <span className="flex items-center justify-center gap-2">
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
          </a>
        </div>
      </div>
    </div>
  </Container>
);

AdopterTestimonial.propTypes = {
  description: PropTypes.string.isRequired,
  quotedText: PropTypes.string.isRequired,
  withPerson: PropTypes.Boolean,
  name: PropTypes.string,
  logo: PropTypes.string,
  role: PropTypes.string,
  url: PropTypes.string,
};

export default AdopterTestimonial;
