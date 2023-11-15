require('./src/styles/main.css');

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  const { pathname } = location;
  const eventsPageRegex = /^\/events\/\d+\/?$/;

  if (eventsPageRegex.test(pathname) || pathname === '/events/') {
    return false;
  }

  return true;
};
