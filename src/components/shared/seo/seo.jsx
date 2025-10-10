/* eslint-disable react/prop-types */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import createMetaImagePath from 'utils/create-meta-image-path';

const SEO = ({
  data: { title, description, image, slug } = {},
  type = 'website', // "website" | "article"
  author,
  datePublished,
  dateModified,
  noindex = false,
  facebook,
  jsonLd, // structured data object
  children,
} = {}) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDescription, siteUrl, siteImage },
    },
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
          siteImage
          siteLanguage
        }
      }
    }
  `);

  const currentTitle = title ?? siteTitle;
  const currentDescription = description ?? siteDescription;
  const currentUrl = slug ? `${siteUrl}${slug}` : siteUrl;
  const currentImagePath = image ? createMetaImagePath(image, siteUrl) : siteUrl + siteImage;

  const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';

  return (
    <>
      <title>{currentTitle}</title>

      {/* General */}
      <meta name="description" content={currentDescription} />

      {/* Robots Control */}
      <meta name="robots" content={robotsContent} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:image" content={currentImagePath} />
      <meta property="og:type" content={type} />
      {facebook && <meta property="fb:app_id" content={facebook.appId} />}

      {/* Article-specific Open Graph tags */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {datePublished && <meta property="article:published_time" content={datePublished} />}
          {dateModified && <meta property="article:modified_time" content={dateModified} />}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={currentImagePath} />
      <meta name="twitter:url" content={currentUrl} />
      {author && <meta name="twitter:creator" content={author} />}

      {/* JSON-LD Structured Data */}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}

      {/* Extra custom tags */}
      {children}
    </>
  );
};

export default SEO;
