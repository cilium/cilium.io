import PropTypes from 'prop-types';
import React from 'react';

import Banner from 'components/shared/banner';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

const MainLayout = ({ isBlogPages, pageMetadata, canonicalUrl, children }) => (
  <>
    <SEO canonical={canonicalUrl} data={pageMetadata} />
    <div className="relative">
      {isBlogPages && <Banner />}
      <Header showSearchBox={isBlogPages} />
    </div>
    <main>{children}</main>
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isBlogPages: PropTypes.bool,
  pageMetadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  canonicalUrl: PropTypes.string,
};

MainLayout.defaultProps = {
  pageMetadata: {},
  isBlogPages: false,
  canonicalUrl: null,
};

export default MainLayout;
