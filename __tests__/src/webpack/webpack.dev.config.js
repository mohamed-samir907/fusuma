const dev = require('../../../src/webpack/webpack.dev.config');

describe('webpack.dev', () => {
  test('should match settings', () => {
    expect(dev()).toMatchSnapshot();
  });
});
