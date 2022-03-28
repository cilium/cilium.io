import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Distributions from 'components/pages/enterprise/distributions';
import Training from 'components/pages/enterprise/training';
import Community from 'components/shared/community';
import HeroWithImage from 'components/shared/hero-with-image';
import decor1 from 'images/pages/enterprise/hero/decor-1.svg';
import decor2 from 'images/pages/enterprise/hero/decor-2.svg';
import MainLayout from 'layouts/main';
import SeoMetadata from 'utils/seo-metadata';

const EnterprisePage = () => {
  const { heroImage } = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "pages/enterprise/hero/hero-image.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 592, quality: 90)
        }
      }
    }
  `);

  const hero = {
    title: 'Cilium Enterprise Distributions & Training',
    description:
      '<p>Cilium was originally created by Isovalent and contributed to the CNCF as an incubation-level project in 2021</p><p>The listed partners offer enterprise distributions, training, and commercial support for Cilium.</p>',
    heroImage,
    imgWrapperClassName: 'lg:justify-self-end',
    decor1: {
      src: decor1,
      className: ' w-[114%] top-0 left-[-6.5%]',
    },
    decor2: {
      src: decor2,
      className: 'w-[24.3%] top-[-10%] left-[-5.5%]',
    },
  };
  return (
    <MainLayout pageMetadata={SeoMetadata.enterprise} theme="gray" footerWithoutTopBorder>
      <HeroWithImage className="pb-16 pt-5 md:pt-16 lg:pt-24" {...hero} />
      <Distributions />
      <Training />
      <Community theme="gray" isTitleCentered />
    </MainLayout>
  );
};

export default EnterprisePage;
