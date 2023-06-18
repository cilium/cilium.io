import PropTypes from 'prop-types';
import React from 'react';

import DropdownSelect from './dropdown-select';

const Filters = ({ eventFilters, activeFilters, setActiveFilters, setItemOffset }) => {
  const [type, region] = eventFilters;
  const { type: types, region: regions } = activeFilters;
  const isTypesSelected = types.length > 0;
  const isRegionsSelected = regions.length > 0;

  const handleFilters = (filter, newValues) => {
    setActiveFilters((prev) => ({ ...prev, [filter.label]: newValues }));
    setItemOffset(0);
  };

  return (
    <div className="mt-8 flex gap-x-7 md:mt-14 [@media(max-width:550px)]:flex-col [@media(max-width:550px)]:space-y-5 [@media(max-width:550px)]:space-x-0">
      <DropdownSelect
        {...type}
        isSelected={isTypesSelected}
        values={activeFilters[type.label]}
        onSelect={(newValues) => handleFilters(type, newValues)}
      />
      <DropdownSelect
        {...region}
        isSelected={isRegionsSelected}
        values={activeFilters[region.label]}
        onSelect={(newValues) => handleFilters(region, newValues)}
      />
    </div>
  );
};

Filters.propTypes = {
  eventFilters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
    })
  ).isRequired,
  activeFilters: PropTypes.shape({
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
    region: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  setItemOffset: PropTypes.func.isRequired,
  setActiveFilters: PropTypes.func.isRequired,
};

export default Filters;
