const fetch = require(`node-fetch`);
const Path = require('path');

const { slugify } = require('./src/utils/slugify');

const DRAFT_FILTER = process.env.NODE_ENV === 'production' ? [false] : [true, false];

const BLOG_POSTS_PER_PAGE = 9;
const slugifyCategory = (item) => (item === '*' ? 'blog/' : `blog/categories/${slugify(item)}/`);

// Create Blog Posts
async function createBlogPosts({ graphql, actions }) {
  const {
    data: {
      allMdx: { nodes: blogPosts },
    },
  } = await graphql(`
    query BlogPosts {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/posts/" } }) {
        nodes {
          id
          fileAbsolutePath
          frontmatter {
            path
          }
          fields {
            draft
          }
        }
      }
    }
  `);

  blogPosts.forEach((file) => {
    // skip page creation if post has `draft` flag
    if (process.env.NODE_ENV === 'production' && file.fields.draft) {
      return;
    }

    const { path } = file.frontmatter;

    if (!path) {
      return;
    }

    actions.createPage({
      path,
      component: Path.resolve('./src/templates/blog-post.jsx'),
      context: { id: file.id },
    });
  });
}

// Create Blog Pages
async function createBlogPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const {
    data: {
      featuredPostEdges: { nodes: featuredPost },
      allCategories: { group: allCategories },
    },
  } = await graphql(`
    {
      allCategories: allMdx {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
      featuredPostEdges: allMdx(
        filter: { fileAbsolutePath: { regex: "/posts/" }, fields: { isFeatured: { eq: true } } }
      ) {
        nodes {
          fileAbsolutePath
        }
      }
    }
  `);

  if (featuredPost?.length > 1) {
    const featuredPosts = featuredPost.map((post) => post.fileAbsolutePath);
    reporter.panicOnBuild(
      `There must be the only one featured post. Please, check "isFeatured" fields in your posts. ${featuredPosts}`,
      new Error('Too much featured posts')
    );
  }

  const categories = ['*'].concat(allCategories.map((category) => category.fieldValue));

  // Create category pages
  await Promise.all(
    categories.map(async (category) =>
      graphql(
        `
          query CategoryPostsQuery($tag: String!, $draftFilter: [Boolean]!) {
            allMdx(
              filter: {
                fileAbsolutePath: { regex: "/posts/" }
                fields: {
                  isFeatured: { eq: false }
                  categories: { glob: $tag }
                  draft: { in: $draftFilter }
                }
              }
              limit: 1000
            ) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `,
        { tag: category, draftFilter: DRAFT_FILTER }
      ).then((result) => {
        if (result.errors) throw result.errors;
        const posts = result.data.allMdx.edges;
        const numPages = Math.ceil(posts.length / BLOG_POSTS_PER_PAGE);
        const pathBase = slugifyCategory(category);

        Array.from({ length: numPages }).forEach((_, i) => {
          const path = i === 0 ? pathBase : `${pathBase}${i + 1}`;
          createPage({
            path,
            component: Path.resolve('./src/templates/blog.jsx'),
            context: {
              limit: BLOG_POSTS_PER_PAGE,
              skip: i * BLOG_POSTS_PER_PAGE,
              numPages,
              currentPage: i + 1,
              currentCategory: category,
              categories,
              // get all posts with draft: 'false' if NODE_ENV is production, otherwise render them all
              draftFilter: DRAFT_FILTER,
              canonicalUrl: `${process.env.GATSBY_DEFAULT_SITE_URL}/${path}`,
              slug: path,
            },
          });
        });
      })
    )
  );
}

exports.createPages = async (options) => {
  await createBlogPages(options);
  await createBlogPosts(options);
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.frontmatter) {
    createNodeField({
      node,
      name: 'categories',
      value: node.frontmatter.categories || Array.of('*'),
    });
    createNodeField({
      node,
      name: 'isFeatured',
      value: node.frontmatter.isFeatured || false,
    });
    createNodeField({
      node,
      name: 'isPopular',
      value: node.frontmatter.isPopular || false,
    });
    createNodeField({
      node,
      name: 'draft',
      value: node.frontmatter.draft || false,
    });
    createNodeField({
      node,
      name: 'ogImageUrl',
      value: node.frontmatter.ogImageUrl || '',
    });
    createNodeField({
      node,
      name: 'externalUrl',
      value: node.frontmatter.externalUrl || '',
    });
  }
};

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  // get data from GitHub API at build time
  const result = await fetch(`https://api.github.com/repos/cilium/cilium`);
  const resultData = await result.json();
  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    nameWithOwner: resultData.full_name,
    url: resultData.html_url,
    count: resultData.stargazers_count,
    // required fields
    id: `github-data`,
    parent: null,
    children: [],
    internal: {
      type: `Github`,
      contentDigest: createContentDigest(resultData),
    },
  });
};
