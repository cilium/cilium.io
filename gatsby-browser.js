require('./src/styles/main.css');

exports.shouldUpdateScroll = ({ routerProps: { location } }) => !location.state?.preventScroll;
