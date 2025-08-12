import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import exploreArchiveSvg from './images/explore-archive.svg';
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
      title: 'Explore previous releases <br> of eCHO News',
      description: 'Full archive of all eCHO News issues <br> is available',
      links: [
        {
          title: 'Explore Archive',
          url: '#archive',
        },
      ],
      image: exploreArchiveSvg,
      isSvg: true,
    },
    {
      title: 'eCHO News is curated <br> by Bill Mulligan',
      description: 'Bill Mulligan is working to grow the <br> Cilium community',
      links: [
        {
          title: 'Follow on LinkedIn',
          url: 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6937495018668482560',
          target: '_blank',
        },
      ],
      image: billMulligan,
    },
    {
      title: 'Interested in submitting <br> an article?',
      description:
        'Send it on Slack, submit the form, <br> or email <a href="mailto:bill@cilium.io">bill@cilium.io</a>',
      links: [
        {
          title: 'Send on Slack',
          url: 'https://slack.cilium.io',
          target: '_blank',
        },
        {
          title: 'Submit form',
          url: '/telling-story',
        },
      ],
      image: submitArticleSvg,
      isSvg: true,
    },
  ];
  return (
    <div className="py-10 bg-gray-4 md:pb-20 lg:pt-20 lg:pb-28 dark:bg-gray-900">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, description, links, image, isSvg }, index) => (
          <div
            className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-white dark:bg-gray-2 p-6 !pt-0 text-center shadow-card md:p-8"
            key={index}
          >
            {isSvg ? (
              <img src={image} alt={title} width={384} height={280} loading="eager" />
            ) : (
              <GatsbyImage image={getImage(image)} alt={title} loading="eager" />
            )}
            <Heading className="flat-breaks xl:flat-none" tag="h3" size="2xs" asHTML>
              {title}
            </Heading>
            <p
              className="with-black-link flat-breaks xl:flat-none mt-2.5 mb-6"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="flex flex-col mt-auto mb-6 space-y-3 xs:flex-row xs:space-y-0 xs:space-x-3 lg:flex-col lg:space-y-3 lg:space-x-0 xl:mb-0 xl:flex-row xl:space-x-3 xl:space-y-0">
              {links.map(({ title, url, target }, index) => (
                <Button
                  className="lg:text-base"
                  theme="primary-1"
                  size="md"
                  key={index}
                  to={url}
                  target={target || null}
                  rel={target ? 'noopener noreferrer' : null}
                >
                  {title}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Cards;
