import React from 'react';

import Link from 'components/shared/link';
import MainLayout from 'layouts/main';

const IndexPage = () => (
  <MainLayout>
    <div className="container">
      <Link to="/">Back</Link>
    </div>
  </MainLayout>
);

export default IndexPage;
