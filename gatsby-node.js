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
  const getObjects = async () => {
    if (process.env.HUBSPOT_ACCESS_TOKEN) {
      const hubspotEmails = await fetch(
        `https://api.hubapi.com/marketing-emails/v1/emails?limit=150&name__icontains=eCHO+news&orderBy=-publish_date`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const hubspotEmailsData = await hubspotEmails.json();

      return hubspotEmailsData.objects
        .filter(({ isPublished }) => isPublished !== false)
        .map(({ name, publishDate, isPublished, publishedUrl }) => ({
          name,
          publishDate,
          isPublished,
          publishedUrl,
        }));
    }

    return [];
  };

  const objects = await getObjects();

  createNode({
    objects,
    id: `hubspot-email-data`,
    parent: null,
    children: [],
    internal: {
      type: `HubspotEmails`,
      contentDigest: createContentDigest(objects),
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type HubspotEmails implements Node {
      objects: [HubspotEmailsObject]
    }
    type HubspotEmailsObject {
      name: String
      publishDate: String
      isPublished: Boolean
      publishedUrl: String
    }
  `;
  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers, cache }) => {
  createResolvers({
    Query: {
      githubStars: {
        type: 'String',
        resolve: async () => {
          try {
            let stars;
            // Set expiration time as 24 hours in milliseconds
            const expirationTime = 24 * 60 * 60 * 1000;
            const cacheKey = `stars-cilium`;
            const cacheStarsData = await cache.get(cacheKey);
            // Use cache if it is not expired
            if (cacheStarsData && cacheStarsData.created > Date.now() - expirationTime) {
              stars = cacheStarsData.stars;
            } else {
              // Use setTimeout to avoid hitting GitHub API rate limit with a random delay with interval from 500ms to 1500ms
              await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 500));
              const response = await fetch('https://api.github.com/repos/cilium/cilium');
              const { stargazers_count } = await response.json();
              if (!stargazers_count) {
                throw new Error('Failed to fetch GitHub stars');
              }
              stars = new Intl.NumberFormat('en-US').format(stargazers_count);
              await cache.set(cacheKey, {
                stars,
                created: Date.now(),
              });
            }

            return stars;
          } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch GitHub stars');
          }
        },
      },
    },
  });
};
