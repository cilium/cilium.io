/* eslint-disable no-param-reassign */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import CalendarIcon from 'icons/calendar.inline.svg';
import getMonthAndDay from 'utils/get-month-and-day';
import getYear from 'utils/get-year';

const Issues = () => {
  const data = useStaticQuery(graphql`
    query {
      allHubspotEmail(sort: { publishDate: DESC }) {
        nodes {
          name
          publishDate
          publishedUrl
        }
      }
    }
  `);

  const items = data.allHubspotEmail.nodes.filter((item) => item.name.match(/^eCHO news \d{1,3}$/));

  items.forEach((item) => {
    item.year = getYear(Number(item.publishDate));
    item.title = `eCHO News Episode #${item.name.split(' ')[2]}`;
    item.date = getMonthAndDay(Number(item.publishDate));
  });

  const getIssues = () =>
    items.reduce((acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [item];
      } else {
        acc[item.year].push(item);
      }
      return acc;
    }, {});

  const newsletterData = getIssues();

  return Object.keys(newsletterData).length > 0 ? (
    <div className="bg-white py-10 md:py-20 lg:py-28" id="archive">
      <Container>
        {Object.entries(newsletterData)
          .reverse()
          .map(([year, issues], index) => (
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
                    <Heading tag="h4" size="3xs" asHTML>
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
  ) : null;
};

export default Issues;
