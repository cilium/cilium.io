/* eslint-disable react/prop-types */
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const CalendarIntegration = () => {
  return (
    <section className="py-8 sm:py-10 calendar-integration md:py-16 lg:py-20">
      <Container>
        <div className="mb-8 text-center">
          <Heading className="text-black dark:text-white" tag="h2">
            Community Calendar
          </Heading>
          <p className="max-w-2xl mx-auto mt-5 text-lg text-black dark:text-gray-2">
            Stay up to date with Cilium community meetings, events, and activities. Join us for
            regular discussions and project updates.
          </p>
        </div>

        <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="aspect-w-1 aspect-h-1 sm:aspect-w-16 sm:aspect-h-10 md:aspect-h-12 lg:aspect-h-14">
            <iframe
              src="https://zoom-lfx.platform.linuxfoundation.org/meetings/cilium?view=week"
              title="Cilium Community Calendar"
              aria-label="Cilium community meetings calendar"
              className="w-full h-full min-h-[360px] sm:min-h-[600px] border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://zoom-lfx.platform.linuxfoundation.org/meetings/cilium?view=week"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Open Calendar in New Tab
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CalendarIntegration;
