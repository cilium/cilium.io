import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';
import MainLayout from 'layouts/main';

const NotFoundPage = () => (
  <MainLayout footerWithTopBorder>
    <section className="safe-paddings overflow-hidden bg-[#F8F9FC] pt-20 pb-24 sm:pt-24 sm:pb-32">
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative h-[303px] w-[728px] bg-404-page-pattern bg-[center_-42px]">
          <StaticImage
            className="absolute left-64 top-0"
            width={248}
            height={287}
            src="../../static/images/404-page-bee.png"
            loading="eager"
            alt=""
          />
        </div>
        <h1 className="mt-4 max-w-xs text-center text-4xl font-bold leading-tight sm:max-w-none md:mt-6 md:text-5xl">
          <span className="sr-only">Error</span> 404: oops, tools still whirring!
        </h1>
        <p className="mt-3 max-w-xs text-center text-base leading-relaxed sm:max-w-none md:text-lg">
          If you're unsure what to explore, check out our recommendations.
        </p>

        <Link
          className="mt-6 !text-15 !normal-case !tracking-tight sm:mt-8 [&>svg]:mt-0.5"
          theme="primary"
          type="arrow"
          to="/"
        >
          Go to the homepage
        </Link>
      </div>
    </section>
  </MainLayout>
);

export default NotFoundPage;
