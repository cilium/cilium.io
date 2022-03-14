import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'images/logo.inline.svg';

const navigation = [
  [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: 'https://docs.cilium.io/en/stable/' },
  ],
  [
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'eBPF', href: 'https://ebpf.io/', target: '_blank' },
  ],
  [{ name: 'Learn', href: '/learn' }],
];

const Footer = ({ withoutTopBorder }) => (
  <footer>
    <Container
      className={classNames(
        'pt-10 pb-10 lg:pt-14 lg:pb-16',
        withoutTopBorder ? '' : 'border-t border-gray-3'
      )}
    >
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
        <p>Copyright The Cilium Authors. All rights reserved.</p>
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

Footer.propTypes = {
  withoutTopBorder: PropTypes.bool,
};

Footer.defaultProps = {
  withoutTopBorder: false,
};

export default Footer;
