/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import 'prismjs/themes/prism.css';
import React from 'react';

import Content from 'components/pages/blog-post/content';
import PopularPosts from 'components/shared/popular-posts';
import SEO from 'components/shared/seo';

import MainLayout from '../layouts/main';

const BlogPostPage = (props) => {
  const {
    data: { mdx: postData },
    children,
  } = props;
  const {
    frontmatter: { path, title, date, tags, ogSummary },
  } = postData;

  return (
    <MainLayout headerWithSearch>
      <Content
        path={path}
        content={children}
        date={date}
        title={title}
        tags={tags}
        summary={ogSummary}
      />
      <PopularPosts className="my-10 md:my-20 lg:my-28" />
    </MainLayout>
  );
};

export const Head = ({ data: { mdx: postData, site }, location: { pathname } }) => {
  const {
    frontmatter: { title, ogImage, ogSummary, dateIso, tags, author },
  } = postData;
  const { siteUrl } = site.siteMetadata;

  const description = `${ogSummary.slice(0, 133)}...`;
  const pageUrl = `${siteUrl}${pathname}`;
  const imageUrl = ogImage?.childImageSharp?.resize?.src
    ? `${siteUrl}${ogImage.childImageSharp.resize.src}`
    : null;

  const pageMetadata = {
    title,
    description,
    image: ogImage || null,
    slug: pathname,
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: pageUrl,
    datePublished: dateIso,
    dateModified: dateIso,
    author: author
      ? {
          '@type': 'Person',
          name: author,
        }
      : {
          '@type': 'Organization',
          name: 'Cilium',
          url: siteUrl,
        },
    publisher: {
      '@type': 'Organization',
      name: 'Cilium',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/social-preview.jpg`,
      },
    },
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    }),
    ...(tags?.length > 0 && { keywords: tags.join(', ') }),
  };

  return <SEO data={pageMetadata} type="article" datePublished={dateIso} jsonLd={jsonLd} />;
};

export const query = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMM DD, yyyy")
        dateIso: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
        title
        path
        tags
        author
        ogSummary
        ogImage {
          childImageSharp {
            resize(jpegQuality: 90, toFormat: JPG, width: 1200, height: 630) {
              src
            }
          }
        }
      }
    }
  }
`;

export default BlogPostPage;
