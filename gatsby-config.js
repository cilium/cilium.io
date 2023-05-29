// Gatsby has dotenv by default
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const queries = require('./src/utils/algolia-queries');

const plugins = [
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `events`,
      path: `${__dirname}/content/events`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        'gatsby-remark-copy-linked-files',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1008,
            quality: 90,
            withWebp: true,
            backgroundColor: 'white',
            disableBgImageOnAlpha: true,
          },
        },
        {
          resolve: 'gatsby-remark-video',
          options: {
            width: 1008,
            height: 'auto',
            preload: 'auto',
            muted: true,
            autoplay: true,
            playsinline: true,
            controls: true,
            loop: true,
          },
        },
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            // Class prefix for <pre> tags containing syntax highlighting;
            // defaults to 'language-' (eg <pre class="language-js">).
            // If your site loads Prism into the browser at runtime,
            // (eg for use with libraries like react-live),
            // you may use this to prevent Prism from re-processing syntax.
            // This is an uncommon use-case though;
            // If you're unsure, it's best to use the default value.
            classPrefix: 'language-',
          },
        },
        'gatsby-remark-responsive-iframe',
      ],
    },
  },
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      defaultQuality: 85,
      defaults: {
        placeholder: 'none',
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      // name: 'cilium.io',
      // short_name: 'cilium',
      start_url: '/',
      display: 'minimal-ui',
      icon: 'src/images/favicon.png', // This path is relative to the root of the site.
    },
  },
  {
    resolve: 'gatsby-plugin-svgr-svgo',
    options: {
      inlineSvgOptions: [
        {
          test: /\.inline.svg$/,
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
              'prefixIds',
            ],
          },
        },
      ],
      urlSvgOptions: [
        {
          test: /\.svg$/,
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
              'prefixIds',
            ],
          },
        },
      ],
    },
  },
  'gatsby-alias-imports',
  'gatsby-plugin-postcss',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-image',
  {
    resolve: 'gatsby-plugin-netlify',
    options: {
      headers: {
        '/fonts/*': ['Cache-Control: public, max-age=31536000, immutable'],
        '/*': ['Content-Security-Policy: frame-ancestors instruqt.com play.instruqt.com'],
      },
    },
  },
  {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: 'GTM-M533ZSF',
    },
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) =>
            allMdx.nodes.map(({ excerpt, frontmatter, html }) => {
              const { path, date, externalUrl } = frontmatter;
              const url = externalUrl || site.siteMetadata.siteUrl + path;
              return {
                ...frontmatter,
                description: excerpt,
                date,
                url,
                guid: url,
                custom_elements: [{ 'content:encoded': html }],
              };
            }),
          query: `
            {
              allMdx(
                filter: {fileAbsolutePath: { regex: "/posts/" }, fields: {draft: {eq: false}} }
                limit: 20
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                nodes {
                  html
                  excerpt
                  frontmatter {
                    title
                    date
                    path
                    externalUrl
                  }
                }
              }
            }
          `,
          output: '/blog/rss.xml',
          title:
            'Cilium - The latest articles covering eBPF-based Networking, Observability, and Security',
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-canonical-urls',
    options: {
      siteUrl: process.env.GATSBY_DEFAULT_SITE_URL,
    },
  },
  {
    resolve: `gatsby-plugin-hotjar`,
    options: {
      includeInDevelopment: true, // optional parameter to include script in development
      id: 2658928,
      sv: 6,
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];

if (process.env.CONTEXT === 'production') {
  plugins.push({
    resolve: `gatsby-plugin-algolia-search`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      enablePartialUpdates: true,
      queries,
      matchFields: ['title', 'excerpt'],
      chunkSize: 10000, // default: 1000
    },
  });
}

module.exports = {
  trailingSlash: 'always',
  siteMetadata: {
    siteTitle: 'Cilium - Linux Native, API-Aware Networking and Security for Containers', // <title>
    siteDescription:
      'Linux-Native, API-Aware Networking and Security for Containers. Open source project, Fork me on Github',
    // pathPrefix: "",
    siteImage: '/images/social-preview.jpg',
    siteLanguage: 'en',
    siteUrl: process.env.GATSBY_DEFAULT_SITE_URL,
    /* author */
    authorName: 'cilium',
    authorTwitterAccount: '@ciliumproject',
  },
  plugins,
};
