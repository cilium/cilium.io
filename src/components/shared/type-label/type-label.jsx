import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ type, className }) => (
  <span
    className={classNames(
      'w-fit rounded p-2.5 text-xs font-bold uppercase leading-none tracking-wider',
      {
        'bg-additional-green/10 text-additional-green': type === 'Meetup' || type === 'Networking',
      },
      { 'bg-additional-red/10 text-additional-red': type === 'Webinar' || type === 'Security' },
      {
        'bg-additional-blue/10 text-additional-blue':
          type === 'Conference' || type === 'Observability',
      },
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
