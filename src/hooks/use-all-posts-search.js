import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

const useAllPostsSearch = () => {
  const data = useStaticQuery(graphql`
    query AllPostsForSearch {
      allMdx(
        filter: {
          internal: { contentFilePath: { regex: "/posts/" } }
          fields: { isFeatured: { eq: false } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          fields {
            externalUrl
            ogImageUrl
          }
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
          }
        }
      }
    }
  `);

  const allPosts = useMemo(() => data?.allMdx?.nodes || [], [data]);

  return allPosts;
};

export default useAllPostsSearch;
