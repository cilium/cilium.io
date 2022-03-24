import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Banner from 'components/shared/banner';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import SEO from 'components/shared/seo';
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
    href: '/learn',
    childItems: [
      { icon: AdoptersIcon, name: 'Adopters', href: '/adopters' },
      { icon: GetStartedIcon, name: 'Get Started', href: '/get-started' },
      { icon: GetInvolvedIcon, name: 'Get Involved', href: '/get-involved' },
      { icon: GetHelpIcon, name: 'Get Help', href: '/get-help' },
    ],
  },
  {
    name: 'News and media',
    childItems: [
      { icon: BlogIcon, name: 'Blog', href: '/blog' },
      { icon: BrandingIcon, name: 'Branding', href: '/' },
      { icon: NewsletterIcon, name: 'Newsletter', href: '/' },
    ],
  },
  { name: 'Documentation', href: 'https://docs.cilium.io/en/stable/' },
];

const MainLayout = ({
  isBlogPage,
  pageMetadata,
  canonicalUrl,
  children,
  theme,
  footerWithoutTopBorder,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleOverlay = () => setIsMobileMenuOpen(false);
  return (
    <>
      <SEO canonical={canonicalUrl} data={pageMetadata} />
      <div className="relative z-20">
        {isBlogPage && <Banner />}
        <Header
          navigation={navigation}
          showSearchBox={isBlogPage}
          theme={theme}
          isMobileMenuOpen={isMobileMenuOpen}
          onBurgerClick={handleHeaderBurgerClick}
        />
      </div>
      <main>{children}</main>
      <Footer withoutTopBorder={footerWithoutTopBorder} />

      <MobileMenu navigation={navigation} isOpen={isMobileMenuOpen} handleOverlay={handleOverlay} />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isBlogPage: PropTypes.bool,
  pageMetadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  canonicalUrl: PropTypes.string,
  theme: PropTypes.string,
  footerWithoutTopBorder: PropTypes.bool,
};

MainLayout.defaultProps = {
  pageMetadata: {},
  isBlogPage: false,
  canonicalUrl: null,
  theme: null,
  footerWithoutTopBorder: false,
};

export default MainLayout;
