import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Banner from 'components/shared/banner';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
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
    childItems: [
      { icon: GetStartedIcon, name: 'Get Started', href: '/get-started' },
      { icon: GetInvolvedIcon, name: 'Get Involved', href: '/get-involved' },
      { icon: GetHelpIcon, name: 'Get Help', href: '/get-help' },
    ],
  },
  {
    name: 'News and media',
    childItems: [
      { icon: BlogIcon, name: 'Blog', href: '/blog' },
      {
        icon: BrandingIcon,
        name: 'Branding',
        href: 'https://github.com/cncf/artwork/blob/master/examples/incubating.md#cilium-logos',
        target: '_blank',
      },
      { icon: NewsletterIcon, name: 'Newsletter', href: '/newsletter' },
      { icon: AdoptersIcon, name: 'Adopters', href: '/adopters' },
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
  footerWithTopBorder,
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
          handleOverlay={handleOverlay}
          onBurgerClick={handleHeaderBurgerClick}
        />
      </div>
      <main>{children}</main>
      <Footer withTopBorder={footerWithTopBorder} />
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
  footerWithTopBorder: PropTypes.bool,
};

MainLayout.defaultProps = {
  pageMetadata: {},
  isBlogPage: false,
  canonicalUrl: null,
  theme: null,
  footerWithTopBorder: false,
};

export default MainLayout;
