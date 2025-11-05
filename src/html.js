/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const fontsBasePath = '/fonts';

const fontsPaths = ['/inter-regular.woff2', '/inter-bold.woff2'];

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cilium',
  url: 'https://cilium.io',
  logo: 'https://cilium.io/logo.svg',
  description:
    'Cilium is an open source, cloud native solution for providing, securing, and observing network connectivity between workloads, fueled by the revolutionary Kernel technology eBPF',
  foundingDate: '2015-12',
  sameAs: [
    'https://github.com/cilium',
    'https://twitter.com/ciliumproject',
    'https://www.linkedin.com/company/cilium',
    'https://slack.cilium.io',
    'https://www.youtube.com/channel/UCJFUxkVQTBJh3LD1wYBWvuQ',
  ],
  memberOf: {
    '@type': 'Organization',
    name: 'Cloud Native Computing Foundation',
    url: 'https://www.cncf.io',
  },
};

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        {fontsPaths.map((fontPath, index) => (
          <link
            rel="preload"
            href={`${fontsBasePath}${fontPath}`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key={index}
          />
        ))}
        {props.headComponents}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};