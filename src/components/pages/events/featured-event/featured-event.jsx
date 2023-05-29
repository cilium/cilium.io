import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import FeaturedStory from 'components/shared/featured-story';

const FeaturedPosts = ({ featuredStory }) => (
  <section className="mt-6 mb-14 md:my-10 lg:mb-12 lg:mt-16">
    <Container className="grid grid-cols-12 gap-y-10 border-b border-gray-3 md:gap-y-16 md:gap-x-8">
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
