import PropTypes from 'prop-types';
import React from 'react';

import DropdownSelect from './dropdown-select';

const Filters = ({ eventFilters, activeFilters, handleFilters }) => {
  const [type, region] = eventFilters;

  return (
    <div
      id="categories"
      className="mt-8 flex gap-x-7 md:mt-14 [@media(max-width:550px)]:flex-col [@media(max-width:550px)]:space-y-5 [@media(max-width:550px)]:space-x-0 "
    >
      <DropdownSelect
        {...type}
        values={activeFilters[type.label]}
        onSelect={(newValues) => handleFilters(type, newValues)}
      />
      <DropdownSelect
        {...region}
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
  activeFilters: PropTypes.object.isRequired,
  handleFilters: PropTypes.func.isRequired,
};

export default Filters;
