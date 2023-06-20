import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import useClickOutside from 'hooks/use-click-outside';
import ChevronIcon from 'icons/chevron.inline.svg';

import Checkbox from './checkbox';

const DropdownSelect = ({ name, items, values, onSelect, isSelected, className }) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (isChecked, value) => {
    if (isChecked) {
      onSelect([...values, value]);
    } else {
      onSelect(values.filter((currentValue) => currentValue !== value));
    }
  };

  const handleDropdownOutsideClick = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useClickOutside([dropdownRef, buttonRef], handleDropdownOutsideClick);

  return (
    <div className={classNames('relative', className)}>
      <button
        className={classNames(
          'group flex w-full items-center justify-between rounded-md border border-gray-3 py-4 px-5 transition-colors duration-200 hover:border-primary-1 [@media(min-width:550px)]:w-60',
          (isOpen || isSelected) && 'border-primary-1'
        )}
        type="button"
        ref={buttonRef}
        onClick={handleOpen}
      >
        <span
          className={classNames(
            'font-sans text-base leading-none text-gray-7',
            isOpen && '!text-black'
          )}
        >
          {name}
        </span>
        <ChevronIcon
          className={classNames(
            'text-gray-40 mt-1 h-auto w-2 shrink-0 transition-[transform,color] duration-200 group-hover:text-black',
            isOpen ? '-rotate-90' : 'rotate-90'
          )}
        />
      </button>
      <div
        className={classNames(
          'absolute top-16 left-0 w-full rounded border border-gray-3 bg-white shadow-card transition-[opacity,visibility] duration-200 [@media(min-width:550px)]:w-[270px]',
          isOpen ? 'visible z-10 opacity-100' : 'invisible opacity-0'
        )}
        ref={dropdownRef}
      >
        <nav className="relative z-10 flex items-start justify-between p-3 md:px-4 md:py-5">
          <ul className="flex flex-col">
            {items.map(({ name }, index) => (
              <li className="flex items-center space-x-2.5 pt-2.5 first:pt-0 md:pt-3" key={index}>
                <Checkbox
                  id={name}
                  name="type"
                  label={name}
                  value={name}
                  checked={values.includes(name)}
                  onChange={(e) => handleSelect(e.target.checked, e.target.value)}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

DropdownSelect.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
  isSelected: PropTypes.bool.isRequired,
  values: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSelect: PropTypes.func.isRequired,
};

DropdownSelect.defaultProps = {
  className: null,
};

export default DropdownSelect;
