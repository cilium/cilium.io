import PropTypes from 'prop-types';
import React from 'react';

import Header from 'components/shared/header';

const MainLayout = ({ children }) => (
  <>
    <div className="relative overflow-hidden">
      <Header />
      <main>{children}</main>
    </div>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
