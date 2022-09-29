/* eslint-disable react/prop-types */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import createMetaImagePath from 'utils/create-meta-image-path';

const SEO = ({ data: { title, description, image, slug } = {}, facebook, children } = {}) => {
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
  return (
    <>
      <title>{currentTitle}</title>
      {/* General */}
      <meta name="description" content={currentDescription} />
      {/* Open Graph */}
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:image" content={currentImagePath} />
      <meta property="og:type" content="website" />
      {facebook && <meta property="fb:app_id" content={facebook.appId} />}
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:image" content={currentImagePath} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:description" content={currentDescription} />
      {children}
    </>
  );
};

export default SEO;
