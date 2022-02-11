import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import PopularPosts from 'components/shared/popular-posts';

import FeaturedStory from './featured-story';

const FeaturedPosts = ({ featuredStory }) => (
  <section className="mt-6 md:mt-10 lg:mt-16">
    <Container className="grid grid-cols-12 gap-y-10 md:gap-y-16 md:gap-x-8">
      <FeaturedStory
        className="flex flex-col col-span-full"
        {...featuredStory.frontmatter}
        {...featuredStory.fields}
      />
      <PopularPosts className="flex flex-col col-span-full" titleTheme="gray" />
    </Container>
  </section>
);

FeaturedPosts.propTypes = {
  featuredStory: PropTypes.shape({
    frontmatter: PropTypes.shape({}),
    fields: PropTypes.shape({}),
  }).isRequired,
};

export default FeaturedPosts;
