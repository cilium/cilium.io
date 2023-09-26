import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Link from 'components/shared/link/link';
import ArrowIcon from 'icons/arrow.inline.svg';

const ResourcesCard = ({ heading, resources, className }) => (
  <Container className={className}>
    <h3 className="mb-10 text-center text-3xl font-bold">{heading}</h3>
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
      {resources.map((resource, index) => (
        <div
          style={{ boxShadow: '0px 1px 8px 0px rgba(20, 26, 31, 0.20)' }}
          key={index}
          className="rounded-xl bg-white p-6 text-center  lg:flex lg:w-80 lg:flex-col lg:justify-between"
        >
          <img
            src={resource.imageSrc}
            alt={resource.imageAlt}
            className="max-h-[180px] w-full rounded"
          />
          <h3 className="my-8 text-base font-bold group-hover:text-primary-1">{resource.title}</h3>
          <p className="mb-8 text-sm">{resource.description}</p>

          <Link
            to={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto text-center text-sm font-bold uppercase text-primary-1 hover:text-gray-1"
          >
            <span className="flex items-center gap-2 ">
              <span>{resource.CTAtext && 'Learn More'}</span>
              <span>
                <ArrowIcon />
              </span>
            </span>
          </Link>
        </div>
      ))}
    </div>
  </Container>
);

ResourcesCard.propTypes = {
  heading: PropTypes.string.isRequired,
  className: PropTypes.string,
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

ResourcesCard.defaultProps = {
  className: '',
};

export default ResourcesCard;
