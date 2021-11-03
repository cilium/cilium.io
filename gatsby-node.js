const Path = require('path');

const { slugify } = require('./src/utils/slugify');

const BLOG_POSTS_PER_PAGE = 9;

const slugifyCategory = (item) => (item === '*' ? 'blog/' : `blog/categories/${slugify(item)}/`);

async function getPopularPostsData(graphql) {
  const {
    data: {
      allPopularPosts: { nodes: popularPosts },
    },
  } = await graphql(`
    query {
      allPopularPosts: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/posts/" }
          fields: { isPopular: { eq: true }, isFeatured: { eq: false } }
        }
        limit: 3
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        nodes {
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
          fileAbsolutePath
        }
      }
    }
  `);
  return popularPosts;
}

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
        }
      }
    }
  `);

  blogPosts.forEach((file) => {
    // skip page creation if post has `draft` flag
    if (process.env.NODE_ENV === 'production' && file.frontmatter.draft) {
      return;
    }

    const { path } = file.frontmatter;

    actions.createPage({
      path,
      component: Path.resolve('./src/templates/blog-post.jsx'),
      context: { id: file.id },
    });
  });
}

// Create Blog Pages
async function createBlogPages({ graphql, actions, reporter }, popularPosts) {
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
          frontmatter {
            path
            date(locale: "en", formatString: "MMM DD, yyyy")
            title
            ogSummary
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
          query CategoryPostsQuery($tag: String!) {
            allMdx(
              filter: {
                fileAbsolutePath: { regex: "/posts/" }
                fields: { isFeatured: { eq: false }, categories: { glob: $tag } }
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
        { tag: category }
      ).then((result) => {
        if (result.errors) throw result.errors;
        const posts = result.data.allMdx.edges;
        const numPages = Math.ceil(posts.length / BLOG_POSTS_PER_PAGE);
        const pathBase = slugifyCategory(category);
        // determine if there is featured post
        const featuredPostData = featuredPost?.[0] ?? null;

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
              featured: featuredPostData,
              popularPosts,
              categories,
              // get all posts with draft: 'false' if NODE_ENV is production, otherwise render them all
              draftFilter:
                process.env.NODE_ENV === 'production' ? Array.of(false) : Array.of(true, false),
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
  const popularPosts = await getPopularPostsData(options.graphql);
  await createBlogPages(options, popularPosts);
  await createBlogPosts(options, popularPosts);
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
  }
};
