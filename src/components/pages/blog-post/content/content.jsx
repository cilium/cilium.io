import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Wrapper = ({ children }) => <div className="prose md:prose-lg !max-w-none">{children}</div>;

const Content = ({ date, title, html }) => (
  <article className="mt-6 md:mt-10 lg:mt-16">
    <Container size="sm">
      <span className="font-semibold leading-none md:text-lg text-gray-1">{date}</span>
      <Heading className="mt-4" size="lg" tag="h1">
        {title}
      </Heading>
      <MDXProvider components={{ wrapper: Wrapper }}>
        <MDXRenderer>{html}</MDXRenderer>
      </MDXProvider>
    </Container>
  </article>
);

Content.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default Content;
