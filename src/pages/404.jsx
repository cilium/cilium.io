import React from 'react';

import MainLayout from 'layouts/main';

const NotFoundPage = () => (
  <MainLayout footerWithTopBorder>
    <div className="flex flex-col items-center justify-center py-40">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadaaaaaness.</p>
    </div>
  </MainLayout>
);

export default NotFoundPage;
