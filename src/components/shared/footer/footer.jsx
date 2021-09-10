import React from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'images/logo.inline.svg';

const navigation = [
  [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/documentation' },
  ],
  [
    { name: 'Isovalent', href: 'https://isovalent.com/', target: '_blank' },
    { name: 'eBPF', href: 'https://ebpf.io/', target: '_blank' },
  ],
  [
    { name: 'Getting Started Guide', href: '/' },
    { name: 'Weekly InstallFest', href: '/' },
  ],
];

const Footer = () => (
  <footer className="mt-20 lg:mt-28 ">
    <Container className="grid grid-cols-3 py-10 space-y-10 border-t lg:grid-cols-4 gap-x-8 lg:py-14 border-gray-3 lg:space-y-0">
      <Link to="/">
        <Logo className="col-span-1 lg:col-span-1" />
      </Link>
      <div className="grid grid-cols-1 col-span-3 gap-x-8 gap-y-10 xs:grid-cols-2 sm:grid-cols-3">
        {navigation.map((menu, index) => (
          <div className="flex flex-col space-y-6" key={index}>
            {menu.map(({ name, href }) => (
              <Link theme="black" type="text" to={href}>
                {name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </Container>
  </footer>
);

export default Footer;
