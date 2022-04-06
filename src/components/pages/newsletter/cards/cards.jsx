import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import submitArticleSvg from './images/submit-article.svg';

const Cards = () => {
  const { billMulligan } = useStaticQuery(graphql`
    query {
      billMulligan: file(relativePath: { eq: "pages/newsletter/cards/bill-mulligan.png" }) {
        childImageSharp {
          gatsbyImageData(width: 309, quality: 95)
        }
      }
    }
  `);
  const items = [
    {
      title: 'eCHO News is curated by Bill Mulligan',
      description: 'Bill Mulligan is working to grow<br/> the Cilium community',
      links: [
        {
          title: 'Follow on Twitter',
          url: 'https://twitter.com/breakawaybilly',
          target: '_blank',
        },
      ],
      image: billMulligan,
    },
    {
      title: 'Interested in<br/> submitting an article?',
      description:
        'Send it to the Cilium slack or<br/> email <a href="mailto:bill@isovalent.com">bill@isovalent.com</a>',
      links: [
        {
          title: 'Send on Slack',
          url: 'https://cilium.herokuapp.com/',
          target: '_blank',
        },
        {
          title: 'Write an email',
          url: 'mailto:bill@isovalent.com',
          target: '_blank',
        },
      ],
      image: submitArticleSvg,
      isSvg: true,
    },
  ];
  return (
    <div className="bg-gray-4 pb-10 md:pt-10 md:pb-20 lg:pb-28">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {items.map(({ title, description, links, image, isSvg }, index) => (
          <div
            className="relative flex flex-col overflow-hidden rounded-xl bg-white p-6 shadow-card sm:flex-row md:flex-col md:p-8"
            key={index}
          >
            <div className="flex flex-col sm:max-w-[290px] md:max-w-none xl:max-w-[285px]">
              <Heading className="flat-breaks xl:flat-none" tag="h3" size="xs" asHTML>
                {title}
              </Heading>
              <p
                className="with-black-link flat-breaks xl:flat-none mt-2.5 mb-6"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div className="mt-auto mb-6 flex flex-col space-y-3 xs:flex-row xs:space-y-0 xl:mb-0">
                {links.map(({ title, url, target }, index) => (
                  <Link
                    className="relative before:absolute before:top-1/2 before:left-2.5 before:hidden before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-5 first:pl-0 first:before:hidden xs:pl-6 xs:before:inline-block"
                    type="text"
                    theme="primary"
                    key={index}
                    to={url}
                    target={target || null}
                    rel={target ? 'noopener noreferrer' : null}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="top-1/2 -right-1.5 -ml-6 mt-auto shrink-0 self-center sm:absolute sm:-translate-y-1/2 md:static md:translate-y-0 xl:absolute xl:top-1/2 xl:-right-1.5 xl:ml-0 xl:-translate-y-1/2">
              {isSvg ? (
                <img src={image} alt={title} width={309} height={280} loading="eager" />
              ) : (
                <GatsbyImage image={getImage(image)} alt={title} loading="eager" />
              )}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Cards;
