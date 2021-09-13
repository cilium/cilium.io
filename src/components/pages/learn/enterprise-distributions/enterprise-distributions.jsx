import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import List from 'components/shared/list';

const title = 'Enterprise Distributions';

const card = {
  title: 'Isovalent',
  items: ['24/7 Enterprise Support with SLA', 'Hardened, Enterprisegrade, Extended EOL'],
  linkUrl: '/enterprise',
  linkText: 'Learn more',
};

const resources = {
  title: 'Resources',
  items: [
    {
      linkUrl: ' https://isovalent.com/blog/post/gartner-cool-vendor',
      linkTarget: '_blank',
      linkText: 'Isovalent Named Gartner Cool Vendor',
    },
  ],
};
const EnterpriseDistributions = () => (
  <section className="mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 mt-10 gap-y-10 gap-x-8 md:grid-cols-12 lg:mt-14">
        <div className="p-6 border rounded-lg md:col-span-6 lg:col-span-5 lg:p-8 border-gray-3">
          <Heading size="sm" tag="h3">
            {card.title}
          </Heading>
          <ul className="mt-3 space-y-2">
            {card.items.map((item, index) => (
              <li
                className="text-lg pl-4 relative before:absolute before:w-1.5 before:h-1.5 before:bg-black before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2"
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
        <List className="md:col-start-7 md:col-end-13 lg:col-end-12" {...resources} />
      </div>
    </Container>
  </section>
);

export default EnterpriseDistributions;
