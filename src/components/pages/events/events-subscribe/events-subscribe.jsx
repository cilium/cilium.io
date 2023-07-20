import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import SubscribeForm from 'components/shared/subscribe-form';

const EventsSubscribe = ({ title, description, className }) => (
  <section className={className}>
    <div className="min-h-[280px] w-full rounded-lg bg-additional-2 px-6 pt-8 pb-6 xs:pb-0 lg:px-10 lg:pt-12 xl:px-12">
      <Heading tag="h3" size="xs" asHTML>
        {title}
      </Heading>
      <p className="mt-2.5 text-lg leading-normal">{description}</p>
      <SubscribeForm
        className="mt-6 max-w-[600px]"
        inputClassName="!py-2.5"
        buttonClassName="right-0 py-4"
        divClassName="md:!min-h-[105px]"
      />
    </div>
  </section>
);

EventsSubscribe.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

EventsSubscribe.defaultProps = {
  className: null,
};

export default EventsSubscribe;
