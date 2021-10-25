import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';

import FeaturedStory from './featured-story';
import PopularPosts from './popular-posts';

const FeaturedPosts = ({ featuredStory, popularPosts }) => (
  <section className="mt-6 md:mt-10 lg:mt-16">
    <Container className="grid grid-cols-12 gap-y-8 md:gap-x-8">
      <FeaturedStory className="flex flex-col col-span-full xl:col-span-6" {...featuredStory} />
      <PopularPosts className="flex flex-col col-span-full xl:col-span-6" items={popularPosts} />
    </Container>
  </section>
);

FeaturedPosts.propTypes = {
  featuredStory: PropTypes.shape({
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    ogSummary: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    ogImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape(),
      }),
    }),
    path: PropTypes.string.isRequired,
  }).isRequired,
  popularPosts: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ogImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.shape(),
          }),
        }),
        path: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default FeaturedPosts;
