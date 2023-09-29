import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Link from 'components/shared/link/link';
import ArrowIcon from 'icons/arrow.inline.svg';

const AdopterTestimonial = ({
  description,
  quotedText,
  withPerson,
  CTAtext,
  name,
  role,
  logo: Logo,
  url,
  className,
}) => (
  <Container className={className}>
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
            <p className=" w-full max-w-none text-sm ">{description}</p>
            <Link
              to={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden  text-sm font-semibold uppercase text-primary-1 hover:text-gray-1 lg:inline-block"
            >
              <span className="flex items-center gap-2">
                <span>{CTAtext}</span>
                <span>
                  <ArrowIcon className="ml-1 hidden shrink-0 xs:inline-block" />
                </span>
              </span>
            </Link>
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
          <p className="px-4 text-sm">{quotedText}</p>
          {withPerson && (
            <p>
              <span className="text-sm font-bold">{name}</span>,{' '}
              <span className="text-sm text-[#6C7993]">{role}</span>
            </p>
          )}
          <Link
            to={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase text-primary-1 hover:text-gray-1 lg:hidden"
          >
            <span className="flex items-center justify-center gap-2">
              <span>{CTAtext}</span>
              <span>
                <ArrowIcon className="ml-1 hidden shrink-0 xs:inline-block" />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  </Container>
);

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
  className: '',
  withPerson: true,
  name: '',
  logo: '',
  role: '',
};

export default AdopterTestimonial;
