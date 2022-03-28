import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import IsovalentLogo from 'icons/logo-isovalent.inline.svg';

import ClockIcon from './images/clock.inline.svg';
import GradeIcon from './images/grade.inline.svg';
import SupportIcon from './images/support.inline.svg';

const enterprise = {
  title: 'Isovalent Cilium Enterprise',
  description: 'Enterprise Distribution maintained by the creators of Cilium.',
  linkUrl: 'https://bit.ly/3hOKaXj',
  linkTarget: '_blank',
  linkText: 'Learn more',
};

const items = [
  { name: '24/7 Enterprise Support with SLA', icon: SupportIcon },
  { name: 'Hardened, Enterprise grade, Extended EOL', icon: GradeIcon },
  {
    name: 'Additional SecOps, Governance, Analytics & Observability Functionality',
    icon: ClockIcon,
  },
];

const title = 'Distributions & Support';
function Distributions() {
  return (
    <section className="pb-12 md:pb-20 pt-11 md:pt-16 bg-gray-4 lg:pt-24 lg:pb-28 xl:pb-32">
      <Container>
        <Heading tag="h2">{title}</Heading>
        <div className="flex flex-col lg:flex-row mt-6 divide-y px-8 lg:px-0 lg:divide-x lg:divide-y-0 divide-gray-3 md:mt-10 lg:mt-14 py-8 rounded-xl shadow-card bg-white">
          <div className="pb-6 lg:pb-0 lg:px-6 xl:px-8 flex-1 xl:max-w-[340px]">
            <IsovalentLogo className="h-[26px] w-auto" />
            <Heading className="mt-3" tag="h3" size="xs">
              {enterprise.title}
            </Heading>
            <p className="mt-2.5">{enterprise.description}</p>
            <Link
              className="mt-6"
              theme="primary"
              to={enterprise.linkUrl}
              target={enterprise.linkTarget}
              type="arrow"
            >
              {enterprise.linkText}
            </Link>
          </div>
          {items.map(({ name, icon: Icon }, index) => (
            <div
              className="flex space-y-4 xs:space-y-0 xs:space-x-4 flex-col xs:flex-row lg:flex-col items-stretch xs:items-center lg:items-stretch lg:space-x-0 lg:space-y-4 lg:px-6 xl:px-8 flex-1 py-6 lg:py-0 last:pb-0"
              key={index}
            >
              <Icon className="shrink-0 w-14 h-14 xs:w-[72px] xs:h-[72px]" />
              <span className="font-bold" dangerouslySetInnerHTML={{ __html: name }} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Distributions;
