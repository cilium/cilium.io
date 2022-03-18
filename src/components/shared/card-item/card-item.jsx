import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { PopupButton } from 'react-calendly';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

function CardItem({ icon: Icon, name, text, buttons, size }) {
  const has2Buttons = buttons.length === 2;
  const isSmallSize = size === 'sm';
  return (
    <div className="flex flex-col rounded-lg border border-gray-3 bg-white">
      <Icon className="h-auto w-full" />
      <div
        className={classNames(
          isSmallSize ? 'xl:px-8' : 'md:px-8',
          'flex grow flex-col items-center p-6 pb-8 md:pt-6 md:pb-11'
        )}
      >
        <Heading
          className="flat-breaks lg:flat-none text-center !leading-normal"
          size={isSmallSize ? 'xs' : 'sm'}
          tag="h3"
          asHTML
        >
          {name}
        </Heading>
        <p className={classNames(isSmallSize ? '' : 'md:text-lg', 'mt-2.5 mb-5 text-center')}>
          {text}
        </p>
        <div
          className={classNames(
            'mt-auto',
            has2Buttons &&
              'grid grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2',
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
                      : 'py-2.5 px-3.5 text-base md:py-3 md:px-5 lg:py-4 lg:px-6 lg:text-lg ',
                    'inline-flex cursor-pointer justify-center whitespace-nowrap rounded bg-primary-2 font-bold !leading-none text-white outline-none transition-colors duration-200 hover:bg-hover-1 focus-visible:ring focus-visible:ring-primary-2 focus-visible:ring-offset-2 disabled:cursor-auto disabled:opacity-25 disabled:hover:bg-primary-1'
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
}

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
