import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import TopBanner from 'components/shared/top-banner';
import useDarkMode from 'hooks/use-dark-mode';
import useToggleTheme from 'hooks/use-toggle-theme';
import AdoptersIcon from 'icons/adopters.inline.svg';
import BlogIcon from 'icons/blog.inline.svg';
import BrandingIcon from 'icons/branding.inline.svg';
import CertificationIcon from 'icons/certification.inline.svg';
import GetHelpIcon from 'icons/get-help.inline.svg';
import GetInvolvedIcon from 'icons/get-involved.inline.svg';
import GetStartedIcon from 'icons/get-started.inline.svg';
import LabsIcon from 'icons/labs.inline.svg';
import DarkThemeIcon from 'icons/moon.inline.svg';
import NewsletterIcon from 'icons/newsletter.inline.svg';
import LightThemeIcon from 'icons/sun.inline.svg';

const MainLayout = ({ children, headerWithSearch, footerWithTopBorder }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = useToggleTheme();
  const { isDarkMode, isReady } = useDarkMode();

  if (!isReady) {
    return null;
  }

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
      name: 'Outcomes',
      childItems: [
        { name: 'Zero Trust Networking', href: '/outcomes/zero-trust' },
        { name: 'Network Automation', href: '/outcomes/network-automation' },
        { name: 'Cost and Carbon Savings', href: '/outcomes/cost-and-carbon-savings' },
      ],
    },
    {
      name: 'Industries',
      childItems: [
        { name: 'Artificial Intelligence', href: '/industries/ai' },
        { name: 'Cloud Providers', href: '/industries/cloud-providers' },
        { name: 'Consulting', href: '/industries/consulting' },
        { name: 'E-commerce', href: '/industries/e-commerce' },
        { name: 'Edge Computing', href: '/industries/edge-computing' },
        { name: 'Financial Services', href: '/industries/financial-services' },
        { name: 'Media and Entertainment', href: '/industries/media-entertainment' },
        { name: 'SaaS, Software, and DBaaS', href: '/industries/software' },
        { name: 'Security', href: '/industries/security' },
        { name: 'Telcos and Data Center Operators', href: '/industries/telcos-datacenters' },
      ],
    },
    {
      name: 'Learn',
      childItems: [
        { icon: LabsIcon, name: 'Labs', href: '/labs/categories/getting-started/' },
        {
          icon: CertificationIcon,
          name: 'Get Certified',
          href: 'https://training.linuxfoundation.org/certification/cilium-certified-associate-cca/',
          target: '_blank',
        },
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
    {
      name: isDarkMode ? LightThemeIcon : DarkThemeIcon,
      isThemeToggle: true,
      onClick: toggleTheme,
    },
  ];

  const handleCloseClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleOverlay = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-gray-4 dark:bg-gray-900">
      <TopBanner
        text="Join us for KubeCon NA and CiliumCon 2025"
        url="/blog/2025/08/20/cilium-at-kubecon-na-2025"
      />
      <Header
        navigation={navigation}
        withSearch={headerWithSearch}
        isMobileMenuOpen={isMobileMenuOpen}
        handleOverlay={handleOverlay}
        handleCloseClick={handleCloseClick}
      />
      <main className="transition-colors duration-200">{children}</main>
      <Footer withTopBorder={footerWithTopBorder} />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  headerWithSearch: PropTypes.bool,
  footerWithTopBorder: PropTypes.bool,
};

MainLayout.defaultProps = {
  headerWithSearch: false,
  footerWithTopBorder: false,
};

export default MainLayout;
