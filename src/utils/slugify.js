function slugify(path) {
  return path
    .toLowerCase()
    .replace(/[\s-:]{1,}/g, '-')
    .replace(/blog__/g, '') // special treatment of blog post directory pattern
    .replace(/[?!;&%@~()[\],]/g, '')
    .replace(/(\.[^/.]+)?$/, '');
}

module.exports.slugify = slugify;
