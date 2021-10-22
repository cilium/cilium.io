import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import SocialShare from './social-share';

const Wrapper = ({ children }) => <div className="prose md:prose-lg !max-w-none">{children}</div>;

const Content = ({ date, title, summary, html, path, tags }) => {
  const postUrl = `${process.env.GATSBY_DEFAULT_SITE_URL}${path}`;
  return (
    <article className="relative mt-6 md:mt-10 lg:mt-16">
      <Container className="grid grid-cols-1 md:grid-cols-12 lg:gap-8">
        <SocialShare
          className="order-1 md:order-none md:col-span-1"
          postUrl={postUrl}
          title={title}
          summary={summary}
          tags={tags}
        />
        <div className="md:col-span-10">
          <span className="font-semibold leading-none md:text-lg text-gray-1">{date}</span>
          <Heading className="mt-4 mb-16" size="lg" tag="h1">
            {title}
          </Heading>
          <MDXProvider components={{ wrapper: Wrapper }}>
            <MDXRenderer>{html}</MDXRenderer>
          </MDXProvider>
          {tags?.length && (
            <div className="flex flex-wrap mt-8 gap-x-2 gap-y-2">
              {tags.map((tag) => (
                <Link
                  className="text-xs font-bold leading-none tracking-wider bg-additional-4 bg-opacity-70 rounded uppercase p-2.5 text-primary-1"
                  key={tag}
                  to="/"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
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
  tags: PropTypes.arrayOf(PropTypes.string),
};

Content.defaultProps = {
  tags: null,
};

export default Content;
