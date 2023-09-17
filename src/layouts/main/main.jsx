import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import AdoptersIcon from 'icons/adopters.inline.svg';
import BlogIcon from 'icons/blog.inline.svg';
import BrandingIcon from 'icons/branding.inline.svg';
import GetHelpIcon from 'icons/get-help.inline.svg';
import GetInvolvedIcon from 'icons/get-involved.inline.svg';
import GetStartedIcon from 'icons/get-started.inline.svg';
import NewsletterIcon from 'icons/newsletter.inline.svg';

const navigation = [
  { name: 'Users', href: '/adopters' },
  {
    name: 'Use Cases',
    childItems: [
      { name: 'Networking', href: '/#networking' },
      { name: 'Observability', href: '/#observability' },
      { name: 'Security', href: '/#security' },
    ],
  },
  {
    name: 'Industries',
    childItems: [
      { name: 'Financial Services', href: '/industries/financial-services' },
      { name: 'Media and Entertainment', href: '/media-entertainment' },
      { name: 'Cloud Providers', href: '/cloud-providers' },
      { name: 'SaaS, Software and DBaaS', href: '/software' },
      { name: 'Telcos and Data Center Operators', href: '/telcos' },
      { name: 'E-commerce', href: '/e-commerce' },
      { name: 'Consulting', href: '/consulting' },
      { name: 'Cyber Security', href: '/cyber-security' },
    ],
  },

  {
    name: 'Learn',
    childItems: [
      { icon: GetStartedIcon, name: 'Get Started', href: '/get-started' },
      { icon: GetInvolvedIcon, name: 'Get Involved', href: '/get-involved' },
      { icon: GetHelpIcon, name: 'Get Help', href: '/get-help' },
    ],
  },
  {
    name: 'News and media',
    childItems: [
      { icon: AdoptersIcon, name: 'Events', href: '/events' },
      { icon: BlogIcon, name: 'Blog', href: '/blog' },
      {
        icon: BrandingIcon,
        name: 'Branding',
        href: '/brand',
      },
      { icon: NewsletterIcon, name: 'Newsletter', href: '/newsletter' },
    ],
  },
  {
    name: 'Docs',
    childItems: [
      { name: 'Cilium', href: 'https://docs.cilium.io/en/stable/' },
      { name: 'Tetragon', href: 'https://tetragon.cilium.io/docs/' },
      { name: 'Network Policy', href: 'https://networkpolicy.io/' },
    ],
  },
  { name: 'Enterprise', href: '/enterprise' },
];

const MainLayout = ({ isBlogPage, children, theme, footerWithTopBorder }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleOverlay = () => setIsMobileMenuOpen(false);
  return (
    <>
      <Header
        navigation={navigation}
        showSearchBox={isBlogPage}
        theme={theme}
        isMobileMenuOpen={isMobileMenuOpen}
        handleOverlay={handleOverlay}
        handleCloseClick={handleCloseClick}
      />
      <main>{children}</main>
      <Footer withTopBorder={footerWithTopBorder} />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isBlogPage: PropTypes.bool,
  theme: PropTypes.string,
  footerWithTopBorder: PropTypes.bool,
};

MainLayout.defaultProps = {
  isBlogPage: false,
  theme: null,
  footerWithTopBorder: false,
};

export default MainLayout;
