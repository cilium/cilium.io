import { useMemo } from 'react';

const filterEventsData = (eventsData, activeFilters) => {
  const filteredData = eventsData.filter(
    ({ type, region }) =>
      (activeFilters.type.length === 0 || activeFilters.type.includes(type)) &&
      (activeFilters.region.length === 0 || activeFilters.region.includes(region))
  );
  return filteredData;
};

export default function useFilteredEvents(eventsData, activeFilters) {
  return useMemo(() => filterEventsData(eventsData, activeFilters), [eventsData, activeFilters]);
}
