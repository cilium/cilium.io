import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'Popular posts';

const PopularPosts = ({ items }) => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid gap-6 mt-6 md:mt-8 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {items.map(({ frontmatter }, index) => (
          <BlogPostCard {...frontmatter} key={index} />
        ))}
      </div>
    </Container>
  </section>
);

PopularPosts.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape(),
    })
  ).isRequired,
};

export default PopularPosts;
