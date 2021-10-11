import PropTypes from 'prop-types';
import React from 'react';

import Link from '../link';

const CardItem = ({ icon: Icon, name, linkText, linkUrl, linkTarget }) => (
  <div className="flex flex-col p-6 border rounded-lg lg:p-8 sm:space-x-5 sm:flex-row lg:flex-col border-gray-3 lg:space-x-0">
    <Icon className="flex-shrink-0 w-14 h-14 xs:w-[72px] xs:h-[72px]" />
    <div className="flex flex-col h-full mt-4 sm:mt-0 lg:mt-4">
      <h3
        className="mb-4 font-bold leading-normal md:text-lg md:leading-normal lg:mb-5"
        dangerouslySetInnerHTML={{ __html: name }}
      />
      <Link className="mt-auto" type="text" theme="primary" target={linkTarget || ''} to={linkUrl}>
        {linkText}
      </Link>
    </div>
  </div>
);

CardItem.propTypes = {
  icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  linkTarget: PropTypes.string,
};

CardItem.defaultProps = {
  linkTarget: null,
};

export default CardItem;
