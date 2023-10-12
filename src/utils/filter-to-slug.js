// helper function that performs filter-to-slug transformation
export default function filterToSlug(item, type) {
  return item === '*'
    ? `/${type}/`
    : `/${type}/categories/${item.toLowerCase().replace(/\s/g, '-')}/`;
}
