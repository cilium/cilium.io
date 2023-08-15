/* eslint-disable react/prop-types */
import React from 'react';

import Card from 'components/pages/labs/card';
import Categories from 'components/pages/labs/categories';
import Pagination from 'components/pages/labs/pagination';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main';

const title = 'Learn about Cilium with interactive courses';

const LabsPage = (props) => {
  const {
    pageContext: { labs, categories, currentCategory, totalPageCount, currentPage },
  } = props;

  return (
    <MainLayout>
      <section className="relative pt-10 pb-10 md:pt-20 md:pb-20 lg:pb-28">
        <Container className="text-center">
          <Heading tag="h1" size="lg">
            {title}
          </Heading>
          <Categories id="categories" categories={categories} currentCategory={currentCategory} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:gap-7 lg:mt-20 lg:grid-cols-3 xl:gap-8">
            {labs.map(({ node: { frontmatter: lab } }, index) => (
              <Card {...lab} key={index} />
            ))}
          </div>
          {totalPageCount > 1 && (
            <Pagination
              currentPage={currentPage}
              numPages={totalPageCount}
              currentItem={currentCategory}
              type="labs"
            />
          )}
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
