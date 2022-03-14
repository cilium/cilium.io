import PropTypes from 'prop-types';
import React from 'react';

import Banner from 'components/shared/banner';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

const MainLayout = ({ showBanner, pageMetadata, canonicalUrl, children, theme }) => (
  <>
    <SEO canonical={canonicalUrl} data={pageMetadata} />
    <div className="relative">
      {showBanner && <Banner />}
      <Header theme={theme} />
    </div>
    <main>{children}</main>
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showBanner: PropTypes.bool,
  pageMetadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  canonicalUrl: PropTypes.string,
};

MainLayout.defaultProps = {
  pageMetadata: {},
  showBanner: false,
  canonicalUrl: null,
};

export default MainLayout;
