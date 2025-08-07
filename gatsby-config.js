const path = require('path');

const { netlifyPlugin } = require('gatsby-adapter-netlify');

const plugins = [
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-autolink-headers',
          options: {
            offsetY: 100,
            icon: false,
            className: 'anchor',
          },
        },
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            showLineNumbers: true,
          },
        },
      ],
    },
  },
  'gatsby-plugin-postcss',
  'gatsby-plugin-cname',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Cilium',
      short_name: 'Cilium',
      start_url: '/',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      display: 'minimal-ui',
      icon: 'src/images/favicon.png',
    },
  },
  {
    resolve: 'gatsby-plugin-alias-imports',
    options: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
      extensions: ['js'],
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: 'GTM-TWNN8FF',
      includeInDevelopment: false,
      defaultDataLayer: { platform: 'gatsby' },
    },
  },
  {
    resolve: 'gatsby-plugin-plausible',
    options: {
      domain: 'ebpf.foundation',
    },
  },
  {
    resolve: 'gatsby-plugin-canonical-urls',
    options: {
      siteUrl: 'https://ebpf.foundation',
      stripQueryString: true,
    },
  },
];

module.exports = {
  trailingSlash: 'always',
  adapter: netlifyPlugin(),
  siteMetadata: {
    siteTitle: 'Cilium - Cloud Native, eBPF-based Networking, Observability, and Security',
    siteTitleAlt: 'Cilium',
    siteHeadline: 'Cilium - eBPF-based Networking, Observability, and Security',
    siteUrl: 'https://ebpf.foundation',
    siteDescription:
      'Cilium is an open source, eBPF-based software for networking, security, and observability.',
    siteImage: '/social/banner.jpg',
    author: '@ebpf',
  },
  plugins,
};
