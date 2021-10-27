import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import PopularPostCard from './popular-post-card';

const title = 'Popular posts';

const PopularPosts = ({ items }) => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid gap-6 mt-6 sm:grid-cols-2 md:mt-10 lg:mt-14 md:gap-8">
        {items.map((item, index) => (
          <PopularPostCard {...item} key={index} />
        ))}
      </div>
    </Container>
  </section>
);

PopularPosts.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ogImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.shape(PropTypes.any),
          }),
        }),
        path: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default PopularPosts;
