import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { PopupButton } from 'react-calendly';

import Link from 'components/shared/link';

const CardItem = ({ icon: Icon, name, text, links }) => (
  <div className="flex flex-col rounded-lg border border-gray-3 p-6 sm:flex-row sm:space-x-5 lg:flex-col lg:space-x-0 lg:p-8">
    <Icon className="h-14 shrink-0 self-start sm:w-[72px] lg:h-[72px] lg:w-auto" />
    <div className="mt-4 flex h-full flex-col sm:mt-0 lg:mt-4">
      <h3
        className="font-bold leading-normal md:text-lg md:leading-normal"
        dangerouslySetInnerHTML={{ __html: name }}
      />
      <div className="content-style prose mt-1 mb-4" dangerouslySetInnerHTML={{ __html: text }} />
      <div className="mt-auto space-x-6">
        {links.map(({ linkText, linkUrl, linkTarget, isCalendlyPopUp }, index) => (
          <Fragment key={index}>
            {isCalendlyPopUp ? (
              <PopupButton
                rootElement={document.querySelector('#___gatsby')}
                className="self-start text-sm font-bold uppercase tracking-wider text-primary-1 transition-colors duration-200 hover:text-gray-1"
                text={linkText}
                url={linkUrl}
              />
            ) : (
              <Link
                className="relative self-start before:absolute before:top-1/2 before:-left-3.5 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-5 first:before:hidden"
                type="text"
                theme="primary"
                target={linkTarget || null}
                rel={linkTarget ? 'noopener noreferrer' : null}
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
  text: PropTypes.string.isRequired,
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
