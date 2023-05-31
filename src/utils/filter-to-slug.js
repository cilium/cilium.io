// helper function that performs filter-to-slug transformation
export function blogFilterToSlug(item) {
  return item === '*' ? '/blog/' : `/blog/categories/${item.toLowerCase().replace(/\s/g, '-')}/`;
}

export function eventFilterToSlug(item) {
  return item === '*' ? '/event/' : `/event/${item.toLowerCase().replace(/\s/g, '-')}/`;
}
