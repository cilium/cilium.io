function createEventFilters(types, regions) {
  return [
    {
      name: 'Types',
      label: 'type',
      items: types.map((type) => ({
        name: type,
      })),
    },
    {
      name: 'Region',
      label: 'region',
      items: regions.map((region) => ({
        name: region,
      })),
    },
  ];
}

// We are using ES modules here in order to be able to import variables from this file in gatsby-node.js
module.exports = {
  createEventFilters,
};
