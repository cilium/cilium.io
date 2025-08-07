import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';
import MainLayout from 'layouts/main';

const links = [
  {
    title: 'Read the last news',
    to: '/blog/',
  },
  {
    title: 'Start learning with labs',
    to: '/labs/categories/getting-started/',
  },
  {
    title: 'Dive into use cases',
    to: '/#networking',
  },
];

const NotFoundPage = () => (
  <MainLayout footerWithTopBorder>
    <section className="safe-paddings overflow-hidden bg-[#F8F9FC] dark:bg-gray-900 pt-20 pb-24 sm:pt-24 sm:pb-32">
      <div className="container flex flex-col items-center mx-auto">
        <div className="relative h-[303px] w-[728px] bg-404-page-pattern bg-[center_-42px]">
          <StaticImage
            className="absolute top-0 left-64"
            width={248}
            height={287}
            src="../../static/images/404-page-bee.png"
            loading="eager"
            alt=""
          />
        </div>
        <h1 className="max-w-xs mt-4 text-4xl font-bold leading-tight text-center text-gray-900 dark:text-white sm:max-w-none md:mt-6 md:text-5xl">
          <span className="sr-only">Error</span> 404: oops, tools still whirring!
        </h1>
        <p className="max-w-xs mt-3 text-base leading-relaxed text-center text-gray-900 dark:text-white sm:max-w-none md:text-lg">
          If you&apos;re unsure what to explore, check out our recommendations.
        </p>
        <div className="flex flex-col items-center mt-8 space-y-6 sm:space-y-0 sm:space-x-6 sm:flex-row sm:mt-8">
          {links.map(({ title, to }, index) => (
            <Link
              className="!text-15 font-semibold !normal-case !tracking-tight [&>svg]:mt-0.5"
              theme="primary"
              type="arrow"
              to={to}
              key={index}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  </MainLayout>
);

export default NotFoundPage;
