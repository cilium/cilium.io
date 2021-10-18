import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';

import FeaturedStory from './featured-story';
import PopularPosts from './popular-posts';

const FeaturedPosts = ({ featuredStory, popularPosts }) => (
  <section className="mt-16">
    <Container className="grid grid-cols-12 gap-8">
      <FeaturedStory className="col-span-6" {...featuredStory} />
      <PopularPosts className="flex flex-col col-span-6" items={popularPosts} />
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
  popularPosts: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.shape(),
          }),
        }).isRequired,
        slug: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default FeaturedPosts;
