/* eslint-disable react/prop-types */
import React from 'react';

import Banner from 'components/pages/labs/banner';
import Card from 'components/pages/labs/card';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Pagination from 'components/shared/pagination';
import SEO from 'components/shared/seo';
import Tabs from 'components/shared/tabs';
import MainLayout from 'layouts/main';

const data = {
  title: 'Learn about Cilium with interactive courses',
  description:
    'Deep dive into Cilium and its features with labs provided by companies within the Cilium ecosystem',
};

const LabsPage = (props) => {
  const {
    pageContext: { labs, categories, currentCategory, basePath, totalPageCount, currentPage },
  } = props;

  return (
    <MainLayout>
      <section className="relative mt-6 mb-10 md:mt-10 md:mb-16 lg:mt-16 lg:mb-24 xl:mb-32">
        <Container className="text-center">
          <Heading tag="h1" size="lg">
            {data.title}
          </Heading>
          <p className="mt-4 w-full text-center text-lg text-black">{data.description}</p>
          <Tabs
            id="categories"
            defaultTabTitle="All labs"
            items={categories}
            activeLabel={currentCategory}
            align="center"
            className="mt-6 md:mt-12"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:gap-7 lg:mt-20 lg:grid-cols-3 xl:gap-8">
            {labs.map(({ node: { frontmatter: lab } }, index) => (
              <Card {...lab} titleTag="h2" key={index} />
            ))}
          </div>
          {totalPageCount > 1 && (
            <Pagination
              className="mt-12 md:mt-16"
              currentPageIndex={currentPage - 1}
              pageCount={totalPageCount}
              pageURL={basePath}
            />
          )}
          <Banner />
        </Container>
      </section>
    </MainLayout>
  );
};

export default LabsPage;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'Labs about Cilium',
    description:
      'Learn how Cilium, Hubble, and Tetragon are used for networking, observability, and Security',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
