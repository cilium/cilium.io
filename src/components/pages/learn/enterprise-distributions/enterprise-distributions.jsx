import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import IsovalentLogo from 'icons/logo-isovalent.inline.svg';

const title = 'Enterprise Distributions';

const card = {
  title: 'Isovalent',
  items: [
    '24/7 Enterprise Support with SLA',
    'Hardened, Enterprisegrade, Extended EOL',
    'Additional Enterprise Functionality',
  ],
  linkUrl: '/enterprise',
  linkText: 'Learn more',
};

const EnterpriseDistributions = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 mt-6 md:mt-10 gap-y-8 md:gap-y-10 gap-x-8 md:grid-cols-12 lg:mt-14">
        <div className="p-6 border rounded-lg border-gray-3 self-baseline md:col-span-6 lg:col-span-5 lg:p-8">
          <IsovalentLogo className="w-auto h-8 md:h-auto" />
          <ul className="space-y-2 mt-7">
            {card.items.map((item, index) => (
              <li
                className="md:text-lg pl-4 relative before:absolute before:w-1.5 before:h-1.5 before:bg-black before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
          <Link className="mt-5" type="arrow" theme="primary" to={card.linkUrl}>
            {card.linkText}
          </Link>
        </div>
      </div>
    </Container>
  </section>
);

export default EnterpriseDistributions;
