// helper function that performs filter-to-slug transformation
export default function filterToSlug(item, type) {
  let route = '';

  switch (type) {
    case 'blog':
      route = 'categories';
      break;
    case 'events':
      route = 'type';
      break;
    default:
      break;
  }

  const slug =
    item === '*' ? `/${type}/` : `/${type}/${route}/${item.toLowerCase().replace(/\s/g, '-')}/`;

  return slug;
}
