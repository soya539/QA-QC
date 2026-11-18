
const reporters = ['default'];

if (process.env.TESTOMATIO) {
  reporters.push([
    '@testomatio/reporter/jest',
    { apiKey: process.env.TESTOMATIO }
  ]);
}

module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  reporters
};
