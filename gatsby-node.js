const Path = require('path');

const BLOG_POSTS_PER_PAGE = 10;
const slugify = (path) =>
  path
    .toLowerCase()
    .replace(/[\s-:]{1,}/g, '-')
    .replace(/blog__/g, '') // special treatment of blog post directory pattern
    .replace(/[?!;&%@~()[\],]/g, '')
    .replace(/(\.[^/.]+)?$/, '');

const stripDirectoryPath = (str) =>
  str.replace(/.*\/(\d{4}-\d{2}-\d{2}.*)/, '$1').replace(/\/index\.md/, '');

const getDateAndSlugFromPath = (path) => {
  const [date, rowSlug] = stripDirectoryPath(path).split('--');
  return { date, slug: slugify(rowSlug) };
};

const slugifyCategory = (category) => (category === '*' ? 'blog/' : `blog/${slugify(category)}/`);

async function createBlogPosts({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      allFile(filter: { ext: { in: [".md", ".mdx"] } }) {
        nodes {
          children {
            ... on Mdx {
              id
              frontmatter {
                title
                summary
              }
            }
          }
          relativePath
          relativeDirectory
        }
      }
    }
  `);

  data.allFile.nodes.forEach((file) => {
    const { children, relativeDirectory } = file;
    const postData = { ...children[0] };
    const { date, slug } = getDateAndSlugFromPath(relativeDirectory);
    // pure debugging condition
    if (typeof postData.frontmatter === 'undefined') {
      // eslint-disable-next-line no-console
      console.log('\nmarkup is broken! check index.md file at\n\n', file.relativeDirectory);
      return;
    }

    postData.frontmatter.slug = slug;
    postData.frontmatter.date = date;

    actions.createPage({
      path: `blog/${slug}`,
      component: Path.resolve('./src/templates/blog-post.jsx'),
      context: { postData },
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
    'Deep Drive',
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
        filter: {
          fileAbsolutePath: { regex: "/blog-posts/" }
          fields: { isFeatured: { eq: true } }
        }
      ) {
        nodes {
          frontmatter {
            category
            summary
            title
            cover {
              childImageSharp {
                gatsbyImageData(width: 512, height: 360)
              }
            }
          }
          fileAbsolutePath
        }
      }
      allPopularPosts: allMdx(
        filter: { fields: { isPopular: { eq: true } } }
        limit: 5
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        nodes {
          frontmatter {
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
    reporter.panicOnBuild(
      'There must be the only one featured post. Please, check "featured" fields in your posts.',
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
                fileAbsolutePath: { regex: "/blog-posts/" }
                fields: { isFeatured: { eq: false }, category: { glob: $tag } }
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
        // inject date and slug manually
        if (featuredPostData) {
          const { date, slug } = getDateAndSlugFromPath(featuredPostData.fileAbsolutePath);
          featuredPostData.frontmatter.date = date;
          featuredPostData.frontmatter.slug = `/blog/${slug}`;
        }
        // determine if there is popular posts
        const popularPostsData = popularPosts?.length ? popularPosts : false;
        if (popularPostsData) {
          popularPosts.forEach(({ frontmatter, fileAbsolutePath }) => {
            // inject date and slug manually
            const { date, slug } = getDateAndSlugFromPath(fileAbsolutePath);
            frontmatter.date = date;
            frontmatter.slug = `/blog/${slug}`;
            return frontmatter;
          });
        }

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
              // remove extra slash if category is a wildcard to preserve proper urls
              slug: category === '*' ? path.slice(1) : path,
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
      name: 'category',
      value: node.frontmatter.category || 'none',
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
  }
};
