import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const List = ({ className, title, items, buttonUrl, buttonText }) => (
  <div className={className}>
    <Heading tag="h3" theme="gray">
      {title}
    </Heading>
    <div className="mt-2.5">
      {items.map(({ linkUrl, linkTarget, linkText }, index) => (
        <div className="py-4 border-b lg:py-6 last:pb-0 border-gray-3 last:border-none" key={index}>
          <Link type="text" theme="black-primary" target={linkTarget || ''} to={linkUrl}>
            <span className="text-lg lg:text-xl lg:leading-normal pt-1.5 font-medium">
              {linkText}
            </span>
          </Link>
        </div>
      ))}
    </div>
    {buttonUrl && buttonText && (
      <Button className="mt-10" to={buttonUrl}>
        {buttonText}
      </Button>
    )}
  </div>
);

List.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      linkUrl: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkTarget: PropTypes.string,
    })
  ).isRequired,
  buttonUrl: PropTypes.string,
  buttonText: PropTypes.string,
};

List.defaultProps = {
  className: null,
  buttonUrl: null,
  buttonText: null,
};

export default List;
