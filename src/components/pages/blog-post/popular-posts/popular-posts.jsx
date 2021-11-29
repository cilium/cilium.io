import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import BlogPostCard from 'components/shared/blog-post-card';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'Popular posts';

const PopularPosts = () => {
  const {
    allPopularPosts: { posts },
  } = useStaticQuery(graphql`
    query PopularPosts {
      allPopularPosts: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/posts/" }
          fields: { isPopular: { eq: true }, isFeatured: { eq: false } }
        }
        limit: 3
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        posts: nodes {
          frontmatter {
            path
            date(locale: "en", formatString: "MMM DD, yyyy")
            categories
            title
            ogSummary
            ogImage {
              childImageSharp {
                gatsbyImageData(width: 550)
              }
            }
            ogImageUrl
            externalUrl
          }
          fileAbsolutePath
        }
      }
    }
  `);
  return (
    <section className="mt-10 md:mt-20 lg:mt-28">
      <Container>
        <Heading tag="h2">{title}</Heading>
        <div className="grid gap-6 mt-6 md:mt-8 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {posts.map(({ frontmatter }, index) => (
            <BlogPostCard {...frontmatter} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularPosts;
