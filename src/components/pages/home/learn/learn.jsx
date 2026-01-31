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
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 5) {
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
    <section className="pt-10 md:pt-20 lg:pt-32 bg-white dark:bg-[#0f1d3e]">
      <Container>
        <Heading tag="h2" className="text-center dark:text-gray-3 text-black">
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
