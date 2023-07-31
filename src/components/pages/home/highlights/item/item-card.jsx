import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link/link';
import { USE_CASE_BASE_PATH } from 'utils/routes';

const ItemCard = ({ icon: Icon, title, path }) => (
  <Link
    to={USE_CASE_BASE_PATH + path}
    className="group flex h-full flex-col rounded-lg border bg-white p-4 transition-all duration-200 hover:shadow-input md:p-6"
  >
    <Icon className="h-16 w-16" />
    <Heading
      className="mt-5 max-w-full !text-lg font-medium leading-normal group-hover:text-primary-1 lg:max-w-[70%]"
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
