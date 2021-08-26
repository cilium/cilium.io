import React from 'react';

import Link from 'components/shared/link';
import ExampleInlineSVG from 'images/example.inline.svg';
import exampleUrlSvg from 'images/example.svg';
import MainLayout from 'layouts/main';

const IndexPage = () => (
  <MainLayout>
    <div className="container">
      <div className="columns">
        <div className="column">1</div>
        <div className="column">2</div>
        <div className="column">3</div>
      </div>
      Inline SVG: <ExampleInlineSVG />
      URL SVG: <img src={exampleUrlSvg} alt="" />
      <Link to="/page-2">Page 2</Link>
    </div>
  </MainLayout>
);

export default IndexPage;
