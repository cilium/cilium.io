import PropTypes from 'prop-types';
import React from 'react';

import ArrowIcon from 'icons/arrow.inline.svg';

const customShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';

const UseCaseCard = ({ heading, testimonials }) => (
  <div className="mb-12">
    <div className="container mx-auto w-10/12">
      <h3 className="mb-8 text-center text-xl font-bold">{heading}</h3>
      <div className="flex flex-col gap-8 md:gap-12">
        {testimonials.map((testimonial) => (
          <div
            className="block gap-4 rounded-[10px] bg-white  px-6 py-8 sm:items-center  md:flex md:px-12"
            style={{ boxShadow: `${customShadow}` }}
          >
            <div className="block basis-2/4 items-center justify-around gap-8 md:flex">
              <div className="flex flex-col gap-6">
                <div className="mx-auto">{testimonial.logo}</div>
                <a
                  href={testimonial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto  flex items-center gap-3  font-semibold text-[#3B82F6]"
                >
                  {testimonial.CTAtext}
                  <span>
                    <ArrowIcon />
                  </span>
                </a>
              </div>
              <div className="my-8 h-[1px] w-full bg-[#6B91C7] md:h-[140px] md:w-[1px]" />
            </div>

            <div className="w-full  text-center">
              <p className="mb-5 font-bold">{testimonial.title}</p>
              <p>{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

UseCaseCard.proptypes = {
  heading: PropTypes.string.isRequired,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      CTAtext: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UseCaseCard;
