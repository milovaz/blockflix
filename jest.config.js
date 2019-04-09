module.exports = {
  globalSetup: './jestConfig/jestGlobalSetup.js',
  globalTeardown: './jestConfig/jestGlobalTeardown.js',
  testEnvironment: './jestConfig/jestMongoEnvironment.js',
  testPathIgnorePatterns: ['__tests__/helpers', 'node_modules', 'dist'],
};
