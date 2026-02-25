import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import React from 'react';

import BlogAuthor from 'components/shared/blog-author';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import ImageGallery from './image-gallery';
import SocialShare from './social-share';
import YoutubeIframe from './youtube-iframe';
import YoutubePlaylistGallery from './youtube-playlist-gallery';

// Updated wrapper with dark mode prose support
const Wrapper = ({ children }) => (
  <div className="prose md:prose-lg !max-w-none dark:text-gray-300 text-black dark:prose-invert">
    {children}
  </div>
);

// Add PropTypes for Wrapper component
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const components = {
  wrapper: Wrapper,
  BlogAuthor,
  ImageGallery,
  YoutubeIframe,
  YoutubePlaylistGallery,
  undefined: (props) => <div {...props} />,
};

const Content = ({ date, title, summary, content, path, tags }) => {
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
          <Heading className="mt-4 mb-10 lg:mb-16 dark:text-white text-black" size="lg" tag="h1">
            {title}
          </Heading>
          <MDXProvider components={components}>{content}</MDXProvider>
        </div>
      </Container>
    </article>
  );
};

Content.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  content: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

Content.defaultProps = {
  tags: null,
  summary: null,
};

export default Content;
