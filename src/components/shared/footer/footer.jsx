import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'images/logo.inline.svg';

const navigation = [
  [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: 'https://docs.cilium.io/en/stable/', target: '_blank' },
  ],
  [
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'eBPF', href: 'https://ebpf.io/', target: '_blank' },
  ],
  [{ name: 'Get Started', href: '/get-started' }],
];

const Footer = ({ withTopBorder }) => (
  <footer>
    <Container
      className={classNames(
        'pt-10 pb-8 lg:pt-14 lg:pb-9',
        withTopBorder && 'border-t border-gray-3'
      )}
    >
      <div className="grid grid-cols-3 gap-y-10 xs:gap-x-8 lg:grid-cols-12 lg:gap-y-0">
        <div className="col-span-full flex flex-col items-start xs:col-span-5">
          <Link to="/">
            <span className="sr-only">Cilium</span>
            <Logo className="col-span-1 lg:col-span-1" />
          </Link>
          <span className="with-link-primary-light mt-6 text-sm leading-none">
            Cilium was originally created by{' '}
            <a className="" href="https://isovalent.com/" target="_blank" rel="noopener noreferrer">
              Isovalent
            </a>
          </span>
        </div>
        <div className="col-span-7 grid grid-cols-1 gap-x-8 gap-y-10 xs:grid-cols-2 sm:grid-cols-3">
          {navigation.map((menu, index) => (
            <ul className="flex flex-col space-y-6" key={index}>
              {menu.map(({ name, href, target }) => (
                <li className="inline leading-none" key={name}>
                  <Link
                    theme="black"
                    type="text"
                    to={href}
                    target={target || null}
                    rel={target ? 'noopener noreferrer' : null}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="with-link-primary-light mt-8 space-y-3 border-t border-gray-3 pt-8 text-sm text-gray-1 md:mt-10 lg:mt-12">
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
  withTopBorder: PropTypes.bool,
};

Footer.defaultProps = {
  withTopBorder: false,
};

export default Footer;
