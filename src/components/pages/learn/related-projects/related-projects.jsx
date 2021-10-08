import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const title = 'Related Projects';
const items = [
  {
    imageName: 'image1',
    title: 'Hubble UI',
    text: 'Hubble is a fully distributed networking and security observability platform for cloud native workloads. Hubble is open source software and built on top of Cilium and eBPF to enable deep visibility into the communication and behavior of services as well as the networking infrastructure in a completely transparent manner.',
    linkUrl: 'https://docs.cilium.io/en/latest/gettingstarted/hubble/',
    linkTarget: '_blank',
    linkText: 'Learn more',
  },
  {
    imageName: 'image2',
    title: 'Network Policy Editor',
    text: 'Over the years, we have learned a lot about the common challenges while working with many of you in the Cilium community implementing Kubernetes Network Policy. Networkpolicy.io is a free tool to assist you in your journey to assist you with Kubernetes NetworkPolicy.',
    linkUrl: 'https://editor.cilium.io/',
    linkTarget: '_blank',
    linkText: 'Learn more',
  },
];

const RelatedProjects = () => {
  const { image1, image2 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "pages/learn/related-projects/image-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 592)
        }
      }
      image2: file(relativePath: { eq: "pages/learn/related-projects/image-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 592)
        }
      }
    }
  `);
  const images = { image1, image2 };
  return (
    <section className="mt-10 md:mt-20 lg:mt-28">
      <Container>
        <Heading tag="h2">{title}</Heading>
        <div className="grid grid-cols-1 gap-6 mt-6 md:gap-8 md:mt-10 md:grid-cols-2 lg:mt-14">
          {items.map(({ imageName, title, text, linkUrl, linkText, linkTarget }, index) => {
            const image = images[imageName];
            return (
              <div key={index}>
                <GatsbyImage className="w-full h-auto" image={getImage(image)} alt="" />
                <Heading className="mt-7" tag="h3" size="sm">
                  {title}
                </Heading>
                <p
                  className="mt-4 md:text-lg md:max-w-[542px]"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
                <Link
                  className="mt-5"
                  type="arrow"
                  theme="primary"
                  target={linkTarget || ''}
                  to={linkUrl}
                >
                  {linkText}
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default RelatedProjects;
