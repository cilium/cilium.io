import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link/link';
import ArrowIcon from 'icons/arrow.inline.svg';

const ItemCard = ({ icon: Icon, title, path }) => (
  <div className="flex h-[210px] flex-col justify-around px-6">
    <div className="flex items-center">
      <Icon />
      <Heading className="mx-4 text-left" size="3xs" tag="h3">
        {title}
      </Heading>
    </div>
    <Link
      to={`use-cases/${path}`}
      className="mb-5 flex items-center gap-3 font-semibold text-[#3B82F6]"
    >
      Learn More
      <span>
        <ArrowIcon />
      </span>
    </Link>
  </div>
);

ItemCard.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ItemCard;
