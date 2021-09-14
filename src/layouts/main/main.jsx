import PropTypes from 'prop-types';
import React from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

const MainLayout = ({ pageMetadata, children }) => (
  <>
    <SEO data={pageMetadata} />
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
  }).isRequired,
};

export default MainLayout;
