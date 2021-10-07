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
  <footer className="mt-11 md:mt-20 lg:mt-28 ">
    <Container className="pt-10 pb-10 border-t lg:pt-14 lg:pb-16 border-gray-3">
      <div className="grid grid-cols-3 space-y-8 md:space-y-10 lg:grid-cols-4 gap-x-8 lg:space-y-0">
        <Link to="/">
          <span className="sr-only">Cilium</span>
          <Logo className="col-span-1 lg:col-span-1" />
        </Link>
        <div className="grid grid-cols-1 col-span-3 gap-x-8 gap-y-10 xs:grid-cols-2 sm:grid-cols-3">
          {navigation.map((menu, index) => (
            <div className="flex flex-col space-y-6" key={index}>
              {menu.map(({ name, href }) => (
                <Link theme="black" type="text" key={name} to={href}>
                  {name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 space-y-3 text-sm lg:mt-16 with-link-primary-light text-gray-1">
        <p>Copyright © 2021 The Linux Foundation® . All rights reserved.</p>
        <p>
          The Linux Foundation has registered trademarks and uses trademarks. For a list of
          trademarks of The Linux Foundation, please see our{' '}
          <a
            href="https://www.linuxfoundation.org/trademark-usage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trademark Usage
          </a>{' '}
          page. Linux is a registered trademark of Linus Torvalds.{' '}
          <a
            href="https://www.linuxfoundation.org/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            href="https://www.linuxfoundation.org/terms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
          .
        </p>
      </div>
    </Container>
  </footer>
);

export default Footer;
