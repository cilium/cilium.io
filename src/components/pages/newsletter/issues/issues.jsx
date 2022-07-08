import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import CalendarIcon from 'icons/calendar.inline.svg';

const items = [
  {
    year: '2022',
    issues: [
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
    ],
  },
  {
    year: '2021',
    issues: [
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
    ],
  },
];

const Issues = () => (
  <div className="bg-white py-10 md:py-20 lg:py-28">
    <Container className="">
      {items.map(({ year, issues }, index) => (
        <div className="mt-10 first:mt-0 md:mt-20 lg:mt-24" key={index}>
          <Heading className="flat-breaks xl:flat-none" tag="h3" size="md" asHTML>
            {year}
          </Heading>
          <div className="mt-8 flex flex-col flex-wrap gap-x-8 gap-y-8 xs:flex-row md:mt-10 lg:mt-12">
            {issues.map(({ title, date, link }, index) => (
              <Link
                className="min-w-[200px] rounded-lg border-2 border-gray-7 p-4 md:min-w-[280px] lg:p-6"
                key={index}
                to={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heading tag="h4" size="2xs">
                  {title}
                </Heading>
                <div className="mt-3 flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4 shrink-0" />
                  <p>{date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Container>
  </div>
);

export default Issues;
