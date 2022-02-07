import { useStaticQuery, graphql } from 'gatsby';
import React, { Fragment } from 'react';

import BlogPostCard from 'components/shared/blog-post-card';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const title = 'Learn about Cilium & eBPF';

const Learn = () => {
  const {
    allMdx: { posts },
  } = useStaticQuery(graphql`
    query blogQuery {
      allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 5) {
        posts: nodes {
          frontmatter {
            path
            externalUrl
            title
            date(locale: "en", formatString: "MMM DD, yyyy")
            ogImageUrl
            ogImage {
              childImageSharp {
                gatsbyImageData(width: 512)
              }
            }
            ogSummary
          }
        }
      }
    }
  `);

  return (
    <section className="mt-10 md:mt-20 lg:mt-28">
      <Container>
        <Heading tag="h2">{title}</Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-11 lg:grid-rows-4">
          {posts.map(({ frontmatter }, index) => (
            <Fragment key={index}>
              {index === 0 ? (
                <>
                  <BlogPostCard
                    className="row-span-full hidden lg:flex"
                    titleSize="lg"
                    coverSize="lg"
                    {...frontmatter}
                  />
                  <BlogPostCard
                    className="flex lg:hidden"
                    coverSize="sm"
                    isLandscapeView
                    {...frontmatter}
                  />
                </>
              ) : (
                <BlogPostCard coverSize="sm" isLandscapeView {...frontmatter} />
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Learn;
