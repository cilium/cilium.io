const indexName = process.env.GATSBY_ALGOLIA_INDEX_NAME;

const pageQuery = `{
  pages: allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
    edges {
      node {
        id
        frontmatter {
          title
          path
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, frontmatter, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
