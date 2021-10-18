import classNames from 'classnames';
import { navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const blockTitle = 'All posts';

const PostsBoard = ({ posts, queryFilter }) => {
  const categories = [
    'All',
    'Announcements',
    'Community',
    'Deep Dive',
    'eBPF',
    'Guide',
    'How-To',
    'Network Policies',
    'Releases',
    'User Blog',
  ];

  // adapt queryFilter in case of wild card (all posts)
  const currentCategory = queryFilter === '*' ? 'All' : queryFilter;
  // helper function that performs filter-to-slug transformation
  const filterToSlug = (filter) =>
    filter === 'All' ? '/blog' : `/blog/${filter.toLowerCase().replace(/\s/g, '-')}`;

  const handleCategoryClick = (event, category) => {
    event.preventDefault();
    const href = filterToSlug(category);
    navigate(href, {
      state: { preventScroll: true },
    });
  };

  return (
    <section className="mt-10 md:mt-20 lg:mt-28">
      <Container>
        <Heading tag="h2">{blockTitle}</Heading>
        <div className="flex space-x-10 mt-14">
          {categories.map((category) => {
            const isActiveElement = currentCategory === category;
            return (
              <button
                className={classNames(
                  'py-2.5 font-medium',
                  isActiveElement ? 'px-10 text-white bg-primary-1 rounded' : 'px-0'
                )}
                type="button"
                onClick={(event) => handleCategoryClick(event, category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-8 mt-11">
          {posts.map(
            ({ frontmatter: { path, cover, date, title, summary, categories } }, index) => (
              <div className="flex flex-col p-8 border rounded-lg border-gray-3" key={index}>
                <Link to={path}>
                  <GatsbyImage image={getImage(cover)} alt={title} />
                </Link>
                <div className="flex flex-col flex-grow mt-7">
                  <span className="text-sm font-medium leading-none text-gray-1">{date}</span>
                  <h3 className="mt-3 font-bold leading-normal line-clamp-3 md:text-lg">{title}</h3>
                  <p className="mt-2 mb-4 line-clamp-3">{summary}</p>
                  <div className="mt-auto space-x-2">
                    {categories.map((category) => (
                      <button
                        className="text-primary-1 font-bold bg-additional-4 bg-opacity-70 rounded p-2.5 tracking-wider uppercase text-xs leading-none"
                        type="button"
                        onClick={(event) => handleCategoryClick(event, category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};
PostsBoard.propTypes = {};

PostsBoard.defaultProps = {};

export default PostsBoard;
