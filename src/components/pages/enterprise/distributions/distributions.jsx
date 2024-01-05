import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import IsovalentLogo from 'icons/logo-isovalent.inline.svg';

import ClockIcon from './images/clock.inline.svg';
import GradeIcon from './images/grade.inline.svg';
import SupportIcon from './images/support.inline.svg';

import SoloLogo from './images/solo.inline.svg';
import SoloMultiIcon from './images/solo-multi.inline.svg';
import SoloSecurityIcon from './images/solo-security.inline.svg';
import SoloSupportIcon from './images/solo-support.inline.svg';

const enterprise = {
  title: 'Isovalent Enterprise for Cilium',
  description: 'Enterprise Distribution maintained by the creators of Cilium.',
  linkUrl: 'https://bit.ly/3hOKaXj',
  linkTarget: '_blank',
  linkText: 'Learn more',
};

const gloo = {
  title: 'Gloo Network for Cilium',
  description: 'Enterprise Cilium CNI maintained by the co-creators of Istio Service Mesh.',
  linkUrl: 'https://www.solo.io/products/gloo-network/',
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

const glooItems = [
  { name: 'Multi-cluster, multi-tenant Cilium integration with Istio', icon: SoloMultiIcon },
  { name: '24/7 Enterprise Support with SLA', icon: SoloSupportIcon },
  {
    name: 'Performance, Security and Observability from Layer 2 through Layer 7',
    icon: SoloSecurityIcon,
  },
];

const title = 'Distributions & Support';
const Distributions = () => (
  <section className="bg-gray-4 pb-12 pt-11 md:pb-20 md:pt-16 lg:pt-24 lg:pb-28 xl:pb-32">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="mt-6 flex flex-col divide-y divide-gray-3 rounded-xl bg-white px-8 py-8 shadow-card md:mt-10 lg:mt-14 lg:flex-row lg:divide-x lg:divide-y-0 lg:px-0">
        <div className="flex-1 pb-6 lg:w-[340px] lg:flex-none lg:px-6 lg:pb-0 xl:px-8">
          <IsovalentLogo className="h-[32px] w-auto" />
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
            className="flex flex-1 flex-col items-stretch space-y-4 py-6 last:pb-0 xs:flex-row xs:items-center xs:space-y-0 xs:space-x-4 lg:flex-col lg:items-stretch lg:space-x-0 lg:space-y-6 lg:px-6 lg:py-0 lg:pt-4 xl:px-8"
            key={index}
          >
            <Icon className="h-14 w-14 shrink-0 xs:h-[72px] xs:w-[72px]" />
            <span className="font-bold" dangerouslySetInnerHTML={{ __html: name }} />
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col divide-y divide-gray-3 rounded-xl bg-white px-8 py-8 shadow-card md:mt-10 lg:mt-14 lg:flex-row lg:divide-x lg:divide-y-0 lg:px-0">
        <div className="flex-1 pb-6 lg:w-[340px] lg:flex-none lg:px-6 lg:pb-0 xl:px-8">
          <SoloLogo className="h-[32px] w-auto" />
          <Heading className="mt-3" tag="h3" size="xs">
            {gloo.title}
          </Heading>
          <p className="mt-2.5">{gloo.description}</p>
          <Link
            className="mt-6"
            theme="primary"
            to={gloo.linkUrl}
            target={gloo.linkTarget}
            type="arrow"
          >
            {gloo.linkText}
          </Link>
        </div>
        {glooItems.map(({ name, icon: Icon }, index) => (
          <div
            className="flex flex-1 flex-col items-stretch space-y-4 py-6 last:pb-0 xs:flex-row xs:items-center xs:space-y-0 xs:space-x-4 lg:flex-col lg:items-stretch lg:space-x-0 lg:space-y-6 lg:px-6 lg:py-0 lg:pt-4 xl:px-8"
            key={index}
          >
            <Icon className="h-14 w-14 shrink-0 xs:h-[72px] xs:w-[72px]" />
            <span className="font-bold" dangerouslySetInnerHTML={{ __html: name }} />
          </div>
        ))}
      </div>      
    </Container>
  </section>
);

export default Distributions;
