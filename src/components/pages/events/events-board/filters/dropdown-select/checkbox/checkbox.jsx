import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Checkbox = React.forwardRef((props, ref) => {
  const { className, id, label, checked, ...otherProps } = props;

  return (
    <div className={classNames('checkbox', className)}>
      <input
        className="checkbox__input_event"
        type="checkbox"
        id={id}
        checked={checked}
        ref={ref}
        {...otherProps}
      />
      <label className="checkbox__label_event" htmlFor={id}>
        <span dangerouslySetInnerHTML={{ __html: label }} />
      </label>
    </div>
  );
});

Checkbox.defaultProps = {
  className: null,
  checked: false,
  error: null,
};

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  error: PropTypes.bool,
};

export default Checkbox;
