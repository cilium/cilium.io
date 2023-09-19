import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const ResourcesCard = ({ heading, resources }) => (
  <Container>
    <h3 className="mb-10 text-center text-[36px] font-bold">{heading}</h3>
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
      {resources.map((resource, index) => (
        <div
          style={{ boxShadow: '0px 1px 8px 0px rgba(20, 26, 31, 0.20)' }}
          key={index}
          className="rounded-xl bg-white p-[28px]  text-center  lg:flex lg:w-[384px] lg:flex-col lg:justify-between"
        >
          <img
            src={resource.imageSrc}
            alt={resource.imageAlt}
            className="max-h-full w-full rounded"
          />
          <h3 className="mt-16 mb-6 text-xl font-bold">{resource.title}</h3>
          <p className="mb-16">{resource.description}</p>

          <a href={resource.url} className="mx-auto text-center font-bold uppercase text-[#0073E5]">
            <span className="flex items-center gap-2 ">
              <span>{resource.CTAtext && 'Learn More'}</span>
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
      ))}
    </div>
  </Container>
);

ResourcesCard.propTypes = {
  heading: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      CTAtext: PropTypes.string,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResourcesCard;
