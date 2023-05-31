import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ type, className }) => (
  <span
    className={clsx(
      'w-fit rounded p-2.5 text-xs font-bold uppercase leading-none tracking-wider',
      { 'bg-additional-3/10 text-additional-3': type === 'Meetup' },
      { 'bg-additional-1/10 text-additional-1': type === 'Webinar' },
      { 'bg-primary-1/10 text-primary-1': type === 'Conference' },
      className
    )}
  >
    {type}
  </span>
);

Label.propTypes = {
  type: PropTypes.oneOf(['Meetup', 'Webinar', 'Conference']).isRequired,
  className: PropTypes.string,
};

Label.defaultProps = {
  className: null,
};

export default Label;
