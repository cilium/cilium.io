import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import IsovalentLogo from 'icons/logo-isovalent.inline.svg';

import ClockIcon from './images/clock.inline.svg';
import GradeIcon from './images/grade.inline.svg';
import SupportIcon from './images/support.inline.svg';

const icons = [SupportIcon, GradeIcon, ClockIcon];

const list = [
  {
    description:
      'Isovalent Cilium Enterprise. Enterprise Distribution maintained by the creators of Cilium & eBPF.',
    linkUrl: 'https://bit.ly/3hOKaXj',
    linkTarget: '_blank',
    linkText: 'Learn more',
    items: [
      { name: '24/7 Enterprise <br> Support with SLA' },
      { name: 'Hardened, Enterprise <br> grade, Extended EOL' },
      { name: 'Additional SecOps, Governance, Analytics & Observability Functionality' },
    ],
  },
];

const title = 'Distributions & Support';
function Distributions() {
  return (
    <section className="pb-12 mt-2 md:pb-20 pt-11 md:pt-16 md:mt-20 bg-gray-4 lg:pt-24 lg:mt-28 lg:pb-28 xl:pb-32">
      <Container>
        <Heading tag="h2">{title}</Heading>
        <div className="mt-6 md:mt-10 lg:mt-14">
          {list.map(({ description, linkUrl, linkTarget, linkText, items }, index) => (
            <div
              className="p-6 bg-white border rounded-lg border-gray-3 md:p-11 md:pb-10 lg:px-11 lg:pt-7"
              key={index}
            >
              <IsovalentLogo className="w-auto h-8 md:h-auto" />
              <p className="text-base border-t pt-7 mt-7 md:text-lg border-gray-3">{description}</p>

              <div className="grid grid-cols-1 gap-6 mt-8 lg:gap-8 md:mt-10 md:grid-cols-3">
                {items.map(({ name }, index) => {
                  const Icon = icons[index];
                  return (
                    <div
                      className="flex space-x-3 md:flex-col md:space-x-0 md:space-y-4 xl:space-y-0 xl:space-x-4 xl:flex-row"
                      key={index}
                    >
                      <Icon className="shrink-0 w-14 h-14 xs:w-[72px] xs:h-[72px]" />
                      <span
                        className="text-sm font-bold md:text-base"
                        dangerouslySetInnerHTML={{ __html: name }}
                      />
                    </div>
                  );
                })}
              </div>
              <Link
                className="mt-8 lg:mt-10"
                type="arrow"
                theme="primary"
                target={linkTarget || ''}
                to={linkUrl}
              >
                {linkText}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Distributions;
