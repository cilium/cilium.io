// helper function that performs filter-to-slug transformation
export default function blogFilterToSlug(item, type) {
  return item === '*' ? '/blog/' : `/blog/${type}/${item.toLowerCase().replace(/\s/g, '-')}/`;
}
