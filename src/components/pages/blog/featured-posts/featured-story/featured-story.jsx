import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const blockTitle = 'Featured story';

const FeaturedStory = ({ className, title, date, ogImage: cover, ogSummary: summary, path }) => (
  <div className={className}>
    <Heading tag="h2" size="xxs" theme="gray">
      {blockTitle}
    </Heading>
    <div className="flex flex-col flex-1 p-6 mt-6 border md:mt-8 md:p-8 lg:p-10 md:flex-row xl:flex-col border-gray-3 rounded-large">
      <Link className="flex-1" to={path}>
        <GatsbyImage
          className="md:max-w-[500px] xl:max-w-auto xl:min-h-[360px]"
          imgClassName="rounded-lg"
          image={getImage(cover)}
          alt=""
        />
      </Link>
      <div className="flex flex-col flex-1 mt-6 md:mt-0 md:ml-8 xl:ml-0 xl:mt-8 ">
        <span className="font-medium leading-none text-gray-1">{date}</span>
        <Link to={path}>
          <Heading className="mt-4 line-clamp-3 xl:line-clamp-none" tag="h3" size="sm">
            {title}
          </Heading>
        </Link>
        <p className="mt-3 md:text-lg md:leading-relaxed line-clamp-3 lg:line-clamp-5 xl:line-clamp-none">
          {summary}
        </p>
      </div>
    </div>
  </div>
);

FeaturedStory.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  ogSummary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.shape(),
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
};

FeaturedStory.defaultProps = {
  className: null,
};

export default FeaturedStory;
