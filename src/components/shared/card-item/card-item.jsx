import PropTypes from 'prop-types';
import React from 'react';

import Link from '../link';

const CardItem = ({ icon: Icon, name, linkText, linkUrl }) => (
  <div className="flex flex-col p-8 border rounded-lg border-gray-2">
    <Icon />
    <h3 className="mt-4 mb-5 text-lg font-bold leading-normal">{name}</h3>
    <Link className="mt-auto" type="text" theme="primary" to={linkUrl}>
      {linkText}
    </Link>
  </div>
);

CardItem.propTypes = {
  icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

CardItem.defaultProps = {};

export default CardItem;
