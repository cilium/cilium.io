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
  { name: 'Enterprise', href: '/enterprise' },
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
      { icon: AdoptersIcon, name: 'Adopters', href: '/adopters' },
      { icon: BlogIcon, name: 'Blog', href: '/blog' },
      {
        icon: BrandingIcon,
        name: 'Branding',
        href: '/brand',
      },
      { icon: NewsletterIcon, name: 'Newsletter', href: '/newsletter' },
    ],
  },
  { name: 'Documentation', href: 'https://docs.cilium.io/en/stable/' },
];

const MainLayout = ({ isBlogPage, children, theme, footerWithTopBorder }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleOverlay = () => setIsMobileMenuOpen(false);
  return (
    <>
      <Header
        navigation={navigation}
        showSearchBox={isBlogPage}
        theme={theme}
        isMobileMenuOpen={isMobileMenuOpen}
        handleOverlay={handleOverlay}
        onBurgerClick={handleHeaderBurgerClick}
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
