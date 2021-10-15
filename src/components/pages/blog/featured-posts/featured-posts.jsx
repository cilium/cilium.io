import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';

import FeaturedStory from './featured-story';

const FeaturedPosts = ({ featuredStory }) => (
  <section className="mt-16">
    <Container className="grid grid-cols-12 gap-8">
      <FeaturedStory className="col-span-6" {...featuredStory} />
    </Container>
  </section>
);

FeaturedPosts.propTypes = {
  featuredStory: PropTypes.shape({
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    cover: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape(),
      }),
    }).isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPosts;
