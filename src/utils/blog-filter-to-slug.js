// helper function that performs filter-to-slug transformation
export default function blogFilterToSlug(item) {
  return item === '*' ? '/blog/' : `/blog/categories/${item.toLowerCase().replace(/\s/g, '-')}/`;
}
