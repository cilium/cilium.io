import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';

import Heading from 'components/shared/heading';

import CardButton from './card-button';

function CardItem({ icon: Icon, name, text, buttons, size }) {
  const has2Buttons = buttons.length === 2;
  const isSmallSize = size === 'sm';
  return (
    <div className="flex flex-col bg-white border rounded-lg border-gray-3">
      <Icon className="w-full h-auto" />
      <div
        className={classNames(
          isSmallSize ? 'xl:px-8' : 'md:px-8',
          'flex flex-col items-center grow p-6 pb-8  md:pt-6 md:pb-11'
        )}
      >
        <Heading
          className="!leading-normal text-center flat-breaks lg:flat-none"
          size={isSmallSize ? 'xs' : 'sm'}
          tag="h3"
          asHTML
        >
          {name}
        </Heading>
        <p className={classNames(isSmallSize ? '' : 'md:text-lg', 'text-center mt-2.5 mb-5')}>
          {text}
        </p>
        <div
          className={classNames(
            'mt-auto',
            has2Buttons &&
              'grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-3',
            isSmallSize ? 'xl:gap-x-4' : 'lg:gap-x-5'
          )}
        >
          {buttons.map((button, index) => (
            <CardButton {...button} key={index} size={size} />
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
      buttonUrl: PropTypes.string,
      buttonTarget: PropTypes.string,
      isPopup: PropTypes.bool,
      calendarId: PropTypes.string,
    })
  ).isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
};

CardItem.defaultProps = {
  size: 'md',
};

export default CardItem;
