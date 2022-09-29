// render custom components in html field, that is used by gatsby-plugin-feed
// https://github.com/gatsbyjs/gatsby/issues/20543
const wrapRootElement = require('./src/utils/wrap-root-element');

module.exports = wrapRootElement;

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en', prefix: 'og: http://ogp.me/ns#' });
};
