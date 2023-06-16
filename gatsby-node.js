const fetch = require(`node-fetch`);
const Path = require('path');

const { createEventFilters } = require('./src/utils/event-filters');
const { EVENT_REGEX, EVENTS_BASE_PATH } = require('./src/utils/events');
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
      allCategories: allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
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

// Create Events Page
async function createEventsPage({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(
    `
      query ($draftFilter: [Boolean]!, $eventRegex: String!) {
        allMdx(
          filter: {
            fileAbsolutePath: { regex: $eventRegex }
            fields: { draft: { in: $draftFilter } }
          }
        ) {
          totalCount
        }
        allTypes: allMdx(filter: { fileAbsolutePath: { regex: $eventRegex } }) {
          group(field: frontmatter___type) {
            fieldValue
          }
        }
        allRegions: allMdx(filter: { fileAbsolutePath: { regex: $eventRegex } }) {
          group(field: frontmatter___region) {
            fieldValue
          }
        }
        allPosts: allMdx(
          filter: {
            fileAbsolutePath: { regex: $eventRegex }
            fields: { draft: { in: $draftFilter }, isFeatured: { eq: false } }
          }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              region
              place
              type
              title
              ogSummary
              externalUrl
              ogImage {
                childImageSharp {
                  gatsbyImageData(width: 550)
                }
              }
            }
          }
        }
        featuredPost: allMdx(
          filter: {
            fileAbsolutePath: { regex: $eventRegex }
            fields: { draft: { in: $draftFilter }, isFeatured: { eq: true } }
          }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 1
        ) {
          nodes {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              region
              place
              type
              title
              ogSummary
              externalUrl
              ogImage {
                childImageSharp {
                  gatsbyImageData(width: 735)
                }
              }
            }
          }
        }
      }
    `,
    { draftFilter: DRAFT_FILTER, eventRegex: EVENT_REGEX }
  );

  if (result.errors) throw new Error(result.errors);

  const { totalCount } = result.data.allMdx;
  const {
    featuredPost: { nodes: featuredPost },
    allPosts: { nodes: allEvents },
    allTypes: { group: allTypes },
    allRegions: { group: allRegions },
  } = result.data;

  function getInitialFilters(allFilters) {
    return allFilters.reduce((acc, { label }) => {
      if (!acc[label]) {
        acc[label] = [];
      }
      return acc;
    }, {});
  }

  const postEvents = allEvents.map((event) => ({ ...event.frontmatter }));
  const featuredEvent = featuredPost[0].frontmatter;
  const types = allTypes.reduce((acc, type) => [...acc, type.fieldValue], []);
  const regions = allRegions.reduce((acc, type) => [...acc, type.fieldValue], []);
  const eventFilters = createEventFilters(types, regions);
  const initialFilters = getInitialFilters(eventFilters);

  createPage({
    path: EVENTS_BASE_PATH,
    component: Path.resolve('./src/templates/events.jsx'),
    context: {
      featuredEvent,
      postEvents,
      totalCount,
      eventFilters,
      initialFilters,
    },
  });
}

exports.createPages = async (options) => {
  await createBlogPages(options);
  await createBlogPosts(options);
  await createEventsPage(options);
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
    createNodeField({
      node,
      name: 'type',
      value: node.frontmatter.type || '',
    });
    createNodeField({
      node,
      name: 'region',
      value: node.frontmatter.region || '',
    });
  }
};

async function getHubspotEmails({ actions: { createNode }, createContentDigest }) {
  const getObjects = async () => {
    if (process.env.NODE_ENV === 'production' && process.env.HUBSPOT_ACCESS_TOKEN) {
      let hubspotEmailsData;
      try {
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
        hubspotEmailsData = await hubspotEmails.json();
      } catch (error) {
        console.log(error);
        return [];
      }

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
}

async function getGithubStars({ actions: { createNode }, createContentDigest, cache }) {
  let stars;
  try {
    // Set expiration time as 24 hours in milliseconds
    const expirationTime = 24 * 60 * 60 * 1000;
    const cacheKey = `stars-cilium`;
    const cacheStarsData = await cache.get(cacheKey);
    // Use cache if it is not expired
    if (cacheStarsData && cacheStarsData.created > Date.now() - expirationTime) {
      stars = cacheStarsData.stars;
    } else {
      const response = await fetch(`https://api.github.com/repos/cilium/cilium`);
      const { stargazers_count } = await response.json();

      if (typeof stargazers_count !== 'number') {
        throw new Error('Failed to fetch GitHub stars');
      }

      // covert stars to string
      stars = stargazers_count.toString();

      await cache.set(cacheKey, {
        stars,
        created: Date.now(),
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch GitHub stars');
  }

  createNode({
    id: `github-stars-cilium`,
    parent: null,
    githubStars: stars,
    children: [],
    internal: {
      type: `GithubStars`,
      contentDigest: createContentDigest(stars),
    },
  });
}

exports.sourceNodes = async (options) => {
  await getHubspotEmails(options);
  await getGithubStars(options);
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
