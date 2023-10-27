import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const LogosRow = ({ title, logos, className = undefined, isDark = false }) => (
  <div className={className}>
    <h3 className="font-bold uppercase leading-none tracking-wide text-gray-1">{title}</h3>
    <ul className="gap-grid mt-4 grid grid-cols-12 gap-y-5">
      {logos.map((logo, index) => (
        <li
          className={classNames(
            'col-span-full flex h-[192px] items-center justify-center rounded-xl px-11 sm:col-span-6 lg:col-span-3',
            isDark ? 'bg-gray-7' : 'bg-gray-4'
          )}
          key={index}
        >
          <img className="max-w-none shrink-0" src={logo} alt="" />
        </li>
      ))}
    </ul>
  </div>
);

LogosRow.propTypes = {
  title: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
  className: PropTypes.string,
  logos: PropTypes.arrayOf({}).isRequired,
};

export default LogosRow;
