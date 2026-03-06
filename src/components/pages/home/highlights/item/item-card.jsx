import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link/link';
import ArrowIcon from 'icons/arrow.inline.svg';
import { USE_CASE_BASE_PATH } from 'utils/routes';

const ItemCard = ({ icon: Icon, title, path }) => (
  <Link
    to={USE_CASE_BASE_PATH + path}
    className="group flex h-full items-center gap-x-6 rounded-lg dark:text-gray-300 border dark:border-gray-800 p-6 transition-all duration-200 hover:shadow-primary bg-white dark:bg-[linear-gradient(14deg,#1A2236_0%,#1E253A_248.18%)] dark:hover:shadow-darkprimary"
  >
    <Icon className="h-16 w-16" />
    <Heading
      className="inline-block w-fit gap-x-2 !text-lg font-medium leading-normal transition-colors duration-200 group-hover:text-primary-1"
      size="3xs"
      tag="h3"
    >
      {title}
      <ArrowIcon className="ml-2 hidden shrink-0 xs:inline-block" />
    </Heading>
  </Link>
);

ItemCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ItemCard;
