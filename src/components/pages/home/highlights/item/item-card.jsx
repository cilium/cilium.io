import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link/link';
import { USE_CASE_BASE_PATH } from 'utils/routes';

const ItemCard = ({ icon: Icon, title, path }) => (
  <Link
    to={USE_CASE_BASE_PATH + path}
    className="group flex h-full items-center gap-x-6 rounded-lg border-2 border-gray-4 bg-white p-6 transition-all duration-200 hover:shadow-primary"
  >
    <Icon className="h-16 w-16" />
    <Heading
      className="max-w-full !text-lg font-medium leading-normal transition-colors duration-200 group-hover:text-primary-1"
      size="3xs"
      tag="h3"
    >
      {title}
    </Heading>
  </Link>
);

ItemCard.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ItemCard;
