import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import SocialShare from './social-share';

const Wrapper = ({ children }) => <div className="prose md:prose-lg !max-w-none">{children}</div>;

const Content = ({ date, title, html, path }) => {
  const postUrl = `${process.env.GATSBY_DEFAULT_SITE_URL}${path}`;
  return (
    <article className="relative mt-6 md:mt-10 lg:mt-16">
      <Container className="grid md:grid-cols-12 lg:gap-8">
        <SocialShare className="order-1 md:order-none md:col-span-1" postUrl={postUrl} />
        <div className="md:col-span-10">
          <span className="font-semibold leading-none md:text-lg text-gray-1">{date}</span>
          <Heading className="mt-4" size="lg" tag="h1">
            {title}
          </Heading>
          <MDXProvider components={{ wrapper: Wrapper }}>
            <MDXRenderer>{html}</MDXRenderer>
          </MDXProvider>
        </div>
      </Container>
    </article>
  );
};
Content.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Content;
