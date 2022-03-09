import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const EventIframe = ({ uniqueId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.addevent.com/libs/evt/event.embed.v1.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="addevent-event-embed !shadow-none"
      data-event={uniqueId}
      data-box-style="1"
      data-height="auto"
      data-share="no"
    />
  );
};

EventIframe.propTypes = {
  uniqueId: PropTypes.string.isRequired,
};

export default EventIframe;
