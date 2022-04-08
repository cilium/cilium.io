import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

export const FIELD_TAGS = {
  INPUT: 'input',
  TEXTAREA: 'textarea',
};

const Field = forwardRef(({ id, fieldName, className, tag: Tag, error, ...otherProps }, ref) => (
  <div className="relative flex w-full flex-col">
    {fieldName && (
      <label htmlFor={id} className="text-sm font-semibold leading-none">
        {fieldName}
      </label>
    )}
    <Tag
      className={classNames(
        'remove-autocomplete-styles w-full appearance-none rounded border border-gray-3 px-3 py-3 text-[16px] outline-none transition duration-200 hover:border-gray-2 focus:border-primary-1 xl:px-4 xl:py-5',
        className,
        {
          'border-additional-1 hover:border-additional-1 focus:border-additional-1': error,
          'h-10 md:h-12': Tag === FIELD_TAGS.INPUT,
          'py-5': Tag === FIELD_TAGS.TEXTAREA,
          'mt-2': fieldName,
        }
      )}
      id={id}
      ref={ref}
      {...otherProps}
    />
    {error && (
      <span className="absolute top-[calc(100%+0.1rem)] text-xs text-additional-1">{error}</span>
    )}
  </div>
));

Field.propTypes = {
  id: PropTypes.string.isRequired,
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
