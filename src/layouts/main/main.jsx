import PropTypes from 'prop-types';
import React from 'react';

import Banner from 'components/shared/banner';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

const MainLayout = ({ showBanner, pageMetadata, children }) => (
  <>
    <SEO data={pageMetadata} />
    {showBanner && <Banner />}
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageMetadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

MainLayout.defaultProps = {
  pageMetadata: {},
};

export default MainLayout;
