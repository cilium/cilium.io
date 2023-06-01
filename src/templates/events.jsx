/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import EventsBoard from 'components/pages/events/events-board';
import EventsSubscribe from 'components/pages/events/events-subscribe';
import FeaturedEvent from 'components/pages/events/featured-event';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';

const EventsPage = (props) => {
  const {
    data: {
      allEvents: { nodes: events },
      featuredPostEdges: { nodes: featuredEvents },
    },
    pageContext: { types, currentType, currentPage, numPages },
    location: { pathname },
  } = props;

  const isTypePage = pathname.includes('type');

  return (
    <MainLayout>
      <FeaturedEvent featuredStory={featuredEvents?.[0]} />
      <EventsBoard
        types={types}
        events={events}
        currentType={currentType}
        currentPage={currentPage}
        numPages={numPages}
        isTypePage={isTypePage}
      />
      <EventsSubscribe />
    </MainLayout>
  );
};

export default EventsPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;

export const blogPostsQuery = graphql`
  query blogPostsQuery($skip: Int!, $limit: Int!, $currentType: String!, $draftFilter: [Boolean]!) {
    allEvents: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/events/" }
        fields: {
          type: { glob: $currentType }
          isFeatured: { eq: false }
          draft: { in: $draftFilter }
        }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          date(locale: "en", formatString: "MMM DD, yyyy")
          title
          ogSummary
          externalUrl
          type
          place
          ogImage {
            childImageSharp {
              gatsbyImageData(width: 550)
            }
          }
        }
      }
    }

    featuredPostEdges: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/events/" }
        fields: { isFeatured: { eq: true } }
      }
    ) {
      nodes {
        frontmatter {
          date(locale: "en", formatString: "MMM DD, yyyy")
          type
          place
          title
          ogSummary
          externalUrl
          ogImage {
            childImageSharp {
              gatsbyImageData(width: 735)
            }
          }
        }
        fileAbsolutePath
      }
    }
  }
`;
