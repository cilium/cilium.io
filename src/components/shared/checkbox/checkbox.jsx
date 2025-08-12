import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Checkbox = React.forwardRef((props, ref) => {
  const { className, id, label, defaultChecked, ...otherProps } = props;

  return (
    <div className={classNames('checkbox', className)}>
      <input
        className="checkbox__input bg-white dark:bg-[#A7B1BE]"
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        ref={ref}
        {...otherProps}
      />
      <label
        className="checkbox__label dark:text-[#dfe5ed] text-black"
        htmlFor={id}
        aria-label={label}
      >
        <span dangerouslySetInnerHTML={{ __html: label }} />
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
