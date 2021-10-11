import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { PopupButton } from 'react-calendly';

import Link from '../link';

const CardItem = ({ icon: Icon, name, links }) => (
  <div className="flex flex-col p-6 border rounded-lg lg:p-8 sm:space-x-5 sm:flex-row lg:flex-col border-gray-3 lg:space-x-0">
    <Icon className="flex-shrink-0 w-14 h-14 xs:w-[72px] xs:h-[72px]" />
    <div className="flex flex-col h-full mt-4 sm:mt-0 lg:mt-4">
      <h3
        className="mb-4 font-bold leading-normal md:text-lg md:leading-normal lg:mb-5"
        dangerouslySetInnerHTML={{ __html: name }}
      />
      <div className="mt-auto space-x-6">
        {links.map(({ linkText, linkUrl, linkTarget, isCalendlyPopUp }, index) => (
          <Fragment key={index}>
            {isCalendlyPopUp ? (
              <div className="self-start text-sm tracking-wider transition-colors duration-200 text-primary-1 hover:text-gray-1">
                <PopupButton
                  styles={{ textTransform: 'uppercase', fontWeight: 700 }}
                  text={linkText}
                  url={linkUrl}
                />
              </div>
            ) : (
              <Link
                className="self-start relative first:before:hidden before:w-1 before:h-1 before:absolute before:rounded-full before:bg-gray-5 before:top-1/2 before:-translate-y-1/2 before:-left-3.5"
                type="text"
                theme="primary"
                target={linkTarget || ''}
                to={linkUrl}
              >
                {linkText}
              </Link>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  </div>
);

CardItem.propTypes = {
  icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      isCalendlyPopUp: PropTypes.bool,
      linkText: PropTypes.string.isRequired,
      linkUrl: PropTypes.string.isRequired,
      linkTarget: PropTypes.string,
    })
  ).isRequired,
};

export default CardItem;
