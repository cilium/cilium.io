const fetch = require(`node-fetch`);
const Path = require('path');

const { createEventFilters } = require('./src/utils/event-filters');
const { EVENT_REGEX } = require('./src/utils/events');
const { EVENTS_BASE_PATH } = require('./src/utils/routes');
const { slugify } = require('./src/utils/slugify');

const DRAFT_FILTER = process.env.NODE_ENV === 'production' ? [false] : [true, false];

const BLOG_POSTS_PER_PAGE = 9;
const slugifyCategory = (item, pagePath) =>
  item === '*' ? `${pagePath}/` : `${pagePath}/categories/${slugify(item)}/`;

// Create Blog Posts
async function createBlogPosts({ graphql, actions }) {
  const {
    data: {
      allMdx: { nodes: blogPosts },
    },
  } = await graphql(`
    query BlogPosts {
      allMdx(filter: { internal: { contentFilePath: { regex: "/src/posts/" } } }) {
        nodes {
          id
          frontmatter {
            path
          }
          fields {
            draft
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  blogPosts.forEach(
    ({ id, frontmatter: { path }, internal: { contentFilePath }, fields: { draft } }) => {
      // skip page creation if post has `draft` flag
      if (process.env.NODE_ENV === 'production' && draft) {
        return;
      }

      if (!path) {
        return;
      }

      const postTemplate = Path.resolve('./src/templates/blog-post.jsx');

      actions.createPage({
        path,
        component: `${postTemplate}?__contentFilePath=${contentFilePath}`,
        context: { id },
      });
    }
  );
}

// Create Blog Pages
async function createBlogPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const {
    data: {
      featuredPostEdges: { edges: featuredPost },
      allCategories: { group: allCategories },
    },
  } = await graphql(`
    {
      allCategories: allMdx(filter: { internal: { contentFilePath: { regex: "/posts/" } } }) {
        group(field: { frontmatter: { categories: SELECT } }) {
          fieldValue
        }
        nodes {
          frontmatter {
            categories
          }
        }
      }
      featuredPostEdges: allMdx(
        filter: {
          internal: { contentFilePath: { regex: "/posts/" } }
          frontmatter: { isFeatured: { eq: true } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              isFeatured
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);
  if (featuredPost?.length > 1) {
    const featuredPosts = featuredPost.map(
      ({
        node: {
          internal: { contentFilePath },
        },
      }) => contentFilePath
    );
    reporter.panicOnBuild(
      `There must be the only one featured post. Please, check "isFeatured" fields in your posts. File path: ${featuredPosts}`,
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
                internal: { contentFilePath: { regex: "/posts/" } }
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
        const pathBase = slugifyCategory(category, 'blog');

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
            internal: { contentFilePath: { regex: $eventRegex } }
            fields: { draft: { in: $draftFilter } }
          }
        ) {
          totalCount
        }
        allTypes: allMdx(filter: { internal: { contentFilePath: { regex: $eventRegex } } }) {
          group(field: { frontmatter: { type: SELECT } }) {
            fieldValue
          }
        }
        allRegions: allMdx(filter: { internal: { contentFilePath: { regex: $eventRegex } } }) {
          group(field: { frontmatter: { region: SELECT } }) {
            fieldValue
          }
        }
        allPosts: allMdx(
          filter: {
            internal: { contentFilePath: { regex: $eventRegex } }
            fields: { draft: { in: $draftFilter }, isFeatured: { eq: false } }
          }
          sort: { frontmatter: { date: DESC } }
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
                  gatsbyImageData(width: 601)
                }
              }
            }
          }
        }
        featuredPost: allMdx(
          filter: {
            internal: { contentFilePath: { regex: $eventRegex } }
            fields: { draft: { in: $draftFilter }, isFeatured: { eq: true } }
          }
          sort: { frontmatter: { date: DESC } }
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

// Create Labs Page
async function createLabsPage({ graphql, actions }) {
  const { createPage } = actions;

  const LABS_BASE_TEMPLATE = './src/templates/labs.jsx';
  const LABS_REGEX = '/content/labs/';
  const LABS_PER_PAGE = 12;

  const template = Path.resolve(LABS_BASE_TEMPLATE);

  const result = await graphql(
    `
      query ($labsRegex: String!, $draftFilter: [Boolean]!) {
        allMdx(
          filter: {
            internal: { contentFilePath: { regex: $labsRegex } }
            fields: { draft: { in: $draftFilter } }
          }
        ) {
          edges {
            node {
              frontmatter {
                categories
              }
            }
          }
        }
        allCategories: allMdx(filter: { internal: { contentFilePath: { regex: $labsRegex } } }) {
          group(field: { frontmatter: { categories: SELECT } }) {
            fieldValue
          }
        }
      }
    `,
    { labsRegex: LABS_REGEX, draftFilter: DRAFT_FILTER }
  );

  if (result.errors) throw new Error(result.errors);

  const {
    allCategories: { group: allCategories },
  } = result.data;

  const categories = ['*'].concat(allCategories.map((category) => category.fieldValue));
  const labList = result.data.allMdx.edges.map(({ node: { frontmatter: lab } }) => ({ ...lab }));

  const promiseList = [];

  categories.forEach((category) => {
    const totalCount =
      category === '*'
        ? labList.length
        : labList.filter(({ categories }) => categories.includes(category)).length;
    const totalPageCount = Math.ceil(totalCount / LABS_PER_PAGE);

    Array.from({ length: totalPageCount }).forEach((_, i) => {
      promiseList.push(
        graphql(
          `
            query CategoryLabsQuery(
              $labsRegex: String!
              $tag: String!
              $draftFilter: [Boolean]!
              $limit: Int!
              $skip: Int!
            ) {
              allMdx(
                filter: {
                  internal: { contentFilePath: { regex: $labsRegex } }
                  fields: { categories: { glob: $tag }, draft: { in: $draftFilter } }
                }
                sort: { frontmatter: { title: ASC } }
                limit: $limit
                skip: $skip
              ) {
                edges {
                  node {
                    frontmatter {
                      date(formatString: "MMM DD, YYYY")
                      categories
                      title
                      ogSummary
                      externalUrl
                      from
                      ogImage {
                        childImageSharp {
                          gatsbyImageData(width: 601)
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
          {
            labsRegex: LABS_REGEX,
            tag: category,
            draftFilter: DRAFT_FILTER,
            limit: LABS_PER_PAGE,
            skip: i * LABS_PER_PAGE,
          }
        ).then((result) => {
          if (result.errors) throw new Error(result.errors);
          const labs = result.data.allMdx.edges;
          const pathBase = slugifyCategory(category, 'labs');
          const path = i === 0 ? pathBase : `${pathBase}${i + 1}`;

          createPage({
            path,
            component: template,
            context: {
              labs,
              categories,
              currentCategory: category,
              totalPageCount,
              currentPage: i + 1,
            },
          });
        })
      );
    });
  });

  await Promise.all(promiseList);
}

exports.createPages = async (options) => {
  await createBlogPages(options);
  await createBlogPosts(options);
  await createEventsPage(options);
  await createLabsPage(options);
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
    createNodeField({
      node,
      name: 'title',
      value: node.frontmatter.title || '',
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

  objects.forEach((object, i) => {
    createNode({
      ...object,
      id: `hubspot-email-${i}`,
      parent: null,
      children: [],
      internal: {
        type: `HubspotEmail`,
        contentDigest: createContentDigest(object),
      },
    });
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
    type HubspotEmail implements Node {
      name: String
      publishDate: String
      isPublished: Boolean
      publishedUrl: String
    }
  `;
  createTypes(typeDefs);
};
