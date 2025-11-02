import { MDXProvider } from '@mdx-js/react';
import React from 'react';

import BlogAuthor from 'components/shared/blog-author';

const components = { BlogAuthor };

const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

export default wrapRootElement;
