import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import ClockIcon from './images/clock.inline.svg';
import GradeIcon from './images/grade.inline.svg';
import SupportIcon from './images/support.inline.svg';

const icons = [SupportIcon, GradeIcon, ClockIcon];

const list = [
  {
    title: 'Isovalent Cilium Enterprise',
    description: 'Enterprise Distribution maintained by the creators of Cilium.',
    linkUrl: 'https://isovalent.com/',
    linkTarget: '_blank',
    linkText: 'Learn more',
    items: [
      { name: '24/7 Enterprise <br> Support with SLA' },
      { name: 'Hardened, Enterprise <br> grade, Extended EOL' },
      { name: 'Additional SecOps, Governance, Analytics & Observability functionality' },
    ],
  },
];

const title = 'Distributions & Support';
const Distributions = () => (
  <section className="pt-16 pb-20 mt-20 bg-gray-4 lg:pt-24 lg:mt-28 lg:pb-28">
    <Container>
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <div className="mt-10 lg:mt-14">
        {list.map(({ title, description, linkUrl, linkTarget, linkText, items }, index) => (
          <div className="p-8 bg-white border rounded-lg md:p-11 border-gray-3" key={index}>
            <Heading tag="h3" size="sm">
              {title}
            </Heading>
            <p className="mt-2.5 text-lg">{description}</p>
            <Link
              className="mt-6 lg:mt-8"
              type="arrow"
              theme="primary"
              target={linkTarget || ''}
              to={linkUrl}
            >
              {linkText}
            </Link>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-11">
              {items.map(({ name }, index) => {
                const Icon = icons[index];
                return (
                  <div
                    className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4 xl:space-y-0 xl:space-x-4 xl:flex-row"
                    key={index}
                  >
                    <Icon className="flex-shrink-0 w-14 h-14 xs:w-max xs:h-auto" />
                    <span
                      className="font-bold flat-breaks lg:flat-none"
                      dangerouslySetInnerHTML={{ __html: name }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Distributions;
