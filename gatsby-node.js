const Path = require('path');

const { slugify } = require('./src/utils/slugify');

const BLOG_POSTS_PER_PAGE = 9;

const slugifyCategory = (category) => (category === '*' ? 'blog/' : `blog/${slugify(category)}/`);

// Create Blog Posts
async function createBlogPosts({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      allFile(filter: { ext: { in: [".md", ".mdx"] } }) {
        nodes {
          children {
            ... on Mdx {
              id
              frontmatter {
                date(formatString: "MMM DD, yyyy")
                title
                path
              }
              body
            }
          }
          relativeDirectory
        }
      }
      allPopularPosts: allMdx(
        filter: { fileAbsolutePath: { regex: "/posts/" }, fields: { isPopular: { eq: true } } }
        limit: 4
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        nodes {
          frontmatter {
            path
            date(locale: "en", formatString: "MMM DD, yyyy")
            title
            cover {
              childImageSharp {
                gatsbyImageData(width: 512)
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
  `);

  const popularPosts = data.allPopularPosts.nodes;

  data.allFile.nodes.forEach((file) => {
    const { children } = file;
    const postData = { ...children[0] };
    // pure debugging condition
    if (typeof postData.frontmatter === 'undefined') {
      // eslint-disable-next-line no-console
      console.log('\nmarkup is broken! check index.md file at\n\n', file.relativeDirectory);
      return;
    }
    // determine if there is popular posts
    const popularPostsData = popularPosts?.length ? popularPosts : false;

    const { path } = postData.frontmatter;

    actions.createPage({
      path,
      component: Path.resolve('./src/templates/blog-post.jsx'),
      context: { postData, popularPosts: popularPostsData },
    });
  });
}

// Create Blog Pages
async function createBlogPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const categories = [
    '*',
    'Announcements',
    'Community',
    'Deep Dive',
    'eBPF',
    'Guide',
    'How-To',
    'Network Policies',
    'Releases',
    'User Blog',
  ];

  const {
    data: {
      featuredPostEdges: { nodes: featuredPost },
      allPopularPosts: { nodes: popularPosts },
    },
  } = await graphql(`
    {
      featuredPostEdges: allMdx(
        filter: { fileAbsolutePath: { regex: "/posts/" }, fields: { isFeatured: { eq: true } } }
      ) {
        nodes {
          frontmatter {
            path
            date(locale: "en", formatString: "MMM DD, yyyy")
            title
            summary
            cover {
              childImageSharp {
                gatsbyImageData(width: 685)
              }
            }
          }
          fileAbsolutePath
        }
      }
      allPopularPosts: allMdx(
        filter: { fileAbsolutePath: { regex: "/posts/" }, fields: { isPopular: { eq: true } } }
        limit: 4
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        nodes {
          frontmatter {
            path
            date(locale: "en", formatString: "MMM DD, yyyy")
            title
            cover {
              childImageSharp {
                gatsbyImageData(width: 512)
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
        const featuredPostData = featuredPost?.length ? featuredPost[0] : false;

        // determine if there is popular posts
        const popularPostsData = popularPosts?.length ? popularPosts : false;

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
              queryFilter: category,
              featured: featuredPostData,
              popularPosts: popularPostsData,
              robots: `${category === '*' ? '' : 'NO'}INDEX, FOLLOW`,
              // remove extra slash if category is a wildcard to preserve proper urls
              canonicalUrl: `blog/${category === '*' ? '' : '/'}${path}`,
              slug: `/${path}`,
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
      value: node.frontmatter.draft || 'false',
    });
  }
};
