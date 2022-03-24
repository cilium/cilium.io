import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const FIELD_TAGS = {
  INPUT: 'input',
  TEXTAREA: 'textarea',
};

const Field = ({ fieldName, className, tag: Tag, error, ...otherProps }) => (
  <div className="flex flex-col w-full">
    {fieldName && <span className="text-sm font-semibold leading-none">{fieldName}</span>}
    <Tag
      className={classNames(
        'remove-autocomplete-styles w-full appearance-none rounded border border-gray-3 px-3 xl:px-4 py-3 xl:py-5 text-[16px] !leading-none outline-none transition duration-200 focus:border-gray-9',
        className,
        {
          '!border-primary-2': error,
          'h-14 md:h-12': Tag === FIELD_TAGS.INPUT,
          'py-5': Tag === FIELD_TAGS.TEXTAREA,
          'mt-2': fieldName,
        }
      )}
      {...otherProps}
    />
    {error && (
      <span className="text-xs absolute -bottom-1 left-0 translate-y-full leading-none text-primary-2 sm:text-[10px]">
        {error}
      </span>
    )}
  </div>
);

Field.propTypes = {
  fieldName: PropTypes.string,
  className: PropTypes.string,
  tag: PropTypes.oneOf(Object.values(FIELD_TAGS)),
  error: PropTypes.string,
};

Field.defaultProps = {
  fieldName: null,
  className: null,
  tag: FIELD_TAGS.INPUT,
  error: null,
};

export default Field;
