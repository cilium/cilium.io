import { useStaticQuery, graphql } from 'gatsby';
import React, { Fragment } from 'react';

import BlogPostCard from 'components/shared/blog-post-card';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import useWindowSize from 'hooks/use-window-size';

const TABLET_WIDTH = 1024;
const title = 'Learn about Cilium & eBPF';

const Learn = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= TABLET_WIDTH;
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
    <section className="mt-10 md:mt-20 lg:mt-32">
      <Container>
        <Heading tag="h2" className="text-center">
          {title}
        </Heading>
        <div className="mt-6 grid grid-cols-1 gap-8 md:mt-8 lg:mt-16 lg:grid-cols-2 lg:grid-rows-4">
          {posts.map(({ frontmatter }, index) => (
            <Fragment key={index}>
              {index === 0 ? (
                <BlogPostCard
                  className="lg:row-span-full"
                  size={isDesktop ? 'lg' : 'sm'}
                  isLandscapeView={!isDesktop}
                  {...frontmatter}
                />
              ) : (
                <BlogPostCard size="sm" isLandscapeView {...frontmatter} />
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Learn;
