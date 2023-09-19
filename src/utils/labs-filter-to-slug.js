// helper function that performs filter-to-slug transformation
export default function labsFilterToSlug(item) {
  return item === '*' ? '/labs/' : `/labs/categories/${item.toLowerCase().replace(/\s/g, '-')}/`;
}
