const { createRequestHandler } = require('@remix-run/vercel');

module.exports = createRequestHandler({
  build: require('../packages/demo/api/_build'),
});
