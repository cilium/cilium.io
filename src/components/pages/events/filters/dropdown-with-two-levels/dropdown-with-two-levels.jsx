import clsx from 'clsx';
import useClickOutside from 'hooks/use-click-outside';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Checkbox from 'components/shared/checkbox';
import ChevronIcon from 'icons/chevron.inline.svg';

const DropdownWithTwoLevels = ({
  mainFilter,
  secondFilter,
  activeFilters,
  handleFilters,
  className,
}) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const { name, items: itemsMain } = mainFilter;
  const { items: itemsSecond } = secondFilter;
  const valuesMain = activeFilters[mainFilter.label];
  const valuesSecond = activeFilters[secondFilter.label];

  const handleSelect = (event, filter) => {
    if (event.target.checked) {
      handleFilters(filter, [...activeFilters[filter.label], event.target.value]);
    } else {
      handleFilters(
        filter,
        activeFilters[filter.label].filter((currentValue) => currentValue !== event.target.value)
      );
    }
  };

  const handleDropdownOutsideClick = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside([dropdownRef, buttonRef], handleDropdownOutsideClick);

  return (
    <div className={clsx('relative', className)}>
      <button
        className="border-gray-90 hover:border-gray-40 group flex w-60 items-center justify-between rounded-full border py-4 px-5 transition-colors duration-200 [@media(max-width:550px)]:w-full"
        type="button"
        ref={buttonRef}
        onClick={handleOpen}
      >
        <span
          className={clsx(
            'text-gray-40 text-base font-medium leading-none transition-colors duration-200 group-hover:text-black',
            isOpen && '!text-black',
            !!valuesMain.length && '!font-medium !tracking-normal !text-black'
          )}
        >
          {name}
        </span>
        <ChevronIcon
          className={clsx(
            'text-gray-40 mt-1 h-auto w-2.5 shrink-0 transition-[transform,color] duration-200 group-hover:text-black',
            isOpen && '-rotate-180',
            (isOpen || !!valuesMain.length) && '!text-black'
          )}
        />
      </button>
      <div
        className={clsx(
          'border-gray-90 drop-shadow-book hover:drop-shadow-book absolute top-16 left-0 w-[270px] rounded border bg-white transition-[opacity,visibility] duration-200 [@media(max-width:550px)]:w-full',
          isOpen ? 'visible z-10 opacity-100' : 'invisible -z-10 opacity-0'
        )}
        ref={dropdownRef}
      >
        <nav className="flex flex-col items-start justify-between px-4 py-5 md:p-3">
          <ul className="flex flex-col">
            {itemsMain.map(({ name }, index) => (
              <li className="flex items-center space-x-2.5 pt-2.5 first:pt-0 md:pt-3" key={index}>
                <Checkbox
                  id={name}
                  name="type"
                  label={name}
                  value={name}
                  checked={valuesMain.includes(name)}
                  onChange={(e) => handleSelect(e, mainFilter)}
                />
              </li>
            ))}
          </ul>
          <ul className="flex flex-col pl-7 pt-2.5 md:pt-3">
            {itemsSecond.map(({ name }, index) => (
              <li className="flex items-center space-x-2.5 pt-2.5 first:pt-0 md:pt-3" key={index}>
                <Checkbox
                  id={name}
                  name="type"
                  label={name}
                  value={name}
                  checked={valuesSecond.includes(name)}
                  onChange={(e) => handleSelect(e, secondFilter)}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

DropdownWithTwoLevels.propTypes = {
  mainFilter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
  }).isRequired,
  secondFilter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
  }).isRequired,
  activeFilters: PropTypes.shape({
    type: PropTypes.arrayOf(PropTypes.string),
    region: PropTypes.arrayOf(PropTypes.string),
    conference: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleFilters: PropTypes.func.isRequired,
  className: PropTypes.string,
};

DropdownWithTwoLevels.defaultProps = {
  className: null,
};

export default DropdownWithTwoLevels;
