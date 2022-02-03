import PropTypes from 'prop-types';
import React from 'react';

import Banner from 'components/shared/banner';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

const MainLayout = ({ isBlogPage, pageMetadata, canonicalUrl, children }) => (
  <>
    <SEO canonical={canonicalUrl} data={pageMetadata} />
    <div className="relative">
      {isBlogPage && <Banner />}
      <Header showSearchBox={isBlogPage} />
    </div>
    <main>{children}</main>
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isBlogPage: PropTypes.bool,
  pageMetadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  canonicalUrl: PropTypes.string,
};

MainLayout.defaultProps = {
  pageMetadata: {},
  isBlogPage: false,
  canonicalUrl: null,
};

export default MainLayout;
