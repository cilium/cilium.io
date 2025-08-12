import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const alignStyles = {
  left: 'justify-start',
  center: 'justify-start sm:justify-center',
};

const Tabs = ({ id, items, activeLabel, defaultTabTitle, align, className }) => (
  <div
    id={id}
    className={classNames(
      'no-scrollbar -mx-4 flex flex-row overflow-x-auto px-4 md:-mx-6 md:px-6 lg:mx-0 lg:px-0 xl:flex-wrap xl:overflow-visible',
      alignStyles[align],
      className
    )}
  >
    <div className="relative inline-flex flex-row gap-x-3 after:absolute after:inset-x-0 after:bottom-0 after:-z-10 after:h-[1px] after:w-full after:bg-gray-3">
      {items.map(({ label, basePath }, index) => {
        const isActive = activeLabel === label;
        const isDefault = label === '*';

        return (
          <GatsbyLink
            className={classNames(
              'relative whitespace-nowrap px-3 pt-2.5 pb-5 font-medium leading-none transition-colors duration-200',
              isActive
                ? 'text-primary-1 after:absolute after:inset-x-0 after:bottom-0 after:z-0 after:h-0.5 after:w-full after:bg-primary-1'
                : 'dark:text-white text-black hover:text-primary-1 dark:hover:text-primary-1'
            )}
            to={basePath}
            key={index}
          >
            {isDefault ? defaultTabTitle : label}
          </GatsbyLink>
        );
      })}
    </div>
  </div>
);

Tabs.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      basePath: PropTypes.string,
    })
  ).isRequired,
  activeLabel: PropTypes.string.isRequired,
  defaultTabTitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
  className: PropTypes.string,
};

Tabs.defaultProps = {
  defaultTabTitle: 'All',
  align: 'left',
  className: null,
};

export default Tabs;
