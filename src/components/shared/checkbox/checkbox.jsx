import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { sanitize } from 'utils/sanitize-html';

const Checkbox = React.forwardRef((props, ref) => {
  const { className, id, label, defaultChecked, ...otherProps } = props;
  const sanitizedLabel = sanitize(label);
  // Fallback for accessibility if label is empty after sanitization
  const fallbackLabel = 'Checkbox option';

  return (
    <div className={classNames('checkbox', className)}>
      <input
        className="checkbox__input"
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        ref={ref}
        {...otherProps}
      />
      <label className="checkbox__label" htmlFor={id}>
        {sanitizedLabel ? (
          <span dangerouslySetInnerHTML={{ __html: sanitizedLabel }} />
        ) : (
          <span>{fallbackLabel}</span>
        )}
      </label>
    </div>
  );
});

Checkbox.defaultProps = {
  className: null,
  defaultChecked: false,
  error: null,
};

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  error: PropTypes.bool,
};

export default Checkbox;
