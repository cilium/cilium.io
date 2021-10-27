import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { PopupButton } from 'react-calendly';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const CardItem = ({ icon: Icon, name, text, buttons, size }) => {
  const has2Buttons = buttons.length === 2;
  const isSmallSize = size === 'sm';
  return (
    <div className="flex flex-col bg-white border rounded-lg border-gray-3">
      <Icon className="w-full h-auto" />
      <div
        className={classNames(
          isSmallSize ? 'xl:px-8' : 'md:px-8',
          'flex flex-col items-center flex-grow p-6 pb-8  md:pt-6 md:pb-11'
        )}
      >
        <Heading className="!leading-normal text-center" size={isSmallSize ? 'xs' : 'sm'} tag="h3">
          {name}
        </Heading>
        <p className={classNames(isSmallSize ? '' : 'md:text-lg', 'text-center mt-2.5 mb-5')}>
          {text}
        </p>
        <div
          className={classNames(
            'mt-auto',
            has2Buttons && 'grid xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3',
            isSmallSize ? 'xl:gap-x-4' : 'lg:gap-x-5'
          )}
        >
          {buttons.map(({ buttonUrl, buttonText, buttonTarget, isPopup }, index) => (
            <Fragment key={index}>
              {isPopup ? (
                <PopupButton
                  key={index}
                  url={buttonUrl}
                  className={classNames(
                    isSmallSize
                      ? 'py-2.5 px-3.5'
                      : 'py-2.5 px-3.5 md:py-3 md:px-5 lg:py-4 lg:px-6 lg:text-lg text-base ',
                    'cursor-pointer inline-flex font-bold text-white bg-primary-2 justify-center !leading-none whitespace-nowrap rounded transition-colors duration-200 hover:bg-hover-1 disabled:opacity-25 disabled:hover:bg-primary-1 disabled:cursor-auto focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-2 outline-none'
                  )}
                  text={buttonText}
                />
              ) : (
                <Button key={index} to={buttonUrl} size={size} target={buttonTarget || ''}>
                  {buttonText}
                </Button>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      buttonText: PropTypes.string.isRequired,
      buttonUrl: PropTypes.string.isRequired,
      buttonTarget: PropTypes.string,
      isPopup: PropTypes.bool,
    })
  ).isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
};

CardItem.defaultProps = {
  size: 'md',
};

export default CardItem;
