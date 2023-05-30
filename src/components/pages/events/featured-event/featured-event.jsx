import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import FeaturedStory from 'components/shared/featured-story';

const FeaturedPosts = ({ featuredStory }) => (
  <section className="mt-6 md:mt-10 lg:mt-16">
    <Container className="grid grid-cols-12 gap-y-10 border-b border-gray-3 pb-14 md:gap-y-16 md:gap-x-8 md:pb-10 lg:pb-12">
      <FeaturedStory
        className="col-span-full flex flex-col"
        {...featuredStory.frontmatter}
        {...featuredStory.fields}
      />
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
