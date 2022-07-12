/* eslint-disable no-param-reassign */
import group from 'core-js-pure/actual/array/group';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import CalendarIcon from 'icons/calendar.inline.svg';

const Issues = () => {
  const data = useStaticQuery(graphql`
    query hubspotEmailsQuery {
      hubspotEmails {
        objects {
          name
          publishDate
          isPublished
          publishedUrl
        }
      }
    }
  `);

  const getYear = (date) => {
    const convertedDate = new Date(date);
    const year = convertedDate.getFullYear();
    return year;
  };

  const getMonthAndDay = (date) => {
    const convertedDate = new Date(date);
    const day = convertedDate.getUTCDate();
    const month = convertedDate.toLocaleString('default', { month: 'long' });
    return `${month}, ${day}`;
  };

  console.log(data.hubspotEmails.objects);

  const items = data.hubspotEmails.objects.filter(
    (item) => item.name.match(/^eCHO news \d{1,3}$/) && item.isPublished
  );

  items.forEach((item) => {
    item.year = getYear(item.publishDate);
    item.title = `eCHO News <br/> Episode #${item.name.split(' ')[2]}`;
    item.date = getMonthAndDay(item.publishDate);
  });

  // I have used a polyfill from core-js here, as the Array.Prototype.group() is only an experimental feature at the moment
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group
  const newsletterData = group(items, (item) => item.year);

  return (
    <div className="bg-white py-10 md:py-20 lg:py-28">
      <Container>
        {Object.entries(newsletterData).map(([year, issues], index) => (
          <div className="mt-10 first:mt-0 md:mt-20 lg:mt-24" key={index}>
            <Heading tag="h3" size="md">
              {year}
            </Heading>
            <div className="mt-8 grid grid-cols-1 gap-6 xs:grid-cols-2 sm:gap-8 md:mt-10 md:grid-cols-3 lg:mt-12 lg:grid-cols-4">
              {issues.map(({ title, date, publishedUrl }, index) => (
                <Link
                  className="min-w-[180px] rounded-lg border-2 border-gray-6 p-4 sm:min-w-[200px] lg:p-6 xl:min-w-[280px]"
                  key={index}
                  to={publishedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heading className="flat-breaks md:flat-none" tag="h4" size="2xs" asHTML>
                    {title}
                  </Heading>
                  <div className="mt-3 flex items-center space-x-2">
                    <CalendarIcon className="h-4 w-4 shrink-0" />
                    <span>{date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Issues;
